
// source ./UMD.js
(function (factory) {

    var _name = 'everlog',
        _global = typeof window === 'undefined' ? global : window,
        _module = {
            exports: {}
        };

    factory(_module, _module.exports, _global);

    if (typeof module === 'object' && module.exports) {
        module.exports = _module.exports;
    }

    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return _module.exports;
        });
        return;
    }
    
    if (_name) {
        _global[_name] = _module.exports;
    }

}(function (module, exports, global) {

    var _src_EverlogBrowser = {};
var _src_browser_LoggerConsole = {};

// source ./ModuleSimplified.js
var _src_browser_LoggerConsole;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerConsole = void 0;
class LoggerConsole {
    constructor(name, opts) {
        this.name = name;
        this.opts = opts;
    }
    writeRow(cells) {
        this.write(cells);
    }
    write(mix) {
        if (mix == null) {
            return;
        }
        let str = typeof mix === 'string' ? mix : mix.join(' ');
        console.log(this.name, str);
    }
    flush() {
    }
    removeAll() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    pipe(channel) {
    }
}
exports.LoggerConsole = LoggerConsole;
//# sourceMappingURL=LoggerConsole.js.map
//# sourceMappingURL=LoggerConsole.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_browser_LoggerConsole) && isObject(module.exports)) {
		Object.assign(_src_browser_LoggerConsole, module.exports);
		return;
	}
	_src_browser_LoggerConsole = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_EverlogBrowser;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EverlogBrowser = void 0;
const LoggerConsole_1 = _src_browser_LoggerConsole;
var EverlogBrowser;
(function (EverlogBrowser) {
    function initialize(opts) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    EverlogBrowser.initialize = initialize;
    function createChannel(name, opts) {
        return new LoggerConsole_1.LoggerConsole(name, opts);
    }
    EverlogBrowser.createChannel = createChannel;
    function createChannelReader(mix, opts) {
        //  Reader is not implemented in browser
        return null;
    }
    EverlogBrowser.createChannelReader = createChannelReader;
    function flush() {
        // Do nothing im browser
    }
    EverlogBrowser.flush = flush;
    function error(error) {
        // Do nothing im browser
    }
    EverlogBrowser.error = error;
})(EverlogBrowser = exports.EverlogBrowser || (exports.EverlogBrowser = {}));
//# sourceMappingURL=EverlogBrowser.js.map
//# sourceMappingURL=EverlogBrowser.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_EverlogBrowser) && isObject(module.exports)) {
		Object.assign(_src_EverlogBrowser, module.exports);
		return;
	}
	_src_EverlogBrowser = module.exports;
}());
// end:source ./ModuleSimplified.js

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EverlogBrowser_1 = _src_EverlogBrowser;
Object.defineProperty(exports, "Everlog", { enumerable: true, get: function () { return EverlogBrowser_1.EverlogBrowser; } });
//# sourceMappingURL=exports-browser.js.map
//# sourceMappingURL=exports-browser.ts.map

}));

// end:source ./UMD.js
