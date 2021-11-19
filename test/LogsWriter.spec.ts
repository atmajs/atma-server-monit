

import { Everlog } from '../src/Everlog'
import { Directory } from 'atma-io';

UTest({
    async $before () {
        if (await Directory.existsAsync('./test/tmp/')) {
            await Directory.removeAsync('./test/tmp/');
        }
    },
    async 'should write and parse csv' () {
        let monit = await Everlog.initialize({
            directory: './test/tmp/'
        });

        let channel = monit.createChannel('writer', {
            columns: [
                { type: 'date', name: 'Date' },
                { type: 'number', name: 'Amount' },
                { type: 'string', name: 'Name' },
            ]
        });

        await channel.writeRow([
            new Date(),
            101,
            'Foo'
        ], {
            letter: 'A',
            num: 9
        });

        await channel.flush();

        let files = await Directory.readFilesAsync('./test/tmp/writer/');
        let content = await files[0]?.readAsync();

        has_(content, 'Amount:number');
        has_(content, '101,');
        has_(content, 'letter:string');
        has_(content, 'num:number');

        let reader = monit.createChannelReader(channel);
        let { rows } = await reader.fetch();
        eq_(rows.length, 1);

        let [ row ] = rows;
        eq_(row[1], 101);
        eq_(row[4], 9);
    }
})
