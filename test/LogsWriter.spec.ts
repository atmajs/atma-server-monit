

import { Everlog } from '../src/Everlog'
import { Directory } from 'atma-io';

UTest({
    async $before () {
        await Directory.removeAsync('./test/tmp/');
    },
    async 'should parse csv' () {
        let monit = await Everlog.initialize({
            directory: './test/tmp/'
        });

        let channel = monit.createChannel('writer', {
            columns: [
                { type: 'date', name: 'Date' },
                { type: 'number', name: 'Amount' },
                { type: 'string', name: 'Name' },
            ]
        })

        await channel.writeRow([
            new Date(),
            101,
            'Foo'
        ]);
        await channel.flush();

        let files = await Directory.readFilesAsync('./test/tmp/writer/');
        let content = await files[0]?.readAsync();
        has_(content, 'Amount:number');
        has_(content, '101,');

        let reader = monit.createChannelReader(channel);
        let { rows } = await reader.fetch();
        eq_(rows.length, 1);

        let [ row ] = rows;

        eq_(row[1], 101);
    }
})
