// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"3.js":[function(require,module,exports) {
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// utilities
function getLength(x0, y0, x1, y1) {
  // returns the length of a line segment
  var x = x1 - x0;
  var y = y1 - y0;
  return Math.sqrt(x * x + y * y);
}

function getDegAngle(x0, y0, x1, y1) {
  var y = y1 - y0;
  var x = x1 - x0;
  return Math.atan2(y, x) * (180 / Math.PI);
} // some constants


var DECAY = 4; // confetti decay in seconds

var SPREAD = 60; // degrees to spread from the angle of the cannon

var GRAVITY = 1200;

var ConfettiCannon =
/*#__PURE__*/
function () {
  function ConfettiCannon() {
    _classCallCheck(this, ConfettiCannon);

    // setup a canvas
    this.canvas = document.getElementById("canvas");
    this.dpr = window.devicePixelRatio || 1;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.scale(this.dpr, this.dpr); // add confetti here

    this.confettiSpriteIds = [];
    this.confettiSprites = {}; // vector line representing the firing angle

    this.drawVector = false;
    this.vector = [{
      x: window.innerWidth,
      y: window.innerHeight * 1.25
    }, {
      x: window.innerWidth,
      y: window.innerHeight * 2
    }];
    this.pointer = {}; // bind methods

    this.render = this.render.bind(this);
    this.handleMousedown = this.handleMousedown.bind(this);
    this.handleMouseup = this.handleMouseup.bind(this);
    this.handleMousemove = this.handleMousemove.bind(this);
    this.handleTouchstart = this.handleTouchstart.bind(this);
    this.handleTouchmove = this.handleTouchmove.bind(this);
    this.setCanvasSize = this.setCanvasSize.bind(this);
    this.setupListeners();
    this.setCanvasSize(); // fire off for a demo

    this.timer = setTimeout(this.handleMouseup, 1000);
  }

  _createClass(ConfettiCannon, [{
    key: "setupListeners",
    value: function setupListeners() {
      // Use TweenLite tick event for the render loop
      TweenLite.ticker.addEventListener("tick", this.render); // bind events

      window.addEventListener("mousedown", this.handleMousedown);
      window.addEventListener("mouseup", this.handleMouseup);
      window.addEventListener("mousemove", this.handleMousemove);
      window.addEventListener("touchstart", this.handleTouchstart);
      window.addEventListener("touchend", this.handleMouseup);
      window.addEventListener("touchmove", this.handleTouchmove);
      window.addEventListener("resize", this.setCanvasSize);
    }
  }, {
    key: "setCanvasSize",
    value: function setCanvasSize() {
      this.canvas.width = window.innerWidth * this.dpr;
      this.canvas.height = window.innerHeight * this.dpr;
      this.canvas.style.width = window.innerWidth + "px";
      this.canvas.style.height = window.innerHeight + "px";
    }
  }, {
    key: "handleMousedown",
    value: function handleMousedown(event) {
      clearTimeout(this.timer);
      var x = event.clientX * this.dpr;
      var y = event.clientY * this.dpr;
      this.vector[0] = {
        x: x,
        y: y
      };
      this.drawVector = true;
    }
  }, {
    key: "handleTouchstart",
    value: function handleTouchstart(event) {
      clearTimeout(this.timer);
      event.preventDefault();
      var x = event.touches[0].clientX * this.dpr;
      var y = event.touches[0].clientY * this.dpr;
      this.vector[0] = {
        x: x,
        y: y
      };
      this.drawVector = true;
    }
  }, {
    key: "handleMouseup",
    value: function handleMouseup(event) {
      this.drawVector = false;
      var x0 = this.vector[0].x;
      var y0 = this.vector[0].y;
      var x1 = this.vector[1].x;
      var y1 = this.vector[1].y;
      var length = getLength(x0, y0, x1, y1);
      var angle = getDegAngle(x0, y0, x1, y1) + 180;
      var particles = length / 5 + 5;
      var velocity = length * 10;
      this.addConfettiParticles(particles, angle, velocity, x0, y0);
    }
  }, {
    key: "handleMousemove",
    value: function handleMousemove(event) {
      var x = event.clientX * this.dpr;
      var y = event.clientY * this.dpr;
      this.vector[1] = {
        x: x,
        y: y
      };
      this.pointer = this.vector[1];
    }
  }, {
    key: "handleTouchmove",
    value: function handleTouchmove(event) {
      event.preventDefault();
      var x = event.changedTouches[0].clientX * this.dpr;
      var y = event.changedTouches[0].clientY * this.dpr;
      this.vector[1] = {
        x: x,
        y: y
      };
      this.pointer = this.vector[1];
    }
  }, {
    key: "drawVectorLine",
    value: function drawVectorLine() {
      this.ctx.strokeStyle = "pink";
      this.ctx.lineWidth = 2 * this.dpr;
      var x0 = this.vector[0].x;
      var y0 = this.vector[0].y;
      var x1 = this.vector[1].x;
      var y1 = this.vector[1].y;
      this.ctx.beginPath();
      this.ctx.moveTo(x0, y0);
      this.ctx.lineTo(x1, y1);
      this.ctx.stroke();
    }
  }, {
    key: "addConfettiParticles",
    value: function addConfettiParticles(amount, angle, velocity, x, y) {
      var i = 0;

      while (i < amount) {
        // sprite
        var r = _.random(4, 6) * this.dpr;
        var d = _.random(15, 25) * this.dpr;

        var cr = _.random(30, 255);

        var cg = _.random(30, 230);

        var cb = _.random(30, 230);

        var color = "rgb(".concat(cr, ", ").concat(cg, ", ").concat(cb, ")");

        var tilt = _.random(10, -10);

        var tiltAngleIncremental = _.random(0.07, 0.05);

        var tiltAngle = 0;

        var id = _.uniqueId();

        var sprite = _defineProperty({}, id, {
          angle: angle,
          velocity: velocity,
          x: x,
          y: y,
          r: r,
          d: d,
          color: color,
          tilt: tilt,
          tiltAngleIncremental: tiltAngleIncremental,
          tiltAngle: tiltAngle
        });

        Object.assign(this.confettiSprites, sprite);
        this.confettiSpriteIds.push(id);
        this.tweenConfettiParticle(id);
        i++;
      }
    }
  }, {
    key: "tweenConfettiParticle",
    value: function tweenConfettiParticle(id) {
      var _this = this;

      var minAngle = this.confettiSprites[id].angle - SPREAD / 2;
      var maxAngle = this.confettiSprites[id].angle + SPREAD / 2;
      var minVelocity = this.confettiSprites[id].velocity / 4;
      var maxVelocity = this.confettiSprites[id].velocity; // Physics Props

      var velocity = _.random(minVelocity, maxVelocity);

      var angle = _.random(minAngle, maxAngle);

      var gravity = GRAVITY;

      var friction = _.random(0.1, 0.25);

      var d = 0;
      TweenLite.to(this.confettiSprites[id], DECAY, {
        physics2D: {
          velocity: velocity,
          angle: angle,
          gravity: gravity,
          friction: friction
        },
        d: d,
        ease: Power4.easeIn,
        onComplete: function onComplete() {
          // remove confetti sprite and id
          _.pull(_this.confettiSpriteIds, id);

          delete _this.confettiSprites[id];
        }
      });
    }
  }, {
    key: "updateConfettiParticle",
    value: function updateConfettiParticle(id) {
      var sprite = this.confettiSprites[id];
      var tiltAngle = 0.0005 * sprite.d;
      sprite.angle += 0.01;
      sprite.tiltAngle += tiltAngle;
      sprite.tiltAngle += sprite.tiltAngleIncremental;
      sprite.tilt = Math.sin(sprite.tiltAngle - sprite.r / 2) * sprite.r * 2;
      sprite.y += Math.sin(sprite.angle + sprite.r / 2) * 2;
      sprite.x += Math.cos(sprite.angle) / 2;
    }
  }, {
    key: "drawConfetti",
    value: function drawConfetti() {
      var _this2 = this;

      this.confettiSpriteIds.map(function (id) {
        var sprite = _this2.confettiSprites[id];

        _this2.ctx.beginPath();

        _this2.ctx.lineWidth = sprite.d / 2;
        _this2.ctx.strokeStyle = sprite.color;

        _this2.ctx.moveTo(sprite.x + sprite.tilt + sprite.r, sprite.y);

        _this2.ctx.lineTo(sprite.x + sprite.tilt, sprite.y + sprite.tilt + sprite.r);

        _this2.ctx.stroke();

        _this2.updateConfettiParticle(id);
      });
    }
  }, {
    key: "drawPointer",
    value: function drawPointer() {
      var centerX = this.pointer.x;
      var centerY = this.pointer.y;
      var radius = 15 * this.dpr;
      this.ctx.beginPath();
      this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = "transparent";
      this.ctx.fill();
      this.ctx.lineWidth = 2 * this.dpr;
      this.ctx.strokeStyle = "#ffffff";
      this.ctx.stroke();
    }
  }, {
    key: "drawPower",
    value: function drawPower() {
      var x0 = this.vector[0].x;
      var y0 = this.vector[0].y;
      var x1 = this.vector[1].x;
      var y1 = this.vector[1].y;
      var length = getLength(x0, y0, x1, y1);
      var centerX = x0;
      var centerY = y0;
      var radius = 1 * this.dpr * length / 20;
      this.ctx.beginPath();
      this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = "transparent";
      this.ctx.fill();
      this.ctx.lineWidth = 2 * this.dpr;
      this.ctx.strokeStyle = "#333333";
      this.ctx.stroke();
    }
  }, {
    key: "render",
    value: function render() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // only draw the vector when the drawVector flag is on

      this.drawVector && this.drawVectorLine();
      this.drawVector && this.drawPower();
      this.drawPointer();
      this.drawConfetti();
    }
  }]);

  return ConfettiCannon;
}();

var confetti = new ConfettiCannon();
},{}],"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58419" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","3.js"], null)
//# sourceMappingURL=/3.d83c71c0.js.map