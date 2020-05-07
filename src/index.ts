import { Application, LifecycleEvents, StaticContent } from 'atma-server'
import { MonitWorker, IMonitOptions } from './MonitWorker';
import { ILoggerOpts } from './fs/LoggerFile';


export namespace Monit {
    let monit: MonitWorker;

    export function start (app: Application, opts: IMonitOptions) {
        monit = new MonitWorker(app.lifecycle, opts);

        let base = __dirname.replace(/\\/g, '/').replace(/[^\/]+\/?$/, 'www/');
        let subApp = new Application({
            base,
            configs: null,
            config: {
                service: {
                    endpoints: base + 'endpoints/'
                }
            },
        });
        subApp.processor({
            after: [
                StaticContent.create()
            ]
        });
        subApp.lib = {
            monit
        };
        app.handlers.registerSubApp('atma/monit', subApp, null);
    }
    export function createChannel (name: string, opts?: ILoggerOpts) {
        return monit.createChannel(name, opts);
    }
    export function flush () {
        monit?.flush();
    }
    export function error (error: Error ) {
        monit?.writeError(error);
    }
}
