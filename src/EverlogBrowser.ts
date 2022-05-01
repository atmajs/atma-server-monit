import { LoggerConsole } from './browser/LoggerConsole';
import { ILogger, ILoggerOpts } from './interfaces/ILogger';


export namespace EverlogBrowser {

    export async function initialize (opts) {

    }

    export function createChannel (name: string, opts?: Partial<ILoggerOpts>): ILogger {
        return new LoggerConsole(name, opts);
    }

    export function createChannelReader (channel: ILogger)
    export function createChannelReader (name: string, opts?: Partial<ILoggerOpts>)
    export function createChannelReader (mix: string | ILogger, opts?: Partial<ILoggerOpts>) {
        //  Reader is not implemented in browser
        return null;
    }
    export function flush () {
        // Do nothing im browser
    }
    export function error (error: Error ) {
        // Do nothing im browser
    }
}

