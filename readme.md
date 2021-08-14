# Everlog

<p align='center'>
    <img src='assets/background.jpg'/>
</p>

-----

<p align="center">
    <a href='https://travis-ci.com/atmajs/everlog' target='_blank'>
        <img src='https://api.travis-ci.com/atmajs/everlog.png?branch=master' />
        </a>
    <a href='http://badge.fury.io/js/everlog' target='_blank'>
        <img src='https://badge.fury.io/js/everlog.svg' />
        </a>
</p>

📔 High-performance fs logging with **buffering**, **file retention**, **thread safety**, **CSV streams** and **log viewer** for every day usage.

> With `CSV` Streams (`channels`, `tables`) you make your logs structurable.

#### CLI

```bash
$ npm i -g everlog

# Help
$ everlog

# List all created channels
$ everlog list

# Get statistic for a channel: amount of lines, files, etc.
$ everlog stats foo

# Read N last lines from a channel. Supports params `offset` and `limit`
$ everlog read foo

# Start viewer web-app.
$ everlog server --port=5772

```

#### [API ↗](https://docs.atma.dev/everlog)



1. Initialize the Everlog

```ts
import { Everlog } from 'everlog'

await Everlog.initialize({
    directory: `./logs/`,
    slack: {
        token: '',
        channelId: ''
    },

    fileCountMax: 20,
    fileBytesMax: 500 * 1024;
    fileMessagesMax: 10 ** 7
    messageBufferMax: 50;
    columns: [] as ICsvColumn[];
});
```

2. Create Log Streams

```ts
const channel = Everlog.createChannel('foo', {
    columns: [
        { name: 'Title', filterable: true },
        { name: 'MyVal', type: 'number', sortable: true, groupable: true },
        { name: 'Timestamp', type: 'date', sortable: true, groupable: true },
    ]
});

channel.writeRow([`Lorem ipsum`, 123, new Date()]);

// On the application end flush data (in case there is smth in the buffer)
Everlog.flush();
```


## Dev

### Core (`/src/`)

* Collects events from a server or from custom streams, and proceeds with persistence or further propagation (_slack_)
* Creates a subapp to view collected events

### Viewer (`/www/`)

SubApplication to view/sort/filter collected events

* Development endpoints (_unbuild source_):
    * web: `http://localhost:5771/index.dev.html`
    * api, e.g: `http://localhost:5771/api/logs/channels`


### Prepair

```sh
> npm i
> cd www/
> npm i
```

### Start Example(_Dev Project for the viewer_)

```sh
# builds core to be available for example as lib
> npm run watch

# starts demo server with Core and Viewer attached
> npm run example

# navigate to http://localhost:5771/atma/monit/index.dev.html
```

🏁

----
©️ MIT License.
