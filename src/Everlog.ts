import { MonitWorker, IMonitOptions } from './MonitWorker';
import { ILoggerOpts, EmptyLoggerFile, LoggerFile, ILogger } from './fs/LoggerFile';
import { ChannelReader } from './reader/ChannelReader';


export namespace Everlog {
    export let monit: MonitWorker;

    export async function initialize (opts: IMonitOptions) {
        if (monit == null) {
            monit = new MonitWorker(opts);
            await monit.restoreChannelsAsync();
        }
        return monit;
    }

    export function createChannel (name: string, opts?: Partial<ILoggerOpts>): ILogger {
        return monit?.createChannel(name, opts) ?? new EmptyLoggerFile();
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

