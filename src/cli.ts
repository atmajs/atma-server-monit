import AppCfg from 'appcfg'
import * as ruta from 'ruta'
import { Everlog } from './Everlog';
import { LogsReader } from './reader/LogsReader';
import { Server } from './Server';

namespace Config {
    async function doLoad(sources) {
        return AppCfg.fetch(sources);
    }

    export async function load() {
        return doLoad([{
            path: 'package.json',
            getterProperty: 'everlog',
            optional: true
        }])
            .then(json => {
                if (json.config) {
                    return doLoad([{ path: json.config }]);
                }
                return json;
            });
    }
}

interface IStrategyEndpoint {
    route: string
    command: string
    description: string
    process: Function
}
class Strategy  {
    routes = new ruta.Collection();

    constructor(public strategy: IStrategyEndpoint[]){

        strategy.forEach(x => this.routes.add(x.route, x));
    }

    async process (path, config) {

        let route = this.routes.get(path);
        if (route == null) {
            console.error(`Available commands (cli or route params).`);
            console.log('');
            this.help();
            return;
        }

        await route.value.process(route.current.params, config);
    }
    help () {
        this.strategy.forEach(strat => {
            console.log('  ', strat.command);
            console.log('    ', strat.description);
            console.log('');
        });
    }
};


namespace Cli {
    const strategy = new Strategy([
        {
            route: 'list',
            command: 'list',
            description: 'Print available channels in CWD. Reads everlog config from package.json or everlog.json. Otherwise reads channels from ./logs/monit',
            async process (params, config) {
                let reader = new LogsReader(Everlog.monit);
                let channels = await reader.getChannels();
                let names = channels.map(x => x.name);
                console.log('Channels', names);
            }
        },
        {
            route: 'stats/:name',
            command: `stats CHANNEL_NAME`,
            description: 'Print channels information. Amount of lines files',
            async process (params, config) {
                let reader = new LogsReader(Everlog.monit);
                let stats = await reader.getChannelStats(params.name);
                console.log(`Channel info ${params.name}`, stats);
            },
        },
        {
            route: 'read/:name',
            command: `read CHANNEL_NAME [-offset=N] [-limit=N]`,
            description: `Print N lines from a channel. Offset and Limit are optional`,
            async process  (params, config) {
                let reader = new LogsReader(Everlog.monit);
                let query = {
                    key: params.name,
                    limit: Number(params.limit ?? 10),
                    offset: Number(params.offset ?? 0)
                };
                let data = await reader.getChannelData(query);
                console.log(`Channel "${params.name}" [${query.offset}-${query.offset + query.limit}]\n${data.rows.map(x => x.join(', ')).join('\n')}`);
            },
        },
        {
            route: 'server',
            command: 'server [-port=N]',
            description: 'Starts local server to browser channels and their tables',
            async process  (params, config) {
                let server = new Server();
                await server.run();
            }
        }
    ]);

    export async function run (config: InstanceType<typeof AppCfg>) {

        let opts = config.$get('everlog') ?? config.$get('monit') ?? {
            directory: './logs/'
        };

        console.log(`Reading logs meta...`);
        await Everlog.initialize(opts)

        let i = process.argv.findIndex(x => /\b(cli|index)$/.test(x));
        let args = process.argv.slice(i + 1);
        let path = args.join(' ');

        let cmd = ruta._.pathFromCLI(path)
        strategy.process(cmd, config)
    }
}

(async function () {
    let config = await Config.load();
    await Cli.run(config);
}());

