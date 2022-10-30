// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hsk8P":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5b6f7440c19c37a3";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ha5Tn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "forwardExp", ()=>forwardExp
);
parcelHelpers.export(exports, "ApplyFunctionExp", ()=>ApplyFunctionExp
);
parcelHelpers.export(exports, "ApplyFunctionFictifExp", ()=>ApplyFunctionFictifExp
);
parcelHelpers.export(exports, "ExecuteOneByOneExp", ()=>ExecuteOneByOneExp
);
parcelHelpers.export(exports, "ApplyInstrExp", ()=>ApplyInstrExp
);
parcelHelpers.export(exports, "leftExp", ()=>leftExp
);
parcelHelpers.export(exports, "rightExp", ()=>rightExp
);
parcelHelpers.export(exports, "CallF2Exp", ()=>CallF2Exp
);
parcelHelpers.export(exports, "CallF3Exp", ()=>CallF3Exp
);
parcelHelpers.export(exports, "CallF1Exp", ()=>CallF1Exp
);
parcelHelpers.export(exports, "CallF4Exp", ()=>CallF4Exp
);
parcelHelpers.export(exports, "removeRobotExp", ()=>removeRobotExp
);
parcelHelpers.export(exports, "addRobotExp", ()=>addRobotExp
);
parcelHelpers.export(exports, "fillBoardExp", ()=>fillBoardExp
);
var _stackJs = require("./stack.js");
let puzzle = {
    id: 1,
    title: "star",
    about: "",
    robot: {
        col: 8,
        row: 5,
        dir: 0
    },
    subs: [
        3,
        3,
        0,
        0,
        0
    ],
    allowedCommands: 0,
    score: 4,
    board: [
        '                ',
        '                ',
        '                ',
        '        g       ',
        '       rBr      ',
        '      gBgBr     ',
        '       rBr      ',
        '        g       ',
        '                ',
        '                ',
        '                ',
        '                '
    ]
};
const icons = {
    robotEast: {
        string: '\uEE00',
        color: 'pink'
    },
    robotSouth: {
        string: '\uEE01',
        color: 'pink'
    },
    robotWest: {
        string: '\uEE02',
        color: 'pink'
    },
    robotNorth: {
        string: '\uEE03',
        color: 'pink'
    },
    star: {
        string: '\uEE04',
        color: 'yellow'
    },
    disk: {
        string: '\uEE05',
        color: 'red'
    },
    box: {
        string: '\uEE06',
        color: 'red'
    },
    flash: {
        string: '\uEE07',
        color: 'red'
    },
    heart: {
        string: '\uEE08',
        color: 'red'
    },
    heartBroken: {
        string: '\uEE09',
        color: 'red'
    },
    lock: {
        string: '\uEE0A',
        color: 'red'
    },
    lockOpen: {
        string: '\uEE0B',
        color: 'red'
    },
    key: {
        string: '\uEE0C',
        color: 'red'
    },
    droplet: {
        string: '\uEE0D',
        color: 'red'
    },
    rocket: {
        string: '\uEE0E',
        color: 'yellow'
    },
    empty: {
        string: '\uEE0F',
        color: 'red'
    }
};
const robotID = "robot";
function addStar(aCell) {
    aCell.innerText = icons.rocket.string;
    aCell.style.color = icons.rocket.color;
}
function fillBoard(aBoardID, aPuzzle) {
    const tbody = document.getElementById(aBoardID);
    aPuzzle.board.forEach((aLine)=>{
        const newRow = tbody.insertRow();
        aLine.split('').forEach((aChar)=>{
            const newCell = newRow.insertCell();
            switch(aChar){
                case 'r':
                    newCell.className += " red_tile";
                    break;
                case 'g':
                    newCell.className += " green_tile";
                    break;
                case 'b':
                    newCell.className += " blue_tile";
                    break;
                case 'R':
                    newCell.className += " red_tile";
                    addStar(newCell);
                    break;
                case 'G':
                    newCell.className += " green_tile";
                    addStar(newCell);
                    break;
                case 'B':
                    newCell.className += " blue_tile";
                    addStar(newCell);
                    break;
            }
        });
    });
}
// 'robots.ttf' defines 16 ad-hoc icons, using codes from \uEE00 to \uEE0F :
// 0 = robot pointing east, 1 = robot pointing south, 2 = robot pointing west,
// 3 = robot pointing north, 4 = star, 5 = disk, 6 = box, 7 = flash,
// 8 = heart, 9 = broken heart, A = lock, B = open lock, C = key,
// D = droplet, E = rocket, F = empty
/*
  Function that creates a robot with custom values then returns it
  A robot has 4 keys : Robot = { col:y, row:x, dir:z }
*/ function CreateRobot(col, row, dir) {
    let robot = {
        col: col,
        row: row,
        dir: dir
    };
    return robot;
}
/*
function CreateProgram(F1, F2, F3, F4, F5){
    let Program = 
      {F1 : F1,
       F2 : F2,
       F3 : F3,
       F4 : F4,
       F5 : F5
      };
    return Program;
}
*/ /*
  Function that moves the robot given in parametres forward
*/ function forward(robot) {
    switch(robot.dir){
        case 1:
            return CreateRobot(robot.col, robot.row + 1, robot.dir);
        case 0:
            return CreateRobot(robot.col + 1, robot.row, robot.dir);
        case 3:
            return CreateRobot(robot.col, robot.row - 1, robot.dir);
        case 2:
            return CreateRobot(robot.col - 1, robot.row, robot.dir);
        default:
            return robot;
    }
}
/*
  Function that turns the robot given in parametres to the right

*/ function right(robot) {
    return CreateRobot(robot.col, robot.row, (robot.dir + 1) % 4);
}
/*
  Function that turns the robot given in parametres to the left

*/ function left(robot) {
    return CreateRobot(robot.col, robot.row, (robot.dir - 1 + 4) % 4);
}
/*
  returns the first element in the array instruction that corresponds to function of the instruction
*/ function GetInstr(instruction) {
    return instruction[0];
}
/*
  returns the second element in the array instruction that corresponds to the color of the instruction
*/ function GetColor(instruction) {
    return instruction[1];
}
function CallF1(program1) {
    return program1.F1;
}
function CallF2(program2) {
    return program2.F2;
}
function CallF3(program3) {
    return program3.F3;
}
function CallF4(program4) {
    return program4.F4;
}
function CallF5(program5) {
    return program5.F5;
}
/*
  This function is used to return the name of the function to stack instead of stacking the implementation of the function itself
*/ function stackF(F) {
    switch(F){
        case CallF1:
            return 'F1';
        case CallF2:
            return 'F2';
        case CallF3:
            return 'F3';
        case CallF4:
            return 'F4';
        case CallF5:
            return 'F5';
        default:
            return false;
    }
}
function CopyBoard(board, row, col, str) {
    let aCopyBoard = board.map((ele, i)=>{
        return ele.split('').map((char, j)=>{
            if (i === row && j === col) return str;
            else return char;
        }).join('');
    });
    return aCopyBoard;
}
function removeRobot() {
    const rCell = document.getElementById(robotID);
    rCell.removeAttribute('id');
    rCell.removeAttribute('style');
    rCell.innerText = icons.empty.string;
}
function addRobot(aRobot, aBoardID = "visualizer_board") {
    let aBoard = document.getElementById(aBoardID);
    let aCell = aBoard.rows[aRobot.row].cells[aRobot.col];
    let anIcon = icons[Object.keys(icons)[aRobot.dir]];
    aCell.id = robotID;
    aCell.innerText = anIcon.string;
    aCell.style.color = anIcon.color;
}
/*
  Returns the puzzle after application of instruction given in parametres
*/ function ApplyInstr(instruction, puzzle1, aBoardID) {
    if (puzzle1.board[puzzle1.robot.row][puzzle1.robot.col] === GetColor(instruction) || GetColor(instruction) === ' ' || puzzle1.board[puzzle1.robot.row][puzzle1.robot.col] === GetColor(instruction).toUpperCase()) puzzle1.robot = GetInstr(instruction)(puzzle1.robot);
    let ColorOfPos = puzzle1.board[puzzle1.robot.row][puzzle1.robot.col];
    if (ColorOfPos !== ColorOfPos.toLowerCase()) {
        puzzle1.board = CopyBoard(puzzle1.board, puzzle1.robot.row, puzzle1.robot.col, ColorOfPos.toLowerCase());
        puzzle1.score = puzzle1.score - 1;
    }
    let test = document.getElementById(aBoardID);
    if (test !== null) {
        removeRobot();
        addRobot(puzzle1.robot, aBoardID);
    }
    return puzzle1;
}
/*
  This function take an array in entry then apply the instructions 
*/ function ApplyFunction(program6, instr, puzzle2, stack, aBoardID) {
    try {
        instr.forEach((ele, i)=>{
            if (puzzle2.board[puzzle2.robot.row][puzzle2.robot.col] !== " ") {
                if (stackF(ele[0]) !== false && (GetColor(ele) === ' ' || puzzle2.board[puzzle2.robot.row][puzzle2.robot.col] === GetColor(ele) || puzzle2.board[puzzle2.robot.row][puzzle2.robot.col] === GetColor(ele).toUpperCase())) ApplyFunction(program6, ele[0](program6), puzzle2, _stackJs.StackElement1(stack, [
                    stackF(ele[0]),
                    i
                ]), aBoardID);
                else {
                    puzzle2 = ApplyInstr(ele, puzzle2, aBoardID);
                    if (puzzle2.score === 0) throw 'Break';
                }
            } else alert("Your robot is out :(");
        });
        return puzzle2;
    } catch (e) {
        if (e !== 'Break') throw e;
        return puzzle2;
    }
}
function ApplyInstrFictif(instruction, puzzle3) {
    if (puzzle3.board[puzzle3.robot.row][puzzle3.robot.col] === GetColor(instruction) || GetColor(instruction) === ' ' || puzzle3.board[puzzle3.robot.row][puzzle3.robot.col] === GetColor(instruction).toUpperCase()) puzzle3.robot = GetInstr(instruction)(puzzle3.robot);
    let ColorOfPos = puzzle3.board[puzzle3.robot.row][puzzle3.robot.col];
    if (ColorOfPos !== ColorOfPos.toLowerCase()) {
        puzzle3.board = CopyBoard(puzzle3.board, puzzle3.robot.row, puzzle3.robot.col, ColorOfPos.toLowerCase());
        puzzle3.score = puzzle3.score - 1;
    }
    return puzzle3;
}
function ApplyFunctionStack(program7, instr, puzzle4, stack) {
    try {
        instr.forEach((ele, i)=>{
            if (puzzle4.board[puzzle4.robot.row][puzzle4.robot.col] !== " ") {
                if (stackF(ele[0]) !== false && (GetColor(ele) === ' ' || puzzle4.board[puzzle4.robot.row][puzzle4.robot.col] === GetColor(ele) || puzzle4.board[puzzle4.robot.row][puzzle4.robot.col] === GetColor(ele).toUpperCase())) {
                    if (!_stackJs.StackisEmpty1(stack)) {
                        _stackJs.UnstackElement1(stack);
                        console.log(_stackJs.listDisp1(stack));
                    }
                    if (stackF(ele) !== false) console.log(_stackJs.listDisp1(_stackJs.StackElement1(stack, [
                        stackF(ele),
                        i
                    ])));
                    ApplyFunctionStack(program7, ele[0](program7), puzzle4, _stackJs.StackElement1(stack, [
                        stackF(ele[0]),
                        i
                    ]));
                    if (!_stackJs.StackisEmpty1(stack)) {
                        _stackJs.UnstackElement1(stack);
                        console.log(_stackJs.listDisp1(stack));
                    }
                } else {
                    puzzle4 = ApplyInstrFictif(ele, puzzle4);
                    if (puzzle4.score === 0) throw 'Break';
                }
            } else alert("Your robot is out :(");
        });
        return puzzle4;
    } catch (e) {
        if (e !== 'Break') throw e;
        return puzzle4;
    }
}
/*
This function take an array in entry then apply the instructions 
*/ function ApplyFunctionFictif(program8, instr, puzzle5, stack, tableau) {
    try {
        instr.forEach((ele, i)=>{
            if (puzzle5.board[puzzle5.robot.row][puzzle5.robot.col] !== " ") {
                if (stackF(ele[0]) !== false && (GetColor(ele) === ' ' || puzzle5.board[puzzle5.robot.row][puzzle5.robot.col] === GetColor(ele) || puzzle5.board[puzzle5.robot.row][puzzle5.robot.col] === GetColor(ele).toUpperCase())) tableau = ApplyFunctionFictif(program8, ele[0](program8), puzzle5, _stackJs.StackElement1(stack, [
                    stackF(ele[0]),
                    i
                ]), tableau);
                else {
                    tableau = tableau.concat(ele);
                    puzzle5 = ApplyInstrFictif(ele, puzzle5);
                    if (puzzle5.score === 0) throw 'Break';
                }
            } else alert("Your robot is out :(");
        });
        return tableau;
    } catch (e) {
        if (e !== 'Break') throw e;
        return tableau;
    }
}
function ExecuteOneByOne(tableau, puzzle6, aBoardID) {
    if (tableau.length !== 0) {
        let elt1 = tableau.shift();
        let elt2 = tableau.shift();
        let tab = [];
        tab = tab.concat(elt1, elt2);
        ApplyInstr(tab, puzzle6, aBoardID);
        return tableau;
    }
}
let program = {
    F1: [
        [
            forward,
            ' '
        ],
        [
            right,
            'b'
        ],
        [
            CallF2,
            'b'
        ]
    ],
    F2: [
        [
            forward,
            ' '
        ],
        [
            right,
            'r'
        ],
        [
            CallF1,
            ' '
        ]
    ]
};
const forwardExp = forward;
const ApplyFunctionExp = ApplyFunction;
const ApplyFunctionFictifExp = ApplyFunctionFictif;
const ExecuteOneByOneExp = ExecuteOneByOne;
const ApplyInstrExp = ApplyInstr;
const leftExp = left;
const rightExp = right;
const CallF2Exp = CallF2;
const CallF3Exp = CallF3;
const CallF1Exp = CallF1;
const CallF4Exp = CallF4;
const removeRobotExp = removeRobot;
const addRobotExp = addRobot;
const fillBoardExp = fillBoard;

},{"./stack.js":"gdltS","@parcel/transformer-js/src/esmodule-helpers.js":"az6OY"}],"gdltS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nilExp", ()=>nilExp
);
parcelHelpers.export(exports, "StackisEmpty1", ()=>StackisEmpty1
);
parcelHelpers.export(exports, "StackCons1", ()=>StackCons1
);
parcelHelpers.export(exports, "StackHead1", ()=>StackHead1
);
parcelHelpers.export(exports, "StackTail1", ()=>StackTail1
);
parcelHelpers.export(exports, "StackElement1", ()=>StackElement1
);
parcelHelpers.export(exports, "UnstackElement1", ()=>UnstackElement1
);
parcelHelpers.export(exports, "listDisp1", ()=>listDisp1
);
parcelHelpers.export(exports, "displayStack1", ()=>displayStack1
);
/*
  Definition of the abstract type of data structure : Stack
*/ const nil = {};
//Creates a stack
function StackCons(head, tail) {
    return {
        head: head,
        tail: tail
    };
}
//Test if a stack is empty
function StackisEmpty(s) {
    return s === nil;
}
//Returns the head of the stack if not empty
function StackHead(s) {
    if (StackisEmpty(s)) alert("The stack is empty");
    return s['head'];
}
//Returns the tail of the stack if not empty
function StackTail(s) {
    if (StackisEmpty(s)) alert("The stack is empty");
    return s['tail'];
}
//Stacks "element" in "stack"
function StackElement(stack, element) {
    return StackCons(element, stack);
}
//Unstacks the head of the stacks then returns it if not empty
function UnstackElement(stack) {
    if (StackisEmpty(stack)) alert("The stack is empty");
    return StackTail(stack);
}
function listDisp(l1) {
    function listDispRec(l) {
        if (StackisEmpty(l)) return "";
        else if (StackisEmpty(StackTail(l))) return `(${StackHead(l)})`;
        else return `(${listDispRec(StackTail(l))}),(${StackHead(l)})`;
    }
    return `[${listDispRec(l1)}]`;
}
function displayStack(stack) {
    console.log("Beginnig of stack\n");
    while(!StackisEmpty(stack)){
        console.log(StackHead(stack));
        console.log("\n");
    }
    console.log("End of stack\n");
}
const nilExp = nil;
const StackisEmpty1 = StackisEmpty;
const StackCons1 = StackCons;
const StackHead1 = StackHead;
const StackTail1 = StackTail;
const StackElement1 = StackElement;
const UnstackElement1 = UnstackElement;
const listDisp1 = listDisp;
const displayStack1 = displayStack;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"az6OY"}],"az6OY":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["hsk8P","ha5Tn"], "ha5Tn", "parcelRequire94c2")

//# sourceMappingURL=robot.c19c37a3.js.map
