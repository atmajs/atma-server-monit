import { MonitWorker, IMonitOptions } from './MonitWorker';
import { EmptyLoggerFile, LoggerFile } from './fs/LoggerFile';
import { ILogger, ILoggerOpts } from "./interfaces/ILogger";
import { ChannelReader } from './reader/ChannelReader';


export namespace Everlog {
    /** If Monit is not initialized, we create only empty loggers, which do nothing.
     *  If later Monit is initialized, we convert empty loggers to live loggers
     */
    let $empty: EmptyLoggerFile[] = [];


    export let monit: MonitWorker;

    export async function initialize (opts: IMonitOptions) {

        monit = new MonitWorker(opts);
        await monit.restoreChannelsAsync();

        $empty.splice(0).forEach(empty => {
            let channel = monit.createChannel(empty.name, empty.opts);
            empty.pipe(channel);
        });
        return monit;
    }

    export function createChannel (name: string, opts?: Partial<ILoggerOpts>): ILogger {
        if (monit == null) {
            let empty = new EmptyLoggerFile(name, opts);
            $empty.push(empty);
            return empty;
        }
        return monit.createChannel(name, opts);
    }

    export function createChannelReader (channel: LoggerFile)
    export function createChannelReader (name: string, opts?: Partial<ILoggerOpts>)
    export function createChannelReader (mix: string | LoggerFile, opts?: Partial<ILoggerOpts>) {
        let channel: LoggerFile = null;
        if (typeof mix === 'string') {
            if (opts?.directory == null) {
                throw new Error(`Set the root directory to read the logs from`);
            }
            channel = LoggerFile.create(mix, {
                directory: null,
                ...opts
            });
        } else {
            channel = mix;
        }

        return new ChannelReader(channel);
    }
    export function flush () {
        monit?.flush();
    }
    export function error (error: Error ) {
        monit?.writeError(error);
    }
}

