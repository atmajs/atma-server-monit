
// source ./RootModule.js
(function(){
	
	var _node_modules_alot_lib_alot = {};
var _node_modules_appcfg_lib_appcfg = {};
var _node_modules_atma_utils_lib_utils = {};
var _node_modules_class_json_lib_class_json = {};
var _node_modules_express_basic_auth_index = {};
var _node_modules_ruta_lib_ruta = {};
var _src_Everlog = {};
var _src_MonitWorker = {};
var _src_Server = {};
var _src_Slack = {};
var _src_fs_LoggerFile = {};
var _src_fs_LoggerFileHeader = {};
var _src_fs_LoggerFileRow = {};
var _src_fs_fs = {};
var _src_model_DayDate = {};
var _src_model_Table = {};
var _src_reader_ChannelReader = {};
var _src_reader_DirectoryReader = {};
var _src_reader_FileIndex = {};
var _src_reader_FileReader = {};
var _src_reader_LogsReader = {};
var _src_utils_csv = {};
var _src_utils_date = {};
var _src_utils_err = {};
var _src_utils_os = {};

// source ./ModuleSimplified.js
var _node_modules_appcfg_lib_appcfg;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	
// source ./RootModule.js
(function(){
	
	var _node_modules_atma_utils_lib_utils = {};
var _src_Config = {};
var _src_ConfigNode = {};
var _src_sources_CustomSource = {};
var _src_sources_DirectorySource = {};
var _src_sources_EmbeddedSource = {};
var _src_sources_FileSource = {};
var _src_sources_FilesSource = {};
var _src_sources_SourceFactory = {};
var _src_sources_exports_node = {};
var _src_sources_utils_file = {};
var _src_sources_utils_module = {};
var _src_util_Await = {};
var _src_util_cfg = {};
var _src_util_cfg_conditions = {};
var _src_util_cfg_imports = {};
var _src_util_cli = {};
var _src_util_log = {};
var _src_util_object = {};
var _src_util_path = {};
var _src_util_query = {};

// source ./ModuleSimplified.js
var _node_modules_atma_utils_lib_utils;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    (function(factory){

	var owner, property;
	if (typeof module !== 'undefined' && module.exports) {
		owner = module;
		property = 'exports';
	}
	else {
		owner = window;
		property = 'Utils';
	}

	factory(owner, property);

}(function(owner, property){

    	var _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty;
	var obj_copyProperty,
	    obj_getProperty,
	    obj_setProperty,
	    obj_hasProperty,
	    obj_defineProperty,
	    obj_extend,
	    obj_extendDefaults,
	    obj_extendProperties,
	    obj_extendPropertiesDefaults,
	    obj_extendMany,
	    obj_create,
	    obj_defaults,
	    obj_extendDescriptors;
	(function(){
		(function(){
			_Array_slice = Array.prototype.slice;
			var _Array_splice = Array.prototype.splice;
			var _Array_indexOf = Array.prototype.indexOf;
			var _Object_hasOwnProp = Object.hasOwnProperty;
			_Object_getOwnProp = Object.getOwnPropertyDescriptor;
			_Object_defineProperty = Object.defineProperty;
			var _global = typeof global !== 'undefined'
			    ? global
			    : window;
			var _document = typeof window !== 'undefined' && window.document != null
			    ? window.document
			    : null;
			
		}());
		var getDescriptor = Object.getOwnPropertyDescriptor;
		var defineDescriptor = Object.defineProperty;
		obj_copyProperty = getDescriptor == null
		    ? function (target, source, key) { return target[key] = source[key]; }
		    : function (target, source, key) {
		        var descr = getDescriptor(source, key);
		        if (descr == null) {
		            target[key] = source[key];
		            return;
		        }
		        if (descr.value !== void 0) {
		            target[key] = descr.value;
		            return;
		        }
		        defineDescriptor(target, key, descr);
		    };
		
		obj_getProperty = function (obj_, path) {
		    if (obj_ == null) {
		        return null;
		    }
		    if (path.indexOf('.') === -1) {
		        return obj_[path];
		    }
		    var obj = obj_, chain = path.split('.'), imax = chain.length, i = -1;
		    while (obj != null && ++i < imax) {
		        var key = chain[i];
		        if (key.charCodeAt(key.length - 1) === 63 /*?*/) {
		            key = key.slice(0, -1);
		        }
		        obj = obj[key];
		    }
		    return obj;
		}
		;
		obj_setProperty = function (obj_, path, val) {
		    if (path.indexOf('.') === -1) {
		        obj_[path] = val;
		        return;
		    }
		    var obj = obj_, chain = path.split('.'), imax = chain.length - 1, i = -1, key;
		    while (++i < imax) {
		        key = chain[i];
		        if (key.charCodeAt(key.length - 1) === 63 /*?*/) {
		            key = key.slice(0, -1);
		        }
		        var x = obj[key];
		        if (x == null) {
		            x = obj[key] = {};
		        }
		        obj = x;
		    }
		    obj[chain[i]] = val;
		}
		;
		obj_hasProperty = function (obj, path) {
		    var x = obj_getProperty(obj, path);
		    return x !== void 0;
		}
		;
		obj_defineProperty = function (obj, path, dscr) {
		    var x = obj, chain = path.split('.'), imax = chain.length - 1, i = -1, key;
		    while (++i < imax) {
		        key = chain[i];
		        if (x[key] == null)
		            x[key] = {};
		        x = x[key];
		    }
		    key = chain[imax];
		    if (_Object_defineProperty) {
		        if (dscr.writable === void 0)
		            dscr.writable = true;
		        if (dscr.configurable === void 0)
		            dscr.configurable = true;
		        if (dscr.enumerable === void 0)
		            dscr.enumerable = true;
		        _Object_defineProperty(x, key, dscr);
		        return;
		    }
		    x[key] = dscr.value === void 0
		        ? dscr.value
		        : (dscr.get && dscr.get());
		}
		;
		obj_extend = function (a, b) {
		    if (b == null)
		        return a || {};
		    if (a == null)
		        return obj_create(b);
		    for (var key in b) {
		        a[key] = b[key];
		    }
		    return a;
		}
		;
		obj_extendDefaults = function (a, b) {
		    if (b == null)
		        return a || {};
		    if (a == null)
		        return obj_create(b);
		    for (var key in b) {
		        if (a[key] == null) {
		            a[key] = b[key];
		            continue;
		        }
		        if (key === 'toString' && a[key] === Object.prototype.toString) {
		            a[key] = b[key];
		        }
		    }
		    return a;
		}
		var extendPropertiesFactory = function (overwriteProps) {
		    if (_Object_getOwnProp == null)
		        return overwriteProps ? obj_extend : obj_extendDefaults;
		    return function (a, b) {
		        if (b == null)
		            return a || {};
		        if (a == null)
		            return obj_create(b);
		        var key, descr, ownDescr;
		        for (key in b) {
		            descr = _Object_getOwnProp(b, key);
		            if (descr == null)
		                continue;
		            if (overwriteProps !== true) {
		                ownDescr = _Object_getOwnProp(a, key);
		                if (ownDescr != null) {
		                    continue;
		                }
		            }
		            if (descr.hasOwnProperty('value')) {
		                a[key] = descr.value;
		                continue;
		            }
		            _Object_defineProperty(a, key, descr);
		        }
		        return a;
		    };
		};
		obj_extendProperties = extendPropertiesFactory(true);
		obj_extendPropertiesDefaults = extendPropertiesFactory(false);
		obj_extendMany = function (a, arg1, arg2, arg3, arg4, arg5, arg6) {
		    var imax = arguments.length, i = 1;
		    for (; i < imax; i++) {
		        a = obj_extend(a, arguments[i]);
		    }
		    return a;
		}
		;
		function obj_toFastProps(obj) {
		    /*jshint -W027*/
		    function F() { }
		    F.prototype = obj;
		    new F();
		    return;
		    eval(obj);
		}
		;
		var _Object_create = Object.create || function (x) {
		    var Ctor = function () { };
		    Ctor.prototype = x;
		    return new Ctor;
		};
		obj_create = _Object_create;
		obj_defaults = function (target, defaults) {
		    for (var key in defaults) {
		        if (target[key] == null)
		            target[key] = defaults[key];
		    }
		    return target;
		}
		obj_extendDescriptors;
		var obj_extendDescriptorsDefaults;
		(function () {
		    if (getDescriptor == null) {
		        obj_extendDescriptors = obj_extend;
		        obj_extendDescriptorsDefaults = obj_defaults;
		        return;
		    }
		    obj_extendDescriptors = function (target, source) {
		        return _extendDescriptors(target, source, false);
		    };
		    obj_extendDescriptorsDefaults = function (target, source) {
		        return _extendDescriptors(target, source, true);
		    };
		    function _extendDescriptors(target, source, defaultsOnly) {
		        if (target == null)
		            return {};
		        if (source == null)
		            return source;
		        var descr, key;
		        for (key in source) {
		            if (defaultsOnly === true && target[key] != null)
		                continue;
		            descr = getDescriptor(source, key);
		            if (descr == null) {
		                obj_extendDescriptors(target, source["__proto__"]);
		                continue;
		            }
		            if (descr.value !== void 0) {
		                target[key] = descr.value;
		                continue;
		            }
		            defineDescriptor(target, key, descr);
		        }
		        return target;
		    }
		})();
		
		
	}());
	var class_create,
	    class_createEx;
	(function(){
		;
		/**
		 * create([...Base], Proto)
		 * Base: Function | Object
		 * Proto: Object {
		 *    constructor: ?Function
		 *    ...
		 */
		class_create = createClassFactory(obj_extendDefaults);
		// with property accessor functions support
		class_createEx = createClassFactory(obj_extendPropertiesDefaults);
		function createClassFactory(extendDefaultsFn) {
		    return function (a, b, c, d, e, f, g, h) {
		        var args = _Array_slice.call(arguments), Proto = args.pop();
		        if (Proto == null)
		            Proto = {};
		        var Ctor;
		        if (Proto.hasOwnProperty('constructor')) {
		            Ctor = Proto.constructor;
		            if (Ctor.prototype === void 0) {
		                var es6Method = Ctor;
		                Ctor = function ClassCtor() {
		                    var imax = arguments.length, i = -1, args = new Array(imax);
		                    while (++i < imax)
		                        args[i] = arguments[i];
		                    return es6Method.apply(this, args);
		                };
		            }
		        }
		        else {
		            Ctor = function ClassCtor() { };
		        }
		        var i = args.length, BaseCtor, x;
		        while (--i > -1) {
		            x = args[i];
		            if (typeof x === 'function') {
		                BaseCtor = wrapFn(x, BaseCtor);
		                x = x.prototype;
		            }
		            extendDefaultsFn(Proto, x);
		        }
		        return createClass(wrapFn(BaseCtor, Ctor), Proto);
		    };
		}
		function createClass(Ctor, Proto) {
		    Proto.constructor = Ctor;
		    Ctor.prototype = Proto;
		    return Ctor;
		}
		function wrapFn(fnA, fnB) {
		    if (fnA == null) {
		        return fnB;
		    }
		    if (fnB == null) {
		        return fnA;
		    }
		    return function () {
		        var args = _Array_slice.call(arguments);
		        var x = fnA.apply(this, args);
		        if (x !== void 0)
		            return x;
		        return fnB.apply(this, args);
		    };
		}
		
	}());
	var arr_remove,
	    arr_each,
	    arr_indexOf,
	    arr_contains,
	    arr_pushMany;
	(function(){
		arr_remove = function (array, x) {
		    var i = array.indexOf(x);
		    if (i === -1)
		        return false;
		    array.splice(i, 1);
		    return true;
		}
		;
		arr_each = function (arr, fn, ctx) {
		    arr.forEach(fn, ctx);
		}
		;
		arr_indexOf = function (arr, x) {
		    return arr.indexOf(x);
		}
		;
		arr_contains = function (arr, x) {
		    return arr.indexOf(x) !== -1;
		}
		;
		arr_pushMany = function (arr, arrSource) {
		    if (arrSource == null || arr == null || arr === arrSource)
		        return;
		    var il = arr.length, jl = arrSource.length, j = -1;
		    while (++j < jl) {
		        arr[il + j] = arrSource[j];
		    }
		}
		;
		function arr_distinct(arr, compareFn) {
		    var out = [];
		    var hash = compareFn == null ? obj_create(null) : null;
		    outer: for (var i = 0; i < arr.length; i++) {
		        var x = arr[i];
		        if (compareFn == null) {
		            if (hash[x] === 1) {
		                continue;
		            }
		            hash[x] = 1;
		        }
		        else {
		            for (var j = i - 1; j > -1; j--) {
		                var prev = arr[j];
		                if (compareFn(x, prev)) {
		                    continue outer;
		                }
		            }
		        }
		        out.push(x);
		    }
		    return out;
		}
		
	}());
	var is_Function,
	    is_Object,
	    is_Array,
	    is_ArrayLike,
	    is_String,
	    is_notEmptyString,
	    is_rawObject,
	    is_Date,
	    is_DOM,
	    is_NODE;
	(function(){
		is_Function = function (x) {
		    return typeof x === 'function';
		}
		is_Object = function (x) {
		    return x != null && typeof x === 'object';
		}
		is_Array = function (arr) {
		    return (arr != null &&
		        typeof arr === 'object' &&
		        typeof arr.length === 'number' &&
		        typeof arr.slice === 'function');
		}
		is_ArrayLike = is_Array;
		is_String = function (x) {
		    return typeof x === 'string';
		}
		is_notEmptyString = function (x) {
		    return typeof x === 'string' && x !== '';
		}
		is_rawObject = function (x) {
		    return x != null && typeof x === 'object' && x.constructor === Object;
		}
		is_Date = function (x) {
		    if (x == null || typeof x !== 'object') {
		        return false;
		    }
		    if (x.getFullYear != null && isNaN(x) === false) {
		        return true;
		    }
		    return false;
		}
		function is_PromiseLike(x) {
		    return x != null && typeof x === 'object' && typeof x.then === 'function';
		}
		function is_Observable(x) {
		    return x != null && typeof x === 'object' && typeof x.subscribe === 'function';
		}
		is_DOM = typeof window !== 'undefined' && window.navigator != null;
		is_NODE = !is_DOM;
		
	}());
	var str_format,
	    str_dedent;
	(function(){
		str_format = function (str_, a, b, c, d) {
		    var str = str_, imax = arguments.length, i = 0, x;
		    while (++i < imax) {
		        x = arguments[i];
		        if (is_Object(x) && x.toJSON) {
		            x = x.toJSON();
		        }
		        str_ = str_.replace(rgxNum(i - 1), String(x));
		    }
		    return str_;
		}
		;
		str_dedent = function (str) {
		    var rgx = /^[\t ]*\S/gm, match = rgx.exec(str), count = -1;
		    while (match != null) {
		        var x = match[0].length;
		        if (count === -1 || x < count)
		            count = x;
		        match = rgx.exec(str);
		    }
		    if (--count < 1)
		        return str;
		    var replacer = new RegExp('^[\\t ]{1,' + count + '}', 'gm');
		    return str
		        .replace(replacer, '')
		        .replace(/^[\t ]*\r?\n/, '')
		        .replace(/\r?\n[\t ]*$/, '');
		}
		;
		var rgxNum;
		(function () {
		    rgxNum = function (num) {
		        return cache_[num] || (cache_[num] = new RegExp('\\{' + num + '\\}', 'g'));
		    };
		    var cache_ = {};
		}());
		
	}());
	var error_createClass;
	(function(){
		error_createClass = function (name, Proto, stackSliceFrom) {
		    var Ctor = _createCtor(Proto, stackSliceFrom);
		    Ctor.prototype = new Error;
		    Proto.constructor = Error;
		    Proto.name = name;
		    obj_extend(Ctor.prototype, Proto);
		    return Ctor;
		}
		;
		function error_formatSource(source, index, filename) {
		    var cursor = error_cursor(source, index), lines = cursor[0], lineNum = cursor[1], rowNum = cursor[2], str = '';
		    if (filename != null) {
		        str += str_format(' at {0}:{1}:{2}\n', filename, lineNum, rowNum);
		    }
		    return str + error_formatCursor(lines, lineNum, rowNum);
		}
		;
		/**
		 * @returns [ lines, lineNum, rowNum ]
		 */
		function error_cursor(str, index) {
		    var lines = str.substring(0, index).split('\n'), line = lines.length, row = index + 1 - lines.slice(0, line - 1).join('\n').length;
		    if (line > 1) {
		        // remove trailing newline
		        row -= 1;
		    }
		    return [str.split('\n'), line, row];
		}
		;
		function error_formatCursor(lines, lineNum, rowNum) {
		    var BEFORE = 3, AFTER = 2, i = lineNum - BEFORE, imax = i + BEFORE + AFTER, str = '';
		    if (i < 0)
		        i = 0;
		    if (imax > lines.length)
		        imax = lines.length;
		    var lineNumberLength = String(imax).length, lineNumber;
		    for (; i < imax; i++) {
		        if (str)
		            str += '\n';
		        lineNumber = ensureLength(i + 1, lineNumberLength);
		        str += lineNumber + '|' + lines[i];
		        if (i + 1 === lineNum) {
		            str += '\n' + repeat(' ', lineNumberLength + 1);
		            str += lines[i].substring(0, rowNum - 1).replace(/[^\s]/g, ' ');
		            str += '^';
		        }
		    }
		    return str;
		}
		;
		function ensureLength(num, count) {
		    var str = String(num);
		    while (str.length < count) {
		        str += ' ';
		    }
		    return str;
		}
		function repeat(char_, count) {
		    var str = '';
		    while (--count > -1) {
		        str += char_;
		    }
		    return str;
		}
		function _createCtor(Proto, stackFrom) {
		    var Ctor = Proto.hasOwnProperty('constructor')
		        ? Proto.constructor
		        : null;
		    return function () {
		        var args = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            args[_i] = arguments[_i];
		        }
		        obj_defineProperty(this, 'stack', {
		            value: _prepairStack(stackFrom || 3)
		        });
		        obj_defineProperty(this, 'message', {
		            value: str_format.apply(this, arguments)
		        });
		        if (Ctor != null) {
		            Ctor.apply(this, arguments);
		        }
		    };
		}
		function _prepairStack(sliceFrom) {
		    var stack = new Error().stack;
		    return stack == null ? null : stack
		        .split('\n')
		        .slice(sliceFrom)
		        .join('\n');
		}
		
	}());
	var fn_proxy,
	    fn_apply,
	    fn_doNothing,
	    fn_createByPattern;
	(function(){
		fn_proxy = function (fn, ctx) {
		    return function () {
		        var imax = arguments.length, args = new Array(imax), i = 0;
		        for (; i < imax; i++)
		            args[i] = arguments[i];
		        return fn_apply(fn, ctx, args);
		    };
		}
		;
		fn_apply = function (fn, ctx, args) {
		    var l = args.length;
		    if (0 === l)
		        return fn.call(ctx);
		    if (1 === l)
		        return fn.call(ctx, args[0]);
		    if (2 === l)
		        return fn.call(ctx, args[0], args[1]);
		    if (3 === l)
		        return fn.call(ctx, args[0], args[1], args[2]);
		    if (4 === l)
		        return fn.call(ctx, args[0], args[1], args[2], args[3]);
		    return fn.apply(ctx, args);
		}
		;
		fn_doNothing = function () {
		    return false;
		}
		;
		fn_createByPattern = function (definitions, ctx) {
		    var imax = definitions.length;
		    return function () {
		        var l = arguments.length, i = -1, def;
		        outer: while (++i < imax) {
		            def = definitions[i];
		            if (def.pattern.length !== l) {
		                continue;
		            }
		            var j = -1;
		            while (++j < l) {
		                var fn = def.pattern[j];
		                var val = arguments[j];
		                if (fn(val) === false) {
		                    continue outer;
		                }
		            }
		            return def.handler.apply(ctx, arguments);
		        }
		        console.error('InvalidArgumentException for a function', definitions, arguments);
		        return null;
		    };
		}
		;
		
	}());
	var class_Dfr;
	(function(){
		;
		class_Dfr = function () { };
		class_Dfr.prototype = {
		    _isAsync: true,
		    _done: null,
		    _fail: null,
		    _always: null,
		    _resolved: null,
		    _rejected: null,
		    defer: function () {
		        this._rejected = null;
		        this._resolved = null;
		        return this;
		    },
		    isResolved: function () {
		        return this._resolved != null;
		    },
		    isRejected: function () {
		        return this._rejected != null;
		    },
		    isBusy: function () {
		        return this._resolved == null && this._rejected == null;
		    },
		    resolve: function () {
		        var done = this._done, always = this._always;
		        this._resolved = arguments;
		        dfr_clearListeners(this);
		        arr_callOnce(done, this, arguments);
		        arr_callOnce(always, this, [this]);
		        return this;
		    },
		    reject: function () {
		        var fail = this._fail, always = this._always;
		        this._rejected = arguments;
		        dfr_clearListeners(this);
		        arr_callOnce(fail, this, arguments);
		        arr_callOnce(always, this, [this]);
		        return this;
		    },
		    then: function (filterSuccess, filterError) {
		        return this.pipe(filterSuccess, filterError);
		    },
		    done: function (callback) {
		        if (this._rejected != null)
		            return this;
		        return dfr_bind(this, this._resolved, this._done || (this._done = []), callback);
		    },
		    fail: function (callback) {
		        if (this._resolved != null)
		            return this;
		        return dfr_bind(this, this._rejected, this._fail || (this._fail = []), callback);
		    },
		    always: function (callback) {
		        return dfr_bind(this, this._rejected || this._resolved, this._always || (this._always = []), callback);
		    },
		    pipe: function (mix /* ..methods */) {
		        var dfr;
		        if (typeof mix === 'function') {
		            dfr = new class_Dfr();
		            var done_ = mix, fail_ = arguments.length > 1
		                ? arguments[1]
		                : null;
		            this
		                .done(delegate(dfr, 'resolve', done_))
		                .fail(delegate(dfr, 'reject', fail_));
		            return dfr;
		        }
		        dfr = mix;
		        var imax = arguments.length, done = imax === 1, fail = imax === 1, i = 0, x;
		        while (++i < imax) {
		            x = arguments[i];
		            switch (x) {
		                case 'done':
		                    done = true;
		                    break;
		                case 'fail':
		                    fail = true;
		                    break;
		                default:
		                    console.error('Unsupported pipe channel', arguments[i]);
		                    break;
		            }
		        }
		        done && this.done(delegate(dfr, 'resolve'));
		        fail && this.fail(delegate(dfr, 'reject'));
		        function pipe(dfr, method) {
		            return function () {
		                dfr[method].apply(dfr, arguments);
		            };
		        }
		        function delegate(dfr, name, fn) {
		            return function () {
		                if (fn != null) {
		                    var override = fn.apply(this, arguments);
		                    if (override != null && override !== dfr) {
		                        if (isDeferred(override)) {
		                            override.then(delegate(dfr, 'resolve'), delegate(dfr, 'reject'));
		                            return;
		                        }
		                        dfr[name](override);
		                        return;
		                    }
		                }
		                dfr[name].apply(dfr, arguments);
		            };
		        }
		        return this;
		    },
		    pipeCallback: function () {
		        var self = this;
		        return function (error) {
		            if (error != null) {
		                self.reject(error);
		                return;
		            }
		            var args = _Array_slice.call(arguments, 1);
		            fn_apply(self.resolve, self, args);
		        };
		    },
		    resolveDelegate: function () {
		        return fn_proxy(this.resolve, this);
		    },
		    rejectDelegate: function () {
		        return fn_proxy(this.reject, this);
		    },
		    "catch": function (cb) {
		        return this.fail(cb);
		    },
		    "finally": function (cb) {
		        return this.always(cb);
		    }
		};
		var static_Dfr = {
		    resolve: function (a, b, c) {
		        var dfr = new class_Dfr();
		        return dfr.resolve.apply(dfr, _Array_slice.call(arguments));
		    },
		    reject: function (error) {
		        var dfr = new class_Dfr();
		        return dfr.reject(error);
		    },
		    run: function (fn, ctx) {
		        var dfr = new class_Dfr();
		        if (ctx == null)
		            ctx = dfr;
		        fn.call(ctx, fn_proxy(dfr.resolve, ctx), fn_proxy(dfr.reject, dfr), dfr);
		        return dfr;
		    },
		    all: function (promises) {
		        var dfr = new class_Dfr, arr = new Array(promises.length), wait = promises.length, error = null;
		        if (wait === 0) {
		            return dfr.resolve(arr);
		        }
		        function tick(index) {
		            if (error != null) {
		                return;
		            }
		            var args = _Array_slice.call(arguments, 1);
		            arr.splice.apply(arr, [index, 0].concat(args));
		            if (--wait === 0) {
		                dfr.resolve(arr);
		            }
		        }
		        function onReject(err) {
		            dfr.reject(error = err);
		        }
		        var imax = promises.length, i = -1;
		        while (++i < imax) {
		            var x = promises[i];
		            if (x == null || x.then == null) {
		                tick(i);
		                continue;
		            }
		            x.then(tick.bind(null, i), onReject);
		        }
		        return dfr;
		    }
		};
		class_Dfr.resolve = static_Dfr.resolve;
		class_Dfr.reject = static_Dfr.reject;
		class_Dfr.run = static_Dfr.run;
		class_Dfr.all = static_Dfr.all;
		// PRIVATE
		function dfr_bind(dfr, arguments_, listeners, callback) {
		    if (callback == null)
		        return dfr;
		    if (arguments_ != null)
		        fn_apply(callback, dfr, arguments_);
		    else
		        listeners.push(callback);
		    return dfr;
		}
		function dfr_clearListeners(dfr) {
		    dfr._done = null;
		    dfr._fail = null;
		    dfr._always = null;
		}
		function arr_callOnce(arr, ctx, args) {
		    if (arr == null)
		        return;
		    var imax = arr.length, i = -1, fn;
		    while (++i < imax) {
		        fn = arr[i];
		        if (fn)
		            fn_apply(fn, ctx, args);
		    }
		    arr.length = 0;
		}
		function isDeferred(x) {
		    return x != null
		        && typeof x === 'object'
		        && is_Function(x.then);
		}
		
	}());
	var class_Uri;
	(function(){
		class_Uri = class_create({
		    protocol: null,
		    value: null,
		    path: null,
		    file: null,
		    extension: null,
		    constructor: function (uri) {
		        if (uri == null)
		            return this;
		        if (util_isUri(uri))
		            return uri.combine('');
		        uri = normalize_uri(uri);
		        this.value = uri;
		        parse_protocol(this);
		        parse_host(this);
		        parse_search(this);
		        parse_file(this);
		        // normilize path - "/some/path"
		        this.path = normalize_pathsSlashes(this.value);
		        if (/^[\w]+:\//.test(this.path)) {
		            this.path = '/' + this.path;
		        }
		        return this;
		    },
		    cdUp: function () {
		        var path = this.path;
		        if (path == null || path === '' || path === '/') {
		            return this;
		        }
		        // win32 - is base drive
		        if (/^\/?[a-zA-Z]+:\/?$/.test(path)) {
		            return this;
		        }
		        this.path = path.replace(/\/?[^\/]+\/?$/i, '');
		        return this;
		    },
		    /**
		     * '/path' - relative to host
		     * '../path', 'path','./path' - relative to current path
		     */
		    combine: function (path) {
		        if (util_isUri(path)) {
		            path = path.toString();
		        }
		        if (!path) {
		            return util_clone(this);
		        }
		        if (rgx_win32Drive.test(path)) {
		            return new class_Uri(path);
		        }
		        var uri = util_clone(this);
		        uri.value = path;
		        parse_search(uri);
		        parse_file(uri);
		        if (!uri.value) {
		            return uri;
		        }
		        path = uri.value.replace(/^\.\//i, '');
		        if (path[0] === '/') {
		            uri.path = path;
		            return uri;
		        }
		        while (/^(\.\.\/?)/ig.test(path)) {
		            uri.cdUp();
		            path = path.substring(3);
		        }
		        uri.path = normalize_pathsSlashes(util_combinePathes(uri.path, path));
		        return uri;
		    },
		    toString: function () {
		        var protocol = this.protocol ? this.protocol + '://' : '';
		        var path = util_combinePathes(this.host, this.path, this.file) + (this.search || '');
		        var str = protocol + path;
		        if (!(this.file || this.search) && this.path) {
		            str += '/';
		        }
		        return str;
		    },
		    toPathAndQuery: function () {
		        return util_combinePathes(this.path, this.file) + (this.search || '');
		    },
		    /**
		     * @return Current Uri Path{String} that is relative to @arg1 Uri
		     */
		    toRelativeString: function (uri) {
		        if (typeof uri === 'string')
		            uri = new class_Uri(uri);
		        if (this.path.indexOf(uri.path) === 0) {
		            // host folder
		            var p = this.path ? this.path.replace(uri.path, '') : '';
		            if (p[0] === '/')
		                p = p.substring(1);
		            return util_combinePathes(p, this.file) + (this.search || '');
		        }
		        // sub folder
		        var current = this.path.split('/'), relative = uri.path.split('/'), commonpath = '', i = 0, length = Math.min(current.length, relative.length);
		        for (; i < length; i++) {
		            if (current[i] === relative[i])
		                continue;
		            break;
		        }
		        if (i > 0)
		            commonpath = current.splice(0, i).join('/');
		        if (commonpath) {
		            var sub = '', path = uri.path, forward;
		            while (path) {
		                if (this.path.indexOf(path) === 0) {
		                    forward = this.path.replace(path, '');
		                    break;
		                }
		                path = path.replace(/\/?[^\/]+\/?$/i, '');
		                sub += '../';
		            }
		            return util_combinePathes(sub, forward, this.file);
		        }
		        return this.toString();
		    },
		    toLocalFile: function () {
		        var path = util_combinePathes(this.host, this.path, this.file);
		        return util_win32Path(path);
		    },
		    toLocalDir: function () {
		        var path = util_combinePathes(this.host, this.path, '/');
		        return util_win32Path(path);
		    },
		    toDir: function () {
		        var str = this.protocol ? this.protocol + '://' : '';
		        return str + util_combinePathes(this.host, this.path, '/');
		    },
		    isRelative: function () {
		        return !(this.protocol || this.host);
		    },
		    getName: function () {
		        return this.file.replace('.' + this.extension, '');
		    }
		});
		var rgx_protocol = /^([\w\d]+):\/\//, rgx_extension = /\.([\w\d]+)$/i, rgx_win32Drive = /(^\/?\w{1}:)(\/|$)/, rgx_fileWithExt = /([^\/]+(\.[\w\d]+)?)$/i;
		function util_isUri(object) {
		    return object && typeof object === 'object' && typeof object.combine === 'function';
		}
		function util_combinePathes(a, b, c, d) {
		    var args = arguments, str = '';
		    for (var i = 0, x, imax = arguments.length; i < imax; i++) {
		        x = arguments[i];
		        if (!x)
		            continue;
		        if (!str) {
		            str = x;
		            continue;
		        }
		        if (str[str.length - 1] !== '/')
		            str += '/';
		        str += x[0] === '/' ? x.substring(1) : x;
		    }
		    return str;
		}
		function normalize_pathsSlashes(str) {
		    if (str[str.length - 1] === '/') {
		        return str.substring(0, str.length - 1);
		    }
		    return str;
		}
		function util_clone(source) {
		    var uri = new class_Uri(), key;
		    for (key in source) {
		        if (typeof source[key] === 'string') {
		            uri[key] = source[key];
		        }
		    }
		    return uri;
		}
		function normalize_uri(str) {
		    return str
		        .replace(/\\/g, '/')
		        .replace(/^\.\//, '')
		        // win32 drive path
		        .replace(/^(\w+):\/([^\/])/, '/$1:/$2');
		}
		function util_win32Path(path) {
		    if (rgx_win32Drive.test(path) && path[0] === '/') {
		        return path.substring(1);
		    }
		    return path;
		}
		function parse_protocol(obj) {
		    var match = rgx_protocol.exec(obj.value);
		    if (match == null && obj.value[0] === '/') {
		        obj.protocol = 'file';
		    }
		    if (match == null)
		        return;
		    obj.protocol = match[1];
		    obj.value = obj.value.substring(match[0].length);
		}
		function parse_host(obj) {
		    if (obj.protocol == null)
		        return;
		    if (obj.protocol === 'file') {
		        var match = rgx_win32Drive.exec(obj.value);
		        if (match) {
		            obj.host = match[1];
		            obj.value = obj.value.substring(obj.host.length);
		        }
		        return;
		    }
		    var pathStart = obj.value.indexOf('/', 2);
		    obj.host = ~pathStart
		        ? obj.value.substring(0, pathStart)
		        : obj.value;
		    obj.value = obj.value.replace(obj.host, '');
		}
		function parse_search(obj) {
		    var question = obj.value.indexOf('?');
		    if (question === -1)
		        return;
		    obj.search = obj.value.substring(question);
		    obj.value = obj.value.substring(0, question);
		}
		function parse_file(obj) {
		    var match = rgx_fileWithExt.exec(obj.value), file = match == null ? null : match[1];
		    if (file == null) {
		        return;
		    }
		    obj.file = file;
		    obj.value = obj.value.substring(0, obj.value.length - file.length);
		    obj.value = normalize_pathsSlashes(obj.value);
		    match = rgx_extension.exec(file);
		    obj.extension = match == null ? null : match[1];
		}
		class_Uri.combinePathes = util_combinePathes;
		class_Uri.combine = util_combinePathes;
		
	}());
	var class_EventEmitter;
	(function(){
		class_EventEmitter = function () {
		    this._listeners = {};
		};
		class_EventEmitter.prototype = {
		    on: function (event, fn) {
		        if (fn != null) {
		            (this._listeners[event] || (this._listeners[event] = [])).push(fn);
		        }
		        return this;
		    },
		    once: function (event, fn) {
		        if (fn != null) {
		            fn._once = true;
		            (this._listeners[event] || (this._listeners[event] = [])).push(fn);
		        }
		        return this;
		    },
		    pipe: function (event) {
		        var that = this, args;
		        return function () {
		            args = _Array_slice.call(arguments);
		            args.unshift(event);
		            fn_apply(that.trigger, that, args);
		        };
		    },
		    emit: event_trigger,
		    trigger: event_trigger,
		    off: function (event, fn) {
		        var listeners = this._listeners[event];
		        if (listeners == null)
		            return this;
		        if (arguments.length === 1) {
		            listeners.length = 0;
		            return this;
		        }
		        var imax = listeners.length, i = -1;
		        while (++i < imax) {
		            if (listeners[i] === fn) {
		                listeners.splice(i, 1);
		                i--;
		                imax--;
		            }
		        }
		        return this;
		    }
		};
		function event_trigger(event) {
		    var args = [];
		    for (var _i = 1; _i < arguments.length; _i++) {
		        args[_i - 1] = arguments[_i];
		    }
		    var fns = this._listeners[event];
		    if (fns == null) {
		        return this;
		    }
		    for (var i = 0; i < fns.length; i++) {
		        var fn = fns[i];
		        fn_apply(fn, this, args);
		        if (fn !== fns[i]) {
		            // the callback has removed itself
		            i--;
		            continue;
		        }
		        if (fn._once === true) {
		            fns.splice(i, 1);
		            i--;
		        }
		    }
		    return this;
		}
		
	}());
	var mixin;
	(function(){
		var class_inherit,
		    class_extendProtoObjects;
		(function(){
			var PROTO = "__proto__";
			var _toString = Object.prototype.toString;
			var _isArguments = function (args) {
			    return _toString.call(args) === "[object Arguments]";
			};
			class_inherit = PROTO in Object.prototype ? inherit : inherit_protoLess;
			
			class_extendProtoObjects = function (proto, _base, _extends) {
			    var key, protoValue;
			    for (key in proto) {
			        protoValue = proto[key];
			        if (!is_rawObject(protoValue))
			            continue;
			        if (_base != null) {
			            if (is_rawObject(_base.prototype[key]))
			                obj_defaults(protoValue, _base.prototype[key]);
			        }
			        if (_extends != null) {
			            arr_each(_extends, proto_extendDefaultsDelegate(protoValue, key));
			        }
			    }
			}
			;
			// PRIVATE
			function proto_extendDefaultsDelegate(target, key) {
			    return function (source) {
			        var proto = proto_getProto(source), val = proto[key];
			        if (is_rawObject(val)) {
			            obj_defaults(target, val);
			        }
			    };
			}
			function proto_extend(proto, source) {
			    if (source == null)
			        return;
			    if (typeof proto === "function")
			        proto = proto.prototype;
			    if (typeof source === "function")
			        source = source.prototype;
			    var key, val;
			    for (key in source) {
			        if (key === "constructor")
			            continue;
			        val = source[key];
			        if (val != null)
			            proto[key] = val;
			    }
			}
			function proto_override(super_, fn) {
			    var proxy;
			    if (super_) {
			        proxy = function (mix) {
			            var args = arguments.length === 1 && _isArguments(mix) ? mix : arguments;
			            return fn_apply(super_, this, args);
			        };
			    }
			    else {
			        proxy = fn_doNothing;
			    }
			    return function () {
			        this["super"] = proxy;
			        return fn_apply(fn, this, arguments);
			    };
			}
			function inherit(_class, _base, _extends, original) {
			    var prototype = original, proto = original;
			    prototype.constructor = _class.prototype.constructor;
			    if (_extends != null) {
			        proto[PROTO] = {};
			        arr_each(_extends, function (x) {
			            proto_extend(proto[PROTO], x);
			        });
			        proto = proto[PROTO];
			    }
			    if (_base != null)
			        proto[PROTO] = _base.prototype;
			    _class.prototype = prototype;
			}
			function inherit_Object_create(_class, _base, _extends, original, _overrides, defaults) {
			    if (_base != null) {
			        _class.prototype = Object.create(_base.prototype);
			        obj_extendDescriptors(_class.prototype, original);
			    }
			    else {
			        _class.prototype = Object.create(original);
			    }
			    _class.prototype.constructor = _class;
			    if (_extends != null) {
			        arr_each(_extends, function (x) {
			            obj_defaults(_class.prototype, x);
			        });
			    }
			    var proto = _class.prototype;
			    obj_defaults(proto, defaults);
			    for (var key in _overrides) {
			        proto[key] = proto_override(proto[key], _overrides[key]);
			    }
			}
			// browser that doesnt support __proto__
			function inherit_protoLess(_class, _base, _extends, original) {
			    if (_base != null) {
			        var tmp = function () { };
			        tmp.prototype = _base.prototype;
			        _class.prototype = new tmp();
			        _class.prototype.constructor = _class;
			    }
			    if (_extends != null) {
			        arr_each(_extends, function (x) {
			            delete x.constructor;
			            proto_extend(_class, x);
			        });
			    }
			    proto_extend(_class, original);
			}
			function proto_getProto(mix) {
			    return is_Function(mix) ? mix.prototype : mix;
			}
			
		}());
		mixin = function (mix1, mix2, mix3, mix4, mix5) {
		    return mix(mix1, mix2, mix3, mix4, mix5);
		}
		function mix() {
		    var mixins = [];
		    for (var _i = 0; _i < arguments.length; _i++) {
		        mixins[_i] = arguments[_i];
		    }
		    var _base = mixins[0];
		    var _extends = mixins.slice(1);
		    var _callable = ensureCallable(mixins);
		    var _class = function () {
		        var args = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            args[_i] = arguments[_i];
		        }
		        for (var i = _callable.length - 1; i > -1; i--) {
		            var x = _callable[i];
		            if (typeof x === 'function') {
		                fn_apply(x, this, args);
		            }
		        }
		    };
		    if (is_Function(_base) === false) {
		        _extends.unshift(_base);
		        _base = null;
		    }
		    mixStatics(_class, mixins);
		    var proto = {};
		    class_extendProtoObjects(proto, _base, _extends);
		    class_inherit(_class, _base, _extends, proto);
		    return _class;
		}
		function mixStatics(Ctor, mixins) {
		    for (var i = 0; i < mixins.length; i++) {
		        var Fn = mixins[i];
		        if (typeof Fn !== 'function') {
		            continue;
		        }
		        for (var key in Fn) {
		            if (key in Ctor === false) {
		                obj_copyProperty(Ctor, Fn, key);
		            }
		        }
		    }
		}
		var ensureCallableSingle, ensureCallable;
		(function () {
		    ensureCallable = function (arr) {
		        var out = [], i = arr.length;
		        while (--i > -1)
		            out[i] = ensureCallableSingle(arr[i]);
		        return out;
		    };
		    ensureCallableSingle = function (mix) {
		        if (is_Function(mix) === false) {
		            return mix;
		        }
		        var fn = mix;
		        var caller = directCaller;
		        var safe = false;
		        var wrapped = function () {
		            var args = [];
		            for (var _i = 0; _i < arguments.length; _i++) {
		                args[_i] = arguments[_i];
		            }
		            var self = this;
		            var x;
		            if (safe === true) {
		                caller(fn, self, args);
		                return;
		            }
		            try {
		                x = caller(fn, self, args);
		                safe = true;
		            }
		            catch (error) {
		                caller = newCaller;
		                safe = true;
		                caller(fn, self, args);
		            }
		            if (x != null) {
		                return x;
		            }
		        };
		        return wrapped;
		    };
		    function directCaller(fn, self, args) {
		        return fn.apply(self, args);
		    }
		    function newCaller(fn, self, args) {
		        var x = new (fn.bind.apply(fn, [null].concat(args)));
		        obj_extend(self, x);
		    }
		}());
		
	}());
	var Lib = {
	    class_Dfr: class_Dfr,
	    class_EventEmitter: class_EventEmitter,
	    class_Uri: class_Uri,
	    class_create: class_create,
	    class_createEx: class_createEx,
	    arr_remove: arr_remove,
	    arr_each: arr_each,
	    arr_indexOf: arr_indexOf,
	    arr_contains: arr_contains,
	    arr_pushMany: arr_pushMany,
	    error_createClass: error_createClass,
	    fn_createByPattern: fn_createByPattern,
	    fn_doNothing: fn_doNothing,
	    obj_getProperty: obj_getProperty,
	    obj_setProperty: obj_setProperty,
	    obj_hasProperty: obj_hasProperty,
	    obj_extend: obj_extend,
	    obj_extendDefaults: obj_extendDefaults,
	    obj_extendMany: obj_extendMany,
	    obj_extendProperties: obj_extendProperties,
	    obj_extendPropertiesDefaults: obj_extendPropertiesDefaults,
	    obj_create: obj_create,
	    obj_defineProperty: obj_defineProperty,
	    is_Function: is_Function,
	    is_Array: is_Array,
	    is_ArrayLike: is_ArrayLike,
	    is_String: is_String,
	    is_Object: is_Object,
	    is_notEmptyString: is_notEmptyString,
	    is_rawObject: is_rawObject,
	    is_Date: is_Date,
	    is_NODE: is_NODE,
	    is_DOM: is_DOM,
	    str_format: str_format,
	    str_dedent: str_dedent,
	    mixin: mixin
	};
	
    
    for (var key in Lib) {
        owner[property][key] = Lib[key];
    }
}));;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_node_modules_atma_utils_lib_utils) && isObject(module.exports)) {
        Object.assign(_node_modules_atma_utils_lib_utils, module.exports);
    } else {
        _node_modules_atma_utils_lib_utils = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_log;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log_warn = exports.log_error = void 0;
function log_error() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.unshift('<appcfg:error>');
    console.error.apply(console, args);
}
exports.log_error = log_error;
;
function log_warn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.unshift('<appcfg:warn>');
    console.warn.apply(console, args);
}
exports.log_warn = log_warn;
;
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=log.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_util_log) && isObject(module.exports)) {
        Object.assign(_src_util_log, module.exports);
    } else {
        _src_util_log = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_object;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
// export function obj_getProperty(obj, property) {
//     let chain = property.split('.'),
//         imax = chain.length,
//         i = -1;
//     while (++i < imax) {
//         if (obj == null)
//             return null;
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj_visitStrings = exports.obj_clone = exports.obj_interpolate = exports.obj_ensureProperty = exports.obj_deepExtend = exports.obj_extend = exports.obj_defaults = void 0;
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var log_1 = _src_util_log;
//         obj = obj[chain[i]];
//     }
//     return obj;
// };
// export function obj_setProperty(obj, property, value) {
//     let chain = property.split('.'),
//         imax = chain.length,
//         i = -1,
//         key;
//     while (++i < imax - 1) {
//         key = chain[i];
//         if (obj[key] == null)
//             obj[key] = {};
//         obj = obj[key];
//     }
//     obj[chain[i]] = value;
// };
function obj_defaults(target, defaults) {
    for (var key in defaults) {
        if (target[key] == null)
            target[key] = defaults[key];
    }
    return target;
}
exports.obj_defaults = obj_defaults;
;
function obj_extend(target, source) {
    for (var key in source) {
        if (source[key] != null)
            target[key] = source[key];
    }
    return target;
}
exports.obj_extend = obj_extend;
;
function obj_deepExtend(target, source) {
    if (target == null)
        target = {};
    if (source == null)
        return target;
    if (atma_utils_1.is_Array(target) && atma_utils_1.is_Array(source)) {
        for (var i = 0, x = void 0, imax = source.length; i < imax; i++) {
            x = source[i];
            if (x == null)
                continue;
            if (atma_utils_1.is_Object(x)) {
                target.push(obj_deepExtend({}, x));
                continue;
            }
            target.push(x);
        }
        return target;
    }
    if (!atma_utils_1.is_Object(source) && !atma_utils_1.is_Object(target)) {
        log_1.log_warn('<object:deepExtend> not an object or type missmatch - Dismiss');
        return target;
    }
    var key, val;
    for (key in source) {
        val = source[key];
        if (key.charCodeAt(0) === 33) {
            // !
            target[key.substring(1)] = val;
            continue;
        }
        if (val == null)
            continue;
        if (target[key] == null) {
            target[key] = val;
            continue;
        }
        if (atma_utils_1.is_Array(val)) {
            if (atma_utils_1.is_Array(target[key]) === false) {
                log_1.log_warn('<object:deepExtend> type missmatch %s %s %s - Overwrite', key, val, target[key]);
                target[key] = val;
                continue;
            }
            obj_deepExtend(target[key], val);
            continue;
        }
        if (atma_utils_1.is_Object(val) && atma_utils_1.is_Object(target[key])) {
            target[key] = obj_deepExtend(target[key], val);
            continue;
        }
        target[key] = val;
    }
    return target;
}
exports.obj_deepExtend = obj_deepExtend;
;
function obj_ensureProperty(obj, property, defaultVal) {
    var current = atma_utils_1.obj_getProperty(obj, property);
    if (current == null) {
        var val = defaultVal == null ? {} : defaultVal;
        atma_utils_1.obj_setProperty(obj, property, val);
        return val;
    }
    if (typeof current !== typeof defaultVal) {
        log_1.log_error('<obj_ensureProperty> type missmatch', typeof current, typeof defaultVal, new Error().stack);
    }
    return current;
}
exports.obj_ensureProperty = obj_ensureProperty;
;
function obj_interpolate(obj, root, isOptional) {
    root = root || obj;
    obj_visitStrings(obj, function (str, key, parent) {
        str = str.trim();
        var c0 = str.charCodeAt(0);
        var c1 = str.charCodeAt(1);
        var has = false;
        if (c0 === 35 && c1 === 91) {
            // #[
            log_1.log_warn('<APPCFG: OBSOLETE: config interpolation will be changed to ${}', str);
            has = true;
        }
        if (c0 === 36 && c1 === 123) {
            // ${
            has = true;
        }
        if (has === false) {
            return null;
        }
        str = str.substring(2, str.length - 1).trim();
        var val = atma_utils_1.obj_getProperty(root, str);
        if (val == null && isOptional !== true)
            log_1.log_warn('<config: obj_interpolate: property not exists in root', str);
        return val;
    });
}
exports.obj_interpolate = obj_interpolate;
;
// deep clone object and arrays
function obj_clone(obj) {
    if (obj == null || typeof obj !== 'object')
        return obj;
    var Ctor = obj.constructor, clone;
    if (Array === Ctor) {
        clone = [];
        var i = -1;
        var imax = obj.length;
        while (++i < imax) {
            clone[i] = obj_clone(obj[i]);
        }
        return clone;
    }
    if (Object === Ctor || null == Ctor) {
        clone = Object.create(null);
        for (var key in obj) {
            clone[key] = obj_clone(obj[key]);
        }
        return clone;
    }
    if (Date === Ctor
        || RegExp === Ctor
        || String === Ctor
        || Number === Ctor) {
        return obj;
    }
    log_1.log_warn('Configuration contains not clonable object', obj);
    return obj;
}
exports.obj_clone = obj_clone;
;
function obj_visitStrings(obj, visitorFn) {
    if (obj == null || typeof obj !== 'object') {
        return;
    }
    var val, r;
    if (atma_utils_1.is_Array(obj)) {
        var arr = obj;
        for (var i = 0; i < arr.length; i++) {
            visit(visitorFn, arr[i], i, arr);
        }
        return;
    }
    for (var key in obj) {
        visit(visitorFn, obj[key], key, obj);
    }
}
exports.obj_visitStrings = obj_visitStrings;
;
function visit(visitorFn, val, key, parent) {
    if (val == null) {
        return;
    }
    if (typeof val === 'string') {
        parent[key] = visitorFn(val, key, parent) || val;
        return;
    }
    if (typeof val === 'object') {
        if (typeof key === 'string' && key.charCodeAt(0) === 95) {
            return;
        }
        obj_visitStrings(val, visitorFn);
    }
}
//# sourceMappingURL=object.js.map
//# sourceMappingURL=object.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_util_object) && isObject(module.exports)) {
        Object.assign(_src_util_object, module.exports);
    } else {
        _src_util_object = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_cfg;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cfg_resolvePath = exports.cfg_handlePaths = exports.cfg_extend = exports.cfg_merge = void 0;
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var object_1 = _src_util_object;
/* target - config object
 * source - source config object
 */
function cfg_merge(target, config, setterProperty) {
    if (config == null)
        return;
    if (setterProperty)
        target = object_1.obj_ensureProperty(target, setterProperty, {});
    config = object_1.obj_clone(config);
    object_1.obj_deepExtend(target, config);
}
exports.cfg_merge = cfg_merge;
;
function cfg_extend(target, source, deepExtend, path) {
    if (path)
        target = object_1.obj_ensureProperty(target, path, {});
    var fn = deepExtend !== false
        ? object_1.obj_deepExtend
        : object_1.obj_extend;
    fn(target, source);
}
exports.cfg_extend = cfg_extend;
;
function cfg_handlePaths(config) {
    var base = config.base;
    object_1.obj_visitStrings(config, function (str, key, parent) {
        if (str.charCodeAt(0) !== 126 /* ~ */)
            return null;
        if (str.charCodeAt(1) !== 47 /* / */)
            return null;
        return resolvePath(str, base);
    });
}
exports.cfg_handlePaths = cfg_handlePaths;
;
function cfg_resolvePath(path, config) {
    if (path.charCodeAt(0) !== 126) {
        // ~
        return path;
    }
    return resolvePath(path, config.base);
}
exports.cfg_resolvePath = cfg_resolvePath;
;
function resolvePath(path, base) {
    return atma_utils_1.class_Uri.combine(base, path.substring(1));
}
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=cfg.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_util_cfg) && isObject(module.exports)) {
        Object.assign(_src_util_cfg, module.exports);
    } else {
        _src_util_cfg = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_query;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query_serialize = exports.query_deserialize = void 0;
var log_1 = _src_util_log;
function query_deserialize(query, delimiter) {
    if (delimiter === void 0) { delimiter = '&'; }
    var obj = {};
    var parts = query.split(delimiter);
    for (var i = 0, imax = parts.length; i < imax; i++) {
        var x = parts[i].split('=');
        var key = x[0];
        var val = x[1] == null ? '' : decode(x[1]);
        if (key[key.length - 1] === ']' && key[key.length - 2] === '[') {
            key = key.substring(0, key.length - 2);
            var current = obj_getProperty(obj, key);
            if (Array.isArray(current)) {
                current.push(val);
            }
            else {
                obj_setProperty(obj, key, [val]);
            }
            continue;
        }
        obj_setProperty(obj, key, val);
    }
    return obj;
}
exports.query_deserialize = query_deserialize;
;
function query_serialize(params, delimiter) {
    if (delimiter == null)
        delimiter = '&';
    var query = '', key, val;
    for (key in params) {
        val = params[key];
        if (val == null)
            continue;
        // serialize as flag
        if (typeof val === 'boolean')
            val = null;
        query = query + (query ? delimiter : '') + key;
        if (val /* unstrict */)
            query += '=' + encode(val);
    }
    return query;
}
exports.query_serialize = query_serialize;
;
// = private
function obj_setProperty(obj, property, value) {
    var chain = property.split('.');
    var i = 0;
    var imax = chain.length;
    for (; i < imax - 1; i++) {
        var key = chain[i];
        if (obj[key] == null) {
            obj[key] = {};
        }
        obj = obj[key];
    }
    obj[chain[i]] = value;
}
function obj_getProperty(obj, property) {
    var chain = property.split('.');
    var i = 0;
    var imax = chain.length;
    for (; i < imax; i++) {
        var key = chain[i];
        if (obj[key] == null) {
            return null;
        }
        obj = obj[key];
    }
    return obj;
}
function decode(str) {
    try {
        return decodeURIComponent(str);
    }
    catch (error) {
        log_1.log_error('decode:URI malformed');
        return '';
    }
}
function encode(str) {
    try {
        return encodeURIComponent(str);
    }
    catch (error) {
        log_1.log_error('encode:URI malformed');
        return '';
    }
}
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=query.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_util_query) && isObject(module.exports)) {
        Object.assign(_src_util_query, module.exports);
    } else {
        _src_util_query = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_path;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.path_getQuery = exports.path_handleSpecialFolder = void 0;
var atma_io_1 = require("atma-io");
var log_1 = _src_util_log;
var query_1 = _src_util_query;
var rgx_specialFolder = /^%(\w+)%/, rgx_dblSlash = /[\/]{2,}/g, folders = {};
function path_handleSpecialFolder(path) {
    if (rgx_specialFolder.test(path) === false)
        return path;
    path = path_normalize(path)
        .replace(rgx_specialFolder, function (full, name) {
        name = name.toUpperCase();
        return folders[name] != null
            ? folders[name]
            : (folders[name] = getSpecialFolder(name));
    })
        .replace(rgx_dblSlash, '/');
    return 'file://' + path;
}
exports.path_handleSpecialFolder = path_handleSpecialFolder;
;
function path_normalize(path) {
    return path
        .replace(/\\/g, '/');
}
;
// PRIVATE
function getSpecialFolder(name) {
    var nodeEnv = process.env, path = nodeEnv[name];
    if (path != null)
        return path;
    switch (name) {
        case 'TEMP':
            path = nodeEnv.TMP || nodeEnv.TMPDIR;
            break;
        case 'APP':
            // @TODO eliminate io.env dependency
            path = atma_io_1.env.applicationDir.toLocalDir();
            break;
        case 'APPDATA':
            path = nodeEnv.HOME;
            break;
    }
    if (path == null)
        log_1.log_error('<config:special-folder> Not resolved', name);
    return path_normalize(path || nodeEnv.HOME || name);
}
function path_getQuery(path) {
    var i = path.indexOf('?');
    if (i === -1) {
        return {};
    }
    var query = path.substring(i + 1);
    return query_1.query_deserialize(query, '&');
}
exports.path_getQuery = path_getQuery;
;
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=path.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_util_path) && isObject(module.exports)) {
        Object.assign(_src_util_path, module.exports);
    } else {
        _src_util_path = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_Await;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class_Await = void 0;
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var class_Await = /** @class */ (function () {
    function class_Await() {
        this.promise = new atma_utils_1.class_Dfr;
        this.error = null;
        this.completed = false;
        this.wait = 0;
        this.promise.resolve();
    }
    class_Await.prototype.delegate = function (opts) {
        var _this = this;
        this.completed = false;
        this.promise.defer();
        this.wait++;
        return function (error) {
            if (_this.completed) {
                return;
            }
            if ((opts === null || opts === void 0 ? void 0 : opts.errorable) !== false && error) {
                _this.completed = true;
                _this.promise.reject(error);
                return;
            }
            if (--_this.wait < 1) {
                _this.completed = true;
                _this.promise.resolve();
            }
        };
    };
    class_Await.prototype.always = function (fn) {
        this.promise.then(fn, fn);
        return this;
    };
    return class_Await;
}());
exports.class_Await = class_Await;
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=Await.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_util_Await) && isObject(module.exports)) {
        Object.assign(_src_util_Await, module.exports);
    } else {
        _src_util_Await = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_SourceFactory;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceFactory = exports.Sources = exports.Handlers = void 0;
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var Await_1 = _src_util_Await;
var cfg_1 = _src_util_cfg;
var log_1 = _src_util_log;
exports.Handlers = {};
var Sources = /** @class */ (function () {
    function Sources() {
        this.array = [];
    }
    Sources.prototype.add = function (mix) {
        var _this = this;
        if (Array.isArray(mix)) {
            mix.forEach(function (x) { return _this.add(x); });
            return;
        }
        if (mix instanceof Sources) {
            this.add(mix.array);
            return;
        }
        this.array.push(mix);
    };
    Sources.prototype.read = function (config) {
        var sources = this.array;
        for (var i = 0; i < sources.length; i++) {
            var source = sources[i];
            if (source.config) {
                Object.assign(config, source.config);
            }
        }
    };
    Sources.prototype.loadSync = function (rootConfig) {
        var _a, _b;
        var sources = this.array;
        var i = -1;
        var imax = sources.length;
        while (++i < imax) {
            var source = sources[i];
            var before = (_a = source.data) === null || _a === void 0 ? void 0 : _a.beforeRead;
            var after = (_b = source.data) === null || _b === void 0 ? void 0 : _b.afterRead;
            if (before)
                before(source, rootConfig);
            if (source.readSync == null) {
                throw new Error('Source not supports sync config loader');
            }
            source.readSync(rootConfig);
            cfg_1.cfg_merge(rootConfig, source.config, source.data.setterProperty);
            if (after) {
                after(source, rootConfig);
            }
        }
        return sources;
    };
    Sources.prototype.load = function (rootConfig, i) {
        var _this = this;
        var _a, _b, _c;
        if (i === void 0) { i = -1; }
        if (this.promise == null) {
            this.promise = new atma_utils_1.class_Dfr;
        }
        var self = this;
        var sources = this.array;
        var imax = sources.length;
        var count = 0;
        var $awaits = new Await_1.class_Await();
        var _loop_1 = function () {
            var source = sources[i];
            if (++count > 1) {
                if (source.data.sync) {
                    $awaits.always(resume);
                    return "break";
                }
            }
            var before = (_a = source.data) === null || _a === void 0 ? void 0 : _a.beforeRead;
            var after = (_b = source.data) === null || _b === void 0 ? void 0 : _b.afterRead;
            if (before)
                before(source, rootConfig);
            var onAlways = $awaits.delegate({ errorable: false });
            var onComplete = afterDelegate(after, source, rootConfig);
            // Backward-compat in-case the source itself is deferable
            var promise = (_c = source.read(rootConfig)) !== null && _c !== void 0 ? _c : source;
            promise.then(function (res) {
                onComplete();
                onAlways(null);
            }, function (err) {
                onAlways(err);
            });
        };
        while (++i < imax) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
        function resume() {
            self.load(rootConfig, i - 1);
        }
        if (i > imax - 1) {
            $awaits.always(function () { return _this.promise.resolve(_this); });
        }
        function afterDelegate(fn, source, rootConfig) {
            return function () {
                cfg_1.cfg_merge(rootConfig, source.config, source.data.setterProperty);
                if (fn)
                    fn(source, rootConfig);
            };
        }
        return this.promise;
    };
    Sources.prototype.toArray = function () {
        return this.array;
    };
    return Sources;
}());
exports.Sources = Sources;
;
exports.SourceFactory = {
    create: function (arr) {
        if (typeof arr === 'string') {
            // file/directory/glob source
            arr = [{ path: arr }];
        }
        if (Array.isArray(arr) === false) {
            // single source
            arr = [arr];
        }
        var imax = arr.length;
        var i = -1;
        var sources = new Sources;
        outer: while (++i < imax) {
            var data = arr[i];
            if (data == null) {
                continue;
            }
            for (var name in exports.Handlers) {
                var Handler = exports.Handlers[name];
                if (Handler.canHandle(data)) {
                    var source = Handler.create(data);
                    sources.add(source);
                    continue outer;
                }
            }
            log_1.log_error('<unhandled configuration source> :', data);
        }
        return sources;
    },
    register: function (name, Handler) {
        exports.Handlers[name] = Handler;
    }
};
//# sourceMappingURL=SourceFactory.js.map
//# sourceMappingURL=SourceFactory.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_sources_SourceFactory) && isObject(module.exports)) {
        Object.assign(_src_sources_SourceFactory, module.exports);
    } else {
        _src_sources_SourceFactory = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_cfg_conditions;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cfg_getEnvironmentVar = exports.cfg_conditions = void 0;
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var log_1 = _src_util_log;
var object_1 = _src_util_object;
function cfg_conditions(obj, config, cliParams) {
    _cfg = config;
    _params = cliParams;
    _refCount = 0;
    _refs = [];
    rewrite(obj);
}
exports.cfg_conditions = cfg_conditions;
;
function cfg_getEnvironmentVar(config, prop) {
    if (envCache.hasOwnProperty(prop))
        return envCache[prop];
    var r = atma_utils_1.obj_getProperty(config, prop);
    if (r != null)
        return (envCache[prop] = r);
    if (typeof process !== 'undefined') {
        var env = process.env;
        r = env[prop];
        if (r != null)
            return (envCache[prop] = r);
        r = env['NODE_' + prop.toUpperCase()];
        if (r != null)
            return (envCache[prop] = r);
        var ENV = env.NODE_ENV || env.ENV;
        if (ENV != null) {
            r = new RegExp('\\b' + prop + '\\b', 'i').test(ENV);
            return (envCache[prop] = r);
        }
    }
    return (envCache[prop] = false);
}
exports.cfg_getEnvironmentVar = cfg_getEnvironmentVar;
;
// === private
var envCache = {};
var key_DEFAULT = 'default';
var _cfg;
var _params;
var _refs;
var _refCount;
function rewrite(obj) {
    if (atma_utils_1.is_Array(obj))
        rewriteArray(obj);
    if (atma_utils_1.is_Object(obj))
        rewriteObject(obj);
}
function rewriteObject(obj) {
    var MAX_CALL_STACK = 100;
    if (++_refCount > MAX_CALL_STACK) {
        if (_refs.indexOf(obj) !== -1) {
            return;
        }
        _refs.push(obj);
    }
    var key, val, c;
    for (key in obj) {
        c = key.charCodeAt(0);
        if (c === 36) {
            // $ - utility properties
            continue;
        }
        val = obj[key];
        if (atma_utils_1.is_Object(val) === false)
            continue;
        if (isConditionProperty(key)) {
            if (evalConditionProperty(key)) {
                object_1.obj_deepExtend(obj, val);
            }
            continue;
        }
        if (isConditionObject(val)) {
            obj[key] = evalConditionObject(val);
            continue;
        }
        rewrite(val);
    }
}
function rewriteArray(arr) {
    var imax = arr.length, i = -1, x, extArr;
    while (++i < imax) {
        x = arr[i];
        if (atma_utils_1.is_Object(x) === false)
            continue;
        if (isConditionObject(x)) {
            extArr = evalConditionObject(x);
            if (extArr == null)
                continue;
            if (atma_utils_1.is_Array(extArr) === false)
                extArr = [extArr];
            arr.splice.apply(arr, [i, 1].concat(extArr));
            i--;
            imax += extArr.length;
            continue;
        }
        rewrite(x);
    }
}
function isConditionProperty(prop) {
    if (prop.charCodeAt(0) !== 35)
        // #
        return false;
    return prop.indexOf('#if ') === 0;
}
function isConditionObject(obj) {
    var has = false;
    for (var key in obj) {
        if (isConditionProperty(key)) {
            has = true;
            continue;
        }
        if (key === key_DEFAULT)
            continue;
        return false;
    }
    return has === true;
}
function evalConditionProperty(prop) {
    var code = prop
        .replace('#if ', '')
        .replace(/\b[\w\d_$]+\b/g, function (match, index, str) {
        if (isInQuotes(str, index))
            return match;
        if (str[index - 1] === '.')
            // skip property accessor
            return match;
        return 'getter("' + match + '")';
    });
    var fn = new Function('getter', 'return !!(' + code + ')');
    try {
        return fn(evalGetter);
    }
    catch (error) {
        log_1.log_error('<config:condition-object> Evalulation error', prop, error);
    }
    return false;
}
function evalGetter(prop) {
    var r = atma_utils_1.obj_getProperty(_params, prop);
    if (r != null)
        return r;
    r = atma_utils_1.obj_getProperty(_cfg, prop);
    if (r != null)
        return r;
    if (typeof process !== 'undefined') {
        var env = process.env;
        r = env[prop];
        if (r != null)
            return r;
        r = env['NODE_' + prop];
        if (r != null)
            return r;
        var ENV = env.NODE_ENV || env.ENV;
        if (ENV != null && ENV.toUpperCase() === prop.toUpperCase())
            return true;
    }
    return null;
}
function evalConditionObject(obj) {
    for (var key in obj) {
        if (key === key_DEFAULT)
            continue;
        if (evalConditionProperty(key))
            return obj[key];
    }
    return obj[key_DEFAULT];
}
function isInQuotes(str, index) {
    var isInDouble = false, isInSingle = false, c;
    while (--index > -1) {
        c = str.charCodeAt(index);
        if (34 === c) {
            if (isInSingle)
                continue;
            if (isInDouble && str[index - 1] === '\\')
                continue;
            isInDouble = !isInDouble;
        }
        if (39 === c) {
            if (isInDouble)
                continue;
            if (isInSingle && str[index - 1] === '\\')
                continue;
            isInSingle = !isInSingle;
        }
    }
    return isInSingle || isInDouble;
}
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=cfg_conditions.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_util_cfg_conditions) && isObject(module.exports)) {
        Object.assign(_src_util_cfg_conditions, module.exports);
    } else {
        _src_util_cfg_conditions = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_utils_module;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.module_eval = void 0;
var log_1 = _src_util_log;
function module_eval(path, code) {
    var module = {
        exports: {}
    }, exports = module.exports;
    try {
        (new Function('module', 'exports', code))(module, exports);
    }
    catch (error) {
        log_1.log_error('<config> Configuration evaluation error', path, error);
    }
    if (module.exports === exports && Object.keys(module.exports).length === 0) {
        log_1.log_error('<config> Define `module.exports = ` in a file to export configuration', path);
    }
    return module.exports;
}
exports.module_eval = module_eval;
;
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=module.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_sources_utils_module) && isObject(module.exports)) {
        Object.assign(_src_sources_utils_module, module.exports);
    } else {
        _src_sources_utils_module = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_cfg_imports;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cfg_imports = void 0;
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var atma_io_1 = require("atma-io");
function cfg_imports(obj) {
    rewrite(obj);
}
exports.cfg_imports = cfg_imports;
;
// === private
var key_DEFAULT = 'default';
function rewrite(obj) {
    if (atma_utils_1.is_Array(obj))
        rewriteArray(obj);
    if (atma_utils_1.is_Object(obj))
        rewriteObject(obj);
}
function rewriteObject(obj) {
    for (var key in obj) {
        var c = key.charCodeAt(0);
        if (c === 36) {
            // $ - utility properties
            continue;
        }
        var val = obj[key];
        if (isImportValue(val)) {
            obj[key] = importValue(val);
            continue;
        }
        if (atma_utils_1.is_Object(val) === false) {
            continue;
        }
        rewrite(val);
    }
}
function rewriteArray(arr) {
    var imax = arr.length, i = -1;
    while (++i < imax) {
        var x = arr[i];
        if (atma_utils_1.is_Object(x) === false) {
            continue;
        }
        rewrite(x);
    }
}
function isImportValue(value) {
    return typeof value === 'string' && value[0] === '#' && rgx.test(value);
}
function importValue(value) {
    var match = rgx.exec(value);
    var path = match.groups.path;
    var json = atma_io_1.File.read(path);
    if (match.groups.getter) {
        json = atma_utils_1.obj_getProperty(json, match.groups.getter);
    }
    return json;
}
var rgx = /#import(\s+)(?<path>[^\s]+)\s*(?<getter>[^\s]+)?/i;
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=cfg_imports.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_util_cfg_imports) && isObject(module.exports)) {
        Object.assign(_src_util_cfg_imports, module.exports);
    } else {
        _src_util_cfg_imports = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_utils_file;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.file_readSourceSync = exports.file_readSourceAsync = void 0;
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var atma_io_1 = require("atma-io");
var object_1 = _src_util_object;
var cfg_conditions_1 = _src_util_cfg_conditions;
var log_1 = _src_util_log;
var module_1 = _src_sources_utils_module;
var cfg_imports_1 = _src_util_cfg_imports;
function file_readSourceAsync(rootConfig, path, data) {
    var dfr = new atma_utils_1.class_Dfr;
    var file = resolveFile(rootConfig, path, data.optional, data.lookupAncestors);
    if (file == null)
        return dfr.reject({ code: 404 });
    file
        .readAsync()
        .fail(dfr.rejectDelegate())
        .done(function (fileContent) {
        dfr.resolve(prepairConfig(data, file, fileContent, rootConfig));
    });
    return dfr;
}
exports.file_readSourceAsync = file_readSourceAsync;
;
function file_readSourceSync(rootConfig, path, data) {
    var file = resolveFile(rootConfig, path, data.optional, data.lookupAncestors);
    if (file == null) {
        return null;
    }
    var content = file.read();
    return prepairConfig(data, file, content, rootConfig);
}
exports.file_readSourceSync = file_readSourceSync;
;
function resolveFile(rootConfig, path, isOptional, lookupAncestors) {
    var uri = new atma_utils_1.class_Uri(path);
    if (uri.extension === 'yml' && ('yml' in atma_io_1.File.middleware) === false) {
        require('atma-io-middleware-yml');
    }
    if (atma_io_1.File.exists(uri.toString())) {
        return new atma_io_1.File(uri);
    }
    if (uri.isRelative() && typeof include !== 'undefined') {
        uri = (new atma_utils_1.class_Uri(include.location)).combine(path);
        if (atma_io_1.File.exists(uri.toString()))
            return new atma_io_1.File(uri);
    }
    if (lookupAncestors) {
        if (uri.isRelative()) {
            uri = (new atma_utils_1.class_Uri('file://' + global.process.cwd() + '/')).combine(path);
        }
        var folder = uri.path;
        while (uri.cdUp() && uri.path !== folder) {
            folder = uri.path;
            if (atma_io_1.File.exists(uri.toString())) {
                return new atma_io_1.File(uri);
            }
        }
    }
    if (isOptional !== true) {
        log_1.log_error('Configuration file not found', path);
        log_1.log_warn('To dismiss this warning, set `optional:true` in source, if configuration is not strict required');
    }
    return null;
}
function prepairConfig(data, file, fileContent, rootConfig) {
    var config;
    if (typeof fileContent === 'string') {
        data.writable = false;
        config = module_1.module_eval(file.uri.toLocalFile(), fileContent);
    }
    else {
        config = fileContent;
    }
    object_1.obj_interpolate(config, config, true);
    cfg_conditions_1.cfg_conditions(config, config, rootConfig.$cli.params);
    cfg_imports_1.cfg_imports(config);
    var prop = data.getterProperty;
    if (prop) {
        config = atma_utils_1.obj_getProperty(config, prop);
    }
    return config;
}
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=file.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_sources_utils_file) && isObject(module.exports)) {
        Object.assign(_src_sources_utils_file, module.exports);
    } else {
        _src_sources_utils_file = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_FileSource;
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cfg_1 = _src_util_cfg;
var path_1 = _src_util_path;
var SourceFactory_1 = _src_sources_SourceFactory;
var file_1 = _src_sources_utils_file;
var atma_io_1 = require("atma-io");
SourceFactory_1.SourceFactory.register('file', {
    canHandle: function (data) {
        var path = data.path;
        if (typeof path !== 'string')
            return false;
        if (path.search(/[\*\?]/g) !== -1)
            // wildcards - directory source
            return false;
        if (path[path.length - 1] === '/') {
            // directory
            return false;
        }
        return true;
    },
    create: function (data) {
        return new FileSource(data);
    }
});
var FileSource = /** @class */ (function () {
    function FileSource(data) {
        this.data = data;
        this.config = {};
        data.path = path_1.path_handleSpecialFolder(data.path);
    }
    FileSource.prototype.read = function (rootConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, file_1.file_readSourceAsync(rootConfig, this.data.path, this.data)];
                    case 1:
                        config = _a.sent();
                        this.config = config;
                        return [2 /*return*/, this];
                }
            });
        });
    };
    FileSource.prototype.readSync = function (rootConfig) {
        this.config = file_1.file_readSourceSync(rootConfig, this.data.path, this.data);
        return this;
    };
    FileSource.prototype.write = function (config, deepExtend, setterProperty) {
        return __awaiter(this, void 0, void 0, function () {
            var filename, cfg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.data.writable !== true) {
                            throw new Error('Not writable');
                        }
                        cfg_1.cfg_extend(this.config, config, deepExtend, setterProperty);
                        filename = this.data.path;
                        cfg = getContent(this.config, filename);
                        return [4 /*yield*/, atma_io_1.File.writeAsync(filename, cfg)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    return FileSource;
}());
function getContent(config, path) {
    var hooks = atma_io_1.File
        .getHookHandler()
        .getHooksForPath(path, 'write');
    if (hooks.length !== 0) {
        return config;
    }
    try {
        return JSON.stringify(config);
    }
    catch (error) {
        return config;
    }
}
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=FileSource.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_sources_FileSource) && isObject(module.exports)) {
        Object.assign(_src_sources_FileSource, module.exports);
    } else {
        _src_sources_FileSource = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_FilesSource;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SourceFactory_1 = _src_sources_SourceFactory;
SourceFactory_1.SourceFactory.register('files', {
    canHandle: function (data) {
        return Array.isArray(data.files);
    },
    create: function (data) {
        return data.files.map(function (file) {
            return SourceFactory_1.SourceFactory.create({ path: file }).toArray();
        }).reduce(function (aggr, arr) { return aggr.concat(arr); }, []);
    }
});
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=FilesSource.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_sources_FilesSource) && isObject(module.exports)) {
        Object.assign(_src_sources_FilesSource, module.exports);
    } else {
        _src_sources_FilesSource = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_DirectorySource;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SourceFactory_1 = _src_sources_SourceFactory;
var atma_io_1 = require("atma-io");
SourceFactory_1.SourceFactory.register('directory', {
    canHandle: function (data) {
        var path = data.path;
        if (typeof path !== 'string')
            return false;
        if (path.search(/[\*\?]/g) !== -1)
            return true;
        if (path[path.length - 1] === '/')
            return true;
        return false;
    },
    create: function (data) {
        var path = data.path.replace(/\\/g, '/'), wildCardIndex = path.search(/[\*\?]/g), index = path.lastIndexOf('/', wildCardIndex), base, pattern;
        if (wildCardIndex === -1) {
            base = path;
        }
        else {
            base = path.substring(0, index + 1);
            pattern = path.substring(index + 1);
        }
        var dir = new atma_io_1.Directory(base);
        dir.readFiles(pattern);
        var files = dir
            .files
            .map(function (file) {
            return file.uri.toString();
        });
        return SourceFactory_1.SourceFactory
            .create([{
                files: files
            }])
            .toArray();
    }
});
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=DirectorySource.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_sources_DirectorySource) && isObject(module.exports)) {
        Object.assign(_src_sources_DirectorySource, module.exports);
    } else {
        _src_sources_DirectorySource = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_EmbeddedSource;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var SourceFactory_1 = _src_sources_SourceFactory;
SourceFactory_1.SourceFactory.register('embedded', {
    canHandle: function (data) {
        return atma_utils_1.is_Object(data.config);
    },
    create: function (data) {
        return new EmbeddedSource(data);
    }
});
var EmbeddedSource = /** @class */ (function () {
    function EmbeddedSource(data) {
        this.data = data;
        this.data.writable = false;
        this.config = data.config;
    }
    EmbeddedSource.prototype.read = function (rootConfig) {
        return Promise.resolve(this);
    };
    EmbeddedSource.prototype.write = function (config, deepExtend, setterProperty) {
        throw new Error('Method not implemented.');
    };
    return EmbeddedSource;
}());
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=EmbeddedSource.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_sources_EmbeddedSource) && isObject(module.exports)) {
        Object.assign(_src_sources_EmbeddedSource, module.exports);
    } else {
        _src_sources_EmbeddedSource = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_CustomSource;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SourceFactory_1 = _src_sources_SourceFactory;
SourceFactory_1.SourceFactory.register('custom', {
    canHandle: function (data) {
        return typeof data === 'function';
    },
    create: function (Ctor) {
        var source = new Ctor();
        return source;
    }
});
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=CustomSource.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_sources_CustomSource) && isObject(module.exports)) {
        Object.assign(_src_sources_CustomSource, module.exports);
    } else {
        _src_sources_CustomSource = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_exports_node;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
_src_sources_FileSource;
_src_sources_FilesSource;
_src_sources_DirectorySource;
_src_sources_EmbeddedSource;
_src_sources_CustomSource;
var SourceFactory_1 = _src_sources_SourceFactory;
Object.defineProperty(exports, "SourceFactory", { enumerable: true, get: function () { return SourceFactory_1.SourceFactory; } });
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=exports-node.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_sources_exports_node) && isObject(module.exports)) {
        Object.assign(_src_sources_exports_node, module.exports);
    } else {
        _src_sources_exports_node = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_cli;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli_arguments = void 0;
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var cache__;
function cli_arguments() {
    if (cache__ != null) {
        return cache__;
    }
    var argv = process.argv, imax = argv.length, params = {}, args = [];
    for (var i = 2; i < imax; i++) {
        var x = argv[i];
        if (x[0] === '-') {
            var key = x.replace(/^[\-]+/, '');
            var val = void 0;
            if (i < imax - 1 && argv[i + 1][0] !== '-') {
                val = argv[i + 1];
                i++;
            }
            else {
                val = true;
            }
            atma_utils_1.obj_setProperty(params, key, val);
            continue;
        }
        args.push(x);
    }
    return cache__ = {
        params: params,
        args: args
    };
}
exports.cli_arguments = cli_arguments;
;
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=cli.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_util_cli) && isObject(module.exports)) {
        Object.assign(_src_util_cli, module.exports);
    } else {
        _src_util_cli = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_Config;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var SourceFactory_1 = _src_sources_SourceFactory;
var Await_1 = _src_util_Await;
var cfg_1 = _src_util_cfg;
var cfg_conditions_1 = _src_util_cfg_conditions;
var cli_1 = _src_util_cli;
var log_1 = _src_util_log;
var object_1 = _src_util_object;
var Config = /** @class */ (function () {
    function Config(data, opts) {
        this.$parallelReads = new Await_1.class_Await;
        this.$sync = false;
        if (data != null) {
            this.$data = data;
            this.$sources = SourceFactory_1.SourceFactory.create(data);
            this.$sources.read(this);
        }
        this.$sync = opts === null || opts === void 0 ? void 0 : opts.sync;
    }
    Config.fetch = function (arr, opts) {
        return new Config(null, opts).$read(arr);
    };
    Config.create = function (arr) {
        return new Config(arr);
    };
    Config.prototype.$get = function (path) {
        return atma_utils_1.obj_getProperty(this, path);
    };
    Config.prototype.$set = function (path, value) {
        atma_utils_1.obj_setProperty(this, path, value);
    };
    Config.prototype.$extend = function (config) {
        object_1.obj_deepExtend(this, config);
    };
    Config.prototype.$read = function (mix) {
        var dfr = new atma_utils_1.class_Dfr;
        var config = this;
        var resume = this.$parallelReads.delegate({ errorable: false });
        var sources = mix == null
            ? this.$sources
            : SourceFactory_1.SourceFactory.create(mix);
        this.$parallelReads.always(function () { return dfr.resolve(config); });
        this.$cli = cli_1.cli_arguments();
        if (this.$sync) {
            sources.loadSync(config);
            onComplete();
        }
        else {
            sources
                .load(config)
                .then(onComplete);
        }
        function onComplete() {
            var overrides = config.$cli.params;
            for (var prop in overrides) {
                atma_utils_1.obj_setProperty(config, prop, overrides[prop]);
            }
            object_1.obj_interpolate(config);
            cfg_conditions_1.cfg_conditions(config, config, config.$cli.params);
            cfg_1.cfg_handlePaths(config);
            dfr.resolve(config);
        }
        this.$sources = sources;
        return dfr;
    };
    Config.prototype.$write = function (config, deepExtend, setterPath) {
        cfg_1.cfg_extend(this, config, deepExtend, setterPath);
        var dfr = new atma_utils_1.class_Dfr;
        var sources = this.$sources.toArray(), i = sources.length;
        while (--i > -1) {
            if (sources[i].data.writable !== true) {
                continue;
            }
            config = object_1.obj_clone(config);
            sources[i]
                .write(config)
                .then(dfr.resolveDelegate(), dfr.rejectDelegate());
            return dfr;
        }
        var msg = '<config:write> Writable source not defined.';
        log_1.log_error(msg);
        return dfr.reject(msg);
    };
    Config.prototype.$is = function (name) {
        var r = cfg_conditions_1.cfg_getEnvironmentVar(this, name);
        if (typeof r === 'boolean') {
            return r;
        }
        if (r == null || r === '0' || r.toLowerCase() === 'false') {
            return false;
        }
        return true;
    };
    Config.prototype.toJSON = function () {
        var json = Object.create(null);
        for (var key in this) {
            if (key[0] === '$' || key === 'toJSON') {
                continue;
            }
            json[key] = this[key];
        }
        return json;
    };
    /** Exports */
    Config.default = Config;
    Config.Config = Config;
    return Config;
}());
exports.Config = Config;
;
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=Config.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_Config) && isObject(module.exports)) {
        Object.assign(_src_Config, module.exports);
    } else {
        _src_Config = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_ConfigNode;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = {};
    var module = { exports: exports };
    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
_src_sources_exports_node;
var Config_1 = _src_Config;
Object.defineProperty(exports, "Config", { enumerable: true, get: function () { return Config_1.Config; } });
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=ConfigNode.ts.map;

    function isObject(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (isObject(_src_ConfigNode) && isObject(module.exports)) {
        Object.assign(_src_ConfigNode, module.exports);
    } else {
        _src_ConfigNode = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js

"use strict";
var ConfigNode_1 = _src_ConfigNode;
module.exports = ConfigNode_1.Config;
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=export-node.ts.map

}());
// end:source ./RootModule.js
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_node_modules_appcfg_lib_appcfg) && isObject(module.exports)) {
		Object.assign(_node_modules_appcfg_lib_appcfg, module.exports);
		return;
	}
	_node_modules_appcfg_lib_appcfg = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _node_modules_ruta_lib_ruta;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	
// source ./UMD.js
(function (factory) {

    var _name = 'ruta',
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

    var _src_api_utils = {};
var _src_emit_Hash = {};
var _src_emit_History = {};
var _src_emit_ILocationSource = {};
var _src_emit_Lifycycle = {};
var _src_emit_LocationEmitter = {};
var _src_emit_Memory = {};
var _src_emit_Stack = {};
var _src_globals = {};
var _src_mask_attr_anchor_dynamic = {};
var _src_options = {};
var _src_route_Route = {};
var _src_route_RouteCollection = {};
var _src_route_match = {};
var _src_route_route_utils = {};
var _src_ruta = {};
var _src_utils_log = {};
var _src_utils_navigation = {};
var _src_utils_obj = {};
var _src_utils_parts = {};
var _src_utils_path = {};
var _src_utils_query = {};
var _src_utils_rgx = {};

// source ./ModuleSimplified.js
var _src_utils_log;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log_error = void 0;
function log_error() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.error.apply(console, __spreadArrays(['Ruta'], args));
}
exports.log_error = log_error;
;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=log.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_log) && isObject(module.exports)) {
		Object.assign(_src_utils_log, module.exports);
		return;
	}
	_src_utils_log = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_query;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query_serialize = exports.query_deserialize = void 0;
var log_1 = _src_utils_log;
function query_deserialize(query, delimiter) {
    if (delimiter === void 0) { delimiter = '&'; }
    var obj = {};
    var parts = query.split(delimiter);
    for (var i = 0, imax = parts.length; i < imax; i++) {
        var x = parts[i].split('=');
        var key = x[0];
        var val = x[1] == null ? '' : decode(x[1]);
        if (key[key.length - 1] === ']' && key[key.length - 2] === '[') {
            key = key.substring(0, key.length - 2);
            var current = obj_getProperty(obj, key);
            if (Array.isArray(current)) {
                current.push(val);
            }
            else {
                obj_setProperty(obj, key, [val]);
            }
            continue;
        }
        obj_setProperty(obj, key, val);
    }
    return obj;
}
exports.query_deserialize = query_deserialize;
;
function query_serialize(params, delimiter) {
    if (delimiter == null)
        delimiter = '&';
    var query = '', key, val;
    for (key in params) {
        val = params[key];
        if (val == null)
            continue;
        // serialize as flag
        if (typeof val === 'boolean')
            val = null;
        query = query + (query ? delimiter : '') + key;
        if (val /* unstrict */)
            query += '=' + encode(val);
    }
    return query;
}
exports.query_serialize = query_serialize;
;
// = private
function obj_setProperty(obj, property, value) {
    var chain = property.split('.');
    var i = 0;
    var imax = chain.length;
    for (; i < imax - 1; i++) {
        var key = chain[i];
        if (obj[key] == null) {
            obj[key] = {};
        }
        obj = obj[key];
    }
    obj[chain[i]] = value;
}
function obj_getProperty(obj, property) {
    var chain = property.split('.');
    var i = 0;
    var imax = chain.length;
    for (; i < imax; i++) {
        var key = chain[i];
        if (obj[key] == null) {
            return null;
        }
        obj = obj[key];
    }
    return obj;
}
function decode(str) {
    try {
        return decodeURIComponent(str);
    }
    catch (error) {
        log_1.log_error('decode:URI malformed');
        return '';
    }
}
function encode(str) {
    try {
        return encodeURIComponent(str);
    }
    catch (error) {
        log_1.log_error('encode:URI malformed');
        return '';
    }
}
//# sourceMappingURL=export.js.map
//# sourceMappingURL=query.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_query) && isObject(module.exports)) {
		Object.assign(_src_utils_query, module.exports);
		return;
	}
	_src_utils_query = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_parts;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parts_deserialize = exports.parts_serialize = void 0;
var query_1 = _src_utils_query;
var path_1 = _src_utils_path;
/**
 *    '/foo/bar?a=b' =>
 *    { path: ['foo', 'bar'], query: { a: 'b' } }
 */
function parts_serialize(parts) {
    var path = path_1.path_join(parts.path);
    if (parts.query == null)
        return path;
    return path
        + '?'
        + query_1.query_serialize(parts.query, '&');
}
exports.parts_serialize = parts_serialize;
;
function parts_deserialize(url) {
    var query = url.indexOf('?'), path = query === -1
        ? url
        : url.substring(0, query);
    return {
        path: path_1.path_split(path),
        query: query === -1
            ? null
            : query_1.query_deserialize(url.substring(query + 1), '&')
    };
}
exports.parts_deserialize = parts_deserialize;
;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=parts.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_parts) && isObject(module.exports)) {
		Object.assign(_src_utils_parts, module.exports);
		return;
	}
	_src_utils_parts = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_path;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.path_setQuery = exports.path_getQuery = exports.path_fromCLI = exports.path_join = exports.path_split = exports.path_normalize = void 0;
var query_1 = _src_utils_query;
var parts_1 = _src_utils_parts;
function path_normalize(str) {
    var length = str.length;
    var i = 0;
    for (; i < length; i++) {
        if (str[i] === '/') {
            continue;
        }
        break;
    }
    var j = length - 1;
    for (; j > i; j--) {
        if (str[j] === '/') {
            continue;
        }
        break;
    }
    return str.substring(i, j + 1);
}
exports.path_normalize = path_normalize;
;
function path_split(path) {
    path = path_normalize(path);
    return path === ''
        ? []
        : path.split('/');
}
exports.path_split = path_split;
;
function path_join(pathParts) {
    return '/' + pathParts.join('/');
}
exports.path_join = path_join;
;
function path_fromCLI(commands) {
    if (typeof commands === 'string') {
        commands = cli_split(commands);
    }
    var parts = cli_parseArguments(commands);
    return parts_1.parts_serialize(parts);
}
exports.path_fromCLI = path_fromCLI;
;
function path_getQuery(path) {
    var i = path.indexOf('?');
    if (i === -1) {
        return {};
    }
    var query = path.substring(i + 1);
    return query_1.query_deserialize(query, '&');
}
exports.path_getQuery = path_getQuery;
;
function path_setQuery(path, mix) {
    var query = typeof mix !== 'string'
        ? query_1.query_serialize(mix, '&')
        : mix;
    var i = path.indexOf('?');
    if (i !== -1) {
        path = path.substring(0, i);
    }
    return path + '?' + query;
}
exports.path_setQuery = path_setQuery;
;
// == private
function cli_split(string) {
    var args = string.trim().split(/\s+/);
    var imax = args.length, i = -1, c, arg;
    while (++i < imax) {
        arg = args[i];
        if (arg.length === 0)
            continue;
        c = arg[0];
        if (c !== '"' && c !== "'")
            continue;
        var start = i;
        for (; i < imax; i++) {
            arg = args[i];
            if (arg[arg.length - 1] === c) {
                var str = args
                    .splice(start, i - start + 1)
                    .join(' ')
                    .slice(1, -1);
                args.splice(start, 0, str);
                imax = args.length;
                break;
            }
        }
    }
    return args;
}
function cli_parseArguments(argv) {
    var imax = argv.length, i = 0, params = {}, args = [], key, val, x;
    for (; i < imax; i++) {
        x = argv[i];
        if (x[0] === '-') {
            key = x.replace(/^[\-]+/, '');
            if (i < imax - 1 && argv[i + 1][0] !== '-') {
                val = argv[i + 1];
                i++;
            }
            else {
                val = true;
            }
            params[key] = val;
            continue;
        }
        args.push(x);
    }
    return {
        path: args,
        query: params
    };
}
//# sourceMappingURL=export.js.map
//# sourceMappingURL=path.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_path) && isObject(module.exports)) {
		Object.assign(_src_utils_path, module.exports);
		return;
	}
	_src_utils_path = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_rgx;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgx_parsePartWithRegExpAlias = exports.rgx_aliasMatcher = exports.rgx_fromString = void 0;
var log_1 = _src_utils_log;
function rgx_fromString(str, flags) {
    return new RegExp(str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), flags);
}
exports.rgx_fromString = rgx_fromString;
;
/**
 *  Url part should be completely matched, so add ^...$ and create RegExp
 */
function rgx_aliasMatcher(str) {
    if (str[0] === '^')
        return new RegExp(str);
    var groups = str.split('|');
    for (var i = 0, imax = groups.length; i < imax; i++) {
        groups[i] = '^' + groups[i] + '$';
    }
    return new RegExp(groups.join('|'));
}
exports.rgx_aliasMatcher = rgx_aliasMatcher;
;
/**
 * :debugger(d|debug) => { alias: 'debugger', matcher: RegExp }
 */
function rgx_parsePartWithRegExpAlias(str) {
    var pStart = str.indexOf('('), pEnd = str.lastIndexOf(')');
    if (pStart === -1 || pEnd === -1) {
        log_1.log_error('Expected alias part with regexp', str);
        return null;
    }
    var rgx = str.substring(pStart + 1, pEnd);
    return {
        alias: str.substring(1, pStart),
        matcher: rgx_aliasMatcher(rgx)
    };
}
exports.rgx_parsePartWithRegExpAlias = rgx_parsePartWithRegExpAlias;
;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=rgx.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_rgx) && isObject(module.exports)) {
		Object.assign(_src_utils_rgx, module.exports);
		return;
	}
	_src_utils_rgx = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_route_route_utils;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.route_parsePath = exports.route_parseDefinition = void 0;
var log_1 = _src_utils_log;
var path_1 = _src_utils_path;
var query_1 = _src_utils_query;
var rgx_1 = _src_utils_rgx;
function route_parseDefinition(route, definition) {
    var c = definition.charCodeAt(0);
    switch (c) {
        case 33:
            // !
            route.strict = true;
            definition = definition.substring(1);
            break;
        case 94:
            // ^
            route.strict = false;
            definition = definition.substring(1);
            break;
        case 40:
            // (
            var start = 1, end = definition.length - 1;
            if (definition.charCodeAt(definition.length - 1) !== 41) {
                // )
                log_1.log_error('parser - expect group closing');
                end++;
            }
            route.match = new RegExp(definition.substring(start, end));
            return;
    }
    var parts = definition.split('/');
    var search;
    var c0;
    var c1;
    var imax = parts.length;
    var last = parts[imax - 1];
    var searchIndex = last.indexOf('?');
    if (searchIndex > (imax === 1 ? -1 : 0)) {
        // `?` cannt be at `0` position, when has url definition contains `path`
        if (searchIndex === 0 || last[searchIndex - 1] !== '(') {
            search = last.substring(searchIndex + 1);
            parts[imax - 1] = last.substring(0, searchIndex);
        }
    }
    var gettingMatcher = true;
    var rgx;
    var array = route.path = [];
    var i = 0;
    for (; i < imax; i++) {
        var x = parts[i];
        if (x === '') {
            continue;
        }
        c0 = x.charCodeAt(0);
        c1 = x.charCodeAt(1);
        var index = 0;
        var isOptional = c0 === 63; /* ? */
        if (isOptional) {
            index++;
            c0 = x.charCodeAt(index);
        }
        var isRgx = c0 === 40; /* ( */
        if (isRgx) {
            var end = x.lastIndexOf(')');
            var pattern = x.substring(index + 1, end);
            var isLookAhead = false;
            if (pattern[0] === '?' && pattern[1] === '=') {
                isLookAhead = true;
                pattern = pattern.substring(2);
            }
            array.push({
                matcher: new RegExp("^(" + pattern + ")$"),
                optional: isOptional,
                isLookAhead: isLookAhead,
            });
            continue;
        }
        var isAlias = c0 === 58; /* : */
        if (isAlias) {
            index++;
        }
        if (index !== 0)
            x = x.substring(index);
        // if DEBUG
        if (!isOptional && !gettingMatcher)
            log_1.log_error('Strict part found after optional', definition);
        // endif
        if (x === '*') {
            array.push({
                matcher: new AnyMatcher()
            });
            continue;
        }
        if (isOptional)
            gettingMatcher = false;
        var bracketIndex = x.indexOf('(');
        if (isAlias && bracketIndex !== -1) {
            var end = x.length - 1;
            if (x[end] !== ')')
                end += 1;
            rgx = new RegExp(rgx_1.rgx_aliasMatcher(x.substring(bracketIndex + 1, end)));
            x = x.substring(0, bracketIndex);
        }
        if (!isOptional && !isAlias) {
            array.push(x);
            continue;
        }
        if (isAlias) {
            array.push({
                alias: x,
                matcher: rgx,
                optional: isOptional
            });
            continue;
        }
        if (isOptional) {
            array.push({
                matcher: new StrMatcher(x),
                optional: isOptional
            });
        }
    }
    if (search) {
        var query = route.query = {};
        parts = search.split('&');
        i = -1;
        imax = parts.length;
        var key = void 0, value = void 0, str = void 0, eqIndex = void 0;
        while (++i < imax) {
            str = parts[i];
            eqIndex = str.indexOf('=');
            if (eqIndex === -1) {
                query[str] = ''; // <empty string>
                continue;
            }
            key = str.substring(0, eqIndex);
            value = str.substring(eqIndex + 1);
            if (value.charCodeAt(0) === 40) {
                // (
                value = new RegExp(rgx_1.rgx_aliasMatcher(value));
            }
            query[key] = value;
        }
        if (route.path.length === 0) {
            route.strict = false;
        }
    }
}
exports.route_parseDefinition = route_parseDefinition;
;
/**
 * path should be already matched by the route
 */
function route_parsePath(route, path) {
    var queryIndex = path.indexOf('?');
    var query = queryIndex === -1
        ? null
        : path.substring(queryIndex + 1);
    var current = {
        path: path,
        params: query == null
            ? {}
            : query_1.query_deserialize(query, '&')
    };
    if (route.query) {
        // ensura aliased queries, like ?:debugger(d|debug)
        for (var key in route.query) {
            if (key[0] === '?')
                key = key.substring(1);
            if (key[0] === ':') {
                var alias = rgx_1.rgx_parsePartWithRegExpAlias(key), name = alias.alias;
                current.params[name] = getAliasedValue(current.params, alias.matcher);
            }
        }
    }
    if (queryIndex !== -1) {
        path = path.substring(0, queryIndex);
    }
    if (route.path != null) {
        var pathArr = path_1.path_split(path), routePath = route.path, routeLength = routePath.length, imax = pathArr.length, i = 0;
        for (; i < imax; i++) {
            var part = pathArr[i];
            var x = i < routeLength ? routePath[i] : null;
            if (x) {
                if (typeof x === 'string') {
                    continue;
                }
                if (x.alias) {
                    current.params[x.alias] = part;
                    continue;
                }
            }
        }
    }
    return current;
}
exports.route_parsePath = route_parsePath;
;
// = private
function getAliasedValue(obj, matcher) {
    for (var key in obj) {
        if (matcher.test(key))
            return obj[key];
    }
}
var Matcher = /** @class */ (function () {
    function Matcher(str) {
        this.str = str;
    }
    return Matcher;
}());
var StrMatcher = /** @class */ (function (_super) {
    __extends(StrMatcher, _super);
    function StrMatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StrMatcher.prototype.test = function (x) {
        return x === this.str;
    };
    return StrMatcher;
}(Matcher));
;
var AnyMatcher = /** @class */ (function (_super) {
    __extends(AnyMatcher, _super);
    function AnyMatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnyMatcher.prototype.test = function (x) {
        return true;
    };
    return AnyMatcher;
}(Matcher));
;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=route_utils.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_route_route_utils) && isObject(module.exports)) {
		Object.assign(_src_route_route_utils, module.exports);
		return;
	}
	_src_route_route_utils = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_options;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
/**
 * define if routes like '/path' are strict by default,
 * or set explicit '!/path' - strict, '^/path' - not strict
 *
 * Strict means - like in regex start-end /^$/
 **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    isStrict: true
};
//# sourceMappingURL=export.js.map
//# sourceMappingURL=options.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_options) && isObject(module.exports)) {
		Object.assign(_src_options, module.exports);
		return;
	}
	_src_options = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_route_Route;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
var route_utils_1 = _src_route_route_utils;
var options_1 = _src_options;
var Route = /** @class */ (function () {
    function Route(definition, value) {
        if (value === void 0) { value = null; }
        this.definition = definition;
        this.value = value;
        this.strict = options_1.default.isStrict;
        if (definition == null) {
            return;
        }
        var def = definition;
        if (def.charCodeAt(0) === 36 /*$ method prefix, e.g.: $get path*/) {
            var i = def.indexOf(' ');
            this.method = def.substring(1, i).toUpperCase();
            def = def.substring(i + 1);
        }
        route_utils_1.route_parseDefinition(this, def);
    }
    return Route;
}());
exports.Route = Route;
;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=Route.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_route_Route) && isObject(module.exports)) {
		Object.assign(_src_route_Route, module.exports);
		return;
	}
	_src_route_Route = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_route_match;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route_isMatch = exports.route_matchAll = exports.route_match = void 0;
var parts_1 = _src_utils_parts;
var rgx_1 = _src_utils_rgx;
var route_utils_1 = _src_route_route_utils;
function route_match(url, routes, method) {
    if (method === void 0) { method = null; }
    var parts = parts_1.parts_deserialize(url);
    var imax = routes.length;
    var i = -1;
    while (++i < imax) {
        var route = routes[i];
        if (route_isMatch(parts, route, method)) {
            route.current = route_utils_1.route_parsePath(route, url);
            return route;
        }
    }
    return null;
}
exports.route_match = route_match;
;
function route_matchAll(url, routes, method) {
    if (method === void 0) { method = null; }
    var parts = parts_1.parts_deserialize(url), imax = routes.length, i = -1, out = [];
    while (++i < imax) {
        var route = routes[i];
        if (route_isMatch(parts, route, method)) {
            route.current = route_utils_1.route_parsePath(route, url);
            out.push(route);
        }
    }
    return out;
}
exports.route_matchAll = route_matchAll;
;
function route_isMatch(parts, route, currentMethod) {
    if (currentMethod === void 0) { currentMethod = null; }
    if (currentMethod != null &&
        route.method != null &&
        route.method !== currentMethod) {
        return false;
    }
    if (route.match) {
        return route.match.test(typeof parts === 'string'
            ? parts
            : parts_1.parts_serialize(parts));
    }
    if (typeof parts === 'string') {
        parts = parts_1.parts_deserialize(parts);
    }
    // route defines some query, match these with the current path{parts}
    if (route.query) {
        var query = parts.query;
        if (query == null) {
            return false;
        }
        for (var key in route.query) {
            var value = route.query[key];
            var c = key[0];
            if (c === ':') {
                // '?:isGlob(g|glob) will match if any is present
                var alias = rgx_1.rgx_parsePartWithRegExpAlias(key);
                if (alias == null || hasKey(query, alias.matcher) === false) {
                    return false;
                }
                continue;
            }
            if (c === '?') {
                continue;
            }
            if (typeof value === 'string') {
                if (query[key] == null) {
                    return false;
                }
                if (value && query[key] !== value) {
                    return false;
                }
                continue;
            }
            if (value.test && !value.test(query[key])) {
                return false;
            }
        }
    }
    var routePath = route.path;
    var routeLength = routePath.length;
    if (routeLength === 0) {
        if (route.strict) {
            return parts.path.length === 0;
        }
        return true;
    }
    var arr = parts.path;
    var i = 0;
    var imax = arr.length;
    for (; i < imax; i++) {
        var x = routePath[i];
        if (i >= routeLength) {
            return route.strict !== true;
        }
        if (typeof x === 'string') {
            if (arr[i] === x) {
                continue;
            }
            return false;
        }
        if (x.matcher) {
            if (x.matcher.test(arr[i]) === false)
                return false;
            continue;
        }
        if (x.optional) {
            return true;
        }
        if (x.alias) {
            continue;
        }
        return false;
    }
    if (i < routeLength) {
        var x = routePath[i];
        return typeof x !== 'string' && x.optional === true;
    }
    return true;
}
exports.route_isMatch = route_isMatch;
;
function hasKey(obj, rgx) {
    for (var key in obj) {
        if (rgx.test(key))
            return true;
    }
    return false;
}
//# sourceMappingURL=export.js.map
//# sourceMappingURL=match.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_route_match) && isObject(module.exports)) {
		Object.assign(_src_route_match, module.exports);
		return;
	}
	_src_route_match = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_route_RouteCollection;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCollection = void 0;
var Route_1 = _src_route_Route;
var match_1 = _src_route_match;
var route_utils_1 = _src_route_route_utils;
var RouteCollection = /** @class */ (function () {
    function RouteCollection() {
        //type: 'url' | 'hash' = 'url'
        this.routes = [];
        // private normalizePath (path: string) {
        //     if (this.type === 'hash' && path.indexOf('#') !== -1) {
        //         return path.substring(path.indexOf('#') + 1);
        //     }
        //     return path;
        // }
    }
    /** alias for `push` */
    RouteCollection.prototype.add = function (def, value) {
        this.push(def, value);
        return this;
    };
    RouteCollection.prototype.push = function (def, value) {
        this.routes.push(new Route_1.Route(def, value));
        return this;
    };
    RouteCollection.prototype.unshift = function (def, value) {
        var route = new Route_1.Route(def, value);
        this.routes.unshift(route);
        return this;
    };
    RouteCollection.prototype.remove = function (def, value) {
        var imax = this.routes.length;
        var i = -1;
        while (++i < imax) {
            var route = this.routes[i];
            if (def == null || route.definition !== def) {
                continue;
            }
            if (value == null || route.value !== value) {
                continue;
            }
            this.routes.splice(i, 1);
            i--;
            imax--;
        }
    };
    RouteCollection.prototype.get = function (path, method) {
        //@TODO Sometimes user can request route by full url when using hash router, should we do smth.here
        //-path = this.normalizePath(path);
        return match_1.route_match(path, this.routes, method);
    };
    RouteCollection.prototype.getAll = function (path, method) {
        //-path = this.normalizePath(path)
        return match_1.route_matchAll(path, this.routes, method);
    };
    RouteCollection.prototype.clear = function () {
        this.routes.length = 0;
        return this;
    };
    RouteCollection.parse = function (definition, path) {
        var route = new Route_1.Route();
        route_utils_1.route_parseDefinition(route, definition);
        return route_utils_1.route_parsePath(route, path);
    };
    return RouteCollection;
}());
exports.RouteCollection = RouteCollection;
;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=RouteCollection.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_route_RouteCollection) && isObject(module.exports)) {
		Object.assign(_src_route_RouteCollection, module.exports);
		return;
	}
	_src_route_RouteCollection = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_emit_Hash;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HashEmitter = /** @class */ (function () {
    function HashEmitter(listener) {
        this.listener = listener;
        this.opts = null;
        window.onhashchange = this.onhashchange.bind(this);
    }
    HashEmitter.supports = function () {
        if (typeof window === 'undefined' || 'onhashchange' in window === false)
            return false;
        return true;
    };
    HashEmitter.normalizeHash = function (hash) {
        return hash.replace(/^[!#/]+/, '/');
    };
    HashEmitter.prototype.onhashchange = function () {
        this.changed();
    };
    HashEmitter.prototype.navigate = function (hash, opts) {
        this.opts = opts;
        if (hash == null) {
            this.changed();
            return;
        }
        location.hash = hash;
    };
    HashEmitter.prototype.changed = function (opts_) {
        var opts = opts_ || this.opts;
        this.opts = null;
        this.listener.onChanged(this.current(), opts);
    };
    HashEmitter.prototype.current = function () {
        return HashEmitter.normalizeHash(location.hash);
    };
    HashEmitter.prototype.back = function () {
        window.history.back();
    };
    HashEmitter.prototype.forward = function () {
        window.history.forward();
    };
    return HashEmitter;
}());
exports.default = HashEmitter;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=Hash.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_emit_Hash) && isObject(module.exports)) {
		Object.assign(_src_emit_Hash, module.exports);
		return;
	}
	_src_emit_Hash = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_obj;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj_create = exports.obj_default = exports.obj_extend = void 0;
function obj_extend(a, b) {
    if (b == null)
        return a || {};
    if (a == null)
        return obj_create(b);
    for (var key in b) {
        a[key] = b[key];
    }
    return a;
}
exports.obj_extend = obj_extend;
;
function obj_default(a, b) {
    if (b == null)
        return a || {};
    if (a == null)
        return obj_create(b);
    for (var key in b) {
        if (a[key] == null) {
            a[key] = b[key];
        }
    }
    return a;
}
exports.obj_default = obj_default;
;
var obj_create = Object.create || function (x) {
    var Ctor = function () { };
    Ctor.prototype = x;
    return new Ctor;
};
exports.obj_create = obj_create;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=obj.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_obj) && isObject(module.exports)) {
		Object.assign(_src_utils_obj, module.exports);
		return;
	}
	_src_utils_obj = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_emit_ILocationSource;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationBackOptions = exports.LocationNavigateOptions = void 0;
var LocationNavigateOptions = /** @class */ (function () {
    function LocationNavigateOptions() {
        /**
         * History step. 1: Forward, 0: Replace Current, -1-(-n): Back
         * @default: 1
         * */
        this.step = 1;
        /**
         * Backcompat.
         * @deprecated Use `step:0`
         */
        this.replace = false;
        /** When true and query arguments are used, than navigation extends current query */
        this.extend = false;
        /** When false listeners are not notified */
        this.silent = false;
        /** Additional arguments which will be attached to the routes model params */
        this.params = null;
        /** If true, navigate will perform back action to the route when in history */
        this.preferHistory = false;
    }
    return LocationNavigateOptions;
}());
exports.LocationNavigateOptions = LocationNavigateOptions;
var LocationBackOptions = /** @class */ (function () {
    function LocationBackOptions() {
    }
    return LocationBackOptions;
}());
exports.LocationBackOptions = LocationBackOptions;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=ILocationSource.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_emit_ILocationSource) && isObject(module.exports)) {
		Object.assign(_src_emit_ILocationSource, module.exports);
		return;
	}
	_src_emit_ILocationSource = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_navigation;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProperty = exports.getStep = void 0;
function getStep(opts) {
    if (opts == null)
        return 1;
    if (opts.replace === true)
        return 0;
    if (opts.step != null)
        return opts.step;
    return 1;
}
exports.getStep = getStep;
;
function setProperty(opts, key, val) {
    var x = opts || {};
    x[key] = val;
    return x;
}
exports.setProperty = setProperty;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=navigation.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_navigation) && isObject(module.exports)) {
		Object.assign(_src_utils_navigation, module.exports);
		return;
	}
	_src_utils_navigation = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_emit_Stack;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack;
(function (Stack) {
    var time = Date.now();
    var uuid = 1;
    Stack.stack = [];
    Stack.forwardStates = [];
    function create(url) {
        return {
            id: time + "_" + ++uuid,
            url: url
        };
    }
    Stack.create = create;
    function push(current) {
        Stack.stack.push(current);
        Stack.forwardStates.length = 0;
    }
    Stack.push = push;
    function replace(current) {
        Stack.stack[Math.max(0, Stack.stack.length - 1)] = current;
    }
    Stack.replace = replace;
    function goBackById(id) {
        var i = Stack.stack.length;
        while (--i > -1) {
            if (Stack.stack[i].id !== id) {
                continue;
            }
            var count = Stack.stack.length - (i + 1);
            goBackByCount(count);
            return -count;
        }
        return 0;
    }
    Stack.goBackById = goBackById;
    function goBackByCount(count) {
        var arr = Stack.stack.splice(Stack.stack.length - count);
        Stack.forwardStates.unshift.apply(Stack.forwardStates, arr);
    }
    Stack.goBackByCount = goBackByCount;
    function goForwardById(id) {
        for (var i = 0; i < Stack.forwardStates.length; i++) {
            if (Stack.forwardStates[i].id !== id) {
                continue;
            }
            var count = i + 1;
            goForwardByCount(count);
            return count;
        }
        return 0;
    }
    Stack.goForwardById = goForwardById;
    function goForwardByCount(count) {
        var arr = Stack.forwardStates.splice(0, count);
        Stack.stack.push.apply(Stack.stack, arr);
    }
    Stack.goForwardByCount = goForwardByCount;
    // export function setForwards (states: State[]) {
    // 	forwardStates.unshift(...states);
    // }
    // export function goForward () {
    // 	backStates.push(forwardStates.shift());
    // }
    function hasBack() {
        return Stack.stack.length > 1;
    }
    Stack.hasBack = hasBack;
    function hasForwad() {
        return Stack.forwardStates.length > 0;
    }
    Stack.hasForwad = hasForwad;
    function getCurrent() {
        return Stack.stack.length === 0 ? null : Stack.stack[Stack.stack.length - 1];
    }
    Stack.getCurrent = getCurrent;
    function getBackStack() {
        return Stack.stack.length === 0 ? [] : Stack.stack.slice(0, Stack.stack.length - 1);
    }
    Stack.getBackStack = getBackStack;
    function findInBack(url) {
        for (var i = Stack.stack.length - 1; i > -1; i--) {
            if (Stack.stack[i].url === url) {
                return Stack.stack[i];
            }
        }
        return null;
    }
    Stack.findInBack = findInBack;
})(Stack = exports.Stack || (exports.Stack = {}));
;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=Stack.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_emit_Stack) && isObject(module.exports)) {
		Object.assign(_src_emit_Stack, module.exports);
		return;
	}
	_src_emit_Stack = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_emit_History;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obj_1 = _src_utils_obj;
var path_1 = _src_utils_path;
var ILocationSource_1 = _src_emit_ILocationSource;
var navigation_1 = _src_utils_navigation;
var Stack_1 = _src_emit_Stack;
var HistoryEmitter = /** @class */ (function () {
    function HistoryEmitter(listener) {
        this.listener = listener;
        this.initial = location.href;
        window.onpopstate = this.onpopstate.bind(this);
        Stack_1.Stack.push(Stack_1.Stack.create(this.current()));
    }
    HistoryEmitter.supports = function () {
        if (typeof window === 'undefined') {
            return false;
        }
        if (!(window.history && window.history.pushState)) {
            return false;
        }
        return true;
    };
    HistoryEmitter.prototype.navigate = function (mix, opts) {
        if (opts === void 0) { opts = new ILocationSource_1.LocationNavigateOptions; }
        if (mix == null) {
            this.changed(opts);
            return;
        }
        var isQueryObject = typeof mix === 'object';
        var url = null;
        if (opts.extend === true) {
            var query = isQueryObject ? mix : path_1.path_getQuery(mix);
            var current = path_1.path_getQuery(location.search);
            if (current != null && query != null) {
                for (var key in current) {
                    // strict compare
                    if (query[key] !== void 0 && query[key] === null) {
                        delete current[key];
                    }
                }
                query = obj_1.obj_extend(current, query);
                url = path_1.path_setQuery(location.pathname, query);
            }
        }
        if (url == null) {
            url = isQueryObject ? path_1.path_setQuery(location.pathname, mix) : mix;
        }
        var nextState = Stack_1.Stack.create(url);
        var step = navigation_1.getStep(opts);
        if (step === 0) {
            history.replaceState(nextState, null, url);
            Stack_1.Stack.replace(nextState);
        }
        else {
            history.pushState(nextState, null, url);
            Stack_1.Stack.push(nextState);
        }
        opts.step = 1;
        this.initial = null;
        this.changed(opts);
    };
    HistoryEmitter.prototype.current = function () {
        return location.pathname + location.search;
    };
    HistoryEmitter.prototype.back = function () {
        window.history.back();
    };
    HistoryEmitter.prototype.forward = function () {
        window.history.forward();
    };
    HistoryEmitter.prototype.onpopstate = function (e) {
        if (this.initial === location.href) {
            this.initial = null;
            return;
        }
        this.initial = null;
        var step = -1;
        var id = e.state && e.state.id;
        if (id != null) {
            step = Stack_1.Stack.goBackById(id);
            if (step === 0) {
                step = Stack_1.Stack.goForwardById(id);
            }
        }
        if (step === 0) {
            if (e.state) {
                Stack_1.Stack.replace(e.state);
            }
            step = -1;
            Stack_1.Stack.goBackByCount(1);
        }
        var opts = new ILocationSource_1.LocationNavigateOptions();
        opts.step = step;
        this.changed(opts);
    };
    HistoryEmitter.prototype.changed = function (opts) {
        this.listener.onChanged(this.current(), opts);
    };
    return HistoryEmitter;
}());
exports.default = HistoryEmitter;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=History.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_emit_History) && isObject(module.exports)) {
		Object.assign(_src_emit_History, module.exports);
		return;
	}
	_src_emit_History = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_emit_Memory;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var navigation_1 = _src_utils_navigation;
var ILocationSource_1 = _src_emit_ILocationSource;
var MemoryEmitter = /** @class */ (function () {
    function MemoryEmitter(listener) {
        this.listener = listener;
        this.stack = ['/'];
        this.forwardStack = [];
    }
    MemoryEmitter.prototype.navigate = function (path, opts) {
        var _a;
        var step = navigation_1.getStep(opts);
        if (step < 1) {
            var arr = this.stack.splice(step - 1);
            (_a = this.forwardStack).unshift.apply(_a, arr);
        }
        else {
            this.forwardStack.length = 0;
        }
        this.stack.push(path);
        this.listener.onChanged(path, opts);
    };
    MemoryEmitter.prototype.current = function () {
        return this.stack[this.stack.length - 1];
    };
    MemoryEmitter.prototype.back = function () {
        this.forwardStack.unshift(this.stack.pop());
        var opts = new ILocationSource_1.LocationNavigateOptions();
        opts.step = -1;
        this.listener.onChanged(this.current(), opts);
    };
    MemoryEmitter.prototype.forward = function () {
        this.stack.push(this.forwardStack.shift());
        var opts = new ILocationSource_1.LocationNavigateOptions();
        opts.step = 1;
        this.listener.onChanged(this.current(), opts);
    };
    return MemoryEmitter;
}());
exports.default = MemoryEmitter;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=Memory.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_emit_Memory) && isObject(module.exports)) {
		Object.assign(_src_emit_Memory, module.exports);
		return;
	}
	_src_emit_Memory = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_emit_Lifycycle;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = exports.EventType = void 0;
var Route_1 = _src_route_Route;
var match_1 = _src_route_match;
var Lifecycle = /** @class */ (function () {
    function Lifecycle(location, definition, callback) {
        this.location = location;
        this.definition = definition;
        this.callback = callback;
        this.changed = this.changed.bind(this);
        this.location.on('^/', this.changed);
        this.route = new Route_1.Route(definition);
        var current = match_1.route_match(this.location.currentPath(), [this.route]);
        this.state = {
            type: EventType.Initial,
            direction: Direction.Forward,
            route: current
        };
        this.callback(this.state);
    }
    Lifecycle.prototype.changed = function (route, opts) {
        this.state.direction = opts.step < 0
            ? Direction.Back
            : Direction.Forward;
        var state = this.state;
        var current = match_1.route_match(this.location.currentPath(), [this.route]);
        if (current == null) {
            if (this.state.route == null) {
                return;
            }
            state.type = EventType.Leave;
            state.route = null;
            this.callback(state);
            return;
        }
        if (this.state.route == null) {
            state.type = EventType.Enter;
            state.route = current;
            this.callback(state);
            return;
        }
        state.type = EventType.Change;
        state.route = current;
        this.callback(state);
    };
    Lifecycle.prototype.dispose = function () {
        this.location.off('^/', this.changed);
    };
    return Lifecycle;
}());
exports.default = Lifecycle;
var EventType;
(function (EventType) {
    EventType["Initial"] = "initial";
    EventType["Enter"] = "enter";
    EventType["Leave"] = "leave";
    EventType["Change"] = "change";
})(EventType = exports.EventType || (exports.EventType = {}));
;
var Direction;
(function (Direction) {
    Direction["Forward"] = "forward";
    Direction["Back"] = "back";
})(Direction = exports.Direction || (exports.Direction = {}));
//# sourceMappingURL=export.js.map
//# sourceMappingURL=Lifycycle.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_emit_Lifycycle) && isObject(module.exports)) {
		Object.assign(_src_emit_Lifycycle, module.exports);
		return;
	}
	_src_emit_Lifycycle = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_emit_LocationEmitter;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationEmitter = void 0;
var RouteCollection_1 = _src_route_RouteCollection;
var Hash_1 = _src_emit_Hash;
var History_1 = _src_emit_History;
var Memory_1 = _src_emit_Memory;
var log_1 = _src_utils_log;
var obj_1 = _src_utils_obj;
var ILocationSource_1 = _src_emit_ILocationSource;
var Lifycycle_1 = _src_emit_Lifycycle;
var Stack_1 = _src_emit_Stack;
var LocationEmitter = /** @class */ (function () {
    function LocationEmitter(collection, type) {
        if (collection === void 0) { collection = new RouteCollection_1.RouteCollection(); }
        if (type === void 0) { type = null; }
        this.collection = collection;
        this.type = type;
        this.listeners = new RouteCollection_1.RouteCollection();
        this.lifecycles = [];
        if (type == null && History_1.default.supports()) {
            type = 'history';
        }
        if (type == null && Hash_1.default.supports()) {
            type = 'hash';
        }
        switch (type) {
            case 'hash':
                this.emitter = new Hash_1.default(this);
                break;
            case 'history':
                this.emitter = new History_1.default(this);
                break;
            case 'memory':
                this.emitter = new Memory_1.default(this);
                break;
        }
        if (this.emitter == null) {
            log_1.log_error('Router can not be initialized - (nor HistoryAPI / nor hashchange');
        }
    }
    /** Is also called by the emitter */
    LocationEmitter.prototype.onChanged = function (path, opts) {
        if (opts === void 0) { opts = null; }
        if ((opts === null || opts === void 0 ? void 0 : opts.silent) === true) {
            return;
        }
        var route = this.collection.get(path);
        if (route) {
            this.doAction(route, opts);
        }
        var routes = this.listeners.getAll(path), imax = routes.length, i = -1;
        while (++i < imax) {
            this.doAction(routes[i], opts);
        }
    };
    LocationEmitter.prototype.doAction = function (route, opts) {
        if (opts === void 0) { opts = null; }
        if (typeof route.value === 'function') {
            var current = route.current;
            var params = current === null || current === void 0 ? void 0 : current.params;
            if ((opts === null || opts === void 0 ? void 0 : opts.params) != null) {
                current.params = params = obj_1.obj_default(params, opts.params);
            }
            route.value(route, params);
        }
    };
    LocationEmitter.prototype.navigate = function (mix, opts) {
        if (opts === void 0) { opts = new ILocationSource_1.LocationNavigateOptions(); }
        this.emitter.navigate(mix, opts);
    };
    LocationEmitter.prototype.back = function (opts) {
        if (Stack_1.Stack.hasBack()) {
            this.emitter.back();
            return;
        }
        if (opts != null && opts.default != null) {
            var navOptions = opts.default.opts || new ILocationSource_1.LocationNavigateOptions();
            navOptions.step = 0;
            this.navigate(opts.default.url, navOptions);
            return;
        }
    };
    LocationEmitter.prototype.forward = function () {
        if (Stack_1.Stack.hasForwad()) {
            this.emitter.forward();
        }
    };
    LocationEmitter.prototype.getStack = function () {
        return Stack_1.Stack.stack;
    };
    LocationEmitter.prototype.getBackStack = function () {
        return Stack_1.Stack.getBackStack();
    };
    LocationEmitter.prototype.getForwardStack = function () {
        return Stack_1.Stack.forwardStates;
    };
    LocationEmitter.prototype.current = function () {
        return this.collection.get(this.currentPath());
    };
    LocationEmitter.prototype.currentPath = function () {
        return this.emitter.current();
    };
    LocationEmitter.prototype.on = function (def, cb) {
        this.listeners.push(def, cb);
    };
    LocationEmitter.prototype.off = function (def, cb) {
        this.listeners.remove(def, cb);
    };
    LocationEmitter.prototype.onLifecycle = function (def, cb) {
        this.lifecycles.push(new Lifycycle_1.default(this, def, cb));
    };
    LocationEmitter.prototype.offLifecycle = function (def, cb) {
        for (var i = 0; i < this.lifecycles.length; i++) {
            var x = this.lifecycles[i];
            if (x.definition === def && x.callback === cb) {
                x.dispose();
                this.lifecycles.splice(i, 1);
                i--;
            }
        }
    };
    return LocationEmitter;
}());
exports.LocationEmitter = LocationEmitter;
;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=LocationEmitter.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_emit_LocationEmitter) && isObject(module.exports)) {
		Object.assign(_src_emit_LocationEmitter, module.exports);
		return;
	}
	_src_emit_LocationEmitter = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_api_utils;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = _src_utils_path;
var query_1 = _src_utils_query;
exports.default = {
    /**
     * Format URI path from CLI command:
     * some action -foo bar === /some/action?foo=bar
     */
    pathFromCLI: path_1.path_fromCLI,
    query: {
        serialize: query_1.query_serialize,
        deserialize: query_1.query_deserialize,
        get: function (path_) {
            var path = path_ == null
                ? location.search
                : path_;
            return path_1.path_getQuery(path);
        }
    }
};
//# sourceMappingURL=export.js.map
//# sourceMappingURL=utils.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_api_utils) && isObject(module.exports)) {
		Object.assign(_src_api_utils, module.exports);
		return;
	}
	_src_api_utils = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_globals;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mask = void 0;
var mask_;
exports.mask = mask_;
if (typeof mask !== 'undefined') {
    exports.mask = mask_ = mask;
}
//# sourceMappingURL=export.js.map
//# sourceMappingURL=globals.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_globals) && isObject(module.exports)) {
		Object.assign(_src_globals, module.exports);
		return;
	}
	_src_globals = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_mask_attr_anchor_dynamic;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = _src_globals;
var ruta_1 = _src_ruta;
if (globals_1.mask) {
    globals_1.mask.registerAttrHandler('x-dynamic', function (node, value, model, ctx, tag) {
        tag.onclick = navigate;
    }, 'client');
}
function navigate(event) {
    event.preventDefault();
    event.stopPropagation();
    ruta_1.Ruta.navigate(this.getAttribute('href'));
}
//# sourceMappingURL=export.js.map
//# sourceMappingURL=anchor-dynamic.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_mask_attr_anchor_dynamic) && isObject(module.exports)) {
		Object.assign(_src_mask_attr_anchor_dynamic, module.exports);
		return;
	}
	_src_mask_attr_anchor_dynamic = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_ruta;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruta = exports.State = void 0;
var RouteCollection_1 = _src_route_RouteCollection;
var LocationEmitter_1 = _src_emit_LocationEmitter;
var utils_1 = _src_api_utils;
var options_1 = _src_options;
_src_mask_attr_anchor_dynamic;
var Route_1 = _src_route_Route;
var Stack_1 = _src_emit_Stack;
Object.defineProperty(exports, "State", { enumerable: true, get: function () { return Stack_1.IState; } });
var routes = new RouteCollection_1.RouteCollection();
var router;
function router_ensure() {
    if (router == null) {
        router = new LocationEmitter_1.LocationEmitter(routes);
    }
    return router;
}
exports.Ruta = {
    Collection: RouteCollection_1.RouteCollection,
    Route: Route_1.Route,
    setRouterType: function (type) {
        if (router == null) {
            router = new LocationEmitter_1.LocationEmitter(routes, type);
        }
        return this;
    },
    setStrictBehaviour: function (isStrict) {
        options_1.default.isStrict = isStrict;
        return this;
    },
    add: function (regpath, mix) {
        router_ensure();
        routes.add(regpath, mix);
        return this;
    },
    on: function (regpath, mix) {
        router_ensure().on(regpath, mix);
        return this;
    },
    off: function (regpath, mix) {
        router_ensure().off(regpath, mix);
        return this;
    },
    onLifecycle: function (def, cb) {
        router_ensure().onLifecycle(def, cb);
        return this;
    },
    offLifecycle: function (def, cb) {
        router_ensure().offLifecycle(def, cb);
        return this;
    },
    get: function (path) {
        return routes.get(path);
    },
    navigate: function (mix, opts) {
        router_ensure().navigate(mix, opts);
        return this;
    },
    back: function (opts) {
        return router_ensure().back(opts);
    },
    forward: function () {
        return router_ensure().forward();
    },
    current: function () {
        return router_ensure().current();
    },
    currentPath: function () {
        return router_ensure().currentPath();
    },
    getStack: function () {
        return router_ensure().getStack();
    },
    getBackStack: function () {
        return router_ensure().getBackStack();
    },
    getForwardStack: function () {
        return router_ensure().getForwardStack();
    },
    notifyCurrent: function () {
        router_ensure().navigate();
        return this;
    },
    parse: RouteCollection_1.RouteCollection.parse,
    /*
     * @deprecated - use `_` instead
     */
    $utils: utils_1.default,
    _: utils_1.default,
};
//# sourceMappingURL=export.js.map
//# sourceMappingURL=ruta.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_ruta) && isObject(module.exports)) {
		Object.assign(_src_ruta, module.exports);
		return;
	}
	_src_ruta = module.exports;
}());
// end:source ./ModuleSimplified.js

"use strict";
var ruta_1 = _src_ruta;
module.exports = ruta_1.Ruta;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=export.ts.map

}));

// end:source ./UMD.js
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_node_modules_ruta_lib_ruta) && isObject(module.exports)) {
		Object.assign(_node_modules_ruta_lib_ruta, module.exports);
		return;
	}
	_node_modules_ruta_lib_ruta = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _node_modules_alot_lib_alot;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	
// source ./UMD.js
(function(factory){
	
	var _name = 'alot',
		_global = typeof window === 'undefined' ? global : window,
		_module = {
			exports: {}
		};

	factory(_module, _module.exports, _global);

	if (typeof define === 'function' && define.amd) {
        define([], function () {
        	return _module.exports;
        });
        return;
    } 
    if (typeof module === 'object' && module.exports) {
    	module.exports = _module.exports;
    	return;
    }

	if (_name) {
		_global[_name] = _module.exports;
	}

}(function(module, exports, global){
	var _node_modules_atma_utils_lib_utils = {};
var _src_AlotProto = {};
var _src_alot = {};
var _src_async_Deferred = {};
var _src_async_Pool = {};
var _src_streams_DistinctStream = {};
var _src_streams_FilterStream = {};
var _src_streams_ForEachStream = {};
var _src_streams_ForkStream = {};
var _src_streams_GroupStream = {};
var _src_streams_IAlotStream = {};
var _src_streams_JoinStream = {};
var _src_streams_MapStream = {};
var _src_streams_SkipStream = {};
var _src_streams_SortedStream = {};
var _src_streams_TakeStream = {};
var _src_streams_exports = {};
var _src_utils_Aggregation = {};
var _src_utils_arr = {};
var _src_utils_classify = {};
var _src_utils_deco = {};
var _src_utils_is = {};
var _src_utils_obj = {};
var _src_utils_r = {};

// source ./ModuleSimplified.js
var _src_streams_IAlotStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_IAlotStream) && isObject(module.exports)) {
		Object.assign(_src_streams_IAlotStream, module.exports);
		return;
	}
	_src_streams_IAlotStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _node_modules_atma_utils_lib_utils;
(function () {
	var exports = {};
	var module = { exports: exports };
	(function(factory){

	var owner, property;
	if (typeof module !== 'undefined' && module.exports) {
		owner = module;
		property = 'exports';
	}
	else {
		owner = window;
		property = 'Utils';
	}

	factory(owner, property);

}(function(owner, property){

    	var _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty;
	var obj_getProperty,
	    obj_setProperty,
	    obj_hasProperty,
	    obj_defineProperty,
	    obj_extend,
	    obj_extendDefaults,
	    obj_extendProperties,
	    obj_extendPropertiesDefaults,
	    obj_extendMany,
	    obj_create;
	(function(){
		(function(){
			_Array_slice = Array.prototype.slice;
			var _Array_splice = Array.prototype.splice;
			var _Array_indexOf = Array.prototype.indexOf;
			var _Object_hasOwnProp = Object.hasOwnProperty;
			_Object_getOwnProp = Object.getOwnPropertyDescriptor;
			_Object_defineProperty = Object.defineProperty;
			var _global = typeof global !== 'undefined'
			    ? global
			    : window;
			var _document = typeof window !== 'undefined' && window.document != null
			    ? window.document
			    : null;
			
		}());
		obj_getProperty = function (obj_, path) {
		    if (path.indexOf('.') === -1) {
		        return obj_[path];
		    }
		    var obj = obj_, chain = path.split('.'), imax = chain.length, i = -1;
		    while (obj != null && ++i < imax) {
		        var key = chain[i];
		        if (key.charCodeAt(key.length - 1) === 63 /*?*/) {
		            key = key.slice(0, -1);
		        }
		        obj = obj[key];
		    }
		    return obj;
		}
		;
		obj_setProperty = function (obj_, path, val) {
		    if (path.indexOf('.') === -1) {
		        obj_[path] = val;
		        return;
		    }
		    var obj = obj_, chain = path.split('.'), imax = chain.length - 1, i = -1, key;
		    while (++i < imax) {
		        key = chain[i];
		        if (key.charCodeAt(key.length - 1) === 63 /*?*/) {
		            key = key.slice(0, -1);
		        }
		        var x = obj[key];
		        if (x == null) {
		            x = obj[key] = {};
		        }
		        obj = x;
		    }
		    obj[chain[i]] = val;
		}
		;
		obj_hasProperty = function (obj, path) {
		    var x = obj_getProperty(obj, path);
		    return x !== void 0;
		}
		;
		obj_defineProperty = function (obj, path, dscr) {
		    var x = obj, chain = path.split('.'), imax = chain.length - 1, i = -1, key;
		    while (++i < imax) {
		        key = chain[i];
		        if (x[key] == null)
		            x[key] = {};
		        x = x[key];
		    }
		    key = chain[imax];
		    if (_Object_defineProperty) {
		        if (dscr.writable === void 0)
		            dscr.writable = true;
		        if (dscr.configurable === void 0)
		            dscr.configurable = true;
		        if (dscr.enumerable === void 0)
		            dscr.enumerable = true;
		        _Object_defineProperty(x, key, dscr);
		        return;
		    }
		    x[key] = dscr.value === void 0
		        ? dscr.value
		        : (dscr.get && dscr.get());
		}
		;
		obj_extend = function (a, b) {
		    if (b == null)
		        return a || {};
		    if (a == null)
		        return obj_create(b);
		    for (var key in b) {
		        a[key] = b[key];
		    }
		    return a;
		}
		;
		obj_extendDefaults = function (a, b) {
		    if (b == null)
		        return a || {};
		    if (a == null)
		        return obj_create(b);
		    for (var key in b) {
		        if (a[key] == null) {
		            a[key] = b[key];
		            continue;
		        }
		        if (key === 'toString' && a[key] === Object.prototype.toString) {
		            a[key] = b[key];
		        }
		    }
		    return a;
		}
		var extendPropertiesFactory = function (overwriteProps) {
		    if (_Object_getOwnProp == null)
		        return overwriteProps ? obj_extend : obj_extendDefaults;
		    return function (a, b) {
		        if (b == null)
		            return a || {};
		        if (a == null)
		            return obj_create(b);
		        var key, descr, ownDescr;
		        for (key in b) {
		            descr = _Object_getOwnProp(b, key);
		            if (descr == null)
		                continue;
		            if (overwriteProps !== true) {
		                ownDescr = _Object_getOwnProp(a, key);
		                if (ownDescr != null) {
		                    continue;
		                }
		            }
		            if (descr.hasOwnProperty('value')) {
		                a[key] = descr.value;
		                continue;
		            }
		            _Object_defineProperty(a, key, descr);
		        }
		        return a;
		    };
		};
		obj_extendProperties = extendPropertiesFactory(true);
		obj_extendPropertiesDefaults = extendPropertiesFactory(false);
		obj_extendMany = function (a, arg1, arg2, arg3, arg4, arg5, arg6) {
		    var imax = arguments.length, i = 1;
		    for (; i < imax; i++) {
		        a = obj_extend(a, arguments[i]);
		    }
		    return a;
		}
		;
		function obj_toFastProps(obj) {
		    /*jshint -W027*/
		    function F() { }
		    F.prototype = obj;
		    new F();
		    return;
		    eval(obj);
		}
		;
		var _Object_create = Object.create || function (x) {
		    var Ctor = function () { };
		    Ctor.prototype = x;
		    return new Ctor;
		};
		obj_create = _Object_create;
		
	}());
	var class_create,
	    class_createEx;
	(function(){
		;
		/**
		 * create([...Base], Proto)
		 * Base: Function | Object
		 * Proto: Object {
		 *    constructor: ?Function
		 *    ...
		 */
		class_create = createClassFactory(obj_extendDefaults);
		// with property accessor functions support
		class_createEx = createClassFactory(obj_extendPropertiesDefaults);
		function createClassFactory(extendDefaultsFn) {
		    return function (a, b, c, d, e, f, g, h) {
		        var args = _Array_slice.call(arguments), Proto = args.pop();
		        if (Proto == null)
		            Proto = {};
		        var Ctor;
		        if (Proto.hasOwnProperty('constructor')) {
		            Ctor = Proto.constructor;
		            if (Ctor.prototype === void 0) {
		                var es6Method = Ctor;
		                Ctor = function ClassCtor() {
		                    var imax = arguments.length, i = -1, args = new Array(imax);
		                    while (++i < imax)
		                        args[i] = arguments[i];
		                    return es6Method.apply(this, args);
		                };
		            }
		        }
		        else {
		            Ctor = function ClassCtor() { };
		        }
		        var i = args.length, BaseCtor, x;
		        while (--i > -1) {
		            x = args[i];
		            if (typeof x === 'function') {
		                BaseCtor = wrapFn(x, BaseCtor);
		                x = x.prototype;
		            }
		            extendDefaultsFn(Proto, x);
		        }
		        return createClass(wrapFn(BaseCtor, Ctor), Proto);
		    };
		}
		function createClass(Ctor, Proto) {
		    Proto.constructor = Ctor;
		    Ctor.prototype = Proto;
		    return Ctor;
		}
		function wrapFn(fnA, fnB) {
		    if (fnA == null) {
		        return fnB;
		    }
		    if (fnB == null) {
		        return fnA;
		    }
		    return function () {
		        var args = _Array_slice.call(arguments);
		        var x = fnA.apply(this, args);
		        if (x !== void 0)
		            return x;
		        return fnB.apply(this, args);
		    };
		}
		
	}());
	var arr_remove,
	    arr_each,
	    arr_indexOf,
	    arr_contains,
	    arr_pushMany;
	(function(){
		arr_remove = function (array, x) {
		    var i = array.indexOf(x);
		    if (i === -1)
		        return false;
		    array.splice(i, 1);
		    return true;
		}
		;
		arr_each = function (arr, fn, ctx) {
		    arr.forEach(fn, ctx);
		}
		;
		arr_indexOf = function (arr, x) {
		    return arr.indexOf(x);
		}
		;
		arr_contains = function (arr, x) {
		    return arr.indexOf(x) !== -1;
		}
		;
		arr_pushMany = function (arr, arrSource) {
		    if (arrSource == null || arr == null || arr === arrSource)
		        return;
		    var il = arr.length, jl = arrSource.length, j = -1;
		    while (++j < jl) {
		        arr[il + j] = arrSource[j];
		    }
		}
		;
		function arr_distinct(arr, compareFn) {
		    var out = [];
		    var hash = compareFn == null ? obj_create(null) : null;
		    outer: for (var i = 0; i < arr.length; i++) {
		        var x = arr[i];
		        if (compareFn == null) {
		            if (hash[x] === 1) {
		                continue;
		            }
		            hash[x] = 1;
		        }
		        else {
		            for (var j = i - 1; j > -1; j--) {
		                var prev = arr[j];
		                if (compareFn(x, prev)) {
		                    continue outer;
		                }
		            }
		        }
		        out.push(x);
		    }
		    return out;
		}
		
	}());
	var is_Function,
	    is_Object,
	    is_Array,
	    is_ArrayLike,
	    is_String,
	    is_notEmptyString,
	    is_rawObject,
	    is_Date,
	    is_DOM,
	    is_NODE;
	(function(){
		is_Function = function (x) {
		    return typeof x === 'function';
		}
		is_Object = function (x) {
		    return x != null && typeof x === 'object';
		}
		is_Array = function (arr) {
		    return (arr != null &&
		        typeof arr === 'object' &&
		        typeof arr.length === 'number' &&
		        typeof arr.slice === 'function');
		}
		is_ArrayLike = is_Array;
		is_String = function (x) {
		    return typeof x === 'string';
		}
		is_notEmptyString = function (x) {
		    return typeof x === 'string' && x !== '';
		}
		is_rawObject = function (x) {
		    return x != null && typeof x === 'object' && x.constructor === Object;
		}
		is_Date = function (x) {
		    if (x == null || typeof x !== 'object') {
		        return false;
		    }
		    if (x.getFullYear != null && isNaN(x) === false) {
		        return true;
		    }
		    return false;
		}
		function is_PromiseLike(x) {
		    return x != null && typeof x === 'object' && typeof x.then === 'function';
		}
		function is_Observable(x) {
		    return x != null && typeof x === 'object' && typeof x.subscribe === 'function';
		}
		is_DOM = typeof window !== 'undefined' && window.navigator != null;
		is_NODE = !is_DOM;
		
	}());
	var str_format,
	    str_dedent;
	(function(){
		str_format = function (str_, a, b, c, d) {
		    var str = str_, imax = arguments.length, i = 0, x;
		    while (++i < imax) {
		        x = arguments[i];
		        if (is_Object(x) && x.toJSON) {
		            x = x.toJSON();
		        }
		        str_ = str_.replace(rgxNum(i - 1), String(x));
		    }
		    return str_;
		}
		;
		str_dedent = function (str) {
		    var rgx = /^[\t ]*\S/gm, match = rgx.exec(str), count = -1;
		    while (match != null) {
		        var x = match[0].length;
		        if (count === -1 || x < count)
		            count = x;
		        match = rgx.exec(str);
		    }
		    if (--count < 1)
		        return str;
		    var replacer = new RegExp('^[\\t ]{1,' + count + '}', 'gm');
		    return str
		        .replace(replacer, '')
		        .replace(/^[\t ]*\r?\n/, '')
		        .replace(/\r?\n[\t ]*$/, '');
		}
		;
		var rgxNum;
		(function () {
		    rgxNum = function (num) {
		        return cache_[num] || (cache_[num] = new RegExp('\\{' + num + '\\}', 'g'));
		    };
		    var cache_ = {};
		}());
		
	}());
	var error_createClass;
	(function(){
		error_createClass = function (name, Proto, stackSliceFrom) {
		    var Ctor = _createCtor(Proto, stackSliceFrom);
		    Ctor.prototype = new Error;
		    Proto.constructor = Error;
		    Proto.name = name;
		    obj_extend(Ctor.prototype, Proto);
		    return Ctor;
		}
		;
		function error_formatSource(source, index, filename) {
		    var cursor = error_cursor(source, index), lines = cursor[0], lineNum = cursor[1], rowNum = cursor[2], str = '';
		    if (filename != null) {
		        str += str_format(' at {0}:{1}:{2}\n', filename, lineNum, rowNum);
		    }
		    return str + error_formatCursor(lines, lineNum, rowNum);
		}
		;
		/**
		 * @returns [ lines, lineNum, rowNum ]
		 */
		function error_cursor(str, index) {
		    var lines = str.substring(0, index).split('\n'), line = lines.length, row = index + 1 - lines.slice(0, line - 1).join('\n').length;
		    if (line > 1) {
		        // remove trailing newline
		        row -= 1;
		    }
		    return [str.split('\n'), line, row];
		}
		;
		function error_formatCursor(lines, lineNum, rowNum) {
		    var BEFORE = 3, AFTER = 2, i = lineNum - BEFORE, imax = i + BEFORE + AFTER, str = '';
		    if (i < 0)
		        i = 0;
		    if (imax > lines.length)
		        imax = lines.length;
		    var lineNumberLength = String(imax).length, lineNumber;
		    for (; i < imax; i++) {
		        if (str)
		            str += '\n';
		        lineNumber = ensureLength(i + 1, lineNumberLength);
		        str += lineNumber + '|' + lines[i];
		        if (i + 1 === lineNum) {
		            str += '\n' + repeat(' ', lineNumberLength + 1);
		            str += lines[i].substring(0, rowNum - 1).replace(/[^\s]/g, ' ');
		            str += '^';
		        }
		    }
		    return str;
		}
		;
		function ensureLength(num, count) {
		    var str = String(num);
		    while (str.length < count) {
		        str += ' ';
		    }
		    return str;
		}
		function repeat(char_, count) {
		    var str = '';
		    while (--count > -1) {
		        str += char_;
		    }
		    return str;
		}
		function _createCtor(Proto, stackFrom) {
		    var Ctor = Proto.hasOwnProperty('constructor')
		        ? Proto.constructor
		        : null;
		    return function () {
		        var args = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            args[_i] = arguments[_i];
		        }
		        obj_defineProperty(this, 'stack', {
		            value: _prepairStack(stackFrom || 3)
		        });
		        obj_defineProperty(this, 'message', {
		            value: str_format.apply(this, arguments)
		        });
		        if (Ctor != null) {
		            Ctor.apply(this, arguments);
		        }
		    };
		}
		function _prepairStack(sliceFrom) {
		    var stack = new Error().stack;
		    return stack == null ? null : stack
		        .split('\n')
		        .slice(sliceFrom)
		        .join('\n');
		}
		
	}());
	var fn_proxy,
	    fn_apply,
	    fn_doNothing,
	    fn_createByPattern;
	(function(){
		fn_proxy = function (fn, ctx) {
		    return function () {
		        var imax = arguments.length, args = new Array(imax), i = 0;
		        for (; i < imax; i++)
		            args[i] = arguments[i];
		        return fn_apply(fn, ctx, args);
		    };
		}
		;
		fn_apply = function (fn, ctx, args) {
		    var l = args.length;
		    if (0 === l)
		        return fn.call(ctx);
		    if (1 === l)
		        return fn.call(ctx, args[0]);
		    if (2 === l)
		        return fn.call(ctx, args[0], args[1]);
		    if (3 === l)
		        return fn.call(ctx, args[0], args[1], args[2]);
		    if (4 === l)
		        return fn.call(ctx, args[0], args[1], args[2], args[3]);
		    return fn.apply(ctx, args);
		}
		;
		fn_doNothing = function () {
		    return false;
		}
		;
		fn_createByPattern = function (definitions, ctx) {
		    var imax = definitions.length;
		    return function () {
		        var l = arguments.length, i = -1, def;
		        outer: while (++i < imax) {
		            def = definitions[i];
		            if (def.pattern.length !== l) {
		                continue;
		            }
		            var j = -1;
		            while (++j < l) {
		                var fn = def.pattern[j];
		                var val = arguments[j];
		                if (fn(val) === false) {
		                    continue outer;
		                }
		            }
		            return def.handler.apply(ctx, arguments);
		        }
		        console.error('InvalidArgumentException for a function', definitions, arguments);
		        return null;
		    };
		}
		;
		
	}());
	var class_Dfr;
	(function(){
		//@TODO remove constructr run
		class_Dfr = function (mix) {
		    if (typeof mix === 'function') {
		        return class_Dfr.run(mix);
		    }
		};
		class_Dfr.prototype = {
		    _isAsync: true,
		    _done: null,
		    _fail: null,
		    _always: null,
		    _resolved: null,
		    _rejected: null,
		    defer: function () {
		        this._rejected = null;
		        this._resolved = null;
		        return this;
		    },
		    isResolved: function () {
		        return this._resolved != null;
		    },
		    isRejected: function () {
		        return this._rejected != null;
		    },
		    isBusy: function () {
		        return this._resolved == null && this._rejected == null;
		    },
		    resolve: function () {
		        var done = this._done, always = this._always;
		        this._resolved = arguments;
		        dfr_clearListeners(this);
		        arr_callOnce(done, this, arguments);
		        arr_callOnce(always, this, [this]);
		        return this;
		    },
		    reject: function () {
		        var fail = this._fail, always = this._always;
		        this._rejected = arguments;
		        dfr_clearListeners(this);
		        arr_callOnce(fail, this, arguments);
		        arr_callOnce(always, this, [this]);
		        return this;
		    },
		    then: function (filterSuccess, filterError) {
		        return this.pipe(filterSuccess, filterError);
		    },
		    done: function (callback) {
		        if (this._rejected != null)
		            return this;
		        return dfr_bind(this, this._resolved, this._done || (this._done = []), callback);
		    },
		    fail: function (callback) {
		        if (this._resolved != null)
		            return this;
		        return dfr_bind(this, this._rejected, this._fail || (this._fail = []), callback);
		    },
		    always: function (callback) {
		        return dfr_bind(this, this._rejected || this._resolved, this._always || (this._always = []), callback);
		    },
		    pipe: function (mix /* ..methods */) {
		        var dfr;
		        if (typeof mix === 'function') {
		            dfr = new class_Dfr();
		            var done_ = mix, fail_ = arguments.length > 1
		                ? arguments[1]
		                : null;
		            this
		                .done(delegate(dfr, 'resolve', done_))
		                .fail(delegate(dfr, 'reject', fail_));
		            return dfr;
		        }
		        dfr = mix;
		        var imax = arguments.length, done = imax === 1, fail = imax === 1, i = 0, x;
		        while (++i < imax) {
		            x = arguments[i];
		            switch (x) {
		                case 'done':
		                    done = true;
		                    break;
		                case 'fail':
		                    fail = true;
		                    break;
		                default:
		                    console.error('Unsupported pipe channel', arguments[i]);
		                    break;
		            }
		        }
		        done && this.done(delegate(dfr, 'resolve'));
		        fail && this.fail(delegate(dfr, 'reject'));
		        function pipe(dfr, method) {
		            return function () {
		                dfr[method].apply(dfr, arguments);
		            };
		        }
		        function delegate(dfr, name, fn) {
		            return function () {
		                if (fn != null) {
		                    var override = fn.apply(this, arguments);
		                    if (override != null && override !== dfr) {
		                        if (isDeferred(override)) {
		                            override.then(delegate(dfr, 'resolve'), delegate(dfr, 'reject'));
		                            return;
		                        }
		                        dfr[name](override);
		                        return;
		                    }
		                }
		                dfr[name].apply(dfr, arguments);
		            };
		        }
		        return this;
		    },
		    pipeCallback: function () {
		        var self = this;
		        return function (error) {
		            if (error != null) {
		                self.reject(error);
		                return;
		            }
		            var args = _Array_slice.call(arguments, 1);
		            fn_apply(self.resolve, self, args);
		        };
		    },
		    resolveDelegate: function () {
		        return fn_proxy(this.resolve, this);
		    },
		    rejectDelegate: function () {
		        return fn_proxy(this.reject, this);
		    }
		};
		class_Dfr.resolve = function (a, b, c) {
		    var dfr = new class_Dfr();
		    return dfr.resolve.apply(dfr, _Array_slice.call(arguments));
		};
		class_Dfr.reject = function (error) {
		    var dfr = new class_Dfr();
		    return dfr.reject(error);
		};
		class_Dfr.run = function (fn, ctx) {
		    var dfr = new class_Dfr();
		    if (ctx == null)
		        ctx = dfr;
		    fn.call(ctx, fn_proxy(dfr.resolve, ctx), fn_proxy(dfr.reject, dfr), dfr);
		    return dfr;
		};
		class_Dfr.all = function (promises) {
		    var dfr = new class_Dfr, arr = new Array(promises.length), wait = promises.length, error = null;
		    if (wait === 0) {
		        return dfr.resolve(arr);
		    }
		    function tick(index) {
		        if (error != null) {
		            return;
		        }
		        var args = _Array_slice.call(arguments, 1);
		        arr.splice.apply(arr, [index, 0].concat(args));
		        if (--wait === 0) {
		            dfr.resolve(arr);
		        }
		    }
		    function onReject(err) {
		        dfr.reject(error = err);
		    }
		    var imax = promises.length, i = -1;
		    while (++i < imax) {
		        var x = promises[i];
		        if (x == null || x.then == null) {
		            tick(i);
		            continue;
		        }
		        x.then(tick.bind(null, i), onReject);
		    }
		    return dfr;
		};
		// PRIVATE
		function dfr_bind(dfr, arguments_, listeners, callback) {
		    if (callback == null)
		        return dfr;
		    if (arguments_ != null)
		        fn_apply(callback, dfr, arguments_);
		    else
		        listeners.push(callback);
		    return dfr;
		}
		function dfr_clearListeners(dfr) {
		    dfr._done = null;
		    dfr._fail = null;
		    dfr._always = null;
		}
		function arr_callOnce(arr, ctx, args) {
		    if (arr == null)
		        return;
		    var imax = arr.length, i = -1, fn;
		    while (++i < imax) {
		        fn = arr[i];
		        if (fn)
		            fn_apply(fn, ctx, args);
		    }
		    arr.length = 0;
		}
		function isDeferred(x) {
		    return x != null
		        && typeof x === 'object'
		        && is_Function(x.then);
		}
		
	}());
	var class_Uri;
	(function(){
		class_Uri = class_create({
		    protocol: null,
		    value: null,
		    path: null,
		    file: null,
		    extension: null,
		    constructor: function (uri) {
		        if (uri == null)
		            return this;
		        if (util_isUri(uri))
		            return uri.combine('');
		        uri = normalize_uri(uri);
		        this.value = uri;
		        parse_protocol(this);
		        parse_host(this);
		        parse_search(this);
		        parse_file(this);
		        // normilize path - "/some/path"
		        this.path = normalize_pathsSlashes(this.value);
		        if (/^[\w]+:\//.test(this.path)) {
		            this.path = '/' + this.path;
		        }
		        return this;
		    },
		    cdUp: function () {
		        var path = this.path;
		        if (path == null || path === '' || path === '/') {
		            return this;
		        }
		        // win32 - is base drive
		        if (/^\/?[a-zA-Z]+:\/?$/.test(path)) {
		            return this;
		        }
		        this.path = path.replace(/\/?[^\/]+\/?$/i, '');
		        return this;
		    },
		    /**
		     * '/path' - relative to host
		     * '../path', 'path','./path' - relative to current path
		     */
		    combine: function (path) {
		        if (util_isUri(path)) {
		            path = path.toString();
		        }
		        if (!path) {
		            return util_clone(this);
		        }
		        if (rgx_win32Drive.test(path)) {
		            return new class_Uri(path);
		        }
		        var uri = util_clone(this);
		        uri.value = path;
		        parse_search(uri);
		        parse_file(uri);
		        if (!uri.value) {
		            return uri;
		        }
		        path = uri.value.replace(/^\.\//i, '');
		        if (path[0] === '/') {
		            uri.path = path;
		            return uri;
		        }
		        while (/^(\.\.\/?)/ig.test(path)) {
		            uri.cdUp();
		            path = path.substring(3);
		        }
		        uri.path = normalize_pathsSlashes(util_combinePathes(uri.path, path));
		        return uri;
		    },
		    toString: function () {
		        var protocol = this.protocol ? this.protocol + '://' : '';
		        var path = util_combinePathes(this.host, this.path, this.file) + (this.search || '');
		        var str = protocol + path;
		        if (!(this.file || this.search) && this.path) {
		            str += '/';
		        }
		        return str;
		    },
		    toPathAndQuery: function () {
		        return util_combinePathes(this.path, this.file) + (this.search || '');
		    },
		    /**
		     * @return Current Uri Path{String} that is relative to @arg1 Uri
		     */
		    toRelativeString: function (uri) {
		        if (typeof uri === 'string')
		            uri = new class_Uri(uri);
		        if (this.path.indexOf(uri.path) === 0) {
		            // host folder
		            var p = this.path ? this.path.replace(uri.path, '') : '';
		            if (p[0] === '/')
		                p = p.substring(1);
		            return util_combinePathes(p, this.file) + (this.search || '');
		        }
		        // sub folder
		        var current = this.path.split('/'), relative = uri.path.split('/'), commonpath = '', i = 0, length = Math.min(current.length, relative.length);
		        for (; i < length; i++) {
		            if (current[i] === relative[i])
		                continue;
		            break;
		        }
		        if (i > 0)
		            commonpath = current.splice(0, i).join('/');
		        if (commonpath) {
		            var sub = '', path = uri.path, forward;
		            while (path) {
		                if (this.path.indexOf(path) === 0) {
		                    forward = this.path.replace(path, '');
		                    break;
		                }
		                path = path.replace(/\/?[^\/]+\/?$/i, '');
		                sub += '../';
		            }
		            return util_combinePathes(sub, forward, this.file);
		        }
		        return this.toString();
		    },
		    toLocalFile: function () {
		        var path = util_combinePathes(this.host, this.path, this.file);
		        return util_win32Path(path);
		    },
		    toLocalDir: function () {
		        var path = util_combinePathes(this.host, this.path, '/');
		        return util_win32Path(path);
		    },
		    toDir: function () {
		        var str = this.protocol ? this.protocol + '://' : '';
		        return str + util_combinePathes(this.host, this.path, '/');
		    },
		    isRelative: function () {
		        return !(this.protocol || this.host);
		    },
		    getName: function () {
		        return this.file.replace('.' + this.extension, '');
		    }
		});
		var rgx_protocol = /^([\w\d]+):\/\//, rgx_extension = /\.([\w\d]+)$/i, rgx_win32Drive = /(^\/?\w{1}:)(\/|$)/, rgx_fileWithExt = /([^\/]+(\.[\w\d]+)?)$/i;
		function util_isUri(object) {
		    return object && typeof object === 'object' && typeof object.combine === 'function';
		}
		function util_combinePathes(a, b, c, d) {
		    var args = arguments, str = '';
		    for (var i = 0, x, imax = arguments.length; i < imax; i++) {
		        x = arguments[i];
		        if (!x)
		            continue;
		        if (!str) {
		            str = x;
		            continue;
		        }
		        if (str[str.length - 1] !== '/')
		            str += '/';
		        str += x[0] === '/' ? x.substring(1) : x;
		    }
		    return str;
		}
		function normalize_pathsSlashes(str) {
		    if (str[str.length - 1] === '/') {
		        return str.substring(0, str.length - 1);
		    }
		    return str;
		}
		function util_clone(source) {
		    var uri = new class_Uri(), key;
		    for (key in source) {
		        if (typeof source[key] === 'string') {
		            uri[key] = source[key];
		        }
		    }
		    return uri;
		}
		function normalize_uri(str) {
		    return str
		        .replace(/\\/g, '/')
		        .replace(/^\.\//, '')
		        // win32 drive path
		        .replace(/^(\w+):\/([^\/])/, '/$1:/$2');
		}
		function util_win32Path(path) {
		    if (rgx_win32Drive.test(path) && path[0] === '/') {
		        return path.substring(1);
		    }
		    return path;
		}
		function parse_protocol(obj) {
		    var match = rgx_protocol.exec(obj.value);
		    if (match == null && obj.value[0] === '/') {
		        obj.protocol = 'file';
		    }
		    if (match == null)
		        return;
		    obj.protocol = match[1];
		    obj.value = obj.value.substring(match[0].length);
		}
		function parse_host(obj) {
		    if (obj.protocol == null)
		        return;
		    if (obj.protocol === 'file') {
		        var match = rgx_win32Drive.exec(obj.value);
		        if (match) {
		            obj.host = match[1];
		            obj.value = obj.value.substring(obj.host.length);
		        }
		        return;
		    }
		    var pathStart = obj.value.indexOf('/', 2);
		    obj.host = ~pathStart
		        ? obj.value.substring(0, pathStart)
		        : obj.value;
		    obj.value = obj.value.replace(obj.host, '');
		}
		function parse_search(obj) {
		    var question = obj.value.indexOf('?');
		    if (question === -1)
		        return;
		    obj.search = obj.value.substring(question);
		    obj.value = obj.value.substring(0, question);
		}
		function parse_file(obj) {
		    var match = rgx_fileWithExt.exec(obj.value), file = match == null ? null : match[1];
		    if (file == null) {
		        return;
		    }
		    obj.file = file;
		    obj.value = obj.value.substring(0, obj.value.length - file.length);
		    obj.value = normalize_pathsSlashes(obj.value);
		    match = rgx_extension.exec(file);
		    obj.extension = match == null ? null : match[1];
		}
		class_Uri.combinePathes = util_combinePathes;
		class_Uri.combine = util_combinePathes;
		
	}());
	var class_EventEmitter;
	(function(){
		class_EventEmitter = function () {
		    this._listeners = {};
		};
		class_EventEmitter.prototype = {
		    on: function (event, fn) {
		        if (fn != null) {
		            (this._listeners[event] || (this._listeners[event] = [])).push(fn);
		        }
		        return this;
		    },
		    once: function (event, fn) {
		        if (fn != null) {
		            fn._once = true;
		            (this._listeners[event] || (this._listeners[event] = [])).push(fn);
		        }
		        return this;
		    },
		    pipe: function (event) {
		        var that = this, args;
		        return function () {
		            args = _Array_slice.call(arguments);
		            args.unshift(event);
		            fn_apply(that.trigger, that, args);
		        };
		    },
		    emit: event_trigger,
		    trigger: event_trigger,
		    off: function (event, fn) {
		        var listeners = this._listeners[event];
		        if (listeners == null)
		            return this;
		        if (arguments.length === 1) {
		            listeners.length = 0;
		            return this;
		        }
		        var imax = listeners.length, i = -1;
		        while (++i < imax) {
		            if (listeners[i] === fn) {
		                listeners.splice(i, 1);
		                i--;
		                imax--;
		            }
		        }
		        return this;
		    }
		};
		function event_trigger() {
		    var args = _Array_slice.call(arguments), event = args.shift(), fns = this._listeners[event], fn, imax, i = 0;
		    if (fns == null)
		        return this;
		    for (imax = fns.length; i < imax; i++) {
		        fn = fns[i];
		        fn_apply(fn, this, args);
		        if (fn._once === true) {
		            fns.splice(i, 1);
		            i--;
		            imax--;
		        }
		    }
		    return this;
		}
		
	}());
	var Lib = {
	    class_Dfr: class_Dfr,
	    class_EventEmitter: class_EventEmitter,
	    class_Uri: class_Uri,
	    class_create: class_create,
	    class_createEx: class_createEx,
	    arr_remove: arr_remove,
	    arr_each: arr_each,
	    arr_indexOf: arr_indexOf,
	    arr_contains: arr_contains,
	    arr_pushMany: arr_pushMany,
	    error_createClass: error_createClass,
	    fn_createByPattern: fn_createByPattern,
	    fn_doNothing: fn_doNothing,
	    obj_getProperty: obj_getProperty,
	    obj_setProperty: obj_setProperty,
	    obj_hasProperty: obj_hasProperty,
	    obj_extend: obj_extend,
	    obj_extendDefaults: obj_extendDefaults,
	    obj_extendMany: obj_extendMany,
	    obj_extendProperties: obj_extendProperties,
	    obj_extendPropertiesDefaults: obj_extendPropertiesDefaults,
	    obj_create: obj_create,
	    obj_defineProperty: obj_defineProperty,
	    is_Function: is_Function,
	    is_Array: is_Array,
	    is_ArrayLike: is_ArrayLike,
	    is_String: is_String,
	    is_Object: is_Object,
	    is_notEmptyString: is_notEmptyString,
	    is_rawObject: is_rawObject,
	    is_Date: is_Date,
	    is_NODE: is_NODE,
	    is_DOM: is_DOM,
	    str_format: str_format,
	    str_dedent: str_dedent
	};
	
    
    for (var key in Lib) {
        owner[property][key] = Lib[key];
    }
}));;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_node_modules_atma_utils_lib_utils) && isObject(module.exports)) {
		Object.assign(_node_modules_atma_utils_lib_utils, module.exports);
		return;
	}
	_node_modules_atma_utils_lib_utils = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_async_Pool;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncPool = void 0;
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var $$setImmediate = typeof setImmediate === 'undefined'
    ? function (fn) {
        new Promise(function () { return fn(); });
    }
    : setImmediate;
var AsyncPool = /** @class */ (function () {
    function AsyncPool(stream, threads, errors) {
        if (threads === void 0) { threads = 2; }
        if (errors === void 0) { errors = 'reject'; }
        this.stream = stream;
        this.threads = threads;
        this.errors = errors;
        this.index = -1;
        this.resolved = false;
        this.rejected = false;
        this.done = false;
        this.time = Date.now();
        this.results = [];
        this.queue = [];
        this.promise = new atma_utils_1.class_Dfr;
    }
    AsyncPool.prototype.start = function () {
        var _this = this;
        $$setImmediate(function () { return _this.tick(); });
        return this.promise;
    };
    AsyncPool.prototype.tick = function () {
        while (this.done !== true && this.queue.length < this.threads) {
            var index = ++this.index;
            var promise = this.stream.nextAsync();
            this.waitFor(promise, index);
        }
        if (this.queue.length === 0 && this.resolved !== true) {
            this.resolved = true;
            this.promise.resolve(this.results);
        }
    };
    AsyncPool.prototype.waitFor = function (promise, index) {
        var _this = this;
        this.queue.push(promise);
        promise.then(function (result) {
            $$setImmediate(function () { return _this.continueFor(promise, index, null, result); });
        }, function (error) {
            $$setImmediate(function () { return _this.continueFor(promise, index, error, null); });
        });
    };
    AsyncPool.prototype.continueFor = function (promise, index, error, result) {
        if (this.rejected === true) {
            return;
        }
        if (error != null) {
            if (this.errors === 'reject') {
                this.rejected = true;
                this.promise.reject(error);
                return;
            }
            if (this.errors === 'include') {
                result = { value: error, index: index };
            }
        }
        if (result != null) {
            if (result.done === true) {
                this.done = true;
            }
            else {
                var i_1 = result.index;
                if (i_1 == null) {
                    i_1 = index;
                }
                this.results[index] = result.value;
            }
        }
        var i = this.queue.indexOf(promise);
        this.queue.splice(i, 1);
        this.tick();
    };
    return AsyncPool;
}());
exports.AsyncPool = AsyncPool;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_async_Pool) && isObject(module.exports)) {
		Object.assign(_src_async_Pool, module.exports);
		return;
	}
	_src_async_Pool = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_Aggregation;
(function () {
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aggregation = void 0;
var Aggregation;
(function (Aggregation) {
    function getMinMaxByEntryInner(stream, getFn, compare) {
        var outVal = null;
        var outEntry = null;
        stream.reset();
        if (stream.isAsync) {
            return getMinMaxByEntryInnerAsync(stream, getFn, compare);
        }
        var i = 0;
        while (true) {
            var entry = stream.next();
            if (entry == null || entry.done === true) {
                break;
            }
            var val = getFn(entry.value, i++);
            if (val == null) {
                continue;
            }
            if (outVal == null) {
                outVal = val;
                outEntry = entry.value;
                continue;
            }
            if (compare === 'max' && outVal < val) {
                outVal = val;
                outEntry = entry.value;
            }
            if (compare === 'min' && outVal > val) {
                outVal = val;
                outEntry = entry.value;
            }
        }
        return { value: outVal, entry: outEntry };
    }
    function getMinMaxByEntryInnerAsync(stream, getFn, compare) {
        return __awaiter(this, void 0, Promise, function () {
            var outVal, outEntry, i, entry, val;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        outVal = null;
                        outEntry = null;
                        stream.reset();
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 4];
                        return [4 /*yield*/, stream.nextAsync()];
                    case 2:
                        entry = _a.sent();
                        if (entry == null || entry.done === true) {
                            return [3 /*break*/, 4];
                        }
                        return [4 /*yield*/, getFn(entry.value, i++)];
                    case 3:
                        val = _a.sent();
                        if (val == null) {
                            return [3 /*break*/, 1];
                        }
                        if (outVal == null) {
                            outVal = val;
                            outEntry = entry.value;
                            return [3 /*break*/, 1];
                        }
                        if (compare === 'max' && outVal < val) {
                            outVal = val;
                            outEntry = entry.value;
                        }
                        if (compare === 'min' && outVal > val) {
                            outVal = val;
                            outEntry = entry.value;
                        }
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, { value: outVal, entry: outEntry }];
                }
            });
        });
    }
    function getMinMaxValueBy(stream, getFn, compare) {
        if (stream.isAsync) {
            return getMinMaxByEntryInnerAsync(stream, getFn, compare);
        }
        var x = getMinMaxByEntryInner(stream, getFn, compare);
        return x.value;
    }
    Aggregation.getMinMaxValueBy = getMinMaxValueBy;
    function getMinMaxValueByAsync(stream, getFn, compare) {
        return __awaiter(this, void 0, void 0, function () {
            var x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getMinMaxByEntryInner(stream, getFn, compare)];
                    case 1:
                        x = _a.sent();
                        return [2 /*return*/, x.value];
                }
            });
        });
    }
    Aggregation.getMinMaxValueByAsync = getMinMaxValueByAsync;
    function getMinMaxItemBy(stream, getFn, compare) {
        if (stream.isAsync) {
            return getMinMaxByEntryInnerAsync(stream, getFn, compare);
        }
        var x = getMinMaxByEntryInner(stream, getFn, compare);
        return x.entry;
    }
    Aggregation.getMinMaxItemBy = getMinMaxItemBy;
    function getMinMaxItemByAsync(stream, getFn, compare) {
        return __awaiter(this, void 0, void 0, function () {
            var x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getMinMaxByEntryInner(stream, getFn, compare)];
                    case 1:
                        x = _a.sent();
                        return [2 /*return*/, x.entry];
                }
            });
        });
    }
    Aggregation.getMinMaxItemByAsync = getMinMaxItemByAsync;
    function sum(stream, fn, startVal) {
        stream.reset();
        if (stream.isAsync) {
            return sumAsync(stream, fn, startVal);
        }
        var sum = startVal;
        var i = 0;
        while (true) {
            var entry = stream.next();
            if (entry == null || entry.done === true) {
                break;
            }
            var value = fn(entry.value, i++);
            if (value == null) {
                continue;
            }
            sum += value;
        }
        return sum;
    }
    Aggregation.sum = sum;
    function sumAsync(stream, fn, startVal) {
        return __awaiter(this, void 0, Promise, function () {
            var sum, i, entry, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stream.reset();
                        sum = startVal;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 4];
                        return [4 /*yield*/, stream.nextAsync()];
                    case 2:
                        entry = _a.sent();
                        if (entry == null || entry.done === true) {
                            return [3 /*break*/, 4];
                        }
                        return [4 /*yield*/, fn(entry.value, i++)];
                    case 3:
                        value = _a.sent();
                        if (value == null) {
                            return [3 /*break*/, 1];
                        }
                        sum += value;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, sum];
                }
            });
        });
    }
    Aggregation.sumAsync = sumAsync;
})(Aggregation = exports.Aggregation || (exports.Aggregation = {}));
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_Aggregation) && isObject(module.exports)) {
		Object.assign(_src_utils_Aggregation, module.exports);
		return;
	}
	_src_utils_Aggregation = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_is;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_Promise = void 0;
function is_Promise(val) {
    return val != null
        && typeof val === 'object'
        && typeof val.then === 'function';
}
exports.is_Promise = is_Promise;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_is) && isObject(module.exports)) {
		Object.assign(_src_utils_is, module.exports);
		return;
	}
	_src_utils_is = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_AlotProto;
(function () {
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlotProto = void 0;
var Pool_1 = _src_async_Pool;
var Aggregation_1 = _src_utils_Aggregation;
/** Loading all stream from extra exports file to fix circular dependencies */
var exports_1 = _src_streams_exports;
var is_1 = _src_utils_is;
var AlotProto = /** @class */ (function () {
    function AlotProto(stream, opts) {
        var _a;
        this.stream = stream;
        this.isAsync = false;
        this.isAsync = stream.isAsync || ((_a = opts === null || opts === void 0 ? void 0 : opts.async) !== null && _a !== void 0 ? _a : false);
    }
    AlotProto.prototype.next = function () {
        return this.stream.next();
    };
    AlotProto.prototype.nextAsync = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.next()];
            });
        });
    };
    /**
     * Resets current stream to the beginning.
     */
    AlotProto.prototype.reset = function () {
        this.stream.reset();
        return this;
    };
    /**
     * Creates filtered stream. Is Lazy.
     * ```
     * alot(users).filter(x => x.age > 20).take(3).toArray();
     * ```
     * Filter is evaluated only N times, to match only 3 items.
     */
    AlotProto.prototype.filter = function (fn) {
        return new exports_1.FilterStream(this, fn);
    };
    /**
     * Creates async filted stream. Same as filter, but accepts async methods, and returns awaitable stream.
     */
    AlotProto.prototype.filterAsync = function (fn) {
        return new exports_1.FilterStreamAsync(this, fn);
    };
    AlotProto.prototype.map = function (fn) {
        return new exports_1.MapStream(this, fn);
    };
    AlotProto.prototype.mapAsync = function (fn, meta) {
        return new exports_1.MapStream(this, fn, { async: true });
    };
    AlotProto.prototype.mapMany = function (fn) {
        return new exports_1.MapManyStream(this, fn);
    };
    AlotProto.prototype.mapManyAsync = function (fn) {
        return new exports_1.MapManyStream(this, fn, { async: true });
    };
    AlotProto.prototype.forEach = function (fn) {
        return new exports_1.ForEachStream(this, fn);
    };
    AlotProto.prototype.forEachAsync = function (fn) {
        return new exports_1.ForEachStream(this, fn, { async: true });
    };
    AlotProto.prototype.take = function (count) {
        return new exports_1.TakeStream(this, count);
    };
    AlotProto.prototype.takeWhile = function (fn) {
        return new exports_1.TakeWhileStream(this, fn);
    };
    AlotProto.prototype.takeWhileAsync = function (fn) {
        return new exports_1.TakeWhileStreamAsync(this, fn);
    };
    AlotProto.prototype.skip = function (count) {
        return new exports_1.SkipStream(this, count);
    };
    AlotProto.prototype.skipWhile = function (fn) {
        return new exports_1.SkipWhileStream(this, fn);
    };
    AlotProto.prototype.skipWhileAsync = function (fn) {
        return new exports_1.SkipWhileStreamAsync(this, fn);
    };
    AlotProto.prototype.groupBy = function (fn) {
        return new exports_1.GroupByStream(this, fn);
    };
    /** Join Left Inner  */
    AlotProto.prototype.join = function (inner, getKey, getForeignKey, joinFn) {
        return new exports_1.JoinStream(this, inner, getKey, getForeignKey, joinFn, 'inner');
    };
    /** Join Full Outer  */
    AlotProto.prototype.joinOuter = function (inner, getKey, getForeignKey, joinFn) {
        return new exports_1.JoinStream(this, inner, getKey, getForeignKey, joinFn, 'outer');
    };
    AlotProto.prototype.distinctBy = function (fn) {
        return new exports_1.DistinctByStream(this, fn);
    };
    AlotProto.prototype.distinct = function () {
        return new exports_1.DistinctByStream(this);
    };
    AlotProto.prototype.sortBy = function (mix, direction) {
        if (direction === void 0) { direction = 'asc'; }
        return new exports_1.SortByStream(this, mix, direction);
    };
    AlotProto.prototype.sortByLocalCompare = function (getValFn, direction) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        return new exports_1.SortByLocalCompareStream(this, getValFn, direction, params);
    };
    AlotProto.prototype.fork = function (fn) {
        var inner = new exports_1.ForkStreamInner(this, fn);
        var outer = new exports_1.ForkStreamOuter(this, inner);
        return outer;
    };
    AlotProto.prototype.toDictionary = function (keyFn, valFn) {
        this.reset();
        var hash = Object.create(null);
        while (true) {
            var x = this.next();
            if (x.done) {
                return hash;
            }
            var key = keyFn(x.value);
            hash[key] = valFn ? valFn(x.value) : x.value;
        }
    };
    AlotProto.prototype.toDictionaryAsync = function (keyFn, valFn) {
        return __awaiter(this, void 0, Promise, function () {
            var hash, x, key, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.reset();
                        hash = Object.create(null);
                        _d.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.nextAsync()];
                    case 2:
                        x = _d.sent();
                        if (x.done) {
                            return [2 /*return*/, hash];
                        }
                        return [4 /*yield*/, keyFn(x.value)];
                    case 3:
                        key = _d.sent();
                        _a = hash;
                        _b = key;
                        if (!valFn) return [3 /*break*/, 5];
                        return [4 /*yield*/, valFn(x.value)];
                    case 4:
                        _c = _d.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        _c = x.value;
                        _d.label = 6;
                    case 6:
                        _a[_b] = _c;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/, hash];
                }
            });
        });
    };
    AlotProto.prototype.toMap = function (keyFn, valFn) {
        this.reset();
        var map = new Map();
        while (true) {
            var x = this.next();
            if (x.done) {
                return map;
            }
            var key = keyFn(x.value);
            var value = valFn != null ? valFn(x.value) : x.value;
            map.set(key, value);
        }
    };
    AlotProto.prototype.toMapAsync = function (keyFn, valFn) {
        return __awaiter(this, void 0, Promise, function () {
            var map, x, key, value, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.reset();
                        map = new Map();
                        _b.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.nextAsync()];
                    case 2:
                        x = _b.sent();
                        if (x.done) {
                            return [2 /*return*/, map];
                        }
                        return [4 /*yield*/, keyFn(x.value)];
                    case 3:
                        key = _b.sent();
                        if (!(valFn != null)) return [3 /*break*/, 5];
                        return [4 /*yield*/, valFn(x.value)];
                    case 4:
                        _a = _b.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        _a = x.value;
                        _b.label = 6;
                    case 6:
                        value = _a;
                        map.set(key, value);
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/, map];
                }
            });
        });
    };
    AlotProto.prototype.toArray = function () {
        this.reset();
        var out = [];
        while (true) {
            var result = this.next();
            if (result.done === true) {
                break;
            }
            out.push(result.value);
        }
        return out;
    };
    AlotProto.prototype.toArrayAsync = function (meta) {
        if (meta === void 0) { meta = { threads: 4, errors: 'reject' }; }
        this.reset();
        var pool = new Pool_1.AsyncPool(this, meta.threads, meta.errors);
        return pool.start();
    };
    AlotProto.prototype.first = function (matcher) {
        this.reset();
        var i = 0;
        while (true) {
            var entry = this.next();
            if (entry == null || entry.done === true) {
                break;
            }
            if (matcher == null || matcher(entry.value, i++)) {
                return entry.value;
            }
        }
        return null;
    };
    AlotProto.prototype.firstAsync = function (matcher) {
        return __awaiter(this, void 0, Promise, function () {
            var i, entry, mix, result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.reset();
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.nextAsync()];
                    case 2:
                        entry = _b.sent();
                        if (entry == null || entry.done === true) {
                            return [3 /*break*/, 6];
                        }
                        if (matcher == null) {
                            return [2 /*return*/, entry.value];
                        }
                        mix = matcher(entry.value, i++);
                        if (!is_1.is_Promise(mix)) return [3 /*break*/, 4];
                        return [4 /*yield*/, mix];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = mix;
                        _b.label = 5;
                    case 5:
                        result = _a;
                        if (result) {
                            return [2 /*return*/, entry.value];
                        }
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/, null];
                }
            });
        });
    };
    AlotProto.prototype.find = function (matcher) {
        return this.first(matcher);
    };
    AlotProto.prototype.findAsync = function (matcher) {
        return this.firstAsync(matcher);
    };
    AlotProto.prototype.sum = function (getVal, initialValue) {
        return Aggregation_1.Aggregation.sum(this, getVal, initialValue !== null && initialValue !== void 0 ? initialValue : 0);
    };
    AlotProto.prototype.sumAsync = function (getVal, initialValue) {
        return Aggregation_1.Aggregation.sumAsync(this, getVal, initialValue !== null && initialValue !== void 0 ? initialValue : 0);
    };
    AlotProto.prototype.sumBigInt = function (getVal) {
        return Aggregation_1.Aggregation.sum(this, getVal, BigInt(0));
    };
    AlotProto.prototype.sumBigIntAsync = function (getVal, initialValue) {
        return Aggregation_1.Aggregation.sumAsync(this, getVal, initialValue !== null && initialValue !== void 0 ? initialValue : BigInt(0));
    };
    AlotProto.prototype.max = function (fn) {
        return Aggregation_1.Aggregation.getMinMaxValueBy(this, fn, 'max');
    };
    AlotProto.prototype.maxAsync = function (fn) {
        return Aggregation_1.Aggregation.getMinMaxValueByAsync(this, fn, 'max');
    };
    AlotProto.prototype.maxItem = function (fn) {
        return Aggregation_1.Aggregation.getMinMaxItemBy(this, fn, 'max');
    };
    AlotProto.prototype.maxItemAsync = function (fn) {
        return Aggregation_1.Aggregation.getMinMaxItemByAsync(this, fn, 'max');
    };
    AlotProto.prototype.min = function (fn) {
        return Aggregation_1.Aggregation.getMinMaxValueBy(this, fn, 'min');
    };
    AlotProto.prototype.minAsync = function (fn) {
        return Aggregation_1.Aggregation.getMinMaxValueByAsync(this, fn, 'min');
    };
    AlotProto.prototype.minItem = function (fn) {
        return Aggregation_1.Aggregation.getMinMaxItemBy(this, fn, 'min');
    };
    AlotProto.prototype.minItemAsync = function (fn) {
        return Aggregation_1.Aggregation.getMinMaxItemByAsync(this, fn, 'min');
    };
    return AlotProto;
}());
exports.AlotProto = AlotProto;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_AlotProto) && isObject(module.exports)) {
		Object.assign(_src_AlotProto, module.exports);
		return;
	}
	_src_AlotProto = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_async_Deferred;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deferred = void 0;
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.isResolved = false;
        this.isRejected = false;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolveFn = resolve;
            _this.rejectFn = reject;
            if (_this.isResolved === true) {
                resolve(_this.resolvedArg);
            }
            if (_this.isRejected === true) {
                reject(_this.rejectedArg);
            }
        });
    }
    Deferred.prototype.resolve = function (arg) {
        if (this.resolveFn) {
            this.resolveFn(arg);
            return;
        }
        this.isResolved = true;
        this.resolvedArg = arg;
    };
    Deferred.prototype.reject = function (arg) {
        if (this.rejectFn) {
            this.rejectFn(arg);
            return;
        }
        this.isRejected = true;
        this.rejectedArg = arg;
    };
    Deferred.prototype.then = function (fnA, fnB) {
        this.promise.then(fnA, fnB);
    };
    return Deferred;
}());
exports.Deferred = Deferred;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_async_Deferred) && isObject(module.exports)) {
		Object.assign(_src_async_Deferred, module.exports);
		return;
	}
	_src_async_Deferred = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_deco;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deco = void 0;
var Deferred_1 = _src_async_Deferred;
exports.Deco = {
    queued: function (opts) {
        if (opts === void 0) { opts = null; }
        return function (target, propertyKey, descriptor) {
            var viaProperty = descriptor == null;
            var fn = viaProperty ? target[propertyKey] : descriptor.value;
            var queue = [];
            var busy = false;
            var resultFn = function () {
                var wrapped = Queued.prepair(fn, this);
                if (opts != null && opts.trimQueue && queue.length > 0) {
                    queue.splice(0);
                }
                queue.push(wrapped);
                if (busy === false) {
                    busy = true;
                    tick();
                }
                return wrapped.promise;
            };
            var tick = function () {
                var x = queue.shift();
                if (x == null) {
                    busy = false;
                    return;
                }
                x.always(tick);
                x.run.apply(this, arguments);
            };
            if (viaProperty) {
                target[propertyKey] = resultFn;
                return;
            }
            descriptor.value = resultFn;
            return descriptor;
        };
    }
};
var Queued = {
    prepair: function (fn, ctx) {
        var dfr = new Deferred_1.Deferred;
        return {
            promise: dfr,
            run: function () {
                var result = fn.apply(ctx, arguments);
                if ('then' in result === false) {
                    dfr.resolve(result);
                }
                else {
                    result.then(function (_result) {
                        dfr.resolve(_result);
                    }, function (_error) {
                        dfr.reject(_error);
                    });
                }
                return result;
            },
            always: function (fn) {
                dfr.then(fn, fn);
            }
        };
    }
};
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_deco) && isObject(module.exports)) {
		Object.assign(_src_utils_deco, module.exports);
		return;
	}
	_src_utils_deco = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_FilterStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterStreamAsync = exports.FilterStream = void 0;
var AlotProto_1 = _src_AlotProto;
var deco_1 = _src_utils_deco;
var FilterStream = /** @class */ (function (_super) {
    __extends(FilterStream, _super);
    function FilterStream(stream, fn) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        return _this;
    }
    FilterStream.prototype.next = function () {
        while (true) {
            var result = this.stream.next();
            if (result.done === true) {
                return result;
            }
            var b = this.fn(result.value, result.index);
            if (Boolean(b) === false) {
                continue;
            }
            return result;
        }
    };
    return FilterStream;
}(AlotProto_1.AlotProto));
exports.FilterStream = FilterStream;
var FilterStreamAsync = /** @class */ (function (_super) {
    __extends(FilterStreamAsync, _super);
    function FilterStreamAsync(stream, fn) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this.isAsync = true;
        _this._index = -1;
        _this.next = _this.nextAsync;
        return _this;
    }
    FilterStreamAsync.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, result, b;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = ++this._index;
                        _a.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.stream.next()];
                    case 2:
                        result = _a.sent();
                        if (result.done === true) {
                            return [2 /*return*/, result];
                        }
                        return [4 /*yield*/, this.fn(result.value, result.index)];
                    case 3:
                        b = _a.sent();
                        if (Boolean(b) === false) {
                            return [3 /*break*/, 1];
                        }
                        result.index = i;
                        return [2 /*return*/, result];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FilterStreamAsync.prototype.reset = function () {
        this._index = -1;
        return _super.prototype.reset.call(this);
    };
    FilterStreamAsync.prototype.toArrayAsync = function (meta) {
        if (meta === void 0) { meta = { threads: 4 }; }
        return __awaiter(this, void 0, Promise, function () {
            var arr;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.reset();
                        return [4 /*yield*/, this.mapAsync(function (item, i) { return __awaiter(_this, void 0, void 0, function () {
                                var flag;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.fn(item, i)];
                                        case 1:
                                            flag = _a.sent();
                                            return [2 /*return*/, {
                                                    value: item,
                                                    flag: flag
                                                }];
                                    }
                                });
                            }); }, meta).toArrayAsync()];
                    case 1:
                        arr = _a.sent();
                        return [2 /*return*/, arr.filter(function (x) { return x.flag; }).map(function (x) { return x.value; })];
                }
            });
        });
    };
    __decorate([
        deco_1.Deco.queued()
    ], FilterStreamAsync.prototype, "nextAsync", null);
    return FilterStreamAsync;
}(AlotProto_1.AlotProto));
exports.FilterStreamAsync = FilterStreamAsync;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_FilterStream) && isObject(module.exports)) {
		Object.assign(_src_streams_FilterStream, module.exports);
		return;
	}
	_src_streams_FilterStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_r;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.r_DONE = void 0;
exports.r_DONE = { done: true, value: null };
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_r) && isObject(module.exports)) {
		Object.assign(_src_utils_r, module.exports);
		return;
	}
	_src_utils_r = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_MapStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapManyStream = exports.MapStream = void 0;
var AlotProto_1 = _src_AlotProto;
var r_1 = _src_utils_r;
var MapStream = /** @class */ (function (_super) {
    __extends(MapStream, _super);
    function MapStream(stream, fn, opts) {
        var _this = _super.call(this, stream, opts) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this._index = 0;
        return _this;
    }
    MapStream.prototype.next = function () {
        if (this.isAsync) {
            return this.nextAsync();
        }
        var result = this.stream.next();
        if (result.done) {
            return { value: null, done: true };
        }
        return {
            value: this.fn(result.value, this._index++),
            done: false
        };
    };
    MapStream.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.stream.nextAsync()];
                    case 1:
                        result = _b.sent();
                        if (result.done) {
                            //* skipped extra-object
                            result.value = null;
                            return [2 /*return*/, result];
                        }
                        _a = {};
                        return [4 /*yield*/, this.fn(result.value, this._index++)];
                    case 2: return [2 /*return*/, (_a.value = _b.sent(),
                            _a.done = false,
                            _a)];
                }
            });
        });
    };
    MapStream.prototype.reset = function () {
        this._index = 0;
        return _super.prototype.reset.call(this);
    };
    return MapStream;
}(AlotProto_1.AlotProto));
exports.MapStream = MapStream;
var MapManyStream = /** @class */ (function (_super) {
    __extends(MapManyStream, _super);
    function MapManyStream(stream, fn, opts) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this.opts = opts;
        _this._index = -1;
        _this._many = null;
        _this._mapDfr = null;
        _this._done = false;
        _this.isAsync = stream.isAsync || opts && opts.async;
        return _this;
    }
    MapManyStream.prototype.next = function () {
        if (this.opts != null && this.opts.async) {
            return this.nextAsync();
        }
        if (this._many != null && this._index < this._many.length - 1) {
            var x = this._many[++this._index];
            return { done: false, value: x };
        }
        var result = this.stream.next();
        if (result.done) {
            return result;
        }
        this._many = this.fn(result.value, result.index);
        this._index = -1;
        return this.next();
    };
    MapManyStream.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._done === true) {
                            return [2 /*return*/, r_1.r_DONE];
                        }
                        if (this._many != null && this._index < this._many.length - 1) {
                            x = this._many[++this._index];
                            return [2 /*return*/, { done: false, value: x }];
                        }
                        if (this._mapDfr == null) {
                            this._doMapAsync();
                        }
                        return [4 /*yield*/, this._mapDfr];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.nextAsync()];
                }
            });
        });
    };
    MapManyStream.prototype.reset = function () {
        this._many = null;
        this._done = false;
        this._mapDfr = null;
        this._index = -1;
        return _super.prototype.reset.call(this);
    };
    MapManyStream.prototype._doMapAsync = function () {
        var _this = this;
        return this._mapDfr = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.stream.next()];
                    case 1:
                        result = _b.sent();
                        if (result.done) {
                            this._done = true;
                            this._mapDfr = null;
                            resolve(null);
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, this.fn(result.value, result.index)];
                    case 2:
                        _a._many = _b.sent();
                        this._index = -1;
                        this._mapDfr = null;
                        resolve(null);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return MapManyStream;
}(AlotProto_1.AlotProto));
exports.MapManyStream = MapManyStream;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_MapStream) && isObject(module.exports)) {
		Object.assign(_src_streams_MapStream, module.exports);
		return;
	}
	_src_streams_MapStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_TakeStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeWhileStreamAsync = exports.TakeWhileStream = exports.TakeStream = void 0;
var AlotProto_1 = _src_AlotProto;
var deco_1 = _src_utils_deco;
var r_1 = _src_utils_r;
var TakeStream = /** @class */ (function (_super) {
    __extends(TakeStream, _super);
    function TakeStream(stream, _count) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this._count = _count;
        _this._took = 0;
        return _this;
    }
    TakeStream.prototype.next = function () {
        if (++this._took > this._count) {
            return { value: null, done: true };
        }
        return this.stream.next();
    };
    TakeStream.prototype.reset = function () {
        this._took = 0;
        return _super.prototype.reset.call(this);
    };
    return TakeStream;
}(AlotProto_1.AlotProto));
exports.TakeStream = TakeStream;
var TakeWhileStream = /** @class */ (function (_super) {
    __extends(TakeWhileStream, _super);
    function TakeWhileStream(stream, fn) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this._took = false;
        return _this;
    }
    TakeWhileStream.prototype.next = function () {
        if (this._took === true) {
            return { done: true, value: null };
        }
        var result = this.stream.next();
        if (result.done) {
            return result;
        }
        if (this.fn(result.value, result.index) === false) {
            this._took = true;
            return this.next();
        }
        return result;
    };
    TakeWhileStream.prototype.reset = function () {
        this._took = false;
        return _super.prototype.reset.call(this);
    };
    return TakeWhileStream;
}(AlotProto_1.AlotProto));
exports.TakeWhileStream = TakeWhileStream;
var TakeWhileStreamAsync = /** @class */ (function (_super) {
    __extends(TakeWhileStreamAsync, _super);
    function TakeWhileStreamAsync(stream, fn) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this.isAsync = true;
        _this._took = false;
        _this.next = _this.nextAsync;
        return _this;
    }
    TakeWhileStreamAsync.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, b;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._took === true) {
                            return [2 /*return*/, r_1.r_DONE];
                        }
                        return [4 /*yield*/, this.stream.next()];
                    case 1:
                        result = _a.sent();
                        if (result.done === true) {
                            return [2 /*return*/, result];
                        }
                        return [4 /*yield*/, this.fn(result.value, result.index)];
                    case 2:
                        b = _a.sent();
                        if (Boolean(b) === false) {
                            this._took = true;
                            return [2 /*return*/, r_1.r_DONE];
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    TakeWhileStreamAsync.prototype.reset = function () {
        this._took = false;
        return _super.prototype.reset.call(this);
    };
    __decorate([
        deco_1.Deco.queued()
    ], TakeWhileStreamAsync.prototype, "nextAsync", null);
    return TakeWhileStreamAsync;
}(AlotProto_1.AlotProto));
exports.TakeWhileStreamAsync = TakeWhileStreamAsync;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_TakeStream) && isObject(module.exports)) {
		Object.assign(_src_streams_TakeStream, module.exports);
		return;
	}
	_src_streams_TakeStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_SkipStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipWhileStreamAsync = exports.SkipWhileStream = exports.SkipStream = void 0;
var AlotProto_1 = _src_AlotProto;
var deco_1 = _src_utils_deco;
var SkipStream = /** @class */ (function (_super) {
    __extends(SkipStream, _super);
    function SkipStream(stream, _count) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this._count = _count;
        _this._skipped = 0;
        return _this;
    }
    SkipStream.prototype.next = function () {
        while (++this._skipped <= this._count) {
            var skip = this.stream.next();
            if (skip.done) {
                return skip;
            }
            continue;
        }
        return this.stream.next();
    };
    SkipStream.prototype.reset = function () {
        this._skipped = 0;
        return _super.prototype.reset.call(this);
    };
    return SkipStream;
}(AlotProto_1.AlotProto));
exports.SkipStream = SkipStream;
var SkipWhileStream = /** @class */ (function (_super) {
    __extends(SkipWhileStream, _super);
    function SkipWhileStream(stream, fn) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this._skipped = false;
        return _this;
    }
    SkipWhileStream.prototype.next = function () {
        while (this._skipped === false) {
            var result = this.stream.next();
            if (result.done) {
                return result;
            }
            if (this.fn(result.value, result.index)) {
                continue;
            }
            this._skipped = true;
            return result;
        }
        return this.stream.next();
    };
    SkipWhileStream.prototype.reset = function () {
        this._skipped = false;
        return _super.prototype.reset.call(this);
    };
    return SkipWhileStream;
}(AlotProto_1.AlotProto));
exports.SkipWhileStream = SkipWhileStream;
var SkipWhileStreamAsync = /** @class */ (function (_super) {
    __extends(SkipWhileStreamAsync, _super);
    function SkipWhileStreamAsync(stream, fn) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this.isAsync = true;
        _this._skipped = false;
        _this.next = _this.nextAsync;
        return _this;
    }
    // No matter how many streams do we have, ensure we call this no simultanously
    SkipWhileStreamAsync.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, b;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._skipped === false)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.stream.next()];
                    case 1:
                        result = _a.sent();
                        if (result.done === true) {
                            return [2 /*return*/, result];
                        }
                        return [4 /*yield*/, this.fn(result.value, result.index)];
                    case 2:
                        b = _a.sent();
                        if (Boolean(b) === true) {
                            return [3 /*break*/, 0];
                        }
                        this._skipped = true;
                        return [2 /*return*/, result];
                    case 3: return [2 /*return*/, this.stream.next()];
                }
            });
        });
    };
    SkipWhileStreamAsync.prototype.reset = function () {
        this._skipped = false;
        return _super.prototype.reset.call(this);
    };
    __decorate([
        deco_1.Deco.queued()
    ], SkipWhileStreamAsync.prototype, "nextAsync", null);
    return SkipWhileStreamAsync;
}(AlotProto_1.AlotProto));
exports.SkipWhileStreamAsync = SkipWhileStreamAsync;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_SkipStream) && isObject(module.exports)) {
		Object.assign(_src_streams_SkipStream, module.exports);
		return;
	}
	_src_streams_SkipStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_GroupStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStream = void 0;
var AlotProto_1 = _src_AlotProto;
var GroupByStream = /** @class */ (function (_super) {
    __extends(GroupByStream, _super);
    function GroupByStream(stream, fn) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this.isAsync = false;
        _this.groups = null;
        _this.hash = null;
        _this.index = -1;
        return _this;
    }
    GroupByStream.prototype.next = function () {
        if (this.groups) {
            if (++this.index >= this.groups.length) {
                return { done: true, value: null };
            }
            return {
                done: false,
                index: this.index,
                value: this.groups[this.index]
            };
        }
        this.groups = [];
        this.hash = Object.create(null);
        while (true) {
            var result = this.stream.next();
            if (result.done === true) {
                break;
            }
            var keyVal = this.fn(result.value, result.index);
            var key = String(keyVal);
            var arr = this.hash[key];
            if (arr == null) {
                arr = this.hash[key] = [];
                this.groups.push({
                    key: keyVal,
                    values: arr
                });
            }
            arr.push(result.value);
        }
        return this.next();
    };
    GroupByStream.prototype.reset = function () {
        this.index = -1;
        return _super.prototype.reset.call(this);
    };
    return GroupByStream;
}(AlotProto_1.AlotProto));
exports.GroupByStream = GroupByStream;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_GroupStream) && isObject(module.exports)) {
		Object.assign(_src_streams_GroupStream, module.exports);
		return;
	}
	_src_streams_GroupStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_DistinctStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistinctByStream = void 0;
var AlotProto_1 = _src_AlotProto;
var DistinctByStream = /** @class */ (function (_super) {
    __extends(DistinctByStream, _super);
    function DistinctByStream(stream, fn) {
        if (fn === void 0) { fn = null; }
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this._track = new Track;
        _this._index = -1;
        return _this;
    }
    DistinctByStream.prototype.next = function () {
        while (true) {
            var result = this.stream.next();
            if (result.done === true) {
                return result;
            }
            var key = this.fn != null
                ? this.fn(result.value, result.index)
                : result.value;
            if (this._track.isUnique(key) === false) {
                continue;
            }
            return result;
        }
    };
    DistinctByStream.prototype.reset = function () {
        this._index = -1;
        this._track = new Track;
        return _super.prototype.reset.call(this);
    };
    return DistinctByStream;
}(AlotProto_1.AlotProto));
exports.DistinctByStream = DistinctByStream;
var Track = /** @class */ (function () {
    function Track() {
        this._hash = Object.create(null);
    }
    Track.prototype.isUnique = function (mix) {
        if (mix == null || typeof mix !== 'object') {
            if (mix in this._hash) {
                return false;
            }
            this._hash[mix] = 1;
            return true;
        }
        if (this._map == null) {
            this._map = new Map();
        }
        if (this._map.has(mix)) {
            return false;
        }
        this._map.set(mix, 1);
        return true;
    };
    return Track;
}());
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_DistinctStream) && isObject(module.exports)) {
		Object.assign(_src_streams_DistinctStream, module.exports);
		return;
	}
	_src_streams_DistinctStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_ForEachStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForEachStream = void 0;
var AlotProto_1 = _src_AlotProto;
var ForEachStream = /** @class */ (function (_super) {
    __extends(ForEachStream, _super);
    function ForEachStream(stream, fn, opts) {
        var _this = _super.call(this, stream, opts) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this._index = 0;
        return _this;
    }
    ForEachStream.prototype.next = function () {
        if (this.isAsync === true) {
            return this.nextAsync();
        }
        var result = this.stream.next();
        if (result.done) {
            return result;
        }
        this.fn(result.value, this._index++);
        return result;
    };
    ForEachStream.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stream.nextAsync()];
                    case 1:
                        item = _a.sent();
                        if (item.done) {
                            //* skipped extra-object
                            item.value = null;
                            return [2 /*return*/, item];
                        }
                        return [4 /*yield*/, this.fn(item.value, this._index++)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                value: item.value,
                                done: false
                            }];
                }
            });
        });
    };
    ForEachStream.prototype.reset = function () {
        this._index = 0;
        return _super.prototype.reset.call(this);
    };
    return ForEachStream;
}(AlotProto_1.AlotProto));
exports.ForEachStream = ForEachStream;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_ForEachStream) && isObject(module.exports)) {
		Object.assign(_src_streams_ForEachStream, module.exports);
		return;
	}
	_src_streams_ForEachStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_arr;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr_last = void 0;
function arr_last(arr) {
    if (arr == null || arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1];
}
exports.arr_last = arr_last;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_arr) && isObject(module.exports)) {
		Object.assign(_src_utils_arr, module.exports);
		return;
	}
	_src_utils_arr = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_ForkStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForkStreamOuter = exports.ForkStreamInner = void 0;
var AlotProto_1 = _src_AlotProto;
var arr_1 = _src_utils_arr;
var ForkStreamInner = /** @class */ (function (_super) {
    __extends(ForkStreamInner, _super);
    function ForkStreamInner(stream, fn) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this._cached = [];
        return _this;
    }
    ForkStreamInner.prototype.next = function () {
        if (this.isAsync) {
            return this.nextAsync();
        }
        var last = arr_1.arr_last(this._cached);
        if (last === null || last === void 0 ? void 0 : last.done) {
            return last;
        }
        var result = this.stream.next();
        this._cached.push(result);
        return result;
    };
    ForkStreamInner.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var last, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        last = arr_1.arr_last(this._cached);
                        if (last === null || last === void 0 ? void 0 : last.done) {
                            return [2 /*return*/, last];
                        }
                        return [4 /*yield*/, this.stream.nextAsync()];
                    case 1:
                        result = _a.sent();
                        this._cached.push(result);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ForkStreamInner.prototype.reset = function () {
        this._cached = [];
        return _super.prototype.reset.call(this);
    };
    ForkStreamInner.prototype.pluck = function () {
        return this.fn(this);
    };
    ForkStreamInner.prototype.has = function (i) {
        return i < this._cached.length;
    };
    ForkStreamInner.prototype.get = function (i) {
        return this._cached[i];
    };
    return ForkStreamInner;
}(AlotProto_1.AlotProto));
exports.ForkStreamInner = ForkStreamInner;
var ForkStreamOuter = /** @class */ (function (_super) {
    __extends(ForkStreamOuter, _super);
    function ForkStreamOuter(stream, inner) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.inner = inner;
        _this._index = 0;
        _this._plucked = false;
        return _this;
    }
    ForkStreamOuter.prototype.next = function () {
        if (this.isAsync) {
            return this.nextAsync();
        }
        if (this._plucked === false) {
            this._plucked = true;
            this.inner.pluck();
        }
        if (this.inner.has(this._index)) {
            var result = this.inner.get(this._index);
            if (result.done !== true) {
                this._index++;
            }
            return result;
        }
        return this.stream.next();
    };
    ForkStreamOuter.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._plucked === false)) return [3 /*break*/, 2];
                        this._plucked = true;
                        return [4 /*yield*/, this.inner.pluck()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (this.inner.has(this._index)) {
                            result = this.inner.get(this._index);
                            if (result.done !== true) {
                                this._index++;
                            }
                            return [2 /*return*/, result];
                        }
                        return [2 /*return*/, this.stream.nextAsync()];
                }
            });
        });
    };
    ForkStreamOuter.prototype.reset = function () {
        this._index = 0;
        return _super.prototype.reset.call(this);
    };
    return ForkStreamOuter;
}(AlotProto_1.AlotProto));
exports.ForkStreamOuter = ForkStreamOuter;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_ForkStream) && isObject(module.exports)) {
		Object.assign(_src_streams_ForkStream, module.exports);
		return;
	}
	_src_streams_ForkStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_obj;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj_getProperty = void 0;
function obj_getProperty(obj_, path) {
    if (obj_ == null) {
        return null;
    }
    if (path.indexOf('.') === -1) {
        return obj_[path];
    }
    var obj = obj_;
    var chain = path.split('.');
    var imax = chain.length;
    var i = -1;
    while (obj != null && ++i < imax) {
        var key = chain[i];
        obj = obj[key];
    }
    return obj;
}
exports.obj_getProperty = obj_getProperty;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_obj) && isObject(module.exports)) {
		Object.assign(_src_utils_obj, module.exports);
		return;
	}
	_src_utils_obj = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_SortedStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortByLocalCompareStream = exports.SortByStream = void 0;
var AlotProto_1 = _src_AlotProto;
var obj_1 = _src_utils_obj;
var SortByStream = /** @class */ (function (_super) {
    __extends(SortByStream, _super);
    // constructor(stream: IAlotStream<T>, sortByFn: SortMethod<T>, direction?: 'asc' | 'desc')
    // constructor(stream: IAlotStream<T>, sortByKey: string, direction?: 'asc' | 'desc')
    function SortByStream(stream, mix, direction) {
        if (direction === void 0) { direction = 'asc'; }
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.direction = direction;
        _this.isAsync = false;
        _this.arr = null;
        _this.index = -1;
        if (typeof mix === 'string') {
            var path_1 = mix;
            _this.sortByFn = function (x) { return obj_1.obj_getProperty(x, path_1); };
        }
        else {
            _this.sortByFn = mix;
        }
        return _this;
    }
    SortByStream.prototype.next = function () {
        var _this = this;
        if (this.arr) {
            if (++this.index >= this.arr.length) {
                return { done: true, value: null };
            }
            return {
                done: false,
                index: this.index,
                value: this.arr[this.index]
            };
        }
        this.arr = [];
        while (true) {
            var result_1 = this.stream.next();
            if (result_1.done === true) {
                break;
            }
            this.arr.push(result_1.value);
        }
        var mapped = [];
        for (var i = 0; i < this.arr.length; i++) {
            mapped[i] = {
                i: i,
                key: this.sortByFn(this.arr[i], i),
                val: this.arr[i]
            };
        }
        ;
        mapped.sort(function (a, b) {
            if (a.key === b.key) {
                return 0;
            }
            if (a.key < b.key) {
                return _this.direction === 'asc' ? -1 : 1;
            }
            return _this.direction === 'asc' ? 1 : -1;
        });
        var result = [];
        for (var i = 0; i < mapped.length; i++) {
            result[i] = mapped[i].val;
        }
        this.arr = result;
        return this.next();
    };
    SortByStream.prototype.reset = function () {
        this.index = -1;
        this.arr = null;
        return _super.prototype.reset.call(this);
    };
    return SortByStream;
}(AlotProto_1.AlotProto));
exports.SortByStream = SortByStream;
var SortByLocalCompareStream = /** @class */ (function (_super) {
    __extends(SortByLocalCompareStream, _super);
    // constructor(stream: IAlotStream<T>, sortByFn: SortMethod<T>, direction?: 'asc' | 'desc')
    // constructor(stream: IAlotStream<T>, sortByKey: string, direction?: 'asc' | 'desc')
    function SortByLocalCompareStream(stream, getValue, direction, params) {
        if (direction === void 0) { direction = 'asc'; }
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.getValue = getValue;
        _this.direction = direction;
        _this.params = params;
        _this.isAsync = false;
        _this.arr = null;
        _this.index = -1;
        return _this;
    }
    SortByLocalCompareStream.prototype.next = function () {
        var _this = this;
        if (this.arr) {
            if (++this.index >= this.arr.length) {
                return { done: true, value: null };
            }
            return {
                done: false,
                index: this.index,
                value: this.arr[this.index]
            };
        }
        this.arr = [];
        while (true) {
            var result_2 = this.stream.next();
            if (result_2.done === true) {
                break;
            }
            this.arr.push(result_2.value);
        }
        var mapped = [];
        for (var i = 0; i < this.arr.length; i++) {
            mapped[i] = {
                i: i,
                key: this.getValue(this.arr[i], i),
                val: this.arr[i]
            };
        }
        ;
        mapped.sort(function (a, b) {
            var _a;
            var x = (_a = a.key).localeCompare.apply(_a, __spreadArrays([b.key], _this.params));
            if (_this.direction === 'asc') {
                return x;
            }
            return x * -1;
        });
        var result = [];
        for (var i = 0; i < mapped.length; i++) {
            result[i] = mapped[i].val;
        }
        this.arr = result;
        return this.next();
    };
    SortByLocalCompareStream.prototype.reset = function () {
        this.index = -1;
        this.arr = null;
        return _super.prototype.reset.call(this);
    };
    return SortByLocalCompareStream;
}(AlotProto_1.AlotProto));
exports.SortByLocalCompareStream = SortByLocalCompareStream;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_SortedStream) && isObject(module.exports)) {
		Object.assign(_src_streams_SortedStream, module.exports);
		return;
	}
	_src_streams_SortedStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_JoinStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapManyStream = exports.JoinStream = void 0;
var AlotProto_1 = _src_AlotProto;
var r_1 = _src_utils_r;
var JoinStream = /** @class */ (function (_super) {
    __extends(JoinStream, _super);
    function JoinStream(stream, inner, fnKeyOuter, fnKeyInner, joinFn, joinType, opts) {
        var _this = _super.call(this, stream, opts) || this;
        _this.stream = stream;
        _this.inner = inner;
        _this.fnKeyOuter = fnKeyOuter;
        _this.fnKeyInner = fnKeyInner;
        _this.joinFn = joinFn;
        _this.joinType = joinType;
        _this._index = 0;
        _this._innerExtra = null;
        _this._innerExtraIndex = 0;
        _this._innerHash = null;
        _this._innerHashTook = Object.create(null);
        return _this;
    }
    JoinStream.prototype.next = function () {
        var _this = this;
        if (this.isAsync) {
            return this.nextAsync();
        }
        if (this._innerExtra != null) {
            if (this._innerExtraIndex >= this._innerExtra.length) {
                return r_1.r_DONE;
            }
            var x = this._innerExtra[this._innerExtraIndex++];
            var result_1 = this.joinFn(null, x);
            return { done: false, value: result_1, index: this._index++ };
        }
        ;
        var result = this.stream.next();
        if (result.done) {
            if (this.joinType === 'inner') {
                return r_1.r_DONE;
            }
            this._innerExtra = this.inner.filter(function (x) { return _this.fnKeyInner(x) in _this._innerHashTook === false; });
            return this.next();
        }
        if (this._innerHash == null) {
            this._ensureInnerHash();
        }
        var outerKey = this.fnKeyOuter(result.value);
        var innerVal = this._innerHash[outerKey];
        if (innerVal == null) {
            if (this.joinType === 'inner') {
                return this.next();
            }
        }
        else {
            this._innerHashTook[outerKey] = 1;
        }
        var val = this.joinFn(result.value, innerVal);
        return {
            value: val,
            done: false,
            index: ++this._index
        };
    };
    JoinStream.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error('Joins on async stream are not supported yet');
            });
        });
    };
    JoinStream.prototype.reset = function () {
        this._index = 0;
        this._innerExtra = null;
        this._innerExtraIndex = 0;
        this._innerHash = null;
        this._innerHashTook = Object.create(null);
        return _super.prototype.reset.call(this);
    };
    JoinStream.prototype._ensureInnerHash = function () {
        var hash = Object.create(null);
        for (var i = 0; i < this.inner.length; i++) {
            var x = this.inner[i];
            var key = this.fnKeyInner(x);
            // @TOOD if should check if key already exists
            hash[key] = x;
        }
        this._innerHash = hash;
    };
    return JoinStream;
}(AlotProto_1.AlotProto));
exports.JoinStream = JoinStream;
var MapManyStream = /** @class */ (function (_super) {
    __extends(MapManyStream, _super);
    function MapManyStream(stream, fn, opts) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this.opts = opts;
        _this._index = -1;
        _this._many = null;
        _this._mapDfr = null;
        _this._done = false;
        _this.isAsync = stream.isAsync || opts && opts.async;
        return _this;
    }
    MapManyStream.prototype.next = function () {
        if (this.opts != null && this.opts.async) {
            return this.nextAsync();
        }
        if (this._many != null && this._index < this._many.length - 1) {
            var x = this._many[++this._index];
            return { done: false, value: x };
        }
        var result = this.stream.next();
        if (result.done) {
            return result;
        }
        this._many = this.fn(result.value, result.index);
        this._index = -1;
        return this.next();
    };
    MapManyStream.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._done === true) {
                            return [2 /*return*/, r_1.r_DONE];
                        }
                        if (this._many != null && this._index < this._many.length - 1) {
                            x = this._many[++this._index];
                            return [2 /*return*/, { done: false, value: x }];
                        }
                        if (this._mapDfr == null) {
                            this._doMapAsync();
                        }
                        return [4 /*yield*/, this._mapDfr];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.nextAsync()];
                }
            });
        });
    };
    MapManyStream.prototype.reset = function () {
        this._many = null;
        this._done = false;
        this._mapDfr = null;
        this._index = -1;
        return _super.prototype.reset.call(this);
    };
    MapManyStream.prototype._doMapAsync = function () {
        var _this = this;
        return this._mapDfr = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.stream.next()];
                    case 1:
                        result = _b.sent();
                        if (result.done) {
                            this._done = true;
                            resolve(null);
                        }
                        _a = this;
                        return [4 /*yield*/, this.fn(result.value, result.index)];
                    case 2:
                        _a._many = _b.sent();
                        this._index = -1;
                        this._mapDfr = null;
                        resolve(null);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return MapManyStream;
}(AlotProto_1.AlotProto));
exports.MapManyStream = MapManyStream;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_JoinStream) && isObject(module.exports)) {
		Object.assign(_src_streams_JoinStream, module.exports);
		return;
	}
	_src_streams_JoinStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_exports;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IAlotStream_1 = _src_streams_IAlotStream;
Object.defineProperty(exports, "IAlotStream", { enumerable: true, get: function () { return IAlotStream_1.IAlotStream; } });
Object.defineProperty(exports, "AlotStreamIterationResult", { enumerable: true, get: function () { return IAlotStream_1.AlotStreamIterationResult; } });
var FilterStream_1 = _src_streams_FilterStream;
Object.defineProperty(exports, "FilterStream", { enumerable: true, get: function () { return FilterStream_1.FilterStream; } });
Object.defineProperty(exports, "FilterStreamAsync", { enumerable: true, get: function () { return FilterStream_1.FilterStreamAsync; } });
var MapStream_1 = _src_streams_MapStream;
Object.defineProperty(exports, "MapStream", { enumerable: true, get: function () { return MapStream_1.MapStream; } });
Object.defineProperty(exports, "MapManyStream", { enumerable: true, get: function () { return MapStream_1.MapManyStream; } });
Object.defineProperty(exports, "MethodMap", { enumerable: true, get: function () { return MapStream_1.MethodMap; } });
Object.defineProperty(exports, "MethodMapMany", { enumerable: true, get: function () { return MapStream_1.MethodMapMany; } });
var TakeStream_1 = _src_streams_TakeStream;
Object.defineProperty(exports, "TakeStream", { enumerable: true, get: function () { return TakeStream_1.TakeStream; } });
Object.defineProperty(exports, "TakeWhileStream", { enumerable: true, get: function () { return TakeStream_1.TakeWhileStream; } });
Object.defineProperty(exports, "TakeWhileStreamAsync", { enumerable: true, get: function () { return TakeStream_1.TakeWhileStreamAsync; } });
Object.defineProperty(exports, "TakeWhileMethod", { enumerable: true, get: function () { return TakeStream_1.TakeWhileMethod; } });
Object.defineProperty(exports, "TakeWhileMethodAsync", { enumerable: true, get: function () { return TakeStream_1.TakeWhileMethodAsync; } });
var SkipStream_1 = _src_streams_SkipStream;
Object.defineProperty(exports, "SkipStream", { enumerable: true, get: function () { return SkipStream_1.SkipStream; } });
Object.defineProperty(exports, "SkipWhileMethod", { enumerable: true, get: function () { return SkipStream_1.SkipWhileMethod; } });
Object.defineProperty(exports, "SkipWhileMethodAsync", { enumerable: true, get: function () { return SkipStream_1.SkipWhileMethodAsync; } });
Object.defineProperty(exports, "SkipWhileStream", { enumerable: true, get: function () { return SkipStream_1.SkipWhileStream; } });
Object.defineProperty(exports, "SkipWhileStreamAsync", { enumerable: true, get: function () { return SkipStream_1.SkipWhileStreamAsync; } });
var GroupStream_1 = _src_streams_GroupStream;
Object.defineProperty(exports, "GroupByKeyFn", { enumerable: true, get: function () { return GroupStream_1.GroupByKeyFn; } });
Object.defineProperty(exports, "GroupByStream", { enumerable: true, get: function () { return GroupStream_1.GroupByStream; } });
var DistinctStream_1 = _src_streams_DistinctStream;
Object.defineProperty(exports, "DistinctByKeyFn", { enumerable: true, get: function () { return DistinctStream_1.DistinctByKeyFn; } });
Object.defineProperty(exports, "DistinctByStream", { enumerable: true, get: function () { return DistinctStream_1.DistinctByStream; } });
var ForEachStream_1 = _src_streams_ForEachStream;
Object.defineProperty(exports, "ForEachStream", { enumerable: true, get: function () { return ForEachStream_1.ForEachStream; } });
Object.defineProperty(exports, "ForEachMethod", { enumerable: true, get: function () { return ForEachStream_1.ForEachMethod; } });
var ForkStream_1 = _src_streams_ForkStream;
Object.defineProperty(exports, "ForkStreamInner", { enumerable: true, get: function () { return ForkStream_1.ForkStreamInner; } });
Object.defineProperty(exports, "ForkStreamOuter", { enumerable: true, get: function () { return ForkStream_1.ForkStreamOuter; } });
var SortedStream_1 = _src_streams_SortedStream;
Object.defineProperty(exports, "SortByStream", { enumerable: true, get: function () { return SortedStream_1.SortByStream; } });
Object.defineProperty(exports, "SortMethod", { enumerable: true, get: function () { return SortedStream_1.SortMethod; } });
Object.defineProperty(exports, "SortByLocalCompareStream", { enumerable: true, get: function () { return SortedStream_1.SortByLocalCompareStream; } });
var JoinStream_1 = _src_streams_JoinStream;
Object.defineProperty(exports, "JoinStream", { enumerable: true, get: function () { return JoinStream_1.JoinStream; } });
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_exports) && isObject(module.exports)) {
		Object.assign(_src_streams_exports, module.exports);
		return;
	}
	_src_streams_exports = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_classify;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FnPrototypeAlias = exports.Classify = void 0;
function Classify(Ctor) {
    var Class = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new (Ctor.bind.apply(Ctor, __spreadArrays([void 0], args)))();
    };
    Class.prototype = Ctor.prototype;
    forIn(Ctor, function (key) {
        if (key in Class === false) {
            Class[key] = Ctor[key];
        }
    });
    return Class;
}
exports.Classify = Classify;
function FnPrototypeAlias(Ctor) {
    Ctor.fn = Ctor.prototype;
    return Ctor;
}
exports.FnPrototypeAlias = FnPrototypeAlias;
function forIn(obj, cb) {
    var hash = Object.create(null);
    var cursor = obj;
    do {
        var props = Object.getOwnPropertyNames(cursor);
        for (var i = 0; i < props.length; i++) {
            var key = props[i];
            if (key in hash === false) {
                cb(key);
            }
            hash[key] = null;
        }
    } while (cursor = Object.getPrototypeOf(cursor));
}
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_classify) && isObject(module.exports)) {
		Object.assign(_src_utils_classify, module.exports);
		return;
	}
	_src_utils_classify = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_alot;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayStream = exports.Alot = void 0;
_src_streams_exports;
var AlotProto_1 = _src_AlotProto;
var Alot = /** @class */ (function (_super) {
    __extends(Alot, _super);
    function Alot(array, meta) {
        var _this = _super.call(this, new ArrayStream(array)) || this;
        _this.array = array;
        _this.meta = meta;
        return _this;
    }
    Alot.fromObject = function (obj) {
        var arr = Object.keys(obj).map(function (key) {
            return { key: key, value: obj[key] };
        });
        return new Alot(arr);
    };
    Alot.fromRange = function (start, endExcluded) {
        var arr = new Array(endExcluded - start);
        for (var i = start; i < endExcluded; i++) {
            arr[i - start] = i;
        }
        return new Alot(arr);
    };
    return Alot;
}(AlotProto_1.AlotProto));
exports.Alot = Alot;
var ArrayStream = /** @class */ (function () {
    function ArrayStream(array) {
        this.array = array;
        this.isAsync = false;
        this.index = -1;
    }
    ArrayStream.prototype.next = function () {
        while (++this.index < this.array.length) {
            var x = this.array[this.index];
            return { value: x, done: false, index: this.index };
        }
        return { value: null, done: true, index: this.index };
    };
    ArrayStream.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.next()];
            });
        });
    };
    ArrayStream.prototype.reset = function () {
        this.index = -1;
        return this;
    };
    return ArrayStream;
}());
exports.ArrayStream = ArrayStream;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_alot) && isObject(module.exports)) {
		Object.assign(_src_alot, module.exports);
		return;
	}
	_src_alot = module.exports;
}());
// end:source ./ModuleSimplified.js

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
_src_streams_exports;
var classify_1 = _src_utils_classify;
var alot_1 = _src_alot;
var Alot = /** @class */ (function (_super) {
    __extends(Alot, _super);
    function Alot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alot.Alot = alot_1.Alot;
    Alot.default = alot_1.Alot;
    Alot = __decorate([
        classify_1.Classify
    ], Alot);
    return Alot;
}(alot_1.Alot));
// Reapply already decorated Alot to default.
Alot.default = Alot;
Alot.Alot = Alot;
var alot = Alot;
module.exports = alot;

}));
// end:source ./UMD.js
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_node_modules_alot_lib_alot) && isObject(module.exports)) {
		Object.assign(_node_modules_alot_lib_alot, module.exports);
		return;
	}
	_node_modules_alot_lib_alot = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _node_modules_atma_utils_lib_utils;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	(function(factory){

	var owner, property;
	if (typeof module !== 'undefined' && module.exports) {
		owner = module;
		property = 'exports';
	}
	else {
		owner = window;
		property = 'Utils';
	}

	factory(owner, property);

}(function(owner, property){

    	var _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty;
	var is_Function,
	    is_Object,
	    is_Array,
	    is_ArrayLike,
	    is_String,
	    is_notEmptyString,
	    is_rawObject,
	    is_Date,
	    is_DOM,
	    is_NODE;
	(function(){
		is_Function = function (x) {
		    return typeof x === 'function';
		}
		is_Object = function (x) {
		    return x != null && typeof x === 'object';
		}
		is_Array = function (arr) {
		    return (arr != null &&
		        typeof arr === 'object' &&
		        typeof arr.length === 'number' &&
		        typeof arr.slice === 'function');
		}
		is_ArrayLike = is_Array;
		is_String = function (x) {
		    return typeof x === 'string';
		}
		is_notEmptyString = function (x) {
		    return typeof x === 'string' && x !== '';
		}
		is_rawObject = function (x) {
		    return x != null && typeof x === 'object' && x.constructor === Object;
		}
		is_Date = function (x) {
		    if (x == null || typeof x !== 'object') {
		        return false;
		    }
		    if (x.getFullYear != null && isNaN(x) === false) {
		        return true;
		    }
		    return false;
		}
		function is_PromiseLike(x) {
		    return x != null && typeof x === 'object' && typeof x.then === 'function';
		}
		function is_Observable(x) {
		    return x != null && typeof x === 'object' && typeof x.subscribe === 'function';
		}
		is_DOM = typeof window !== 'undefined' && window.navigator != null;
		is_NODE = !is_DOM;
		
	}());
	var obj_copyProperty,
	    obj_getProperty,
	    obj_setProperty,
	    obj_hasProperty,
	    obj_defineProperty,
	    obj_extend,
	    obj_extendDefaults,
	    obj_extendProperties,
	    obj_extendPropertiesDefaults,
	    obj_extendMany,
	    obj_create,
	    obj_defaults,
	    obj_clean,
	    obj_extendDescriptors;
	(function(){
		(function(){
			_Array_slice = Array.prototype.slice;
			var _Array_splice = Array.prototype.splice;
			var _Array_indexOf = Array.prototype.indexOf;
			var _Object_hasOwnProp = Object.hasOwnProperty;
			_Object_getOwnProp = Object.getOwnPropertyDescriptor;
			_Object_defineProperty = Object.defineProperty;
			var _global = typeof global !== 'undefined'
			    ? global
			    : window;
			var _document = typeof window !== 'undefined' && window.document != null
			    ? window.document
			    : null;
			
		}());
		var getDescriptor = Object.getOwnPropertyDescriptor;
		var defineDescriptor = Object.defineProperty;
		obj_copyProperty = getDescriptor == null
		    ? function (target, source, key) { return target[key] = source[key]; }
		    : function (target, source, key) {
		        var descr = getDescriptor(source, key);
		        if (descr == null) {
		            target[key] = source[key];
		            return;
		        }
		        if (descr.value !== void 0) {
		            target[key] = descr.value;
		            return;
		        }
		        defineDescriptor(target, key, descr);
		    };
		
		obj_getProperty = function (obj_, path) {
		    if (obj_ == null) {
		        return null;
		    }
		    if (path.indexOf('.') === -1) {
		        return obj_[path];
		    }
		    var obj = obj_, chain = path.split('.'), imax = chain.length, i = -1;
		    while (obj != null && ++i < imax) {
		        var key = chain[i];
		        if (key.charCodeAt(key.length - 1) === 63 /*?*/) {
		            key = key.slice(0, -1);
		        }
		        obj = obj[key];
		    }
		    return obj;
		}
		;
		obj_setProperty = function (obj_, path, val) {
		    if (path.indexOf('.') === -1) {
		        obj_[path] = val;
		        return;
		    }
		    var obj = obj_, chain = path.split('.'), imax = chain.length - 1, i = -1, key;
		    while (++i < imax) {
		        key = chain[i];
		        if (key.charCodeAt(key.length - 1) === 63 /*?*/) {
		            key = key.slice(0, -1);
		        }
		        var x = obj[key];
		        if (x == null) {
		            x = obj[key] = {};
		        }
		        obj = x;
		    }
		    obj[chain[i]] = val;
		}
		;
		obj_hasProperty = function (obj, path) {
		    var x = obj_getProperty(obj, path);
		    return x !== void 0;
		}
		;
		obj_defineProperty = function (obj, path, dscr) {
		    var x = obj, chain = path.split('.'), imax = chain.length - 1, i = -1, key;
		    while (++i < imax) {
		        key = chain[i];
		        if (x[key] == null)
		            x[key] = {};
		        x = x[key];
		    }
		    key = chain[imax];
		    if (_Object_defineProperty) {
		        if (dscr.writable === void 0)
		            dscr.writable = true;
		        if (dscr.configurable === void 0)
		            dscr.configurable = true;
		        if (dscr.enumerable === void 0)
		            dscr.enumerable = true;
		        _Object_defineProperty(x, key, dscr);
		        return;
		    }
		    x[key] = dscr.value === void 0
		        ? dscr.value
		        : (dscr.get && dscr.get());
		}
		;
		obj_extend = function (a, b) {
		    if (b == null)
		        return a || {};
		    if (a == null)
		        return obj_create(b);
		    for (var key in b) {
		        a[key] = b[key];
		    }
		    return a;
		}
		;
		obj_extendDefaults = function (a, b) {
		    if (b == null)
		        return a || {};
		    if (a == null)
		        return obj_create(b);
		    for (var key in b) {
		        if (a[key] == null) {
		            a[key] = b[key];
		            continue;
		        }
		        if (key === 'toString' && a[key] === Object.prototype.toString) {
		            a[key] = b[key];
		        }
		    }
		    return a;
		}
		var extendPropertiesFactory = function (overwriteProps) {
		    if (_Object_getOwnProp == null)
		        return overwriteProps ? obj_extend : obj_extendDefaults;
		    return function (a, b) {
		        if (b == null)
		            return a || {};
		        if (a == null)
		            return obj_create(b);
		        var key, descr, ownDescr;
		        for (key in b) {
		            descr = _Object_getOwnProp(b, key);
		            if (descr == null)
		                continue;
		            if (overwriteProps !== true) {
		                ownDescr = _Object_getOwnProp(a, key);
		                if (ownDescr != null) {
		                    continue;
		                }
		            }
		            if (descr.hasOwnProperty('value')) {
		                a[key] = descr.value;
		                continue;
		            }
		            _Object_defineProperty(a, key, descr);
		        }
		        return a;
		    };
		};
		obj_extendProperties = extendPropertiesFactory(true);
		obj_extendPropertiesDefaults = extendPropertiesFactory(false);
		obj_extendMany = function (a, arg1, arg2, arg3, arg4, arg5, arg6) {
		    var imax = arguments.length, i = 1;
		    for (; i < imax; i++) {
		        a = obj_extend(a, arguments[i]);
		    }
		    return a;
		}
		;
		function obj_toFastProps(obj) {
		    /*jshint -W027*/
		    function F() { }
		    F.prototype = obj;
		    new F();
		    return;
		    eval(obj);
		}
		;
		var _Object_create = Object.create || function (x) {
		    var Ctor = function () { };
		    Ctor.prototype = x;
		    return new Ctor;
		};
		obj_create = _Object_create;
		obj_defaults = function (target, defaults) {
		    for (var key in defaults) {
		        if (target[key] == null)
		            target[key] = defaults[key];
		    }
		    return target;
		}
		/**
		 * Remove all NULL properties, optionally also all falsy-ies
		 */
		obj_clean = function (json, opts) {
		    var _a;
		    if (opts === void 0) { opts = {
		        removePrivate: false,
		        skipProperties: null,
		        removeEmptyArrays: false,
		        removeFalsy: false
		    }; }
		    if (json == null || typeof json !== 'object') {
		        return json;
		    }
		    if (is_ArrayLike(json)) {
		        var arr = json;
		        var i = 0;
		        var notNullIndex = -1;
		        for (; i < arr.length; i++) {
		            var val = arr[i];
		            if (val != null) {
		                notNullIndex = i;
		            }
		            obj_clean(val, opts);
		        }
		        // clean all last nullable values
		        if (notNullIndex + 1 < arr.length) {
		            arr.splice(notNullIndex + 1);
		        }
		        return json;
		    }
		    if (is_Object(json)) {
		        for (var key in json) {
		            if (opts.skipProperties != null && key in opts.skipProperties) {
		                delete json[key];
		                continue;
		            }
		            if (opts.ignoreProperties != null && key in opts.ignoreProperties) {
		                continue;
		            }
		            if (opts.removePrivate === true && key[0] === '_') {
		                delete json[key];
		                continue;
		            }
		            var val = json[key];
		            if ((_a = opts.shouldRemove) === null || _a === void 0 ? void 0 : _a.call(opts, key, val)) {
		                delete json[key];
		                continue;
		            }
		            if (isDefault(val, opts)) {
		                if (opts.strictProperties != null && key in opts.strictProperties && val != null) {
		                    continue;
		                }
		                delete json[key];
		                continue;
		            }
		            if (opts.deep !== false) {
		                obj_clean(val, opts);
		            }
		            if (opts.removeEmptyArrays && is_ArrayLike(val) && val.length === 0) {
		                delete json[key];
		            }
		        }
		        return json;
		    }
		    return json;
		}
		function isDefault(x, opts) {
		    if (x == null) {
		        return true;
		    }
		    if (opts.removeFalsy && (x === '' || x === false)) {
		        return true;
		    }
		    if (opts.removeEmptyArrays && is_ArrayLike(x) && x.length === 0) {
		        return true;
		    }
		    return false;
		}
		obj_extendDescriptors;
		var obj_extendDescriptorsDefaults;
		(function () {
		    if (getDescriptor == null) {
		        obj_extendDescriptors = obj_extend;
		        obj_extendDescriptorsDefaults = obj_defaults;
		        return;
		    }
		    obj_extendDescriptors = function (target, source) {
		        return _extendDescriptors(target, source, false);
		    };
		    obj_extendDescriptorsDefaults = function (target, source) {
		        return _extendDescriptors(target, source, true);
		    };
		    function _extendDescriptors(target, source, defaultsOnly) {
		        if (target == null)
		            return {};
		        if (source == null)
		            return source;
		        var descr, key;
		        for (key in source) {
		            if (defaultsOnly === true && target[key] != null)
		                continue;
		            descr = getDescriptor(source, key);
		            if (descr == null) {
		                obj_extendDescriptors(target, source["__proto__"]);
		                continue;
		            }
		            if (descr.value !== void 0) {
		                target[key] = descr.value;
		                continue;
		            }
		            defineDescriptor(target, key, descr);
		        }
		        return target;
		    }
		})();
		
		
	}());
	var class_create,
	    class_createEx;
	(function(){
		;
		/**
		 * create([...Base], Proto)
		 * Base: Function | Object
		 * Proto: Object {
		 *    constructor: ?Function
		 *    ...
		 */
		class_create = createClassFactory(obj_extendDefaults);
		// with property accessor functions support
		class_createEx = createClassFactory(obj_extendPropertiesDefaults);
		function createClassFactory(extendDefaultsFn) {
		    return function (a, b, c, d, e, f, g, h) {
		        var args = _Array_slice.call(arguments), Proto = args.pop();
		        if (Proto == null)
		            Proto = {};
		        var Ctor;
		        if (Proto.hasOwnProperty('constructor')) {
		            Ctor = Proto.constructor;
		            if (Ctor.prototype === void 0) {
		                var es6Method = Ctor;
		                Ctor = function ClassCtor() {
		                    var imax = arguments.length, i = -1, args = new Array(imax);
		                    while (++i < imax)
		                        args[i] = arguments[i];
		                    return es6Method.apply(this, args);
		                };
		            }
		        }
		        else {
		            Ctor = function ClassCtor() { };
		        }
		        var i = args.length, BaseCtor, x;
		        while (--i > -1) {
		            x = args[i];
		            if (typeof x === 'function') {
		                BaseCtor = wrapFn(x, BaseCtor);
		                x = x.prototype;
		            }
		            extendDefaultsFn(Proto, x);
		        }
		        return createClass(wrapFn(BaseCtor, Ctor), Proto);
		    };
		}
		function createClass(Ctor, Proto) {
		    Proto.constructor = Ctor;
		    Ctor.prototype = Proto;
		    return Ctor;
		}
		function wrapFn(fnA, fnB) {
		    if (fnA == null) {
		        return fnB;
		    }
		    if (fnB == null) {
		        return fnA;
		    }
		    return function () {
		        var args = _Array_slice.call(arguments);
		        var x = fnA.apply(this, args);
		        if (x !== void 0)
		            return x;
		        return fnB.apply(this, args);
		    };
		}
		
	}());
	var arr_remove,
	    arr_each,
	    arr_indexOf,
	    arr_contains,
	    arr_pushMany;
	(function(){
		arr_remove = function (array, x) {
		    var i = array.indexOf(x);
		    if (i === -1)
		        return false;
		    array.splice(i, 1);
		    return true;
		}
		;
		arr_each = function (arr, fn, ctx) {
		    arr.forEach(fn, ctx);
		}
		;
		arr_indexOf = function (arr, x) {
		    return arr.indexOf(x);
		}
		;
		arr_contains = function (arr, x) {
		    return arr.indexOf(x) !== -1;
		}
		;
		arr_pushMany = function (arr, arrSource) {
		    if (arrSource == null || arr == null || arr === arrSource)
		        return;
		    var il = arr.length, jl = arrSource.length, j = -1;
		    while (++j < jl) {
		        arr[il + j] = arrSource[j];
		    }
		}
		;
		function arr_distinct(arr, compareFn) {
		    var out = [];
		    var hash = compareFn == null ? obj_create(null) : null;
		    outer: for (var i = 0; i < arr.length; i++) {
		        var x = arr[i];
		        if (compareFn == null) {
		            if (hash[x] === 1) {
		                continue;
		            }
		            hash[x] = 1;
		        }
		        else {
		            for (var j = i - 1; j > -1; j--) {
		                var prev = arr[j];
		                if (compareFn(x, prev)) {
		                    continue outer;
		                }
		            }
		        }
		        out.push(x);
		    }
		    return out;
		}
		
	}());
	var str_format,
	    str_dedent;
	(function(){
		str_format = function (str_, a, b, c, d) {
		    var str = str_, imax = arguments.length, i = 0, x;
		    while (++i < imax) {
		        x = arguments[i];
		        if (is_Object(x) && x.toJSON) {
		            x = x.toJSON();
		        }
		        str_ = str_.replace(rgxNum(i - 1), String(x));
		    }
		    return str_;
		}
		;
		str_dedent = function (str) {
		    var rgx = /^[\t ]*\S/gm, match = rgx.exec(str), count = -1;
		    while (match != null) {
		        var x = match[0].length;
		        if (count === -1 || x < count)
		            count = x;
		        match = rgx.exec(str);
		    }
		    if (--count < 1)
		        return str;
		    var replacer = new RegExp('^[\\t ]{1,' + count + '}', 'gm');
		    return str
		        .replace(replacer, '')
		        .replace(/^[\t ]*\r?\n/, '')
		        .replace(/\r?\n[\t ]*$/, '');
		}
		;
		var rgxNum;
		(function () {
		    rgxNum = function (num) {
		        return cache_[num] || (cache_[num] = new RegExp('\\{' + num + '\\}', 'g'));
		    };
		    var cache_ = {};
		}());
		
	}());
	var error_createClass;
	(function(){
		error_createClass = function (name, Proto, stackSliceFrom) {
		    var Ctor = _createCtor(Proto, stackSliceFrom);
		    Ctor.prototype = new Error;
		    Proto.constructor = Error;
		    Proto.name = name;
		    obj_extend(Ctor.prototype, Proto);
		    return Ctor;
		}
		;
		function error_formatSource(source, index, filename) {
		    var cursor = error_cursor(source, index), lines = cursor[0], lineNum = cursor[1], rowNum = cursor[2], str = '';
		    if (filename != null) {
		        str += str_format(' at {0}:{1}:{2}\n', filename, lineNum, rowNum);
		    }
		    return str + error_formatCursor(lines, lineNum, rowNum);
		}
		;
		/**
		 * @returns [ lines, lineNum, rowNum ]
		 */
		function error_cursor(str, index) {
		    var lines = str.substring(0, index).split('\n'), line = lines.length, row = index + 1 - lines.slice(0, line - 1).join('\n').length;
		    if (line > 1) {
		        // remove trailing newline
		        row -= 1;
		    }
		    return [str.split('\n'), line, row];
		}
		;
		function error_formatCursor(lines, lineNum, rowNum) {
		    var BEFORE = 3, AFTER = 2, i = lineNum - BEFORE, imax = i + BEFORE + AFTER, str = '';
		    if (i < 0)
		        i = 0;
		    if (imax > lines.length)
		        imax = lines.length;
		    var lineNumberLength = String(imax).length, lineNumber;
		    for (; i < imax; i++) {
		        if (str)
		            str += '\n';
		        lineNumber = ensureLength(i + 1, lineNumberLength);
		        str += lineNumber + '|' + lines[i];
		        if (i + 1 === lineNum) {
		            str += '\n' + repeat(' ', lineNumberLength + 1);
		            str += lines[i].substring(0, rowNum - 1).replace(/[^\s]/g, ' ');
		            str += '^';
		        }
		    }
		    return str;
		}
		;
		function ensureLength(num, count) {
		    var str = String(num);
		    while (str.length < count) {
		        str += ' ';
		    }
		    return str;
		}
		function repeat(char_, count) {
		    var str = '';
		    while (--count > -1) {
		        str += char_;
		    }
		    return str;
		}
		function _createCtor(Proto, stackFrom) {
		    var Ctor = Proto.hasOwnProperty('constructor')
		        ? Proto.constructor
		        : null;
		    return function () {
		        var args = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            args[_i] = arguments[_i];
		        }
		        obj_defineProperty(this, 'stack', {
		            value: _prepairStack(stackFrom || 3)
		        });
		        obj_defineProperty(this, 'message', {
		            value: str_format.apply(this, arguments)
		        });
		        if (Ctor != null) {
		            Ctor.apply(this, arguments);
		        }
		    };
		}
		function _prepairStack(sliceFrom) {
		    var stack = new Error().stack;
		    return stack == null ? null : stack
		        .split('\n')
		        .slice(sliceFrom)
		        .join('\n');
		}
		
	}());
	var fn_proxy,
	    fn_apply,
	    fn_doNothing,
	    fn_createByPattern;
	(function(){
		fn_proxy = function (fn, ctx) {
		    return function () {
		        var imax = arguments.length, args = new Array(imax), i = 0;
		        for (; i < imax; i++)
		            args[i] = arguments[i];
		        return fn_apply(fn, ctx, args);
		    };
		}
		;
		fn_apply = function (fn, ctx, args) {
		    var l = args.length;
		    if (0 === l)
		        return fn.call(ctx);
		    if (1 === l)
		        return fn.call(ctx, args[0]);
		    if (2 === l)
		        return fn.call(ctx, args[0], args[1]);
		    if (3 === l)
		        return fn.call(ctx, args[0], args[1], args[2]);
		    if (4 === l)
		        return fn.call(ctx, args[0], args[1], args[2], args[3]);
		    return fn.apply(ctx, args);
		}
		;
		fn_doNothing = function () {
		    return false;
		}
		;
		fn_createByPattern = function (definitions, ctx) {
		    var imax = definitions.length;
		    return function () {
		        var l = arguments.length, i = -1, def;
		        outer: while (++i < imax) {
		            def = definitions[i];
		            if (def.pattern.length !== l) {
		                continue;
		            }
		            var j = -1;
		            while (++j < l) {
		                var fn = def.pattern[j];
		                var val = arguments[j];
		                if (fn(val) === false) {
		                    continue outer;
		                }
		            }
		            return def.handler.apply(ctx, arguments);
		        }
		        console.error('InvalidArgumentException for a function', definitions, arguments);
		        return null;
		    };
		}
		;
		
	}());
	var class_Dfr;
	(function(){
		;
		class_Dfr = function () { };
		class_Dfr.prototype = {
		    _isAsync: true,
		    _done: null,
		    _fail: null,
		    _always: null,
		    _resolved: null,
		    _rejected: null,
		    defer: function () {
		        this._rejected = null;
		        this._resolved = null;
		        return this;
		    },
		    isResolved: function () {
		        return this._resolved != null;
		    },
		    isRejected: function () {
		        return this._rejected != null;
		    },
		    isBusy: function () {
		        return this._resolved == null && this._rejected == null;
		    },
		    resolve: function () {
		        var done = this._done, always = this._always;
		        this._resolved = arguments;
		        dfr_clearListeners(this);
		        arr_callOnce(done, this, arguments);
		        arr_callOnce(always, this, [this]);
		        return this;
		    },
		    reject: function () {
		        var fail = this._fail, always = this._always;
		        this._rejected = arguments;
		        dfr_clearListeners(this);
		        arr_callOnce(fail, this, arguments);
		        arr_callOnce(always, this, [this]);
		        return this;
		    },
		    then: function (filterSuccess, filterError) {
		        return this.pipe(filterSuccess, filterError);
		    },
		    done: function (callback) {
		        if (this._rejected != null)
		            return this;
		        return dfr_bind(this, this._resolved, this._done || (this._done = []), callback);
		    },
		    fail: function (callback) {
		        if (this._resolved != null)
		            return this;
		        return dfr_bind(this, this._rejected, this._fail || (this._fail = []), callback);
		    },
		    always: function (callback) {
		        return dfr_bind(this, this._rejected || this._resolved, this._always || (this._always = []), callback);
		    },
		    pipe: function (mix /* ..methods */) {
		        var dfr;
		        if (typeof mix === 'function') {
		            dfr = new class_Dfr();
		            var done_ = mix, fail_ = arguments.length > 1
		                ? arguments[1]
		                : null;
		            this
		                .done(delegate(dfr, 'resolve', done_))
		                .fail(delegate(dfr, 'reject', fail_));
		            return dfr;
		        }
		        dfr = mix;
		        var imax = arguments.length, done = imax === 1, fail = imax === 1, i = 0, x;
		        while (++i < imax) {
		            x = arguments[i];
		            switch (x) {
		                case 'done':
		                    done = true;
		                    break;
		                case 'fail':
		                    fail = true;
		                    break;
		                default:
		                    console.error('Unsupported pipe channel', arguments[i]);
		                    break;
		            }
		        }
		        done && this.done(delegate(dfr, 'resolve'));
		        fail && this.fail(delegate(dfr, 'reject'));
		        function pipe(dfr, method) {
		            return function () {
		                dfr[method].apply(dfr, arguments);
		            };
		        }
		        function delegate(dfr, name, fn) {
		            return function () {
		                if (fn != null) {
		                    var override = fn.apply(this, arguments);
		                    if (override != null && override !== dfr) {
		                        if (isDeferred(override)) {
		                            override.then(delegate(dfr, 'resolve'), delegate(dfr, 'reject'));
		                            return;
		                        }
		                        dfr[name](override);
		                        return;
		                    }
		                }
		                dfr[name].apply(dfr, arguments);
		            };
		        }
		        return this;
		    },
		    pipeCallback: function () {
		        var self = this;
		        return function (error) {
		            if (error != null) {
		                self.reject(error);
		                return;
		            }
		            var args = _Array_slice.call(arguments, 1);
		            fn_apply(self.resolve, self, args);
		        };
		    },
		    resolveDelegate: function () {
		        return fn_proxy(this.resolve, this);
		    },
		    rejectDelegate: function () {
		        return fn_proxy(this.reject, this);
		    },
		    catch: function (cb) {
		        return this.fail(cb);
		    },
		    finally: function (cb) {
		        return this.always(cb);
		    }
		};
		var static_Dfr = {
		    resolve: function (a, b, c) {
		        var dfr = new class_Dfr();
		        return dfr.resolve.apply(dfr, _Array_slice.call(arguments));
		    },
		    reject: function (error) {
		        var dfr = new class_Dfr();
		        return dfr.reject(error);
		    },
		    run: function (fn, ctx) {
		        var dfr = new class_Dfr();
		        if (ctx == null)
		            ctx = dfr;
		        fn.call(ctx, fn_proxy(dfr.resolve, ctx), fn_proxy(dfr.reject, dfr), dfr);
		        return dfr;
		    },
		    all: function (promises) {
		        var dfr = new class_Dfr, arr = new Array(promises.length), wait = promises.length, error = null;
		        if (wait === 0) {
		            return dfr.resolve(arr);
		        }
		        function tick(index) {
		            if (error != null) {
		                return;
		            }
		            var args = _Array_slice.call(arguments, 1);
		            arr.splice.apply(arr, [index, 0].concat(args));
		            if (--wait === 0) {
		                dfr.resolve(arr);
		            }
		        }
		        function onReject(err) {
		            dfr.reject(error = err);
		        }
		        var imax = promises.length, i = -1;
		        while (++i < imax) {
		            var x = promises[i];
		            if (x == null || x.then == null) {
		                tick(i);
		                continue;
		            }
		            x.then(tick.bind(null, i), onReject);
		        }
		        return dfr;
		    }
		};
		class_Dfr.resolve = static_Dfr.resolve;
		class_Dfr.reject = static_Dfr.reject;
		class_Dfr.run = static_Dfr.run;
		class_Dfr.all = static_Dfr.all;
		// PRIVATE
		function dfr_bind(dfr, arguments_, listeners, callback) {
		    if (callback == null)
		        return dfr;
		    if (arguments_ != null)
		        fn_apply(callback, dfr, arguments_);
		    else
		        listeners.push(callback);
		    return dfr;
		}
		function dfr_clearListeners(dfr) {
		    dfr._done = null;
		    dfr._fail = null;
		    dfr._always = null;
		}
		function arr_callOnce(arr, ctx, args) {
		    if (arr == null)
		        return;
		    var imax = arr.length, i = -1, fn;
		    while (++i < imax) {
		        fn = arr[i];
		        if (fn)
		            fn_apply(fn, ctx, args);
		    }
		    arr.length = 0;
		}
		function isDeferred(x) {
		    return x != null
		        && typeof x === 'object'
		        && is_Function(x.then);
		}
		
	}());
	var class_Uri;
	(function(){
		class_Uri = class_create({
		    protocol: null,
		    value: null,
		    path: null,
		    file: null,
		    extension: null,
		    constructor: function (uri) {
		        if (uri == null)
		            return this;
		        if (util_isUri(uri))
		            return uri.combine('');
		        uri = normalize_uri(uri);
		        this.value = uri;
		        parse_protocol(this);
		        parse_host(this);
		        parse_search(this);
		        parse_file(this);
		        // normilize path - "/some/path"
		        this.path = normalize_pathsSlashes(this.value);
		        if (/^[\w]+:\//.test(this.path)) {
		            this.path = '/' + this.path;
		        }
		        return this;
		    },
		    cdUp: function () {
		        var path = this.path;
		        if (path == null || path === '' || path === '/') {
		            return this;
		        }
		        // win32 - is base drive
		        if (/^\/?[a-zA-Z]+:\/?$/.test(path)) {
		            return this;
		        }
		        this.path = path.replace(/\/?[^\/]+\/?$/i, '');
		        return this;
		    },
		    /**
		     * '/path' - relative to host
		     * '../path', 'path','./path' - relative to current path
		     */
		    combine: function (path) {
		        if (util_isUri(path)) {
		            path = path.toString();
		        }
		        if (!path) {
		            return util_clone(this);
		        }
		        if (rgx_win32Drive.test(path)) {
		            return new class_Uri(path);
		        }
		        var uri = util_clone(this);
		        uri.value = path;
		        parse_search(uri);
		        parse_file(uri);
		        if (!uri.value) {
		            return uri;
		        }
		        path = uri.value.replace(/^\.\//i, '');
		        if (path[0] === '/') {
		            uri.path = path;
		            return uri;
		        }
		        while (/^(\.\.\/?)/ig.test(path)) {
		            uri.cdUp();
		            path = path.substring(3);
		        }
		        uri.path = normalize_pathsSlashes(util_combinePathes(uri.path, path));
		        return uri;
		    },
		    toString: function () {
		        var protocol = this.protocol ? this.protocol + '://' : '';
		        var path = util_combinePathes(this.host, this.path, this.file) + (this.search || '');
		        var str = protocol + path;
		        if (!(this.file || this.search) && this.path) {
		            str += '/';
		        }
		        return str;
		    },
		    toPathAndQuery: function () {
		        return util_combinePathes(this.path, this.file) + (this.search || '');
		    },
		    /**
		     * @return Current Uri Path{String} that is relative to @arg1 Uri
		     */
		    toRelativeString: function (uri) {
		        if (typeof uri === 'string')
		            uri = new class_Uri(uri);
		        if (this.path.indexOf(uri.path) === 0) {
		            // host folder
		            var p = this.path ? this.path.replace(uri.path, '') : '';
		            if (p[0] === '/')
		                p = p.substring(1);
		            return util_combinePathes(p, this.file) + (this.search || '');
		        }
		        // sub folder
		        var current = this.path.split('/'), relative = uri.path.split('/'), commonpath = '', i = 0, length = Math.min(current.length, relative.length);
		        for (; i < length; i++) {
		            if (current[i] === relative[i])
		                continue;
		            break;
		        }
		        if (i > 0)
		            commonpath = current.splice(0, i).join('/');
		        if (commonpath) {
		            var sub = '', path = uri.path, forward;
		            while (path) {
		                if (this.path.indexOf(path) === 0) {
		                    forward = this.path.replace(path, '');
		                    break;
		                }
		                path = path.replace(/\/?[^\/]+\/?$/i, '');
		                sub += '../';
		            }
		            return util_combinePathes(sub, forward, this.file);
		        }
		        return this.toString();
		    },
		    toLocalFile: function () {
		        var path = util_combinePathes(this.host, this.path, this.file);
		        return util_win32Path(path);
		    },
		    toLocalDir: function () {
		        var path = util_combinePathes(this.host, this.path, '/');
		        return util_win32Path(path);
		    },
		    toDir: function () {
		        var str = this.protocol ? this.protocol + '://' : '';
		        return str + util_combinePathes(this.host, this.path, '/');
		    },
		    isRelative: function () {
		        return !(this.protocol || this.host);
		    },
		    getName: function () {
		        return this.file.replace('.' + this.extension, '');
		    }
		});
		var rgx_protocol = /^([\w\d]+):\/\//, rgx_extension = /\.([\w\d]+)$/i, rgx_win32Drive = /(^\/?\w{1}:)(\/|$)/, rgx_fileWithExt = /([^\/]+(\.[\w\d]+)?)$/i;
		function util_isUri(object) {
		    return object && typeof object === 'object' && typeof object.combine === 'function';
		}
		function util_combinePathes(a, b, c, d) {
		    var args = arguments, str = '';
		    for (var i = 0, x, imax = arguments.length; i < imax; i++) {
		        x = arguments[i];
		        if (!x)
		            continue;
		        if (!str) {
		            str = x;
		            continue;
		        }
		        if (str[str.length - 1] !== '/')
		            str += '/';
		        str += x[0] === '/' ? x.substring(1) : x;
		    }
		    return str;
		}
		function normalize_pathsSlashes(str) {
		    if (str[str.length - 1] === '/') {
		        return str.substring(0, str.length - 1);
		    }
		    return str;
		}
		function util_clone(source) {
		    var uri = new class_Uri(), key;
		    for (key in source) {
		        if (typeof source[key] === 'string') {
		            uri[key] = source[key];
		        }
		    }
		    return uri;
		}
		function normalize_uri(str) {
		    return str
		        .replace(/\\/g, '/')
		        .replace(/^\.\//, '')
		        // win32 drive path
		        .replace(/^(\w+):\/([^\/])/, '/$1:/$2');
		}
		function util_win32Path(path) {
		    if (rgx_win32Drive.test(path) && path[0] === '/') {
		        return path.substring(1);
		    }
		    return path;
		}
		function parse_protocol(obj) {
		    var match = rgx_protocol.exec(obj.value);
		    if (match == null && obj.value[0] === '/') {
		        obj.protocol = 'file';
		    }
		    if (match == null)
		        return;
		    obj.protocol = match[1];
		    obj.value = obj.value.substring(match[0].length);
		}
		function parse_host(obj) {
		    if (obj.protocol == null)
		        return;
		    if (obj.protocol === 'file') {
		        var match = rgx_win32Drive.exec(obj.value);
		        if (match) {
		            obj.host = match[1];
		            obj.value = obj.value.substring(obj.host.length);
		        }
		        return;
		    }
		    var pathStart = obj.value.indexOf('/', 2);
		    obj.host = ~pathStart
		        ? obj.value.substring(0, pathStart)
		        : obj.value;
		    obj.value = obj.value.replace(obj.host, '');
		}
		function parse_search(obj) {
		    var question = obj.value.indexOf('?');
		    if (question === -1)
		        return;
		    obj.search = obj.value.substring(question);
		    obj.value = obj.value.substring(0, question);
		}
		function parse_file(obj) {
		    var match = rgx_fileWithExt.exec(obj.value), file = match == null ? null : match[1];
		    if (file == null) {
		        return;
		    }
		    obj.file = file;
		    obj.value = obj.value.substring(0, obj.value.length - file.length);
		    obj.value = normalize_pathsSlashes(obj.value);
		    match = rgx_extension.exec(file);
		    obj.extension = match == null ? null : match[1];
		}
		class_Uri.combinePathes = util_combinePathes;
		class_Uri.combine = util_combinePathes;
		
	}());
	var class_EventEmitter;
	(function(){
		class_EventEmitter = function () {
		    this._listeners = {};
		};
		class_EventEmitter.prototype = {
		    on: function (event, fn) {
		        if (fn != null) {
		            (this._listeners[event] || (this._listeners[event] = [])).push(fn);
		        }
		        return this;
		    },
		    once: function (event, fn) {
		        if (fn != null) {
		            fn._once = true;
		            (this._listeners[event] || (this._listeners[event] = [])).push(fn);
		        }
		        return this;
		    },
		    pipe: function (event) {
		        var that = this, args;
		        return function () {
		            args = _Array_slice.call(arguments);
		            args.unshift(event);
		            fn_apply(that.trigger, that, args);
		        };
		    },
		    emit: event_trigger,
		    trigger: event_trigger,
		    off: function (event, fn) {
		        var listeners = this._listeners[event];
		        if (listeners == null)
		            return this;
		        if (arguments.length === 1) {
		            listeners.length = 0;
		            return this;
		        }
		        var imax = listeners.length, i = -1;
		        while (++i < imax) {
		            if (listeners[i] === fn) {
		                listeners.splice(i, 1);
		                i--;
		                imax--;
		            }
		        }
		        return this;
		    }
		};
		function event_trigger(event) {
		    var args = [];
		    for (var _i = 1; _i < arguments.length; _i++) {
		        args[_i - 1] = arguments[_i];
		    }
		    var fns = this._listeners[event];
		    if (fns == null) {
		        return this;
		    }
		    for (var i = 0; i < fns.length; i++) {
		        var fn = fns[i];
		        fn_apply(fn, this, args);
		        if (fn !== fns[i]) {
		            // the callback has removed itself
		            i--;
		            continue;
		        }
		        if (fn._once === true) {
		            fns.splice(i, 1);
		            i--;
		        }
		    }
		    return this;
		}
		
	}());
	var mixin;
	(function(){
		var class_inherit,
		    class_extendProtoObjects;
		(function(){
			var PROTO = "__proto__";
			var _toString = Object.prototype.toString;
			var _isArguments = function (args) {
			    return _toString.call(args) === "[object Arguments]";
			};
			class_inherit = PROTO in Object.prototype ? inherit : inherit_protoLess;
			
			class_extendProtoObjects = function (proto, _base, _extends) {
			    var key, protoValue;
			    for (key in proto) {
			        protoValue = proto[key];
			        if (!is_rawObject(protoValue))
			            continue;
			        if (_base != null) {
			            if (is_rawObject(_base.prototype[key]))
			                obj_defaults(protoValue, _base.prototype[key]);
			        }
			        if (_extends != null) {
			            arr_each(_extends, proto_extendDefaultsDelegate(protoValue, key));
			        }
			    }
			}
			;
			// PRIVATE
			function proto_extendDefaultsDelegate(target, key) {
			    return function (source) {
			        var proto = proto_getProto(source), val = proto[key];
			        if (is_rawObject(val)) {
			            obj_defaults(target, val);
			        }
			    };
			}
			function proto_extend(proto, source) {
			    if (source == null)
			        return;
			    if (typeof proto === "function")
			        proto = proto.prototype;
			    if (typeof source === "function")
			        source = source.prototype;
			    var key, val;
			    for (key in source) {
			        if (key === "constructor")
			            continue;
			        val = source[key];
			        if (val != null)
			            proto[key] = val;
			    }
			}
			function proto_override(super_, fn) {
			    var proxy;
			    if (super_) {
			        proxy = function (mix) {
			            var args = arguments.length === 1 && _isArguments(mix) ? mix : arguments;
			            return fn_apply(super_, this, args);
			        };
			    }
			    else {
			        proxy = fn_doNothing;
			    }
			    return function () {
			        this["super"] = proxy;
			        return fn_apply(fn, this, arguments);
			    };
			}
			function inherit(_class, _base, _extends, original) {
			    var prototype = original, proto = original;
			    prototype.constructor = _class.prototype.constructor;
			    if (_extends != null) {
			        proto[PROTO] = {};
			        arr_each(_extends, function (x) {
			            proto_extend(proto[PROTO], x);
			        });
			        proto = proto[PROTO];
			    }
			    if (_base != null)
			        proto[PROTO] = _base.prototype;
			    _class.prototype = prototype;
			}
			function inherit_Object_create(_class, _base, _extends, original, _overrides, defaults) {
			    if (_base != null) {
			        _class.prototype = Object.create(_base.prototype);
			        obj_extendDescriptors(_class.prototype, original);
			    }
			    else {
			        _class.prototype = Object.create(original);
			    }
			    _class.prototype.constructor = _class;
			    if (_extends != null) {
			        arr_each(_extends, function (x) {
			            obj_defaults(_class.prototype, x);
			        });
			    }
			    var proto = _class.prototype;
			    obj_defaults(proto, defaults);
			    for (var key in _overrides) {
			        proto[key] = proto_override(proto[key], _overrides[key]);
			    }
			}
			// browser that doesnt support __proto__
			function inherit_protoLess(_class, _base, _extends, original) {
			    if (_base != null) {
			        var tmp = function () { };
			        tmp.prototype = _base.prototype;
			        _class.prototype = new tmp();
			        _class.prototype.constructor = _class;
			    }
			    if (_extends != null) {
			        arr_each(_extends, function (x) {
			            delete x.constructor;
			            proto_extend(_class, x);
			        });
			    }
			    proto_extend(_class, original);
			}
			function proto_getProto(mix) {
			    return is_Function(mix) ? mix.prototype : mix;
			}
			
		}());
		mixin = function (mix1, mix2, mix3, mix4, mix5) {
		    return mix(mix1, mix2, mix3, mix4, mix5);
		}
		function mix() {
		    var mixins = [];
		    for (var _i = 0; _i < arguments.length; _i++) {
		        mixins[_i] = arguments[_i];
		    }
		    var _base = mixins[0];
		    var _extends = mixins.slice(1);
		    var _callable = ensureCallable(mixins);
		    var _class = function () {
		        var args = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            args[_i] = arguments[_i];
		        }
		        for (var i = _callable.length - 1; i > -1; i--) {
		            var x = _callable[i];
		            if (typeof x === 'function') {
		                fn_apply(x, this, args);
		            }
		        }
		    };
		    if (is_Function(_base) === false) {
		        _extends.unshift(_base);
		        _base = null;
		    }
		    mixStatics(_class, mixins);
		    var proto = {};
		    class_extendProtoObjects(proto, _base, _extends);
		    class_inherit(_class, _base, _extends, proto);
		    return _class;
		}
		function mixStatics(Ctor, mixins) {
		    for (var i = 0; i < mixins.length; i++) {
		        var Fn = mixins[i];
		        if (typeof Fn !== 'function') {
		            continue;
		        }
		        for (var key in Fn) {
		            if (key in Ctor === false) {
		                obj_copyProperty(Ctor, Fn, key);
		            }
		        }
		    }
		}
		var ensureCallableSingle, ensureCallable;
		(function () {
		    ensureCallable = function (arr) {
		        var out = [], i = arr.length;
		        while (--i > -1)
		            out[i] = ensureCallableSingle(arr[i]);
		        return out;
		    };
		    ensureCallableSingle = function (mix) {
		        if (is_Function(mix) === false) {
		            return mix;
		        }
		        var fn = mix;
		        var caller = directCaller;
		        var safe = false;
		        var wrapped = function () {
		            var args = [];
		            for (var _i = 0; _i < arguments.length; _i++) {
		                args[_i] = arguments[_i];
		            }
		            var self = this;
		            var x;
		            if (safe === true) {
		                caller(fn, self, args);
		                return;
		            }
		            try {
		                x = caller(fn, self, args);
		                safe = true;
		            }
		            catch (error) {
		                caller = newCaller;
		                safe = true;
		                caller(fn, self, args);
		            }
		            if (x != null) {
		                return x;
		            }
		        };
		        return wrapped;
		    };
		    function directCaller(fn, self, args) {
		        return fn.apply(self, args);
		    }
		    function newCaller(fn, self, args) {
		        var x = new (fn.bind.apply(fn, [null].concat(args)));
		        obj_extend(self, x);
		    }
		}());
		
	}());
	var Lib = {
	    class_Dfr: class_Dfr,
	    class_EventEmitter: class_EventEmitter,
	    class_Uri: class_Uri,
	    class_create: class_create,
	    class_createEx: class_createEx,
	    arr_remove: arr_remove,
	    arr_each: arr_each,
	    arr_indexOf: arr_indexOf,
	    arr_contains: arr_contains,
	    arr_pushMany: arr_pushMany,
	    error_createClass: error_createClass,
	    fn_createByPattern: fn_createByPattern,
	    fn_doNothing: fn_doNothing,
	    obj_getProperty: obj_getProperty,
	    obj_setProperty: obj_setProperty,
	    obj_hasProperty: obj_hasProperty,
	    obj_extend: obj_extend,
	    obj_extendDefaults: obj_extendDefaults,
	    obj_extendMany: obj_extendMany,
	    obj_extendProperties: obj_extendProperties,
	    obj_extendPropertiesDefaults: obj_extendPropertiesDefaults,
	    obj_create: obj_create,
	    obj_defineProperty: obj_defineProperty,
	    obj_clean: obj_clean,
	    is_Function: is_Function,
	    is_Array: is_Array,
	    is_ArrayLike: is_ArrayLike,
	    is_String: is_String,
	    is_Object: is_Object,
	    is_notEmptyString: is_notEmptyString,
	    is_rawObject: is_rawObject,
	    is_Date: is_Date,
	    is_NODE: is_NODE,
	    is_DOM: is_DOM,
	    str_format: str_format,
	    str_dedent: str_dedent,
	    mixin: mixin
	};
	
    
    for (var key in Lib) {
        owner[property][key] = Lib[key];
    }
}));;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_node_modules_atma_utils_lib_utils) && isObject(module.exports)) {
		Object.assign(_node_modules_atma_utils_lib_utils, module.exports);
		return;
	}
	_node_modules_atma_utils_lib_utils = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_Slack;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.SlackClient = void 0;
const web_api_1 = require("@slack/web-api");
const memd_1 = require("memd");
class SlackClient {
    constructor(opts) {
        this.isReady = false;
        this.messages = [];
        this.token = opts.token;
        this.channelId = opts.channelId;
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            this.web = new web_api_1.WebClient(this.token);
            this.isReady = true;
            // const result: any = await this.web.oauth.v2.access({
            //     client_id: clientId,
            //     client_secret: clientSecret,
            //     code
            //   });
            //   this.access_token = result.access_token;
            //   this.enterprise_id = result.enterprise_id;
            //   this.team_id = result.team_id;
        });
    }
    send(message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.wasSendShortly(message)) {
                return;
            }
            if (this.isReady === false) {
                yield this.login();
            }
            yield this.web.chat.postMessage({
                text: message,
                channel: this.channelId,
            });
        });
    }
    wasSendShortly(message) {
        for (let i = 0; i < this.messages.length; i++) {
            if (this.messages[i].message === message) {
                return true;
            }
        }
        let bufferCount = 20;
        let remove = this.messages.length - bufferCount;
        // keeps buffering between [bufferCount, bufferCount * 2]
        if (remove > bufferCount * 2) {
            this.messages.splice(0, remove);
        }
        this.messages.push({ date: new Date(), message });
        return false;
    }
}
__decorate([
    memd_1.default.deco.memoize()
], SlackClient.prototype, "login", null);
__decorate([
    memd_1.default.deco.debounce(500)
], SlackClient.prototype, "send", null);
exports.SlackClient = SlackClient;
//# sourceMappingURL=Slack.js.map
//# sourceMappingURL=Slack.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_Slack) && isObject(module.exports)) {
		Object.assign(_src_Slack, module.exports);
		return;
	}
	_src_Slack = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_os;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.os_EndOfLine = void 0;
const os_1 = require("os");
exports.os_EndOfLine = os_1.EOL;
//# sourceMappingURL=os.js.map
//# sourceMappingURL=os.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_os) && isObject(module.exports)) {
		Object.assign(_src_utils_os, module.exports);
		return;
	}
	_src_utils_os = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_fs_fs;
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
exports.file_append = exports.file_appendAsync = exports.file_remove = exports.file_removeAsync = exports.file_readSize = exports.dir_ensure = exports.dir_readAsync = exports.dir_read = void 0;
const Fs = require("fs");
const Path = require("path");
const os_1 = _src_utils_os;
function dir_read(path) {
    try {
        return Fs.readdirSync(path);
    }
    catch (error) {
        exception_(path, error);
        return [];
    }
}
exports.dir_read = dir_read;
;
function dir_readAsync(path) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            Fs.readdir(path, (err, files) => {
                if (err != null) {
                    reject(err);
                    return;
                }
                resolve(files);
            });
        });
    });
}
exports.dir_readAsync = dir_readAsync;
;
function dir_ensure(path) {
    if (Fs.existsSync(path)) {
        return;
    }
    dir_ensure(Path.dirname(path));
    try {
        Fs.mkdirSync(path);
    }
    catch (error) {
        exception_(path, error);
    }
}
exports.dir_ensure = dir_ensure;
;
function file_readSize(path) {
    try {
        return Fs.lstatSync(path).size;
    }
    catch (error) {
        return 0;
    }
}
exports.file_readSize = file_readSize;
;
function file_removeAsync(path, callback) {
    Fs.unlink(path, function (error) {
        if (error) {
            exception_(path, error);
        }
        callback(error);
    });
}
exports.file_removeAsync = file_removeAsync;
;
function file_remove(path) {
    try {
        Fs.unlinkSync(path);
    }
    catch (error) {
        exception_(path, error);
    }
}
exports.file_remove = file_remove;
;
function file_appendAsync(path, str, callback) {
    if (!str) {
        callback();
        return;
    }
    Fs.open(path, 'a', function (error, fd) {
        if (error != null) {
            exception_(path, error);
            callback(error);
            return;
        }
        Fs.write(fd, str, (error) => {
            if (error != null) {
                exception_(path, error);
            }
            Fs.close(fd, () => callback());
        });
    });
}
exports.file_appendAsync = file_appendAsync;
;
function file_append(path, str) {
    if (!str) {
        return;
    }
    try {
        const fd = Fs.openSync(path, 'a');
        Fs.writeSync(fd, str);
        Fs.closeSync(fd);
    }
    catch (error) {
        exception_(path, error);
    }
}
exports.file_append = file_append;
;
function exception_(filename, error, logStd = false) {
    if (logStd !== true) {
        console.error(error);
    }
    let directory = Path.dirname(filename);
    try {
        Fs.appendFileSync(Path.resolve(directory, 'logger-exceptions.txt'), `${filename}: ${error.message} ${os_1.os_EndOfLine}`);
    }
    catch (error_) {
        if (error_.code === 'ENOENT') {
            dir_ensure(directory);
            exception_(filename, error, false);
            return;
        }
        console.error(error_);
    }
}
//# sourceMappingURL=fs.js.map
//# sourceMappingURL=fs.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_fs_fs) && isObject(module.exports)) {
		Object.assign(_src_fs_fs, module.exports);
		return;
	}
	_src_fs_fs = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_date;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.date_nextDay = exports.date_sameDate = exports.date_getMidnight = void 0;
function date_getMidnight(date, diffDays = 0) {
    date.setHours(0, 0, 0, 0);
    if (diffDays !== 0) {
        date.setDate(date.getDate() + diffDays);
    }
    return date.getTime();
}
exports.date_getMidnight = date_getMidnight;
function date_sameDate(a, b) {
    return a.getDate() === b.getDate()
        && a.getMonth() === b.getMonth()
        && a.getFullYear() === b.getFullYear();
}
exports.date_sameDate = date_sameDate;
function date_nextDay(a) {
    let date = new Date(a);
    date.setDate(date.getDate() + 1);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.date_nextDay = date_nextDay;
//# sourceMappingURL=date.js.map
//# sourceMappingURL=date.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_date) && isObject(module.exports)) {
		Object.assign(_src_utils_date, module.exports);
		return;
	}
	_src_utils_date = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_fs_LoggerFileHeader;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerFileHeader = void 0;
var LoggerFileHeader;
(function (LoggerFileHeader) {
    LoggerFileHeader.SYMBOL = '‖';
    LoggerFileHeader.BUFFER = [0xe2, 0x80, 0x96];
    function serialize(opts) {
        var _a;
        let line = (_a = opts === null || opts === void 0 ? void 0 : opts.fields) === null || _a === void 0 ? void 0 : _a.map(field => {
            return `${field.name}:${field.type}`;
        }).join(',');
        if (line) {
            line = `${LoggerFileHeader.SYMBOL}${line}`;
        }
        return line;
    }
    LoggerFileHeader.serialize = serialize;
    function parse(row) {
        let rgx = /(?<name>.+):(?<type>\w+)?$/;
        return row.map((str, i) => {
            var _a, _b;
            let { name, type } = (_b = (_a = rgx.exec(str)) === null || _a === void 0 ? void 0 : _a.groups) !== null && _b !== void 0 ? _b : {};
            return {
                idx: i,
                name: name,
                type: type
            };
        });
    }
    LoggerFileHeader.parse = parse;
})(LoggerFileHeader = exports.LoggerFileHeader || (exports.LoggerFileHeader = {}));
//# sourceMappingURL=LoggerFileHeader.js.map
//# sourceMappingURL=LoggerFileHeader.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_fs_LoggerFileHeader) && isObject(module.exports)) {
		Object.assign(_src_fs_LoggerFileHeader, module.exports);
		return;
	}
	_src_fs_LoggerFileHeader = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_csv;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Csv = void 0;
var Csv;
(function (Csv) {
    function escape(str) {
        if (str == null) {
            return '';
        }
        if (typeof str === 'number') {
            return str;
        }
        str = String(str).replace(/\n/g, '\\\\n');
        if (str.includes(',') === false) {
            return str;
        }
        str = str.replace(/"/g, "'");
        return `"${str}"`;
    }
    Csv.escape = escape;
})(Csv = exports.Csv || (exports.Csv = {}));
//# sourceMappingURL=csv.js.map
//# sourceMappingURL=csv.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_csv) && isObject(module.exports)) {
		Object.assign(_src_utils_csv, module.exports);
		return;
	}
	_src_utils_csv = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_fs_LoggerFileRow;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerFileRow = void 0;
const csv_1 = _src_utils_csv;
var LoggerFileRow;
(function (LoggerFileRow) {
    function serialize(cells, fields) {
        if (fields == null) {
            let row = cells
                .map((val, i) => {
                if (val instanceof Date) {
                    return val.toISOString();
                }
                return val;
            })
                .map(csv_1.Csv.escape)
                .join(', ');
            return row;
        }
        let row = '';
        for (let i = 0; i < fields.length; i++) {
            if (i !== 0)
                row += ', ';
            let field = fields[i];
            let val = cells[i];
            if (val != null) {
                switch (field.type) {
                    case 'date':
                        if (val instanceof Date === false) {
                            val = new Date(val);
                        }
                        break;
                }
            }
            if (val instanceof Date) {
                row += val.toISOString();
                continue;
            }
            if (typeof val === 'number') {
                row += val;
                continue;
            }
            row += csv_1.Csv.escape(val);
        }
        return row;
    }
    LoggerFileRow.serialize = serialize;
})(LoggerFileRow = exports.LoggerFileRow || (exports.LoggerFileRow = {}));
//# sourceMappingURL=LoggerFileRow.js.map
//# sourceMappingURL=LoggerFileRow.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_fs_LoggerFileRow) && isObject(module.exports)) {
		Object.assign(_src_fs_LoggerFileRow, module.exports);
		return;
	}
	_src_fs_LoggerFileRow = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_fs_LoggerFile;
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
exports.LoggerFile = exports.EmptyLoggerFile = void 0;
const fs_1 = _src_fs_fs;
const os_1 = _src_utils_os;
const Path = require("path");
const Formatter = require("atma-formatter");
const date_1 = _src_utils_date;
const atma_utils_1 = _node_modules_atma_utils_lib_utils;
const atma_io_1 = require("atma-io");
const LoggerFileHeader_1 = _src_fs_LoggerFileHeader;
const LoggerFileRow_1 = _src_fs_LoggerFileRow;
class EmptyLoggerFile {
    writeRow(cells) {
    }
    write(mix) {
    }
    flush() {
    }
    removeAll() {
        return null;
    }
}
exports.EmptyLoggerFile = EmptyLoggerFile;
class LoggerFile {
    constructor(opts) {
        /** Filecounter, in case we have to create multiple files for a day due to filesize limit */
        this._idx = 0;
        this._todayMid = date_1.date_getMidnight(new Date());
        this._tomorrowMid = date_1.date_getMidnight(new Date(), 1);
        this._writeTimer = null;
        this._initialized = false;
        this.initOptions(opts);
        this.onTimeout = this.onTimeout.bind(this);
    }
    static create(key, opts) {
        var _a;
        // @BackComp in case key is already a part of a directory
        let hasKeyInPath = new RegExp(`${key}/?$`).test((_a = opts.directory) !== null && _a !== void 0 ? _a : '');
        let logger = new LoggerFile(Object.assign(Object.assign({}, opts), { directory: hasKeyInPath
                ? atma_utils_1.class_Uri.combine(opts.directory, '/')
                : atma_utils_1.class_Uri.combine(opts.directory, key, '/') }));
        return logger;
    }
    static prepair(opts) {
        let logger = new LoggerFile(opts);
        return logger;
    }
    static restore(directory, key, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let directoryPath = atma_utils_1.class_Uri.combine(directory, key, '/');
            let metaPath = atma_utils_1.class_Uri.combine(directoryPath, 'meta.json');
            let opts = Object.assign({ directory: directoryPath }, (options !== null && options !== void 0 ? options : {}));
            let meta = {};
            try {
                meta = yield atma_io_1.File.readAsync(metaPath);
            }
            catch (error) { /* doesnt exists */ }
            let logger = new LoggerFile(Object.assign(Object.assign({}, opts), meta));
            return logger;
        });
    }
    writeRow(cells) {
        let row = LoggerFileRow_1.LoggerFileRow.serialize(cells, this.opts.fields);
        this.write(row);
    }
    writeRows(cellsMany) {
        let rows = cellsMany.map(cells => LoggerFileRow_1.LoggerFileRow.serialize(cells, this.opts.fields));
        this.write(rows.join('\n'));
    }
    write(mix) {
        if (this._initialized === false) {
            this.init();
        }
        if (this._file == null) {
            throw new Error('Create the instance via static::create');
        }
        if (typeof mix !== 'string' && Array.isArray(mix)) {
            this.writeRow(mix);
            return;
        }
        let message = mix;
        if (Date.now() >= this._tomorrowMid) {
            this._todayMid = this._tomorrowMid;
            this._tomorrowMid = date_1.date_getMidnight(new Date(), 1);
            this._file = this.nextFile();
        }
        if (this._file.size >= this.opts.fileBytesMax) {
            this._idx++;
            this._file = this.nextFile();
        }
        this._file.write(message);
        if (this._file.buffer.length > this.opts.messageBufferMax) {
            this.flushAsync();
        }
        if (this._writeTimer == null && this.opts.writeTimeout !== 0) {
            this._writeTimer = setTimeout(this.onTimeout, this.opts.writeTimeout);
        }
    }
    get path() {
        var _a;
        return (_a = this._file) === null || _a === void 0 ? void 0 : _a.path;
    }
    flush() {
        this.flushSync();
    }
    removeAll() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.directory) {
                yield atma_io_1.Directory.removeAsync(atma_utils_1.class_Uri.combine(this.directory, '/'));
            }
            return null;
        });
    }
    initOptions(opts) {
        this.opts = opts;
        if (/^(\.?\/)/.test(opts.directory)) {
            opts.directory = Path.resolve(process.cwd(), opts.directory);
        }
        if (opts.fileCountMax == null) {
            opts.fileCountMax = 10;
        }
        if (opts.fileBytesMax == null) {
            opts.fileBytesMax = 500 * 1024;
        }
        if (opts.fileMessagesMax == null) {
            opts.fileMessagesMax = 100 * 1000;
        }
        if (opts.messageBufferMax == null) {
            opts.messageBufferMax = 50;
        }
        if (opts.writeTimeout == null) {
            opts.writeTimeout = 10 * 1000;
        }
        this.directory = opts.directory;
    }
    init() {
        var _a;
        this._initialized = true;
        fs_1.dir_ensure(this.directory);
        const rgx = /^(\d+)_((\d{1,3})_)?/;
        let files = fs_1.dir_read(this.directory).sort();
        let i = files.length;
        let filename;
        while (--i > -1) {
            filename = files[i];
            if (rgx.test(filename)) {
                break;
            }
        }
        let lastPath = i > -1 ? Path.resolve(this.directory, filename) : null;
        if (lastPath != null && rgx.test(filename)) {
            let match = rgx.exec(filename);
            let idx = Number((_a = match[3]) !== null && _a !== void 0 ? _a : 1);
            let timestamp = Number(match[1]);
            if (timestamp <= this._todayMid || timestamp >= this._tomorrowMid) {
                this._idx = idx;
                this._file = this.nextFile();
            }
            else {
                this._file = new FileHandler(lastPath, this.opts, true);
            }
        }
        if (this._file == null) {
            this._file = this.nextFile();
        }
        if (this._file.size >= this.opts.fileBytesMax) {
            this._idx++;
            this._file = this.nextFile();
        }
        if (files.length >= this.opts.fileCountMax) {
            files
                .slice(0, files.length - this.opts.fileCountMax + 1)
                .forEach((filename) => {
                fs_1.file_remove(Path.resolve(this.directory, filename));
            });
        }
        const onExit = require('signal-exit');
        onExit(() => {
            var _a;
            (_a = this._file) === null || _a === void 0 ? void 0 : _a.flushSync();
        });
    }
    nextFile() {
        if (this._file != null) {
            this.flushSync();
        }
        const d = new Date();
        // TIMESTAMP_FILECOUNTER_READABLETIME
        const filename = `${d.getTime()}_${this._idx}__${Formatter(d, 'yyyy-MM-dd')}.csv`;
        const path = Path.resolve(this.opts.directory, filename);
        const file = new FileHandler(path, this.opts);
        if (this.opts.addCsvHeader) {
            file.write(LoggerFileHeader_1.LoggerFileHeader.serialize(this.opts));
        }
        return file;
    }
    onTimeout() {
        this.flushAsync();
    }
    flushAsync() {
        if (this._writeTimer != null) {
            clearTimeout(this._writeTimer);
            this._writeTimer = null;
        }
        this._file.flushAsync();
    }
    flushSync() {
        var _a;
        if (this._writeTimer != null) {
            clearTimeout(this._writeTimer);
            this._writeTimer = null;
        }
        (_a = this._file) === null || _a === void 0 ? void 0 : _a.flushSync();
    }
}
exports.LoggerFile = LoggerFile;
class FileHandler {
    constructor(path, opts, shouldReadStats = false) {
        this.path = path;
        this.opts = opts;
        this.buffer = [];
        this.size = 0;
        this.busy = false;
        this.errored = false;
        this.listeners = [];
        // read file size to ensure we are under the file size limit (in opts).
        this.size = shouldReadStats
            ? fs_1.file_readSize(this.path)
            : 0;
    }
    write(message) {
        this.size += message.length + os_1.os_EndOfLine.length;
        this.buffer.push(message);
    }
    flushAsync(cb) {
        const str = this.getBuffer();
        if (str == null) {
            cb === null || cb === void 0 ? void 0 : cb();
            return;
        }
        fs_1.file_appendAsync(this.path, str, cb);
    }
    flushSync() {
        const str = this.getBuffer();
        if (str == null) {
            return;
        }
        fs_1.file_append(this.path, str);
    }
    getBuffer() {
        if (this.buffer.length === 0) {
            return null;
        }
        const data = this.buffer.join(os_1.os_EndOfLine) + os_1.os_EndOfLine;
        this.buffer.length = 0;
        return data;
    }
}
;
//# sourceMappingURL=LoggerFile.js.map
//# sourceMappingURL=LoggerFile.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_fs_LoggerFile) && isObject(module.exports)) {
		Object.assign(_src_fs_LoggerFile, module.exports);
		return;
	}
	_src_fs_LoggerFile = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_err;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Err = void 0;
const csv_1 = _src_utils_csv;
var Err;
(function (Err) {
    function serializeError(error) {
        let str = serializeErrorInner(error);
        return csv_1.Csv.escape(str);
    }
    Err.serializeError = serializeError;
    function serializeErrorInner(error) {
        if (typeof error === 'string') {
            return error;
        }
        if (error.stack) {
            return error.stack;
        }
        if (error.message) {
            return error.message;
        }
        return String(error);
    }
})(Err = exports.Err || (exports.Err = {}));
//# sourceMappingURL=err.js.map
//# sourceMappingURL=err.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_err) && isObject(module.exports)) {
		Object.assign(_src_utils_err, module.exports);
		return;
	}
	_src_utils_err = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_model_DayDate;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayDate = void 0;
class DayDate {
    constructor(arg1, arg2, arg3) {
        if (arg1 == null) {
            return;
        }
        if (typeof arg1 === 'string') {
            Object.assign(this, DayDateUtils.parse(arg1));
        }
        else if (typeof arg1 === 'number') {
            this.year = arg1;
            this.month = arg2;
            this.date = arg3;
        }
        else if ('year' in arg1) {
            this.year = arg1.year;
            this.month = arg1.month;
            this.date = arg1.date;
        }
        else if ('getFullYear' in arg1) {
            this.year = arg1.getFullYear();
            this.month = arg1.getMonth();
            this.date = arg1.getDate();
        }
    }
    toDate() {
        return new Date(this.year, this.month, this.date);
    }
    isEqual(date) {
        return date.year === this.year
            && date.month === this.month
            && date.date === this.date;
    }
    isSame(date) {
        return date.getFullYear() === this.year
            && date.getMonth() === this.month
            && date.getDate() === this.date;
    }
    isAfter(date) {
        let y = date.getFullYear();
        let m = date.getMonth();
        let d = date.getDate();
        let thisSemi = this.year * 365 + this.month * 31 + this.date;
        let dateSemi = y * 365 + m * 31 + d;
        return thisSemi > dateSemi;
    }
    isBefore(date) {
        let y = date.getFullYear();
        let m = date.getMonth();
        let d = date.getDate();
        let thisSemi = this.year * 365 + this.month * 30 + this.date;
        let dateSemi = y * 365 + m * 30 + d;
        return thisSemi < dateSemi;
    }
    valueOf() {
        return this.toDate().valueOf();
    }
    format(pattern) {
        return pattern
            .replace('MM', String(this.month + 1).padStart(2, '0'))
            .replace('dd', String(this.date).padStart(2, '0'))
            .replace('yyyy', this.year);
    }
    serialize() {
        return DayDateUtils.serialize(this);
    }
    getFullYear() {
        return this.year;
    }
    getMonth() {
        return this.month;
    }
    getDate() {
        return this.date;
    }
    getHours() {
        return 0;
    }
    getMinutes() {
        return 0;
    }
    getSeconds() {
        return 0;
    }
    static now() {
        return new DayDate(new Date());
    }
}
exports.DayDate = DayDate;
var DayDateUtils;
(function (DayDateUtils) {
    let rgx = /(\d{4})\-(\d{2})\-(\d{2})/;
    function parse(str) {
        if (str.includes('T')) {
            let d = new Date(str);
            return {
                year: d.getFullYear(),
                month: d.getMonth(),
                date: d.getDate(),
            };
        }
        let match = rgx.exec(str);
        let [_, year, month, date] = match;
        return {
            year: Number(year),
            month: Number(month) - 1,
            date: Number(date)
        };
    }
    DayDateUtils.parse = parse;
    function serialize(day) {
        let y = day.year;
        let m = String(day.month + 1).padStart(2, '0');
        let d = String(day.date).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }
    DayDateUtils.serialize = serialize;
})(DayDateUtils || (DayDateUtils = {}));
//# sourceMappingURL=DayDate.js.map
//# sourceMappingURL=DayDate.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_model_DayDate) && isObject(module.exports)) {
		Object.assign(_src_model_DayDate, module.exports);
		return;
	}
	_src_model_DayDate = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_reader_FileIndex;
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
exports.FileIndex = exports.Idx_Date = exports.Idx_LINE_END = exports.Idx_LINE_START = void 0;
const atma_io_1 = require("atma-io");
const LoggerFileHeader_1 = _src_fs_LoggerFileHeader;
exports.Idx_LINE_START = 0;
exports.Idx_LINE_END = 1;
exports.Idx_Date = 2;
class FileIndex {
    static create(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            let file = new atma_io_1.File(uri, { cached: false });
            let buffer = yield file.readAsync({ encoding: 'buffer' });
            let lines = [];
            let isNewLine = true;
            const HEADER_SYMBOL = LoggerFileHeader_1.LoggerFileHeader.BUFFER;
            let skipLine = buffer.length > 3
                && buffer[0] === HEADER_SYMBOL[0]
                && buffer[1] === HEADER_SYMBOL[1]
                && buffer[2] === HEADER_SYMBOL[2];
            for (let i = 0; i < buffer.length; i++) {
                let c = buffer[i];
                if (skipLine) {
                    if (c === 10 /* \n */ || c === 13 /* \r */) {
                        whileLoop: while (i < buffer.length) {
                            let next = buffer[++i];
                            if (next !== 10 /* \n */ && c !== 13) {
                                break whileLoop;
                            }
                        }
                        skipLine = false;
                    }
                    continue;
                }
                if (c === 10 /* \n */ || c === 13 /* \r */) {
                    if (isNewLine === false) {
                        lines[lines.length - 1][exports.Idx_LINE_END] = i;
                    }
                    isNewLine = true;
                    continue;
                }
                if (isNewLine) {
                    isNewLine = false;
                    let j = i + 1;
                    for (; j < buffer.length; j++) {
                        let c = buffer[j];
                        if (c === 44 /* , */ || c === 10 /* \n */ || c === 13 /* \r */) {
                            break;
                        }
                    }
                    let dateStr = buffer.slice(i, j).toString();
                    let timestamp = new Date(dateStr).valueOf();
                    lines.push([
                        i,
                        null,
                        isNaN(timestamp) ? null : timestamp // Date
                    ]);
                }
            }
            let idx = {
                lineCount: lines.length,
                lines: lines
            };
            let path = uri.replace(/\.\w+$/, '.idx.json');
            yield atma_io_1.File.writeAsync(path, idx, { minify: true });
            return idx;
        });
    }
}
exports.FileIndex = FileIndex;
//# sourceMappingURL=FileIndex.js.map
//# sourceMappingURL=FileIndex.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_reader_FileIndex) && isObject(module.exports)) {
		Object.assign(_src_reader_FileIndex, module.exports);
		return;
	}
	_src_reader_FileIndex = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_reader_FileReader;
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
exports.Csv = exports.FileReader = void 0;
const alot_1 = _node_modules_alot_lib_alot;
const atma_io_1 = require("atma-io");
const DayDate_1 = _src_model_DayDate;
const FileIndex_1 = _src_reader_FileIndex;
const LoggerFileHeader_1 = _src_fs_LoggerFileHeader;
const cache = new Map();
class FileReader {
    constructor(channel, uri, idxFile) {
        var _a, _b, _c, _d, _e, _f;
        this.channel = channel;
        this.uri = uri;
        this.idxFile = idxFile;
        this.cached = true;
        this.table = null;
        this.fields = (_b = (_a = channel.opts) === null || _a === void 0 ? void 0 : _a.fields) !== null && _b !== void 0 ? _b : (_c = channel.opts) === null || _c === void 0 ? void 0 : _c.columns;
        this.hasHeader = (_e = (_d = channel.opts) === null || _d === void 0 ? void 0 : _d.addCsvHeader) !== null && _e !== void 0 ? _e : false;
        // const filename = `${ d.getTime() }_${this._idx}__${Formatter(d, 'MM-dd')}.csv`;
        let rgxV2 = /(?<nr>\d+)__(?<YYYY>\d{4})\-(?<MM>\d{2})\-(?<dd>\d{2})/;
        // obsolete
        let rgx = /(?<nr>\d+)__(?<MM>\d+)\-(?<dd>\d+)(\-(?<YYYY>\d+))?/;
        let match = (_f = rgxV2.exec(uri)) !== null && _f !== void 0 ? _f : rgx.exec(uri);
        if (match == null) {
            throw new Error(`Invalid filename pattern: ${uri}`);
        }
        let { MM, dd, YYYY, nr } = match.groups;
        let year = YYYY ? Number(YYYY) : (new Date()).getFullYear();
        let month = Number(MM);
        let date = Number(dd);
        this.nr = Number(nr);
        this.day = new DayDate_1.DayDate(year, month - 1, date);
        this._file = new atma_io_1.File(this.uri, { cached: false });
    }
    static create(channel, uri, idxFile) {
        if (cache.has(uri)) {
            return cache.get(uri);
        }
        let reader = new FileReader(channel, uri, idxFile);
        cache.set(uri, reader);
        return reader;
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.table) {
                return this.table;
            }
            let str = yield this._file.readAsync();
            let { rows: table } = this.parse(str);
            if (this.day.isSame(new Date()) === false) {
                // Cache everything, but not for today
                this.table = table;
            }
            return table;
        });
    }
    fetch(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            let idx = yield this.readIndex();
            if (idx == null) {
                let rows = yield this.read();
                return FilterUtils.fetch(rows, 0, opts);
            }
            let { total, rows: lines } = FilterUtils.fetch(idx.lines, 2, opts);
            let start = alot_1.default(lines).min(x => x[FileIndex_1.Idx_LINE_START]);
            let end = alot_1.default(lines).max(x => x[FileIndex_1.Idx_LINE_END]);
            let block = yield this._file.readRangeAsync(start, end - start);
            let { rows } = this.parse(block);
            return {
                total,
                rows
            };
        });
    }
    stats() {
        return __awaiter(this, void 0, void 0, function* () {
            let idx = yield this.readIndex();
            if (idx != null) {
                return {
                    lines: idx.lineCount
                };
            }
            let rows = yield this.read();
            return {
                lines: rows.length
            };
        });
    }
    //@memd.deco.memoize()
    readIndex() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.idxFile && (yield this.idxFile.existsAsync())) {
                return yield this.idxFile.readAsync();
            }
            let isActiveFile = (_b = (_a = this.channel.path) === null || _a === void 0 ? void 0 : _a.endsWith(this._file.uri.file)) !== null && _b !== void 0 ? _b : false;
            if (isActiveFile) {
                return null;
            }
            return FileIndex_1.FileIndex.create(this.uri);
        });
    }
    parse(str) {
        let NEW_LINE = '\n';
        let i = str.indexOf('\n');
        if (str[i - 1] === '\r') {
            NEW_LINE = '\r\n';
        }
        let hasHeader = str[0] === LoggerFileHeader_1.LoggerFileHeader.SYMBOL;
        let arr = str.split(NEW_LINE);
        let fieldsFromCsv;
        if (hasHeader === true) {
            let headerRow = arr[0].substring(1);
            let headers = Csv.splitRow(headerRow);
            fieldsFromCsv = LoggerFileHeader_1.LoggerFileHeader.parse(headers);
            arr = arr.slice(1);
        }
        if (this.fields == null) {
            this.fields = fieldsFromCsv;
        }
        let fields = this.fields;
        let fieldsResolved = false;
        let rows = arr.reverse().map(row => {
            if (row === '') {
                return null;
            }
            let cells = Csv.splitRow(row);
            if (fields == null) {
                if (fieldsResolved === false && cells.length > 0) {
                    fieldsResolved = true;
                    fields = Csv.detectFields(cells);
                }
                return cells;
            }
            let values = fields.map((field, index) => {
                return Csv.parseType(cells[index], field);
            });
            if (fields.length < cells.length) {
                values = values.concat(cells.slice(fields.length));
            }
            return values;
        });
        return {
            rows: rows.filter(Boolean),
            fields: fieldsFromCsv,
        };
    }
}
exports.FileReader = FileReader;
var Csv;
(function (Csv) {
    const ISO_DATE = /^\d{4}\-\d{2}\-\d{2}T\d{2}:\d{2}:\d{2}/;
    const NUMBER = /^[\d.,]+$/;
    const BOOLEAN = /(true|false)/i;
    function detectFields(row) {
        return row.map((val, index) => {
            let type;
            if (ISO_DATE.test(val)) {
                type = 'date';
            }
            else if (NUMBER.test(val)) {
                type = 'number';
            }
            else if (BOOLEAN.test(val)) {
                type = 'boolean';
            }
            return { type, name: `Column ${index + 1}` };
        });
    }
    Csv.detectFields = detectFields;
    function parseType(val, field) {
        if (!val || field == null) {
            return val;
        }
        switch (field.type) {
            case 'number':
                return parseFloat(val);
            case 'date':
                return new Date(val);
            case 'text':
                return val.replace(/\\{1,2}n/g, '\n').trim();
            default:
                return val;
        }
    }
    Csv.parseType = parseType;
    function splitRow(row) {
        let cells = [];
        let str = row;
        let i = -1;
        while (i < row.length) {
            let c = str[i];
            if (c === ' ') {
                i++;
                continue;
            }
            let match = ',';
            let skipAfterMatch = 1;
            let skipBefore = 0;
            if (c === ',') {
                let nextI = i + 1;
                while (nextI < str.length) {
                    let nextC = str[nextI];
                    if (nextC === ' ') {
                        nextI++;
                        continue;
                    }
                    if (nextC === '"' || nextC === "'") {
                        c = nextC;
                        i = nextI;
                    }
                    break;
                }
            }
            if (c === '"' || c === "'") {
                match = c;
                skipAfterMatch = 2;
                skipBefore = 1;
            }
            let [resultI, resultVal] = readToChar(row, match, i + skipBefore);
            cells.push(resultVal);
            i = resultI + skipAfterMatch;
        }
        return cells;
    }
    Csv.splitRow = splitRow;
    let result = [0, ''];
    let rgx = { '"': /\\"/g, "'": /\\'/g, ",": /\\,/g };
    function readToChar(str, char, i) {
        let start = i;
        let escaped = false;
        while (i < str.length) {
            i = str.indexOf(char, i);
            if (i === -1) {
                i = str.length;
                break;
            }
            if (str[i - 1] === '\\') {
                escaped = true;
                i++;
                continue;
            }
            break;
        }
        let value = str.substring(start, i);
        if (escaped) {
            value = value.replace(rgx[char], char);
        }
        result[0] = i;
        result[1] = value;
        return result;
    }
})(Csv = exports.Csv || (exports.Csv = {}));
var TypeUtils;
(function (TypeUtils) {
    function getTimestamp(x) {
        if (x == null) {
            return null;
        }
        if (typeof x === 'number') {
            return x;
        }
        let date;
        if (typeof x === 'string') {
            date = new Date(x);
        }
        else {
            date = x;
        }
        let timestamp = date === null || date === void 0 ? void 0 : date.getTime();
        return isNaN(timestamp) ? null : timestamp;
    }
    TypeUtils.getTimestamp = getTimestamp;
})(TypeUtils || (TypeUtils = {}));
var FilterUtils;
(function (FilterUtils) {
    function fetch(rows, dateIdx, opts) {
        var _a, _b;
        let total = rows.length;
        let from = TypeUtils.getTimestamp(opts.from);
        let to = TypeUtils.getTimestamp(opts.to);
        let offset = (_a = opts.offset) !== null && _a !== void 0 ? _a : 0;
        let limit = (_b = opts.limit) !== null && _b !== void 0 ? _b : rows.length;
        let startIdx = null;
        let endIdx = null;
        if (from != null) {
            for (startIdx = 0; startIdx < rows.length; startIdx++) {
                let timestamp = TypeUtils.getTimestamp(rows[startIdx][dateIdx]);
                if (timestamp >= from) {
                    break;
                }
            }
        }
        if (to != null) {
            for (endIdx = startIdx !== null && startIdx !== void 0 ? startIdx : 0; endIdx < rows.length; endIdx++) {
                let timestamp = TypeUtils.getTimestamp(rows[endIdx][dateIdx]);
                if (timestamp > to) {
                    break;
                }
            }
        }
        if (startIdx != null || endIdx != null) {
            rows = rows.slice(startIdx !== null && startIdx !== void 0 ? startIdx : 0, endIdx !== null && endIdx !== void 0 ? endIdx : rows.length);
        }
        rows = rows
            .reverse()
            .slice(offset, offset + limit);
        return {
            total,
            rows,
        };
    }
    FilterUtils.fetch = fetch;
})(FilterUtils || (FilterUtils = {}));
//# sourceMappingURL=FileReader.js.map
//# sourceMappingURL=FileReader.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_reader_FileReader) && isObject(module.exports)) {
		Object.assign(_src_reader_FileReader, module.exports);
		return;
	}
	_src_reader_FileReader = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_reader_DirectoryReader;
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
exports.DirectoryReader = void 0;
const atma_io_1 = require("atma-io");
const FileReader_1 = _src_reader_FileReader;
const alot = _node_modules_alot_lib_alot;
class DirectoryReader {
    constructor(channel) {
        this.channel = channel;
    }
    readFiles() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            let dir = this.channel.directory;
            if (dir.endsWith('/') === false) {
                dir += '/';
            }
            if (/file:/.test(dir) === false) {
                dir = 'file://' + dir;
            }
            let files = yield atma_io_1.Directory.readFiles(dir);
            let metaFile = files.find(x => x.uri.file === 'meta.json');
            if (metaFile != null) {
                files = files.filter(x => x !== metaFile);
                if (0 === ((_c = (_b = (_a = this.channel.opts) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0)) {
                    let meta = yield metaFile.readAsync();
                    this.channel.opts = Object.assign(Object.assign({}, ((_d = this.channel.opts) !== null && _d !== void 0 ? _d : {})), meta);
                }
            }
            let indexesHash = new Map();
            let indexes = files
                .filter(x => x.uri.file.endsWith('.idx.json'));
            if (indexes.length > 0) {
                files = files.filter(x => indexes.includes(x) === false);
                indexesHash = alot(indexes)
                    .toMap(x => x.uri.file.replace('.idx.json', ''), x => x);
            }
            let readers = files
                .map(file => {
                return FileReader_1.FileReader.create(this.channel, file.uri.toString(), indexesHash.get(file.uri.getName()));
            });
            return readers;
        });
    }
    static create(channel) {
        return new DirectoryReader(channel);
    }
}
exports.DirectoryReader = DirectoryReader;
//# sourceMappingURL=DirectoryReader.js.map
//# sourceMappingURL=DirectoryReader.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_reader_DirectoryReader) && isObject(module.exports)) {
		Object.assign(_src_reader_DirectoryReader, module.exports);
		return;
	}
	_src_reader_DirectoryReader = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_model_Table;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const alot_1 = _node_modules_alot_lib_alot;
class Table {
    constructor(fields, rows) {
        var _a;
        this.fields = fields;
        this.rows = rows;
        this.size = 0;
        this.fields = fields = fields !== null && fields !== void 0 ? fields : [];
        let idx = (_a = fields === null || fields === void 0 ? void 0 : fields.findIndex(x => x.type === 'date')) !== null && _a !== void 0 ? _a : -1;
        this.dateIdx = idx === -1 ? 0 : idx;
        fields.forEach((f, idx) => f.idx = idx);
    }
    getTable(params) {
        var _a, _b, _c;
        if (typeof params.columnFilters === 'string') {
            // hacky workaround, parse as json
            params.columnFilters = JSON.parse(params.columnFilters);
        }
        let rows = this.rows;
        let filters = (_a = params.columnFilters) === null || _a === void 0 ? void 0 : _a.map(def => {
            return ColumnFilters.create(def, this.fields[def.columnIdx]);
        });
        if (params.rangeStart) {
            rows = rows.filter(x => x[this.dateIdx] >= params.rangeStart);
        }
        if (params.rangeEnd) {
            rows = rows.filter(x => x[this.dateIdx] <= params.rangeEnd);
        }
        if ((filters === null || filters === void 0 ? void 0 : filters.length) > 0) {
            rows = rows.filter(row => {
                let notMatched = filters.some(filter => {
                    return filter.exec(row) === false;
                });
                return notMatched !== true;
            });
        }
        if (params.sortByColumnIdx) {
            rows = alot_1.default(rows)
                .sortBy(x => x[params.sortByColumnIdx], params.sortDir)
                .toArray();
        }
        this.size = rows.length;
        if (params.offset != null || params.limit != null) {
            let offset = (_b = params.offset) !== null && _b !== void 0 ? _b : 0;
            let limit = (_c = params.limit) !== null && _c !== void 0 ? _c : 100;
            rows = rows.slice(offset, offset + limit);
        }
        return rows;
    }
}
exports.Table = Table;
var ColumnFilters;
(function (ColumnFilters) {
    function create(def, field) {
        switch (field.type) {
            case 'number':
                return new NumberNs.NumberFilter(def, field);
            case 'string':
            case 'text':
                return new StringNs.StringFilter(def, field);
        }
    }
    ColumnFilters.create = create;
    let StringNs;
    (function (StringNs) {
        class StringFilter {
            constructor(def, field) {
                this.idx = field.idx;
                this.fn = StringFilter.getCompareFn(def, field);
            }
            exec(row) {
                let value = row[this.idx];
                return this.fn(value);
            }
            static getCompareFn(def, field) {
                let q = def.q;
                let rgx = new RegExp(q);
                return (val) => rgx.test(val);
            }
        }
        StringNs.StringFilter = StringFilter;
    })(StringNs || (StringNs = {}));
    let NumberNs;
    (function (NumberNs) {
        class NumberFilter {
            constructor(def, field) {
                this.idx = field.idx;
                this.fn = NumberFilter.getCompareFn(def, field);
            }
            exec(row) {
                let value = row[this.idx];
                return this.fn(value);
            }
            static getCompareFn(def, field) {
                let q = def.q;
                let matchCompare = /^(>|<|<=|>=|!=|=)([-.\d]+)$/.exec(q);
                if (matchCompare) {
                    let compare = matchCompare[1];
                    let a = parseFloat(matchCompare[2]);
                    return NumberCompare.delegateFn(a, compare);
                }
                let matchRange = /^(\(\[)?([-.\d]+)\-([-.\d]+)(\)\])?$/.exec(q);
                if (matchRange) {
                    let [_, startInc, start, end, endInc] = matchRange;
                    startInc = startInc !== null && startInc !== void 0 ? startInc : '[';
                    endInc = endInc !== null && endInc !== void 0 ? endInc : ']';
                    let a = parseFloat(start);
                    let b = parseFloat(end);
                    return NumberCompare.delegateRangeFn(a, b);
                }
                return () => true;
            }
        }
        NumberNs.NumberFilter = NumberFilter;
        let NumberCompare;
        (function (NumberCompare) {
            const Methods = {
                'lt'(a) {
                    return (currentVal) => currentVal < a;
                },
                'lte'(a) {
                    return (currentVal) => currentVal <= a;
                },
                'gt'(a) {
                    return (currentVal) => currentVal > a;
                },
                'gte'(a) {
                    return (currentVal) => currentVal >= a;
                },
                'eq'(a) {
                    return (currentVal) => currentVal == a;
                },
                'ne'(a) {
                    return (currentVal) => currentVal != a;
                },
            };
            function delegateFn(a, compare) {
                switch (compare) {
                    case '<':
                        return Methods.lt(a);
                    case '<=':
                        return Methods.lte(a);
                    case '>':
                        return Methods.gt(a);
                    case '>=':
                        return Methods.gte(a);
                    case '!=':
                        return Methods.ne(a);
                    default:
                        return Methods.eq(a);
                }
            }
            NumberCompare.delegateFn = delegateFn;
            function delegateRangeFn(a, b) {
                return (value) => value >= a && value <= b;
            }
            NumberCompare.delegateRangeFn = delegateRangeFn;
        })(NumberCompare = NumberNs.NumberCompare || (NumberNs.NumberCompare = {}));
    })(NumberNs || (NumberNs = {}));
})(ColumnFilters || (ColumnFilters = {}));
//# sourceMappingURL=Table.js.map
//# sourceMappingURL=Table.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_model_Table) && isObject(module.exports)) {
		Object.assign(_src_model_Table, module.exports);
		return;
	}
	_src_model_Table = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_reader_ChannelReader;
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
exports.ChannelReader = void 0;
const DirectoryReader_1 = _src_reader_DirectoryReader;
const Table_1 = _src_model_Table;
const alot_1 = _node_modules_alot_lib_alot;
class ChannelReader {
    constructor(channel) {
        this.channel = channel;
    }
    fetch(query) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let readers = yield this.getReaders();
            let result = [];
            let offset = (_a = query.offset) !== null && _a !== void 0 ? _a : 0;
            let limit = (_b = query.limit) !== null && _b !== void 0 ? _b : 500;
            let matched = false;
            for (let i = 0; i < readers.length; i++) {
                let { total, rows } = yield readers[i].fetch({
                    offset: matched ? 0 : offset,
                    limit: limit - result.length,
                    from: query.from,
                    to: query.to,
                });
                if (matched === true && rows.length === 0) {
                    // this file has no extra rows after matched.
                    break;
                }
                if (rows.length > 0) {
                    result = result.concat(rows);
                    if (total < rows.length) {
                        break;
                    }
                    // otherwise continue to next file
                    matched = true;
                }
                if (limit === rows.length) {
                    break;
                }
            }
            return {
                rows: result,
            };
        });
    }
    getDays() {
        return __awaiter(this, void 0, void 0, function* () {
            let readers = yield this.getReaders();
            let days = alot_1.default(readers)
                .map(reader => {
                return {
                    day: reader.day.serialize()
                };
            })
                .toArray();
            return days;
        });
    }
    getData(query) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            if (query.rangeStart != null || query.rangeEnd != null) {
                let rangeStart = query.rangeStart;
                let rangeEnd = (_a = query.rangeEnd) !== null && _a !== void 0 ? _a : new Date();
                if (rangeStart == null) {
                    rangeStart = new Date(rangeEnd.getFullYear(), rangeEnd.getMonth(), rangeEnd.getDate(), 0, 0, 0, 0);
                }
                query.rangeStart = rangeStart;
                query.rangeEnd = rangeEnd;
            }
            let channel = this.channel;
            let fields = (_b = channel.opts.fields) !== null && _b !== void 0 ? _b : channel.opts.columns;
            let directory = DirectoryReader_1.DirectoryReader.create(channel);
            let readers = yield directory.readFiles();
            readers = readers.filter(reader => {
                if (query.day != null) {
                    return query.day.isEqual(reader.day);
                }
                if (query.rangeEnd != null) {
                    if (reader.day.isAfter(query.rangeEnd)) {
                        return false;
                    }
                }
                if (query.rangeStart != null) {
                    if (reader.day.isBefore(query.rangeStart)) {
                        return false;
                    }
                }
                return true;
            });
            let rows = null;
            if (query.offset != null || query.limit != null) {
                let offset = (_c = query.offset) !== null && _c !== void 0 ? _c : 0;
                let limit = (_d = query.limit) !== null && _d !== void 0 ? _d : 50;
                let total = 0;
                rows = yield alot_1.default(readers)
                    .sortBy(x => x.day.valueOf(), 'desc')
                    .mapAsync((reader) => __awaiter(this, void 0, void 0, function* () {
                    let stats = yield reader.stats();
                    return {
                        stats, reader
                    };
                }))
                    .skipWhileAsync(({ stats, reader }) => {
                    if (offset > stats.lines) {
                        offset = offset - stats.lines;
                        return true;
                    }
                    return false;
                })
                    .takeWhileAsync(({ stats, reader }) => {
                    let more = total < offset + limit;
                    total += stats.lines;
                    return more;
                })
                    .mapManyAsync(({ reader }) => __awaiter(this, void 0, void 0, function* () {
                    return yield reader.read();
                }))
                    .toArrayAsync();
                query.offset = offset;
                query.limit = limit;
            }
            else {
                rows = yield alot_1.default(readers)
                    .sortBy(x => x.day.valueOf(), 'desc')
                    .mapManyAsync((reader) => __awaiter(this, void 0, void 0, function* () {
                    return yield reader.read();
                }))
                    .toArrayAsync();
            }
            if (fields == null) {
                fields = (_e = rows === null || rows === void 0 ? void 0 : rows[0]) === null || _e === void 0 ? void 0 : _e.map((x, idx) => {
                    return {
                        idx: idx,
                        name: '',
                        type: 'string'
                    };
                });
            }
            let table = new Table_1.Table(fields, rows);
            return {
                columns: fields,
                rows: table.getTable(query),
                size: table.size
            };
        });
    }
    stats() {
        return __awaiter(this, void 0, void 0, function* () {
            let readers = yield this.getReaders();
            let stats = yield alot_1.default(readers)
                .mapAsync(reader => reader.stats())
                .toArrayAsync();
            let lines = alot_1.default(stats).sum(x => { var _a; return (_a = x.lines) !== null && _a !== void 0 ? _a : 0; });
            return {
                files: readers.length,
                lines
            };
        });
    }
    getReaders() {
        return __awaiter(this, void 0, void 0, function* () {
            let directory = DirectoryReader_1.DirectoryReader.create(this.channel);
            let readers = yield directory.readFiles();
            return alot_1.default(readers)
                .sortBy(x => x.day.valueOf(), 'desc')
                .toArray();
        });
    }
}
exports.ChannelReader = ChannelReader;
//# sourceMappingURL=ChannelReader.js.map
//# sourceMappingURL=ChannelReader.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_reader_ChannelReader) && isObject(module.exports)) {
		Object.assign(_src_reader_ChannelReader, module.exports);
		return;
	}
	_src_reader_ChannelReader = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_MonitWorker;
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
exports.MonitWorker = void 0;
const alot_1 = _node_modules_alot_lib_alot;
const atma_io_1 = require("atma-io");
//import { LifecycleEvent, LifecycleEvents } from 'atma-server/HttpApplication/LifecycleEvents';
const atma_utils_1 = _node_modules_atma_utils_lib_utils;
const Slack_1 = _src_Slack;
const LoggerFile_1 = _src_fs_LoggerFile;
const csv_1 = _src_utils_csv;
const err_1 = _src_utils_err;
const fs_1 = _src_fs_fs;
const ChannelReader_1 = _src_reader_ChannelReader;
class MonitWorker {
    constructor(opts) {
        this.opts = opts;
        this.loggers = {};
        if (opts.slack) {
            this.slack = new Slack_1.SlackClient(opts.slack);
        }
    }
    createChannel(name, opts = {}) {
        if (name in this.loggers) {
            return this.loggers[name];
        }
        return this.loggers[name] = LoggerFile_1.LoggerFile.create(name, Object.assign({ 
            // directory could be overwritten in  options
            directory: atma_utils_1.class_Uri.combine(this.opts.directory, name, '/') }, opts));
    }
    createChannelReader(channel) {
        return new ChannelReader_1.ChannelReader(channel);
    }
    watchServer(events) {
        const opts = this.opts;
        const loggerOpts = {
            directory: opts.directory
        };
        this.loggers = (opts === null || opts === void 0 ? void 0 : opts.disableDefaultLoggers) ? {} : {
            start: LoggerFile_1.LoggerFile.create('start', Object.assign({ fields: [
                    {
                        name: 'Date',
                        type: 'date',
                        sortable: true
                    },
                    {
                        name: 'message'
                    }
                ] }, loggerOpts)),
            requests: LoggerFile_1.LoggerFile.create('requests', Object.assign({ fields: [
                    {
                        name: 'Date',
                        type: 'date',
                        sortable: true
                    },
                    {
                        name: 'Status',
                        type: 'number',
                        sortable: true
                    },
                    {
                        name: 'Method',
                        type: 'string'
                    },
                    {
                        name: 'Url',
                        type: 'string',
                        filterable: true
                    },
                    {
                        name: 'Time',
                        type: 'number',
                        sortable: true
                    },
                    {
                        name: 'User'
                    },
                    {
                        name: 'IP'
                    },
                    {
                        name: 'Error',
                        type: 'text'
                    }
                ] }, loggerOpts)),
            errors: LoggerFile_1.LoggerFile.create('errors', Object.assign({ fields: [
                    {
                        name: 'Date',
                        type: 'date',
                        sortable: true
                    },
                    {
                        name: 'Error',
                    }
                ] }, loggerOpts)),
        };
        if (events) {
            this.watch(events);
        }
    }
    watch(events) {
        events.on('AppStart', (event) => {
            var _a;
            (_a = this.slack) === null || _a === void 0 ? void 0 : _a.send(event.message);
            this.loggers.start.write(`${new Date().toISOString()}, ${csv_1.Csv.escape(event.message)}, ${event.time}ms`);
        });
        events.on('HandlerError', (event, req, res) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            this.loggers.requests.write(`${new Date().toISOString()}, ${event.status}, ${event.method}, ${csv_1.Csv.escape(event.url)}, ${event.time}ms, ${(_a = event.user) !== null && _a !== void 0 ? _a : ''}, ${(_b = event.ip) !== null && _b !== void 0 ? _b : ''}, ${err_1.Err.serializeError((_c = event.error) !== null && _c !== void 0 ? _c : event.message)}`);
            let status = (_f = (_d = event.status) !== null && _d !== void 0 ? _d : (_e = event.error) === null || _e === void 0 ? void 0 : _e.statusCode) !== null && _f !== void 0 ? _f : 500;
            if (status <= 404 || this.slack == null) {
                return;
            }
            if (((_h = (_g = this.opts) === null || _g === void 0 ? void 0 : _g.filterForSlack) === null || _h === void 0 ? void 0 : _h.call(_g, event)) === false) {
                return;
            }
            let message = event.message;
            let stack = (_j = event.error) === null || _j === void 0 ? void 0 : _j.stack;
            if (stack) {
                message += "\n" + "```" + stack + "```";
            }
            this.slack.send(message);
        });
        events.on('HandlerSuccess', (event, req, res) => {
            var _a, _b;
            this.loggers.requests.write(`${new Date().toISOString()}, ${event.status}, ${event.method}, ${csv_1.Csv.escape(event.url)}, ${event.time}ms, ${(_a = event.user) !== null && _a !== void 0 ? _a : ''}, ${(_b = event.ip) !== null && _b !== void 0 ? _b : ''}`);
        });
    }
    writeError(error) {
        var _a, _b;
        this.loggers.errors.write(`${new Date().toISOString()}, ${err_1.Err.serializeError(error)}`);
        if ((_a = this.opts) === null || _a === void 0 ? void 0 : _a.filterForSlack({ error })) {
            (_b = this.slack) === null || _b === void 0 ? void 0 : _b.send(error.toString());
        }
    }
    /** Flush all buffered content to disk */
    flush() {
        for (let key in this.loggers) {
            this.loggers[key].flush();
        }
    }
    restoreChannelsAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            let channels = Object.keys(this.loggers);
            let directoryExists = false;
            try {
                directoryExists = yield atma_io_1.Directory.existsAsync(this.opts.directory);
            }
            catch (error) { }
            if (directoryExists === true) {
                let files = yield fs_1.dir_readAsync(this.opts.directory);
                yield alot_1.default(files).forEachAsync((dirName) => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    if (channels.some(name => name === dirName)) {
                        return;
                    }
                    let channel = yield LoggerFile_1.LoggerFile.restore(this.opts.directory, dirName, (_a = this.opts.channels) === null || _a === void 0 ? void 0 : _a[dirName]);
                    this.loggers[dirName] = channel;
                })).toArrayAsync();
            }
            if (this.opts.channels) {
                for (let key in this.opts.channels) {
                    if (key in this.loggers === false) {
                        this.loggers[key] = LoggerFile_1.LoggerFile.prepair(this.opts.channels[key]);
                    }
                }
            }
        });
    }
}
exports.MonitWorker = MonitWorker;
//# sourceMappingURL=MonitWorker.js.map
//# sourceMappingURL=MonitWorker.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_MonitWorker) && isObject(module.exports)) {
		Object.assign(_src_MonitWorker, module.exports);
		return;
	}
	_src_MonitWorker = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_Everlog;
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
exports.Everlog = void 0;
const MonitWorker_1 = _src_MonitWorker;
const LoggerFile_1 = _src_fs_LoggerFile;
const ChannelReader_1 = _src_reader_ChannelReader;
var Everlog;
(function (Everlog) {
    function initialize(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Everlog.monit == null) {
                Everlog.monit = new MonitWorker_1.MonitWorker(opts);
                yield Everlog.monit.restoreChannelsAsync();
            }
            return Everlog.monit;
        });
    }
    Everlog.initialize = initialize;
    function createChannel(name, opts) {
        var _a;
        return (_a = Everlog.monit === null || Everlog.monit === void 0 ? void 0 : Everlog.monit.createChannel(name, opts)) !== null && _a !== void 0 ? _a : new LoggerFile_1.EmptyLoggerFile();
    }
    Everlog.createChannel = createChannel;
    function createChannelReader(mix, opts) {
        let channel = null;
        if (typeof mix === 'string') {
            if ((opts === null || opts === void 0 ? void 0 : opts.directory) == null) {
                throw new Error(`Set the root directory to read the logs from`);
            }
            channel = LoggerFile_1.LoggerFile.create(mix, Object.assign({ directory: null }, opts));
        }
        else {
            channel = mix;
        }
        return new ChannelReader_1.ChannelReader(channel);
    }
    Everlog.createChannelReader = createChannelReader;
    function flush() {
        Everlog.monit === null || Everlog.monit === void 0 ? void 0 : Everlog.monit.flush();
    }
    Everlog.flush = flush;
    function error(error) {
        Everlog.monit === null || Everlog.monit === void 0 ? void 0 : Everlog.monit.writeError(error);
    }
    Everlog.error = error;
})(Everlog = exports.Everlog || (exports.Everlog = {}));
//# sourceMappingURL=Everlog.js.map
//# sourceMappingURL=Everlog.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_Everlog) && isObject(module.exports)) {
		Object.assign(_src_Everlog, module.exports);
		return;
	}
	_src_Everlog = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _node_modules_class_json_lib_class_json;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	
// source ./UMD.js
(function (factory) {

    var _name = 'class-json',
        _global = typeof window === 'undefined' ? global : window,
        _module = {
            exports: {}
        };

    factory(_module, _module.exports, _global);

    if (typeof module === 'object' && module.exports) {
        module.exports = _module.exports;
        return;
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

    var _src_Json = {};
var _src_JsonConvert = {};
var _src_JsonDeserializer = {};
var _src_JsonSchema = {};
var _src_JsonSerializer = {};
var _src_JsonSettings = {};
var _src_JsonUtils = {};
var _src_JsonValidate = {};
var _src_Serializable = {};
var _src_Types = {};
var _src_utils_is = {};
var _src_utils_obj = {};
var _src_validation_Rule = {};
var _src_validation_RuleBase = {};
var _src_validation_rules_Custom = {};
var _src_validation_rules_Length = {};
var _src_validation_rules_Number = {};
var _src_validation_rules_Pattern = {};
var _src_validation_rules_Required = {};
var _src_validation_rules_String = {};

// source ./ModuleSimplified.js
var _src_utils_obj;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
exports.__esModule = true;
function obj_clone(source) {
    if (source == null || typeof source !== 'object') {
        return source;
    }
    if (Array.isArray(source)) {
        var arr = source;
        var out = new Array(arr.length);
        for (var i = 0; i < arr.length; i++) {
            out[i] = obj_clone(arr[i]);
        }
        return out;
    }
    var Ctor = source.constructor;
    if (Ctor === Object) {
        var obj = {};
        for (var key in source) {
            obj[key] = obj_clone(source[key]);
        }
        return obj;
    }
    return source;
}
exports.obj_clone = obj_clone;
function obj_getKeys(x) {
    var keys = [];
    var proto = x;
    while (proto != null && proto != Object.prototype) {
        keys.push.apply(keys, Object.getOwnPropertyNames(proto));
        proto = Object.getPrototypeOf(proto);
    }
    return keys;
}
exports.obj_getKeys = obj_getKeys;
function obj_getProperty(obj_, path) {
    if (obj_ == null) {
        return null;
    }
    if (path.indexOf('.') === -1) {
        return obj_[path];
    }
    var obj = obj_, chain = path.split('.'), imax = chain.length, i = -1;
    while (obj != null && ++i < imax) {
        var key = chain[i];
        obj = obj[key];
    }
    return obj;
}
exports.obj_getProperty = obj_getProperty;
;
function keysToObj(keys) {
    if (keys == null) {
        return null;
    }
    var obj = Object.create(null);
    for (var i = 0; i < keys.length; i++) {
        obj[keys[i]] = 1;
    }
    return obj;
}
function obj_map(source, mapper) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (source == null || typeof source !== 'object') {
        return source;
    }
    if (Array.isArray(source)) {
        return source.map(function (x) { return obj_map(x, mapper); });
    }
    var out = Object.create(null);
    var excludeProps = keysToObj((_a = mapper) === null || _a === void 0 ? void 0 : _a.exclude);
    var includeProps = keysToObj((_b = mapper) === null || _b === void 0 ? void 0 : _b.include);
    for (var key in source) {
        var val = source[key];
        if (val == null) {
            continue;
        }
        if (excludeProps != null && key in excludeProps === true) {
            continue;
        }
        if (includeProps != null && key in includeProps !== true) {
            continue;
        }
        var info = (_d = (_c = mapper) === null || _c === void 0 ? void 0 : _c.props) === null || _d === void 0 ? void 0 : _d[key];
        if ((_e = info) === null || _e === void 0 ? void 0 : _e.ignore) {
            continue;
        }
        var name = (_g = (_f = info) === null || _f === void 0 ? void 0 : _f.name, (_g !== null && _g !== void 0 ? _g : key));
        if ((_h = info) === null || _h === void 0 ? void 0 : _h.map) {
            out[name] = (_j = info) === null || _j === void 0 ? void 0 : _j.map(val);
            continue;
        }
        if (typeof val === 'object' && info != null && (info.exclude || info.include || info.props)) {
            val = obj_map(val, info);
        }
        out[name] = val;
    }
    return out;
}
exports.obj_map = obj_map;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=obj.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_obj) && isObject(module.exports)) {
		Object.assign(_src_utils_obj, module.exports);
		return;
	}
	_src_utils_obj = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_JsonUtils;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
exports.__esModule = true;
var obj_1 = _src_utils_obj;
var JsonUtils;
(function (JsonUtils) {
    JsonUtils.META_KEY = '__json__';
    function resolveModelMeta(mix) {
        if (mix == null) {
            return null;
        }
        var target = typeof mix === 'function' ? mix.prototype : mix;
        var meta = target[JsonUtils.META_KEY];
        if (meta != null) {
            if (target.hasOwnProperty(JsonUtils.META_KEY) === false) {
                // was inherited
                meta = obj_1.obj_clone(meta);
                meta.Type = mix;
                Object.defineProperty(target, JsonUtils.META_KEY, {
                    enumerable: false,
                    configurable: true,
                    value: meta
                });
            }
        }
        if (meta == null) {
            meta = {
                Type: typeof mix === 'function' ? mix : mix.constructor,
                properties: {}
            };
            Object.defineProperty(target, JsonUtils.META_KEY, {
                enumerable: false,
                configurable: true,
                value: meta
            });
        }
        return meta;
    }
    JsonUtils.resolveModelMeta = resolveModelMeta;
    function pickModelMeta(mix) {
        if (mix == null) {
            return null;
        }
        var isFn = typeof mix === 'function';
        if (isFn && mix === Object) {
            return null;
        }
        if (isFn) {
            return mix.prototype[JsonUtils.META_KEY] || null;
        }
        return mix[JsonUtils.META_KEY] || null;
    }
    JsonUtils.pickModelMeta = pickModelMeta;
    function hasModelMeta(mix) {
        return pickModelMeta(mix) != null;
    }
    JsonUtils.hasModelMeta = hasModelMeta;
    function pickPropertyMeta(target, propertyKey) {
        var _a;
        var meta = pickModelMeta(target);
        return (_a = meta) === null || _a === void 0 ? void 0 : _a.properties[propertyKey];
    }
    JsonUtils.pickPropertyMeta = pickPropertyMeta;
    function resolvePropertyMeta(target, propertyKey) {
        var meta = resolveModelMeta(target);
        var propertyInfo = meta.properties[propertyKey];
        if (propertyInfo == null) {
            propertyInfo = meta.properties[propertyKey] = {
                property: propertyKey,
                rules: null
            };
        }
        return propertyInfo;
    }
    JsonUtils.resolvePropertyMeta = resolvePropertyMeta;
    function pickPropertyRules(target, propertyKey) {
        var _a;
        var propInfo = pickPropertyMeta(target, propertyKey);
        return (_a = propInfo) === null || _a === void 0 ? void 0 : _a.rules;
    }
    JsonUtils.pickPropertyRules = pickPropertyRules;
    function resolvePropertyRules(target, propertyKey) {
        var _a;
        var propInfo = resolvePropertyMeta(target, propertyKey);
        return _a = propInfo.rules, (_a !== null && _a !== void 0 ? _a : (propInfo.rules = []));
    }
    JsonUtils.resolvePropertyRules = resolvePropertyRules;
    JsonUtils.map = obj_1.obj_map;
})(JsonUtils = exports.JsonUtils || (exports.JsonUtils = {}));
//# sourceMappingURL=export.js.map
//# sourceMappingURL=JsonUtils.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_JsonUtils) && isObject(module.exports)) {
		Object.assign(_src_JsonUtils, module.exports);
		return;
	}
	_src_JsonUtils = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_validation_RuleBase;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
exports.__esModule = true;
var obj_1 = _src_utils_obj;
var RuleBase = /** @class */ (function () {
    function RuleBase(property, mix) {
        this.property = property;
        if (mix != null) {
            this.opts = typeof mix === 'string' ? { message: mix } : mix;
        }
    }
    RuleBase.prototype.formatMessage = function (value, root, $default) {
        var _a;
        var msg = (_a = this.opts) === null || _a === void 0 ? void 0 : _a.message;
        if (msg == null) {
            return $default;
        }
        if (typeof msg === 'function') {
            return msg(this.property, value, root);
        }
        if (msg.includes('~[') === false) {
            return msg;
        }
        var model = { property: this.property, value: value, model: root };
        return msg.replace(/~\[([^\]]+)]/g, function (_, acc) {
            return obj_1.obj_getProperty(model, acc.trim());
        });
    };
    return RuleBase;
}());
exports.RuleBase = RuleBase;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=RuleBase.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_validation_RuleBase) && isObject(module.exports)) {
		Object.assign(_src_validation_RuleBase, module.exports);
		return;
	}
	_src_validation_RuleBase = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_validation_rules_Required;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var RuleBase_1 = _src_validation_RuleBase;
var Required = /** @class */ (function (_super) {
    __extends(Required, _super);
    function Required() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Required.prototype.validate = function (value, root) {
        if (value == null) {
            return {
                name: 'Required',
                property: this.property,
                value: null,
                message: this.formatMessage(null, root, this.property + " is not set")
            };
        }
    };
    return Required;
}(RuleBase_1.RuleBase));
exports.Required = Required;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=Required.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_validation_rules_Required) && isObject(module.exports)) {
		Object.assign(_src_validation_rules_Required, module.exports);
		return;
	}
	_src_validation_rules_Required = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_validation_rules_Length;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var RuleBase_1 = _src_validation_RuleBase;
var MinLength = /** @class */ (function (_super) {
    __extends(MinLength, _super);
    function MinLength(prop, count, mix) {
        var _this = _super.call(this, prop, mix) || this;
        _this.count = count;
        return _this;
    }
    MinLength.prototype.validate = function (value, root) {
        if (typeof value !== 'string') {
            return {
                name: 'MinLength.Type',
                property: this.property,
                value: value,
                message: this.formatMessage(value, root, this.property + " expected to be string, but got " + typeof value)
            };
        }
        if (value.length < this.count) {
            return {
                name: 'MinLength',
                property: this.property,
                value: value,
                message: this.formatMessage(value, root, this.property + " must be mininum of length " + this.count + ", but got " + value.length)
            };
        }
    };
    return MinLength;
}(RuleBase_1.RuleBase));
exports.MinLength = MinLength;
var MaxLength = /** @class */ (function (_super) {
    __extends(MaxLength, _super);
    function MaxLength(prop, count, mix) {
        var _this = _super.call(this, prop, mix) || this;
        _this.count = count;
        return _this;
    }
    MaxLength.prototype.validate = function (value, root) {
        if (typeof value !== 'string') {
            return {
                name: 'MaxLength.Type',
                property: this.property,
                value: value,
                message: this.formatMessage(value, root, this.property + " expected to be string, but got " + typeof value)
            };
        }
        if (value.length > this.count) {
            return {
                name: 'MaxLength',
                property: this.property,
                value: value,
                message: this.formatMessage(value, root, this.property + " must be maximum of length " + this.count + ", but got " + value.length)
            };
        }
    };
    return MaxLength;
}(RuleBase_1.RuleBase));
exports.MaxLength = MaxLength;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=Length.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_validation_rules_Length) && isObject(module.exports)) {
		Object.assign(_src_validation_rules_Length, module.exports);
		return;
	}
	_src_validation_rules_Length = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_validation_rules_Pattern;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var RuleBase_1 = _src_validation_RuleBase;
var Pattern = /** @class */ (function (_super) {
    __extends(Pattern, _super);
    function Pattern(prop, pattern, mix) {
        var _this = _super.call(this, prop, mix) || this;
        _this.pattern = pattern;
        return _this;
    }
    Pattern.prototype.validate = function (value, root) {
        if (typeof value !== 'string') {
            return {
                name: 'Pattern.Type',
                property: this.property,
                value: value,
                message: this.formatMessage(value, root, this.property + " expected to be string, but got " + typeof value)
            };
        }
        if (this.pattern.test(value) === false) {
            return {
                name: 'Pattern',
                property: this.property,
                value: value,
                message: this.formatMessage(value, root, this.property + " must match the pattern " + String(this.pattern))
            };
        }
    };
    return Pattern;
}(RuleBase_1.RuleBase));
exports.Pattern = Pattern;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=Pattern.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_validation_rules_Pattern) && isObject(module.exports)) {
		Object.assign(_src_validation_rules_Pattern, module.exports);
		return;
	}
	_src_validation_rules_Pattern = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_validation_rules_Custom;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var RuleBase_1 = _src_validation_RuleBase;
var Custom = /** @class */ (function (_super) {
    __extends(Custom, _super);
    function Custom(prop, fn, name) {
        if (name === void 0) { name = 'Custom'; }
        var _this = _super.call(this, prop) || this;
        _this.fn = fn;
        _this.name = name;
        return _this;
    }
    Custom.prototype.validate = function (value, root) {
        var message = this.fn(value, root);
        if (message != null) {
            return {
                name: this.name,
                property: this.property,
                value: value,
                message: message
            };
        }
    };
    return Custom;
}(RuleBase_1.RuleBase));
exports.Custom = Custom;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=Custom.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_validation_rules_Custom) && isObject(module.exports)) {
		Object.assign(_src_validation_rules_Custom, module.exports);
		return;
	}
	_src_validation_rules_Custom = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_validation_rules_Number;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var RuleBase_1 = _src_validation_RuleBase;
var Minimum = /** @class */ (function (_super) {
    __extends(Minimum, _super);
    function Minimum(prop, value, mix) {
        var _this = _super.call(this, prop, mix) || this;
        _this.value = value;
        return _this;
    }
    Minimum.prototype.validate = function (value, root) {
        if (typeof value !== 'number') {
            return {
                name: 'Minimum.Type',
                property: this.property,
                value: value,
                message: this.formatMessage(value, root, this.property + " expected to be a number, but got " + typeof value)
            };
        }
        if (value < this.value) {
            return {
                name: 'Minimum',
                property: this.property,
                value: value,
                message: this.formatMessage(value, root, this.property + " must be mininum " + this.value + ", but got " + value)
            };
        }
    };
    return Minimum;
}(RuleBase_1.RuleBase));
exports.Minimum = Minimum;
var Maximum = /** @class */ (function (_super) {
    __extends(Maximum, _super);
    function Maximum(prop, value, mix) {
        var _this = _super.call(this, prop, mix) || this;
        _this.value = value;
        return _this;
    }
    Maximum.prototype.validate = function (value, root) {
        if (typeof value !== 'number') {
            return {
                name: 'Maximum.Type',
                property: this.property,
                value: value,
                message: this.formatMessage(value, root, this.property + " expected to be a number, but got " + typeof value)
            };
        }
        if (value > this.value) {
            return {
                name: 'Maximum',
                property: this.property,
                value: value,
                message: this.formatMessage(value, root, this.property + " must be maximum " + this.value + ", but got " + value)
            };
        }
    };
    return Maximum;
}(RuleBase_1.RuleBase));
exports.Maximum = Maximum;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=Number.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_validation_rules_Number) && isObject(module.exports)) {
		Object.assign(_src_validation_rules_Number, module.exports);
		return;
	}
	_src_validation_rules_Number = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_validation_rules_String;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var RuleBase_1 = _src_validation_RuleBase;
var StringEnum = /** @class */ (function (_super) {
    __extends(StringEnum, _super);
    function StringEnum(prop, values, mix) {
        var _this = _super.call(this, prop, mix) || this;
        _this.values = values;
        return _this;
    }
    StringEnum.prototype.validate = function (value, root) {
        if (typeof value !== 'string') {
            return {
                name: 'StringEnum.Type',
                property: this.property,
                value: value,
                message: this.formatMessage(value, root, this.property + " expected to be a string, but got " + typeof value)
            };
        }
        if (this.values.includes(value) === false) {
            return {
                name: 'StringEnum',
                property: this.property,
                value: value,
                message: this.formatMessage(value, root, this.property + " must be one of " + this.values.join(',') + ", but got " + value)
            };
        }
    };
    return StringEnum;
}(RuleBase_1.RuleBase));
exports.StringEnum = StringEnum;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=String.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_validation_rules_String) && isObject(module.exports)) {
		Object.assign(_src_validation_rules_String, module.exports);
		return;
	}
	_src_validation_rules_String = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_validation_Rule;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
exports.__esModule = true;
var JsonUtils_1 = _src_JsonUtils;
var Required_1 = _src_validation_rules_Required;
var Length_1 = _src_validation_rules_Length;
var Pattern_1 = _src_validation_rules_Pattern;
var Custom_1 = _src_validation_rules_Custom;
var Number_1 = _src_validation_rules_Number;
var String_1 = _src_validation_rules_String;
var Rule;
(function (Rule) {
    function required(mix) {
        return function (target, propertyKey, descriptor) {
            var rules = JsonUtils_1.JsonUtils.resolvePropertyRules(target, propertyKey);
            var rule = new Required_1.Required(propertyKey, mix);
            rules.unshift(rule);
            return descriptor;
        };
    }
    Rule.required = required;
    function minLength(count, mix) {
        return function (target, propertyKey, descriptor) {
            var rules = JsonUtils_1.JsonUtils.resolvePropertyRules(target, propertyKey);
            var rule = new Length_1.MinLength(propertyKey, count, mix);
            rules.unshift(rule);
            return descriptor;
        };
    }
    Rule.minLength = minLength;
    function maxLength(count, mix) {
        return function (target, propertyKey, descriptor) {
            var rules = JsonUtils_1.JsonUtils.resolvePropertyRules(target, propertyKey);
            var rule = new Length_1.MaxLength(propertyKey, count, mix);
            rules.unshift(rule);
            return descriptor;
        };
    }
    Rule.maxLength = maxLength;
    function minimum(val, mix) {
        return function (target, propertyKey, descriptor) {
            var rules = JsonUtils_1.JsonUtils.resolvePropertyRules(target, propertyKey);
            var rule = new Number_1.Minimum(propertyKey, val, mix);
            rules.unshift(rule);
            return descriptor;
        };
    }
    Rule.minimum = minimum;
    function maximum(val, mix) {
        return function (target, propertyKey, descriptor) {
            var rules = JsonUtils_1.JsonUtils.resolvePropertyRules(target, propertyKey);
            var rule = new Number_1.Maximum(propertyKey, val, mix);
            rules.unshift(rule);
            return descriptor;
        };
    }
    Rule.maximum = maximum;
    function pattern(pattern, mix) {
        if (typeof pattern === 'string') {
            pattern = new RegExp(pattern);
        }
        return function (target, propertyKey, descriptor) {
            var rules = JsonUtils_1.JsonUtils.resolvePropertyRules(target, propertyKey);
            var rule = new Pattern_1.Pattern(propertyKey, pattern, mix);
            rules.unshift(rule);
            return descriptor;
        };
    }
    Rule.pattern = pattern;
    function stringEnum(values, mix) {
        return function (target, propertyKey, descriptor) {
            var rules = JsonUtils_1.JsonUtils.resolvePropertyRules(target, propertyKey);
            var rule = new String_1.StringEnum(propertyKey, values, mix);
            rules.unshift(rule);
            return descriptor;
        };
    }
    Rule.stringEnum = stringEnum;
    function validate(fn, name) {
        if (name === void 0) { name = 'Custom'; }
        return function (target, propertyKey, descriptor) {
            var rules = JsonUtils_1.JsonUtils.resolvePropertyRules(target, propertyKey);
            var rule = new Custom_1.Custom(propertyKey, fn, name);
            rules.unshift(rule);
            return descriptor;
        };
    }
    Rule.validate = validate;
})(Rule = exports.Rule || (exports.Rule = {}));
var RuleUtil;
(function (RuleUtil) {
    // Unwrap Decorators in Json.meta
    function unboxRules(props) {
        var _loop_1 = function (key) {
            var rules = props[key].rules;
            if (rules == null) {
                return "continue";
            }
            var fns = rules.filter(function (x) { return typeof x === 'function'; });
            if (fns.length === 0) {
                return "continue";
            }
            var target = {};
            fns.map(function (fn) {
                fn(target, key);
            });
            var unboxed = JsonUtils_1.JsonUtils.resolvePropertyRules(target, key);
            var arr = rules.map(function (rule) {
                if (typeof rule === 'function') {
                    return unboxed.shift();
                }
                ;
                return rule;
            });
            props[key].rules = arr;
        };
        for (var key in props) {
            _loop_1(key);
        }
    }
    RuleUtil.unboxRules = unboxRules;
})(RuleUtil = exports.RuleUtil || (exports.RuleUtil = {}));
//# sourceMappingURL=export.js.map
//# sourceMappingURL=Rule.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_validation_Rule) && isObject(module.exports)) {
		Object.assign(_src_validation_Rule, module.exports);
		return;
	}
	_src_validation_Rule = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_Json;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
exports.__esModule = true;
var JsonUtils_1 = _src_JsonUtils;
var Rule_1 = _src_validation_Rule;
var Json;
(function (Json) {
    function ignore() {
        return function (target, propertyKey, descriptor) {
            var meta = JsonUtils_1.JsonUtils.resolvePropertyMeta(target, propertyKey);
            meta.jsonIgnore = true;
            return descriptor;
        };
    }
    Json.ignore = ignore;
    function name(name) {
        return function (target, propertyKey, descriptor) {
            var metaObj = JsonUtils_1.JsonUtils.resolveModelMeta(target);
            if (metaObj.nameMappings == null) {
                metaObj.nameMappings = {};
            }
            var metaProp = JsonUtils_1.JsonUtils.resolvePropertyMeta(target, propertyKey);
            metaProp.jsonName = name;
            metaObj.nameMappings[name] = metaProp;
            return descriptor;
        };
    }
    Json.name = name;
    function type(Ctor, options) {
        return function (target, propertyKey, descriptor) {
            var viaProperty = descriptor == null;
            var meta = JsonUtils_1.JsonUtils.resolvePropertyMeta(target, propertyKey);
            meta.Type = Ctor;
            meta.options = options;
            return descriptor;
        };
    }
    Json.type = type;
    function array(Ctor, options) {
        return function (target, propertyKey, descriptor) {
            var meta = JsonUtils_1.JsonUtils.resolvePropertyMeta(target, propertyKey);
            meta.ArrayType = Ctor;
            meta.options = options;
            return descriptor;
        };
    }
    Json.array = array;
    function value(mix) {
        console.log('Obsolete: renamed .defaultValue');
        return defaultValue(mix);
    }
    Json.value = value;
    function defaultValue(mix) {
        return function (target, propertyKey, descriptor) {
            var _a;
            var metaModel = JsonUtils_1.JsonUtils.resolveModelMeta(target);
            var defs = (_a = metaModel.defaults, (_a !== null && _a !== void 0 ? _a : (metaModel.defaults = {})));
            defs[propertyKey] = mix;
            var metaProp = JsonUtils_1.JsonUtils.resolvePropertyMeta(target, propertyKey);
            metaProp["default"] = value;
            return descriptor;
        };
    }
    Json.defaultValue = defaultValue;
    function converter(Converter) {
        return function (target, propertyKey, descriptor) {
            var meta = JsonUtils_1.JsonUtils.resolvePropertyMeta(target, propertyKey);
            meta.Converter = Converter;
            return descriptor;
        };
    }
    Json.converter = converter;
    function description(text) {
        return function (target, propertyKey, descriptor) {
            if (propertyKey == null) {
                var metaModel = JsonUtils_1.JsonUtils.resolveModelMeta(target);
                metaModel.description = text;
                return;
            }
            var metaProp = JsonUtils_1.JsonUtils.resolvePropertyMeta(target, propertyKey);
            metaProp.description = text;
            return descriptor;
        };
    }
    Json.description = description;
    function meta(meta) {
        Rule_1.RuleUtil.unboxRules(meta.properties);
        return function (target, propertyKey, descriptor) {
            if (propertyKey == null) {
                var metaModel = JsonUtils_1.JsonUtils.resolveModelMeta(target);
                Object.assign(metaModel, meta);
                return;
            }
            var metaProp = JsonUtils_1.JsonUtils.resolvePropertyMeta(target, propertyKey);
            metaProp.Meta = meta;
            return descriptor;
        };
    }
    Json.meta = meta;
    function stringify() {
        return function (target, propertyKey, descriptor) {
            var meta = JsonUtils_1.JsonUtils.resolvePropertyMeta(target, propertyKey);
            meta.Converter = {
                toJSON: function (mix) {
                    if (typeof mix === 'string') {
                        return mix;
                    }
                    return JSON.stringify(mix);
                },
                fromJSON: function (mix) {
                    if (typeof mix !== 'string') {
                        return mix;
                    }
                    return JSON.parse(mix);
                }
            };
            return descriptor;
        };
    }
    Json.stringify = stringify;
})(Json = exports.Json || (exports.Json = {}));
//# sourceMappingURL=export.js.map
//# sourceMappingURL=Json.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_Json) && isObject(module.exports)) {
		Object.assign(_src_Json, module.exports);
		return;
	}
	_src_Json = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_is;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
exports.__esModule = true;
function is_rawObject(x) {
    return x != null && typeof x === 'object' && x.constructor === Object;
}
exports.is_rawObject = is_rawObject;
function is_Array(arr) {
    return (arr != null &&
        typeof arr === 'object' &&
        typeof arr.length === 'number' &&
        typeof arr.slice === 'function');
}
exports.is_Array = is_Array;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=is.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_is) && isObject(module.exports)) {
		Object.assign(_src_utils_is, module.exports);
		return;
	}
	_src_utils_is = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_Types;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
exports.__esModule = true;
var is_1 = _src_utils_is;
var Types;
(function (Types) {
    function isValueType(x) {
        return x == null || typeof x !== 'object';
    }
    Types.isValueType = isValueType;
    function isArray(x) {
        return is_1.is_Array(x);
    }
    Types.isArray = isArray;
    function isObject(x) {
        if (x == null || typeof x !== 'object') {
            return false;
        }
        if (is_1.is_Array(x)) {
            return false;
        }
        if (x instanceof Date ||
            x instanceof RegExp ||
            x instanceof Number ||
            x instanceof String) {
            return false;
        }
        return true;
    }
    Types.isObject = isObject;
})(Types = exports.Types || (exports.Types = {}));
//# sourceMappingURL=export.js.map
//# sourceMappingURL=Types.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_Types) && isObject(module.exports)) {
		Object.assign(_src_Types, module.exports);
		return;
	}
	_src_Types = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_JsonValidate;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
exports.__esModule = true;
var JsonUtils_1 = _src_JsonUtils;
var Types_1 = _src_Types;
var Required_1 = _src_validation_rules_Required;
var EMPTY = [];
var JsonValidate;
(function (JsonValidate) {
    function validate(model, settings) {
        var _a, _b, _c;
        var meta = (_a = JsonUtils_1.JsonUtils.pickModelMeta(model), (_a !== null && _a !== void 0 ? _a : JsonUtils_1.JsonUtils.pickModelMeta((_b = settings) === null || _b === void 0 ? void 0 : _b.Type)));
        if (meta == null) {
            if (((_c = settings) === null || _c === void 0 ? void 0 : _c.mustValidate) === true) {
                return [
                    { message: 'Object has not validation meta information' }
                ];
            }
            return EMPTY;
        }
        var errors = validateByMeta(model, model, meta, '');
        return (errors !== null && errors !== void 0 ? errors : EMPTY);
    }
    JsonValidate.validate = validate;
    function validateProperty(model, key, settings) {
        var _a, _b, _c;
        var meta = (_a = JsonUtils_1.JsonUtils.pickModelMeta(model), (_a !== null && _a !== void 0 ? _a : JsonUtils_1.JsonUtils.pickModelMeta((_b = settings) === null || _b === void 0 ? void 0 : _b.Type)));
        if (meta == null) {
            if (((_c = settings) === null || _c === void 0 ? void 0 : _c.mustValidate) === true) {
                return [
                    { message: 'Object has not validation meta information' }
                ];
            }
            return EMPTY;
        }
        var val = model[key];
        var propInfo = meta.properties[key];
        var errors = validateSingleValue(model, val, model, key, propInfo, '');
        return (errors !== null && errors !== void 0 ? errors : EMPTY);
    }
    JsonValidate.validateProperty = validateProperty;
    function validateByMeta(model, root, meta, path) {
        var _a, _b;
        if (meta == null) {
            return null;
        }
        var result = null;
        for (var key in model) {
            var val = model[key];
            var propInfo = meta.properties[key];
            var error = val == null
                ? checkOptional(model, (root !== null && root !== void 0 ? root : model), key, propInfo, path)
                : validateSingleValue(model, val, (root !== null && root !== void 0 ? root : model), key, propInfo, path);
            if (error) {
                (_a = ((result !== null && result !== void 0 ? result : (result = [])))).push.apply(_a, error);
            }
        }
        for (var key in meta.properties) {
            if (key in model) {
                // was handled
                continue;
            }
            var propInfo = meta.properties[key];
            var error = checkOptional(model, (root !== null && root !== void 0 ? root : model), key, propInfo, path);
            if (error) {
                (_b = ((result !== null && result !== void 0 ? result : (result = [])))).push.apply(_b, error);
            }
        }
        return result;
    }
    function validateSingleValue(model, val, root, key, propInfo, outerPath) {
        var _a, _b;
        var _c, _d, _e, _f, _g, _h, _j;
        var result = null;
        var rules = (_c = propInfo) === null || _c === void 0 ? void 0 : _c.rules;
        if (rules) {
            var error = execRules(val, model, rules, outerPath);
            if (error) {
                ((result !== null && result !== void 0 ? result : (result = []))).push(error);
            }
        }
        if (Types_1.Types.isValueType(val)) {
            return result;
        }
        if (Types_1.Types.isArray(val)) {
            var arr = val;
            var Type = (_d = propInfo) === null || _d === void 0 ? void 0 : _d.ArrayType;
            var innerMeta = JsonUtils_1.JsonUtils.pickModelMeta(Type);
            for (var i = 0; i < arr.length; i++) {
                var x = arr[i];
                var $innerMeta = (_e = JsonUtils_1.JsonUtils.pickModelMeta(x), (_e !== null && _e !== void 0 ? _e : innerMeta));
                var parentPath = outerPath ? outerPath + "." + i : "" + i;
                var errors = validateByMeta(x, root, $innerMeta, parentPath);
                if (errors) {
                    (_a = ((result !== null && result !== void 0 ? result : (result = [])))).push.apply(_a, errors);
                }
            }
            return result;
        }
        if (Types_1.Types.isObject(val)) {
            var obj = val;
            var Type = (_f = propInfo) === null || _f === void 0 ? void 0 : _f.Type;
            var innerMeta = (_j = (_g = JsonUtils_1.JsonUtils.pickModelMeta(Type), (_g !== null && _g !== void 0 ? _g : (_h = propInfo) === null || _h === void 0 ? void 0 : _h.Meta)), (_j !== null && _j !== void 0 ? _j : JsonUtils_1.JsonUtils.pickModelMeta(obj)));
            var parentPath = outerPath ? outerPath + "." + key : "" + key;
            var errors = validateByMeta(obj, root, innerMeta, parentPath);
            if (errors) {
                (_b = ((result !== null && result !== void 0 ? result : (result = [])))).push.apply(_b, errors);
            }
            return result;
        }
        return result;
    }
    function execRules(val, root, rules, parentPath) {
        if (rules == null || rules.length === 0) {
            return null;
        }
        for (var i = 0; i < rules.length; i++) {
            var error = rules[i].validate(val, root);
            if (error != null) {
                if (parentPath) {
                    error.property = parentPath + "." + error.property;
                }
                return error;
            }
        }
        return null;
    }
    function checkOptional(model, root, key, propInfo, outerPath) {
        var _a, _b, _c, _d, _e;
        var rules = (_a = propInfo) === null || _a === void 0 ? void 0 : _a.rules;
        if (rules != null) {
            for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
                var rule = rules_1[_i];
                if (rule instanceof Required_1.Required) {
                    var error = rule.validate(null, root);
                    if (error) {
                        error.property = outerPath ? outerPath + "." + key : "" + key;
                        return [error];
                    }
                }
            }
        }
        // check also deep nested properties, if any of them is required
        var meta = (_c = JsonUtils_1.JsonUtils.pickModelMeta((_b = propInfo) === null || _b === void 0 ? void 0 : _b.Type), (_c !== null && _c !== void 0 ? _c : (_d = propInfo) === null || _d === void 0 ? void 0 : _d.Meta));
        if (((_e = meta) === null || _e === void 0 ? void 0 : _e.properties) != null) {
            for (var prop in meta.properties) {
                var propInfo_1 = meta.properties[prop];
                var $outerPath = outerPath ? outerPath + "." + prop : "" + prop;
                var err = checkOptional(null, root, prop, propInfo_1, $outerPath);
                if (err) {
                    return err;
                }
            }
        }
        return null;
    }
})(JsonValidate = exports.JsonValidate || (exports.JsonValidate = {}));
//# sourceMappingURL=JsonValidate.js.map
//# sourceMappingURL=JsonValidate.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_JsonValidate) && isObject(module.exports)) {
		Object.assign(_src_JsonValidate, module.exports);
		return;
	}
	_src_JsonValidate = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_Serializable;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
exports.__esModule = true;
var JsonConvert_1 = _src_JsonConvert;
var JsonValidate_1 = _src_JsonValidate;
var JsonUtils_1 = _src_JsonUtils;
// class Foo {
//     name: string
//     bar: Bar
//     arr: any[]
// }
// class Bar {
//     b1: string
//     b2: string
//     arr: any[]
// }
// function f (x: DeepPartial<Foo>) {}
// f({ name: 'hello', bar: { b1: 'B1' }, arr: [ 1 ] })
var Serializable = /** @class */ (function () {
    function Serializable(partial) {
        var _a;
        if (partial != null) {
            for (var key in partial) {
                this[key] = partial[key];
            }
        }
        var defs = (_a = JsonUtils_1.JsonUtils.pickModelMeta(this)) === null || _a === void 0 ? void 0 : _a.defaults;
        if (defs != null) {
            for (var key in defs) {
                if (this[key] == null) {
                    this[key] = defs[key];
                }
            }
        }
    }
    Serializable.fromJson = function (json, settings) {
        if (settings === void 0) { settings = { Type: null }; }
        console.warn('Obsolete (fromJson) - use fromJSON instead');
        return this.fromJSON(json, settings);
    };
    Serializable.fromJSON = function (json, settings) {
        if (settings === void 0) { settings = { Type: null }; }
        var _a;
        settings.Type = (_a = settings.Type, (_a !== null && _a !== void 0 ? _a : this));
        return JsonConvert_1.JsonConvert.fromJSON(json, settings);
    };
    Serializable.validate = function (x, settings) {
        if (settings === void 0) { settings = {}; }
        if (settings.Type == null) {
            settings.Type = this;
        }
        return JsonValidate_1.JsonValidate.validate(x, settings);
    };
    Serializable.prototype.toJson = function (settings) {
        console.warn('Obsolete (toJson) - use toJSON instead');
        return this.toJSON(settings);
    };
    Serializable.prototype.toJSON = function (settings) {
        return JsonConvert_1.JsonConvert.toJSON(this, settings);
    };
    Serializable.prototype.assign = function (partial) {
        Object.assign(this, partial);
        return this;
    };
    return Serializable;
}());
exports.Serializable = Serializable;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=Serializable.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_Serializable) && isObject(module.exports)) {
		Object.assign(_src_Serializable, module.exports);
		return;
	}
	_src_Serializable = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_JsonSerializer;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
exports.__esModule = true;
var JsonUtils_1 = _src_JsonUtils;
var Types_1 = _src_Types;
var JsonConvert_1 = _src_JsonConvert;
var is_1 = _src_utils_is;
var JsonSerializer;
(function (JsonSerializer) {
    // export function serialize (x: any, Type: IConstructor, Converter: IJsonConverter, settings: JsonSettings) {
    //     if (Converter?.toJSON) {
    //         return Converter.toJSON(x, settings);
    //     }
    //     if (Types.isValueType(x)) {
    //         return x;
    //     }
    //     if (Types.isArray(x)) {
    //         let arr = new Array(x.length);
    //         for (let i = 0; i < x.length; i++) {
    //             arr[i] = serialize(x, info.ArrayType, settings);
    //         }
    //         return arr;
    //     }
    // }
    function serializeObject(model, Type, settings) {
        var _a, _b;
        if (Types_1.Types.isValueType(model)) {
            return model;
        }
        var meta = (_a = JsonUtils_1.JsonUtils.pickModelMeta(model), (_a !== null && _a !== void 0 ? _a : JsonUtils_1.JsonUtils.pickModelMeta(Type)));
        var json = Object.create(null);
        for (var key in model) {
            var propertyInfo = (_b = meta) === null || _b === void 0 ? void 0 : _b.properties[key];
            if (propertyInfo != null && propertyInfo.jsonIgnore) {
                continue;
            }
            var modelVal = model[key];
            if (typeof modelVal === 'function') {
                continue;
            }
            var property = toJsonName(key, propertyInfo, settings);
            var val = toJsonValue(modelVal, propertyInfo, settings);
            json[property] = val;
        }
        return json;
    }
    JsonSerializer.serializeObject = serializeObject;
    function toJsonValue(val, info, settings) {
        var _a, _b, _c, _d, _e;
        if ((_b = (_a = info) === null || _a === void 0 ? void 0 : _a.Converter) === null || _b === void 0 ? void 0 : _b.toJSON) {
            return info.Converter.toJSON(val, settings);
        }
        if (Types_1.Types.isValueType(val)) {
            return val;
        }
        if (Types_1.Types.isArray(val)) {
            var arr = new Array(val.length);
            for (var i = 0; i < val.length; i++) {
                arr[i] = serializeObject(val[i], (_c = info) === null || _c === void 0 ? void 0 : _c.ArrayType, settings);
            }
            return arr;
        }
        if (is_1.is_rawObject(val)) {
            var obj = Object.create(null);
            for (var key in val) {
                obj[key] = JsonSerializer.toJsonValue(val[key], null, settings);
            }
            return obj;
        }
        var type = (_e = (_d = info) === null || _d === void 0 ? void 0 : _d.Type, (_e !== null && _e !== void 0 ? _e : val.constructor));
        var converter = JsonConvert_1.JsonConverters.find(function (x) { return x.supports(val, type); });
        if (converter) {
            return converter.toJSON(val, settings);
        }
        if (JsonUtils_1.JsonUtils.hasModelMeta(val)) {
            return JsonConvert_1.JsonConvert.toJSON(val, settings);
        }
        return val;
    }
    JsonSerializer.toJsonValue = toJsonValue;
    function toJsonName(key, info, settings) {
        var _a, _b;
        if (((_a = info) === null || _a === void 0 ? void 0 : _a.jsonName) != null) {
            return info.jsonName;
        }
        var type = (_b = settings) === null || _b === void 0 ? void 0 : _b.propertyResolver;
        if (type == null) {
            return key;
        }
        if (type === 'camelCase') {
            return key.replace(/(_+)(\w)/g, function (full, underscore, letter, i) {
                if (i === 0) {
                    return full;
                }
                return letter.toUpperCase();
            });
        }
        if (type === 'underScore') {
            return key
                .replace(/^([A-Z])/, function (full, letter) { return "" + letter.toLowerCase(); })
                .replace(/([A-Z])/g, function (full, letter, i) {
                if (i === 0) {
                    return full;
                }
                return "_" + letter.toLowerCase();
            });
        }
        throw new Error("Invalid propertyResolver name: " + type);
    }
    JsonSerializer.toJsonName = toJsonName;
})(JsonSerializer = exports.JsonSerializer || (exports.JsonSerializer = {}));
//# sourceMappingURL=export.js.map
//# sourceMappingURL=JsonSerializer.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_JsonSerializer) && isObject(module.exports)) {
		Object.assign(_src_JsonSerializer, module.exports);
		return;
	}
	_src_JsonSerializer = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_JsonDeserializer;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
exports.__esModule = true;
var JsonUtils_1 = _src_JsonUtils;
var Types_1 = _src_Types;
var JsonConvert_1 = _src_JsonConvert;
var Serializable_1 = _src_Serializable;
var JsonSerializer_1 = _src_JsonSerializer;
var JsonDeserializer;
(function (JsonDeserializer) {
    function deserialize(json, meta, settings) {
        var model = fromJsonToModel(json, meta, settings);
        if (meta.Type) {
            var Mix = meta.Type;
            if (Mix.fromJSON && Mix.fromJSON !== Serializable_1.Serializable.fromJSON) {
                return Mix.fromJSON(model);
            }
            var instance = new Mix();
            if (instance.fromJSON && instance.fromJSON !== Serializable_1.Serializable.fromJSON) {
                instance.fromJSON(model);
                return instance;
            }
            for (var key in model) {
                instance[key] = model[key];
                ;
            }
            return instance;
        }
        return model;
    }
    JsonDeserializer.deserialize = deserialize;
    function fromJsonToModel(json, meta, settings) {
        var _a;
        var model = Object.create(null);
        for (var key in json) {
            var property = resolveName(key, meta.nameMappings, meta, settings);
            var info = (_a = meta) === null || _a === void 0 ? void 0 : _a.properties[property];
            var value = resolveValue(json[key], info, settings);
            model[property] = value;
        }
        return model;
    }
    JsonDeserializer.fromJsonToModel = fromJsonToModel;
    function resolveValue(val, info, settings) {
        var _a, _b, _c, _d, _e, _f;
        if ((_b = (_a = info) === null || _a === void 0 ? void 0 : _a.Converter) === null || _b === void 0 ? void 0 : _b.fromJSON) {
            return info.Converter.fromJSON(val, settings);
        }
        var Type = (_c = info) === null || _c === void 0 ? void 0 : _c.Type;
        if (Type) {
            if (Type === Number) {
                return typeof val === 'number'
                    ? val
                    : Number(val);
            }
            if (Type === String) {
                return typeof val === 'string'
                    ? val
                    : String(val);
            }
            if (Type === Boolean) {
                if (typeof val === 'string') {
                    if (val === '0' || val === 'false') {
                        return false;
                    }
                }
                return Boolean(val);
            }
            var converter = null;
            for (var i = 0; i < JsonConvert_1.JsonConverters.length; i++) {
                if (JsonConvert_1.JsonConverters[i].supports(val, Type)) {
                    converter = JsonConvert_1.JsonConverters[i];
                    break;
                }
            }
            if (converter) {
                return converter.fromJSON(val, settings);
            }
            var meta = JsonUtils_1.JsonUtils.pickModelMeta(Type);
            if (meta) {
                return deserialize(val, meta, settings);
            }
            var Ctor = Type;
            return new Ctor(val);
        }
        var Meta = (_d = info) === null || _d === void 0 ? void 0 : _d.Meta;
        if (Meta) {
            return deserialize(val, Meta, settings);
        }
        if (Types_1.Types.isValueType(val)) {
            return val;
        }
        if (Types_1.Types.isArray(val)) {
            var out = new Array(val.length);
            var arrayType = (_e = info) === null || _e === void 0 ? void 0 : _e.ArrayType;
            var converter = (_f = info) === null || _f === void 0 ? void 0 : _f.Converter;
            var itemInfo = {
                Type: arrayType,
                Converter: converter
            };
            for (var i = 0; i < val.length; i++) {
                out[i] = resolveValue(val[i], itemInfo, settings);
            }
            return out;
        }
        return val;
    }
    JsonDeserializer.resolveValue = resolveValue;
    function resolveName(key, mappings, meta, settings) {
        var _a;
        var info = (_a = mappings) === null || _a === void 0 ? void 0 : _a[key];
        if (info != null) {
            return info.property;
        }
        return JsonSerializer_1.JsonSerializer.toJsonName(key, info, settings);
    }
    JsonDeserializer.resolveName = resolveName;
})(JsonDeserializer = exports.JsonDeserializer || (exports.JsonDeserializer = {}));
//# sourceMappingURL=export.js.map
//# sourceMappingURL=JsonDeserializer.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_JsonDeserializer) && isObject(module.exports)) {
		Object.assign(_src_JsonDeserializer, module.exports);
		return;
	}
	_src_JsonDeserializer = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_JsonConvert;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
exports.__esModule = true;
var JsonUtils_1 = _src_JsonUtils;
var Types_1 = _src_Types;
var JsonDeserializer_1 = _src_JsonDeserializer;
var JsonSerializer_1 = _src_JsonSerializer;
var JsonConvert;
(function (JsonConvert) {
    function toJson(model, settings) {
        console.warn('Obsolete (static toJson) - use toJSON instead');
        return toJSON(model, settings);
    }
    JsonConvert.toJson = toJson;
    function toJSON(model, settings) {
        var _a;
        if (Types_1.Types.isArray(model)) {
            return model.map(function (x) { return toJSON(x, settings); });
        }
        return JsonSerializer_1.JsonSerializer.serializeObject(model, (_a = settings) === null || _a === void 0 ? void 0 : _a.Type, settings);
    }
    JsonConvert.toJSON = toJSON;
    function fromJson(model, settings) {
        console.warn('Obsolete (static toJson) - use toJSON instead');
        return toJSON(model, settings);
    }
    JsonConvert.fromJson = fromJson;
    function fromJSON(json, settings) {
        var _a, _b;
        if (Types_1.Types.isArray(json)) {
            return json.map(function (x) { return fromJSON(x, settings); });
        }
        var Type = (_a = settings) === null || _a === void 0 ? void 0 : _a.Type;
        var meta = (_b = JsonUtils_1.JsonUtils.pickModelMeta(Type), (_b !== null && _b !== void 0 ? _b : getMetaFor(Type)));
        return JsonDeserializer_1.JsonDeserializer.deserialize(json, meta, settings);
    }
    JsonConvert.fromJSON = fromJSON;
    function stringify(instance, settings) {
        var _a;
        var json = toJSON(instance, settings);
        return JSON.stringify(json, null, (_a = settings) === null || _a === void 0 ? void 0 : _a.space);
    }
    JsonConvert.stringify = stringify;
    function parse(str, settings) {
        var json = JSON.parse(str);
        return fromJSON(json, settings);
    }
    JsonConvert.parse = parse;
})(JsonConvert = exports.JsonConvert || (exports.JsonConvert = {}));
exports.JsonConverters = [
    {
        supports: function (val, type) {
            return type === Date || val instanceof Date;
        },
        toJSON: function (val) {
            return val;
        },
        fromJSON: function (val) {
            return typeof val === 'string'
                ? new Date(val)
                : val;
        }
    },
    {
        supports: function (val, type) {
            return type === RegExp || val instanceof RegExp;
        },
        toJSON: function (val) {
            return val.toString();
        },
        fromJSON: function (val) {
            var pattern = val.substring(1, val.lastIndexOf('/'));
            var flags = val.substring(val.lastIndexOf('/') + 1);
            return new RegExp(pattern, flags);
        }
    }
];
/** Perf: reuse default empty metas */
var DEFAULT_META = {
    Type: null,
    properties: {},
    defaults: null
};
function getMetaFor(Type) {
    DEFAULT_META.Type = Type;
    return DEFAULT_META;
}
//# sourceMappingURL=export.js.map
//# sourceMappingURL=JsonConvert.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_JsonConvert) && isObject(module.exports)) {
		Object.assign(_src_JsonConvert, module.exports);
		return;
	}
	_src_JsonConvert = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_JsonSettings;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
exports.__esModule = true;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=JsonSettings.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_JsonSettings) && isObject(module.exports)) {
		Object.assign(_src_JsonSettings, module.exports);
		return;
	}
	_src_JsonSettings = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_JsonSchema;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
exports.__esModule = true;
var JsonUtils_1 = _src_JsonUtils;
var obj_1 = _src_utils_obj;
var Pattern_1 = _src_validation_rules_Pattern;
var Required_1 = _src_validation_rules_Required;
var Length_1 = _src_validation_rules_Length;
var Number_1 = _src_validation_rules_Number;
var Custom_1 = _src_validation_rules_Custom;
var String_1 = _src_validation_rules_String;
var JsonSchema;
(function (JsonSchema) {
    function getSchema(Type, schema) {
        var _a, _b, _c, _d;
        if (Type == null) {
            return {
                type: 'any'
            };
        }
        if (((_a = schema) === null || _a === void 0 ? void 0 : _a.type) === 'array') {
            return {
                type: 'array',
                items: getSchema(Type)
            };
        }
        if (Type === String) {
            return {
                type: 'string'
            };
        }
        if (Type === Boolean) {
            return {
                type: 'boolean'
            };
        }
        if (Type === Number) {
            return {
                type: 'number'
            };
        }
        if (Type === Date) {
            return {
                type: 'string',
                format: 'date-time'
            };
        }
        if (Type === RegExp) {
            return {
                type: 'string',
                format: 'regex'
            };
        }
        var object = {
            type: 'object',
            properties: {}
        };
        var meta = JsonUtils_1.JsonUtils.pickModelMeta(Type);
        if (((_b = meta) === null || _b === void 0 ? void 0 : _b.properties) != null) {
            for (var prop in meta.properties) {
                var propMeta = meta.properties[prop];
                var props = object.properties;
                if (propMeta.ArrayType) {
                    props[prop] = getSchema(propMeta.ArrayType, { type: 'array' });
                    if (propMeta.description) {
                        props[prop].description = propMeta.description;
                    }
                    continue;
                }
                props[prop] = getSchema((_c = propMeta) === null || _c === void 0 ? void 0 : _c.Type, null);
                if (propMeta.rules) {
                    for (var _i = 0, _e = propMeta.rules; _i < _e.length; _i++) {
                        var rule = _e[_i];
                        if (rule instanceof Pattern_1.Pattern) {
                            props[prop].pattern = rule.pattern.toString();
                            continue;
                        }
                        if (rule instanceof Required_1.Required) {
                            if (object.required == null) {
                                object.required = [];
                            }
                            object.required.push(prop);
                            continue;
                        }
                        if (rule instanceof Length_1.MinLength) {
                            props[prop].minLength = rule.count;
                            continue;
                        }
                        if (rule instanceof Length_1.MaxLength) {
                            props[prop].maxLength = rule.count;
                            continue;
                        }
                        if (rule instanceof Number_1.Minimum) {
                            props[prop].minimum = rule.value;
                            continue;
                        }
                        if (rule instanceof Number_1.Maximum) {
                            props[prop].maximum = rule.value;
                            continue;
                        }
                        if (rule instanceof Custom_1.Custom) {
                            props[prop].validation = rule.fn.toString();
                        }
                        if (rule instanceof String_1.StringEnum) {
                            props[prop]["enum"] = rule.values;
                        }
                    }
                }
                if (propMeta["default"] != null) {
                    props[prop]["default"] = propMeta["default"];
                }
                if (propMeta.description) {
                    props[prop].description = propMeta.description;
                }
            }
        }
        if ((_d = meta) === null || _d === void 0 ? void 0 : _d.description) {
            object.description = meta.description;
        }
        var keys = obj_1.obj_getKeys(Type.prototype);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key in object.properties
                || key === '__json__'
                || key === 'toJSON'
                || key === 'toJson') {
                continue;
            }
            ;
            var val = Type.prototype[key];
            if (typeof val === 'function') {
                continue;
            }
            object.properties[key] = getSchema(val);
        }
        return object;
    }
    JsonSchema.getSchema = getSchema;
})(JsonSchema = exports.JsonSchema || (exports.JsonSchema = {}));
//# sourceMappingURL=export.js.map
//# sourceMappingURL=JsonSchema.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_JsonSchema) && isObject(module.exports)) {
		Object.assign(_src_JsonSchema, module.exports);
		return;
	}
	_src_JsonSchema = module.exports;
}());
// end:source ./ModuleSimplified.js

"use strict";
exports.__esModule = true;
var Json_1 = _src_Json;
exports.Json = Json_1.Json;
var Rule_1 = _src_validation_Rule;
exports.Rule = Rule_1.Rule;
var JsonConvert_1 = _src_JsonConvert;
exports.JsonConvert = JsonConvert_1.JsonConvert;
var JsonValidate_1 = _src_JsonValidate;
exports.JsonValidate = JsonValidate_1.JsonValidate;
var Serializable_1 = _src_Serializable;
exports.Serializable = Serializable_1.Serializable;
var JsonSettings_1 = _src_JsonSettings;
exports.JsonSettings = JsonSettings_1.JsonSettings;
var JsonUtils_1 = _src_JsonUtils;
exports.JsonUtils = JsonUtils_1.JsonUtils;
var JsonSchema_1 = _src_JsonSchema;
exports.JsonSchema = JsonSchema_1.JsonSchema;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=export.ts.map

}));

// end:source ./UMD.js
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_node_modules_class_json_lib_class_json) && isObject(module.exports)) {
		Object.assign(_node_modules_class_json_lib_class_json, module.exports);
		return;
	}
	_node_modules_class_json_lib_class_json = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_reader_LogsReader;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.GetChannelParams = exports.LogsReader = void 0;
const ChannelReader_1 = _src_reader_ChannelReader;
const DayDate_1 = _src_model_DayDate;
const class_json_1 = _node_modules_class_json_lib_class_json;
class LogsReader {
    constructor(monit) {
        this.monit = monit;
    }
    getChannels() {
        return Object.keys(this.monit.loggers).map(key => {
            let channel = this.monit.loggers[key];
            return {
                name: key,
                directory: channel.directory,
                columns: channel.opts.fields
            };
        });
    }
    getChannelInfo(key) {
        let channel = this.monit.loggers[key];
        if (channel == null) {
            throw new Error(`Channel ${key} not found`);
        }
        return {
            name: key,
            directory: channel.directory,
            columns: channel.opts.fields
        };
    }
    getChannelStats(key) {
        let channel = this.monit.loggers[key];
        if (channel == null) {
            throw new Error(`Channel ${key} not found`);
        }
        let channelReader = new ChannelReader_1.ChannelReader(channel);
        return channelReader.stats();
    }
    getChannelDays(key) {
        return __awaiter(this, void 0, void 0, function* () {
            let channel = this.monit.loggers[key];
            if (channel == null) {
                throw new Error(`Channel ${key} not found`);
            }
            let channelReader = new ChannelReader_1.ChannelReader(channel);
            return channelReader.getDays();
        });
    }
    getChannelData(query) {
        return __awaiter(this, void 0, void 0, function* () {
            let channel = this.monit.loggers[query.key];
            if (channel == null) {
                throw new Error(`Channel ${query.key} not found`);
            }
            let channelReader = new ChannelReader_1.ChannelReader(channel);
            return channelReader.getData(query);
        });
    }
}
exports.LogsReader = LogsReader;
class GetChannelParams {
}
__decorate([
    class_json_1.Rule.required()
], GetChannelParams.prototype, "key", void 0);
__decorate([
    class_json_1.Json.type(Number)
], GetChannelParams.prototype, "sortByColumnIdx", void 0);
__decorate([
    class_json_1.Json.type(DayDate_1.DayDate)
], GetChannelParams.prototype, "day", void 0);
__decorate([
    class_json_1.Json.type(Date)
], GetChannelParams.prototype, "rangeStart", void 0);
__decorate([
    class_json_1.Json.type(Date)
], GetChannelParams.prototype, "rangeEnd", void 0);
__decorate([
    class_json_1.Json.type(Number)
], GetChannelParams.prototype, "offset", void 0);
__decorate([
    class_json_1.Json.type(Number)
], GetChannelParams.prototype, "limit", void 0);
exports.GetChannelParams = GetChannelParams;
;
//# sourceMappingURL=LogsReader.js.map
//# sourceMappingURL=LogsReader.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_reader_LogsReader) && isObject(module.exports)) {
		Object.assign(_src_reader_LogsReader, module.exports);
		return;
	}
	_src_reader_LogsReader = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _node_modules_express_basic_auth_index;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
	var exports = {};
	var module = { exports: exports };
	const auth = require('basic-auth')
const assert = require('assert')
const timingSafeEqual = require('crypto').timingSafeEqual

// Credits for the actual algorithm go to github/@Bruce17
// Thanks to github/@hraban for making me implement this
function safeCompare(userInput, secret) {
    const userInputLength = Buffer.byteLength(userInput)
    const secretLength = Buffer.byteLength(secret)

    const userInputBuffer = Buffer.alloc(userInputLength, 0, 'utf8')
    userInputBuffer.write(userInput)
    const secretBuffer = Buffer.alloc(userInputLength, 0, 'utf8')
    secretBuffer.write(secret)

    return !!(timingSafeEqual(userInputBuffer, secretBuffer) & userInputLength === secretLength)
}

function ensureFunction(option, defaultValue) {
    if(option == undefined)
        return function() { return defaultValue }

    if(typeof option != 'function')
        return function() { return option }

    return option
}

function buildMiddleware(options) {
    var challenge = options.challenge != undefined ? !!options.challenge : false
    var users = options.users || {}
    var authorizer = options.authorizer || staticUsersAuthorizer
    var isAsync = options.authorizeAsync != undefined ? !!options.authorizeAsync : false
    var getResponseBody = ensureFunction(options.unauthorizedResponse, '')
    var realm = ensureFunction(options.realm)

    assert(typeof users == 'object', 'Expected an object for the basic auth users, found ' + typeof users + ' instead')
    assert(typeof authorizer == 'function', 'Expected a function for the basic auth authorizer, found ' + typeof authorizer + ' instead')

    function staticUsersAuthorizer(username, password) {
        for(var i in users)
            if(safeCompare(username, i) & safeCompare(password, users[i]))
                return true

        return false
    }

    return function authMiddleware(req, res, next) {
        var authentication = auth(req)

        if(!authentication)
            return unauthorized()

        req.auth = {
            user: authentication.name,
            password: authentication.pass
        }

        if(isAsync)
            return authorizer(authentication.name, authentication.pass, authorizerCallback)
        else if(!authorizer(authentication.name, authentication.pass))
            return unauthorized()

        return next()

        function unauthorized() {
            if(challenge) {
                var challengeString = 'Basic'
                var realmName = realm(req)

                if(realmName)
                    challengeString += ' realm="' + realmName + '"'

                res.set('WWW-Authenticate', challengeString)
            }

            //TODO: Allow response body to be JSON (maybe autodetect?)
            const response = getResponseBody(req)

            if(typeof response == 'string')
                return res.status(401).send(response)

            return res.status(401).json(response)
        }

        function authorizerCallback(err, approved) {
            assert.ifError(err)

            if(approved)
                return next()

            return unauthorized()
        }
    }
}

buildMiddleware.safeCompare = safeCompare
module.exports = buildMiddleware
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_node_modules_express_basic_auth_index) && isObject(module.exports)) {
		Object.assign(_node_modules_express_basic_auth_index, module.exports);
		return;
	}
	_node_modules_express_basic_auth_index = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_Server;
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
exports.Server = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_utils;
const Everlog_1 = _src_Everlog;
const { Application, middleware } = require('atma-server');
const basicAuth = _node_modules_express_basic_auth_index;
const base = new atma_utils_1.class_Uri(`file://${__dirname}/`).cdUp().toString();
class Server {
    constructor() {
        this.config = {
            user: null,
            port: null,
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const app = yield Application.create({
                base: base.toString(),
                config: {
                    SERVER: true,
                    static: atma_utils_1.class_Uri.combine(base, './www/'),
                },
                configs: atma_utils_1.class_Uri.combine(base, './www/configs/**.yml'),
            });
            this.init(app);
        });
    }
    getUser() {
        let user = this.config.user;
        if (user == null) {
            console.log('[INFO] You can secure the endpoints by starting the app with --user name:password');
            return null;
        }
        let match = /^(?<user>[^:]+):(?<password>[^:]+)$/.exec(user);
        if (match == null) {
            throw new Error(`user:password not matched for: ${user}`);
        }
        return {
            username: match.groups.user,
            password: match.groups.password,
        };
    }
    readConfig(config) {
        var _a;
        this.config.user = config.$get('user');
        this.config.port = (_a = config.$get('port')) !== null && _a !== void 0 ? _a : 5771;
    }
    init(app) {
        this.readConfig(app.config);
        const user = this.getUser();
        const basicAuthFn = user == null ? null : basicAuth({
            users: { [user.username]: user.password },
            challenge: true,
            realm: 'Everlog'
        });
        app
            .processor({
            before: [
                function (req, res, next) {
                    res.status = function (code) {
                        this.statusCode = code;
                        return this;
                    };
                    res.send = function (data) {
                        this.end(data);
                        return this;
                    };
                    res.set = function (key, val) {
                        this.setHeader(key, val);
                    };
                    next();
                },
                function (req, res, next) {
                    return __awaiter(this, void 0, void 0, function* () {
                        let isPublic = basicAuthFn == null
                            || /^\/api\//.test(req.url) === false
                            || req.method === 'OPTIONS';
                        if (isPublic) {
                            next();
                            return;
                        }
                        basicAuthFn(req, res, next);
                    });
                }
            ],
            middleware: [],
            after: [
                middleware.static
            ]
        })
            .listen(this.config.port);
        if (app.config.debug) {
            app.autoreload();
        }
        app.lib.monit = Everlog_1.Everlog.monit;
        console.log(`Everlog server: ${this.config.port}`);
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map
//# sourceMappingURL=Server.ts.map;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_Server) && isObject(module.exports)) {
		Object.assign(_src_Server, module.exports);
		return;
	}
	_src_Server = module.exports;
}());
// end:source ./ModuleSimplified.js

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
const appcfg_1 = _node_modules_appcfg_lib_appcfg;
const ruta = _node_modules_ruta_lib_ruta;
const Everlog_1 = _src_Everlog;
const LogsReader_1 = _src_reader_LogsReader;
const Server_1 = _src_Server;
var Config;
(function (Config) {
    function doLoad(sources) {
        return __awaiter(this, void 0, void 0, function* () {
            return appcfg_1.default.fetch(sources);
        });
    }
    function load() {
        return __awaiter(this, void 0, void 0, function* () {
            return doLoad([{
                    path: 'package.json',
                    getterProperty: 'everlog',
                    optional: true
                }])
                .then(json => {
                if (json.config) {
                    return doLoad([{ path: json.config }]);
                }
                return json;
            });
        });
    }
    Config.load = load;
})(Config || (Config = {}));
class Strategy {
    constructor(strategy) {
        this.strategy = strategy;
        this.routes = new ruta.Collection();
        strategy.forEach(x => this.routes.add(x.route, x));
    }
    process(path, config) {
        return __awaiter(this, void 0, void 0, function* () {
            let route = this.routes.get(path);
            if (route == null) {
                console.error(`Available commands (cli or route params).`);
                console.log('');
                this.help();
                return;
            }
            yield route.value.process(route.current.params, config);
        });
    }
    help() {
        this.strategy.forEach(strat => {
            console.log('  ', strat.command);
            console.log('    ', strat.description);
            console.log('');
        });
    }
}
;
var Cli;
(function (Cli) {
    const strategy = new Strategy([
        {
            route: 'list',
            command: 'list',
            description: 'Print available channels in CWD. Reads everlog config from package.json or everlog.json. Otherwise reads channels from ./logs/monit',
            process(params, config) {
                return __awaiter(this, void 0, void 0, function* () {
                    let reader = new LogsReader_1.LogsReader(Everlog_1.Everlog.monit);
                    let channels = yield reader.getChannels();
                    let names = channels.map(x => x.name);
                    console.log('Channels', names);
                });
            }
        },
        {
            route: 'stats/:name',
            command: `stats CHANNEL_NAME`,
            description: 'Print channels information. Amount of lines files',
            process(params, config) {
                return __awaiter(this, void 0, void 0, function* () {
                    let reader = new LogsReader_1.LogsReader(Everlog_1.Everlog.monit);
                    let stats = yield reader.getChannelStats(params.name);
                    console.log(`Channel info ${params.name}`, stats);
                });
            },
        },
        {
            route: 'read/:name',
            command: `read CHANNEL_NAME [-offset=N] [-limit=N]`,
            description: `Print N lines from a channel. Offset and Limit are optional`,
            process(params, config) {
                var _a, _b;
                return __awaiter(this, void 0, void 0, function* () {
                    let reader = new LogsReader_1.LogsReader(Everlog_1.Everlog.monit);
                    let query = {
                        key: params.name,
                        limit: Number((_a = params.limit) !== null && _a !== void 0 ? _a : 10),
                        offset: Number((_b = params.offset) !== null && _b !== void 0 ? _b : 0)
                    };
                    let data = yield reader.getChannelData(query);
                    console.log(`Channel "${params.name}" [${query.offset}-${query.offset + query.limit}]\n${data.rows.map(x => x.join(', ')).join('\n')}`);
                });
            },
        },
        {
            route: 'server',
            command: 'server [-port=N]',
            description: 'Starts local server to browser channels and their tables',
            process(params, config) {
                return __awaiter(this, void 0, void 0, function* () {
                    let server = new Server_1.Server();
                    yield server.run();
                });
            }
        }
    ]);
    function run(config) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let opts = (_b = (_a = config.$get('everlog')) !== null && _a !== void 0 ? _a : config.$get('monit')) !== null && _b !== void 0 ? _b : {
                directory: './logs/'
            };
            console.log(`Reading logs meta...`);
            yield Everlog_1.Everlog.initialize(opts);
            let i = process.argv.findIndex(x => /\b(cli|index)$/.test(x));
            let args = process.argv.slice(i + 1);
            let path = args.join(' ');
            let cmd = ruta._.pathFromCLI(path);
            strategy.process(cmd, config);
        });
    }
    Cli.run = run;
})(Cli || (Cli = {}));
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        let config = yield Config.load();
        yield Cli.run(config);
    });
}());
//# sourceMappingURL=cli.js.map
//# sourceMappingURL=cli.ts.map

}());
// end:source ./RootModule.js
