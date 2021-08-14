import { Config } from 'appcfg/Config';
import { Application, middleware } from 'atma-server';
import { class_Uri } from 'atma-utils';
import { env } from 'atma-io';
import { Everlog } from './Everlog';


const basicAuth = require('express-basic-auth');
const base = new class_Uri(`file://${__dirname}/`).cdUp();

export class Server {

    config = {
        user: null as string,
        port: null as number,
    }

    async run () {
        const app = await Application.create({
            base: base.toString(),
            config: {
                SERVER: true,
                static: class_Uri.combine(base, './www/'),
            },
            configs: class_Uri.combine(base, './www/configs/**.yml'),
        });

        this.init(app);
    }

    private getUser () {
        let user = this.config.user as string;
        if (user == null) {
            console.log('[INFO] You can secure the endpoints by starting the app with --user name:password');
            return null;
        }
        let match = /^(?<user>[^:]+):(?<password>[^:]+)$/.exec(user);
        if (match == null) {
            throw new Error(`user:password not matched for: ${user}`);
        }
        return {
            username: match.groups.user,
            password: match.groups.password,
        };
    }

    private readConfig (config: Config) {
        this.config.user = config.$get('user') as string;
        this.config.port = config.$get('port') as number ?? 5771;
    }

    private init (app: Application) {
        this.readConfig(app.config as any);

        const user = this.getUser();
        const basicAuthFn = user == null ? null : basicAuth({
            users: { [user.username]: user.password },
            challenge: true,
            realm: 'Everlog'
        });

        app
            .processor({
                before: [
                    function (req, res, next) {
                        res.status = function (code) {
                            this.statusCode = code;
                            return this;
                        };
                        res.send = function (data) {
                            this.end(data);
                            return this;
                        };
                        res.set = function (key, val) {
                            this.setHeader(key, val);
                        }
                        next();
                    },
                    async function (req, res, next) {
                        let isPublic = basicAuthFn == null
                            || /^\/api\//.test(req.url) === false
                            || req.method === 'OPTIONS';

                        if (isPublic) {
                            next();
                            return;
                        }

                        basicAuthFn(req, res, next);
                    }
                ],
                middleware: [

                ],
                after: [
                    middleware.static
                ]
            })
            .listen(this.config.port);


        if (app.config.debug) {
            app.autoreload();
        }

        app.lib.monit = Everlog.monit;
        console.log(`Everlog server: ${this.config.port}`);
    }
}
