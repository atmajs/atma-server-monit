import { HttpEndpoint, HttpError } from 'atma-server';
import { Directory } from 'atma-io'
import { GetChannelParams, LogsReader } from '../../src/reader/LogsReader';
import { Everlog } from '../../src/Everlog';


const { fromUri, fromBody, Types } = HttpEndpoint;
declare var global;

class GetChannelResponse {

}

@HttpEndpoint.route('/api/logs')
export default class extends HttpEndpoint {

    reader = new LogsReader(this.app.lib.monit ?? Everlog.monit);

    async '$get /channels' (
        req
    ) {
        console.log(Everlog.monit?.loggers);
        let reader = new LogsReader(this.app.lib.monit ?? Everlog.monit);
        return await reader.getChannels();
    }

    async '$post /flush' (
        req
    ) {
        await global.atma?.Monit?.flush?.();
        await this.app?.lib?.monit?.flush?.();
        return { ok: 1};
    }

    @HttpEndpoint.response({ Type: Types.ArrayOf(GetChannelResponse) })
    async '$get /channel' (
        @fromUri({ Type: GetChannelParams }) params: GetChannelParams
    ) {
        let channels = await this.reader.getChannels();
        let channel = channels.find(x => x.name === params.key);
        if (channel == null) {
            throw new HttpError(`Channel not found: ${params.key}`, 400);
        }

        let files = await Directory.readFiles(channel.directory);
        let arr = files.map(async file => {
            return {
                path: file.uri.toLocalFile()
            }
        });
        let rows = await Promise.all(arr);
        return rows;
    }

    async '$get /channel/:key' (
        @fromUri({ Type: GetChannelParams }) params: GetChannelParams
    ) {
        let channel = this.reader.getChannelInfo(params.key);
        return this.reader.getChannelData(params);
    }

    async '$get /channel/:key/days' (
        @fromUri({ Type: GetChannelParams }) params: GetChannelParams
    ) {
        return this.reader.getChannelDays(params.key);
    }
}
