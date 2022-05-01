import { ILogger } from '../interfaces/ILogger'

export class LoggerConsole implements ILogger {

    constructor(public name, public opts) {

    }
    writeRow(cells: any[]) {
        this.write(cells);
    }
    write(mix: string | any[]): void {
        if (mix == null) {
            return;
        }
        let str = typeof mix === 'string' ? mix : mix.join(' ');
        console.log(this.name, str);
    }
    flush() {

    }
    async removeAll() {

    }

    pipe (channel: ILogger) {

    }
}
