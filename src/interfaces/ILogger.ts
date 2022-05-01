import { ICsvColumn } from '../model/ICsvColumn';


export interface ILoggerOpts {
    directory: string
    fileCountMax?: number
    fileBytesMax?: number
    fileMessagesMax?: number
    messageBufferMax?: number
    writeTimeout?: number
    fields?: ICsvColumn[]

    addCsvHeader?: boolean

    //@obsolete Use fields
    columns?: ICsvColumn[]
}

export interface ILogger {
    writeRow(cells: any[], additional?: (ICsvColumn & { value: any; })[]);
    write(mix: string | any[]): void;
    flush();
    removeAll(): Promise<any>;
}
