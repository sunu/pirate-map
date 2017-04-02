/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tearCanvasBorders = tearCanvasBorders;
exports.getRandomInt = getRandomInt;
exports.getRandomSample = getRandomSample;
exports.getRandomName = getRandomName;
function tearCanvasBorders(canvas) {
  _tearBottom(canvas);
  _tearTop(canvas);
  _tearLeft(canvas);
  _tearRight(canvas);
}

function _tearBottom(canvas) {
  var ctx = canvas.getContext('2d');
  var lastX = 0,
      randX = void 0,
      randY = void 0;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);

  randY = (Math.floor(Math.random() * 3) + 95) / 100 * canvas.height;
  ctx.lineTo(0, randY);

  while (lastX <= canvas.width) {
    randX = Math.floor(Math.random() * 3) / 100 * canvas.width;
    randY = (Math.floor(Math.random() * 3) + 95) / 100 * canvas.height;
    lastX = lastX + randX;
    ctx.lineTo(lastX, randY);
  }
  ctx.lineTo(canvas.width, canvas.height);
  ctx.closePath();
  ctx.clip();
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fill();
  ctx.restore();
}

function _tearTop(canvas) {
  var ctx = canvas.getContext('2d');
  var lastX = 0,
      randX = void 0,
      randY = void 0;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, 0);

  randY = (Math.floor(Math.random() * 3) + 1) / 100 * canvas.height;
  ctx.lineTo(0, randY);

  while (lastX <= canvas.width) {
    randX = Math.floor(Math.random() * 3) / 100 * canvas.width;
    randY = (Math.floor(Math.random() * 3) + 1) / 100 * canvas.height;
    lastX = lastX + randX;
    ctx.lineTo(lastX, randY);
  }
  ctx.lineTo(canvas.width, 0);
  ctx.closePath();
  ctx.clip();
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fill();
  ctx.restore();
}

function _tearLeft(canvas) {
  var ctx = canvas.getContext('2d');
  var lastY = 0,
      randX = void 0,
      randY = void 0;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, 0);

  randX = (Math.floor(Math.random() * 3) + 1) / 100 * canvas.width;
  ctx.lineTo(randX, 0);

  while (lastY <= canvas.height) {
    randX = (Math.floor(Math.random() * 3) + 1) / 100 * canvas.width;
    randY = Math.floor(Math.random() * 3) / 100 * canvas.height;
    lastY = lastY + randY;
    ctx.lineTo(randX, lastY);
  }
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.clip();
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fill();
  ctx.restore();
}

function _tearRight(canvas) {
  var ctx = canvas.getContext('2d');
  var lastY = 0,
      randX = void 0,
      randY = void 0;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(canvas.width, 0);

  randX = (Math.floor(Math.random() * 3) + 1) / 100 * canvas.width;
  ctx.lineTo(randX, 0);

  while (lastY <= canvas.height) {
    randX = (Math.floor(Math.random() * 3) + 95) / 100 * canvas.width;
    randY = Math.floor(Math.random() * 3) / 100 * canvas.height;
    lastY = lastY + randY;
    ctx.lineTo(randX, lastY);
  }
  ctx.lineTo(canvas.width, canvas.height);
  ctx.closePath();
  ctx.clip();
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fill();
  ctx.restore();
}

/* Generate a random integer between min and max */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/* Get a random item from an array of items */
function getRandomSample(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomName() {
  var consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  var length = getRandomInt(2, 5);
  var name = "",
      start = 0;
  while (start < length) {
    name = name + getRandomSample(consonant) + getRandomSample(vowel);
    start++;
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * A fast javascript implementation of simplex noise by Jonas Wagner
 *
 * Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
 * Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 *
 *
 * Copyright (C) 2016 Jonas Wagner
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
(function() {
'use strict';

var F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
var G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
var F3 = 1.0 / 3.0;
var G3 = 1.0 / 6.0;
var F4 = (Math.sqrt(5.0) - 1.0) / 4.0;
var G4 = (5.0 - Math.sqrt(5.0)) / 20.0;

function SimplexNoise(random) {
  if (!random) random = Math.random;
  this.p = buildPermutationTable(random);
  this.perm = new Uint8Array(512);
  this.permMod12 = new Uint8Array(512);
  for (var i = 0; i < 512; i++) {
    this.perm[i] = this.p[i & 255];
    this.permMod12[i] = this.perm[i] % 12;
  }

}
SimplexNoise.prototype = {
    grad3: new Float32Array([1, 1, 0,
                            -1, 1, 0,
                            1, -1, 0,

                            -1, -1, 0,
                            1, 0, 1,
                            -1, 0, 1,

                            1, 0, -1,
                            -1, 0, -1,
                            0, 1, 1,

                            0, -1, 1,
                            0, 1, -1,
                            0, -1, -1]),
    grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1,
                            0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1,
                            1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1,
                            -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1,
                            1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1,
                            -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1,
                            1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0,
                            -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
    noise2D: function(xin, yin) {
        var permMod12 = this.permMod12;
        var perm = this.perm;
        var grad3 = this.grad3;
        var n0 = 0; // Noise contributions from the three corners
        var n1 = 0;
        var n2 = 0;
        // Skew the input space to determine which simplex cell we're in
        var s = (xin + yin) * F2; // Hairy factor for 2D
        var i = Math.floor(xin + s);
        var j = Math.floor(yin + s);
        var t = (i + j) * G2;
        var X0 = i - t; // Unskew the cell origin back to (x,y) space
        var Y0 = j - t;
        var x0 = xin - X0; // The x,y distances from the cell origin
        var y0 = yin - Y0;
        // For the 2D case, the simplex shape is an equilateral triangle.
        // Determine which simplex we are in.
        var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
        if (x0 > y0) {
          i1 = 1;
          j1 = 0;
        } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
        else {
          i1 = 0;
          j1 = 1;
        } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
        // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
        // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
        // c = (3-sqrt(3))/6
        var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
        var y1 = y0 - j1 + G2;
        var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
        var y2 = y0 - 1.0 + 2.0 * G2;
        // Work out the hashed gradient indices of the three simplex corners
        var ii = i & 255;
        var jj = j & 255;
        // Calculate the contribution from the three corners
        var t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 >= 0) {
          var gi0 = permMod12[ii + perm[jj]] * 3;
          t0 *= t0;
          n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient
        }
        var t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 >= 0) {
          var gi1 = permMod12[ii + i1 + perm[jj + j1]] * 3;
          t1 *= t1;
          n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1);
        }
        var t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 >= 0) {
          var gi2 = permMod12[ii + 1 + perm[jj + 1]] * 3;
          t2 *= t2;
          n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2);
        }
        // Add contributions from each corner to get the final noise value.
        // The result is scaled to return values in the interval [-1,1].
        return 70.0 * (n0 + n1 + n2);
      },
    // 3D simplex noise
    noise3D: function(xin, yin, zin) {
        var permMod12 = this.permMod12;
        var perm = this.perm;
        var grad3 = this.grad3;
        var n0, n1, n2, n3; // Noise contributions from the four corners
        // Skew the input space to determine which simplex cell we're in
        var s = (xin + yin + zin) * F3; // Very nice and simple skew factor for 3D
        var i = Math.floor(xin + s);
        var j = Math.floor(yin + s);
        var k = Math.floor(zin + s);
        var t = (i + j + k) * G3;
        var X0 = i - t; // Unskew the cell origin back to (x,y,z) space
        var Y0 = j - t;
        var Z0 = k - t;
        var x0 = xin - X0; // The x,y,z distances from the cell origin
        var y0 = yin - Y0;
        var z0 = zin - Z0;
        // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
        // Determine which simplex we are in.
        var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
        var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
        if (x0 >= y0) {
          if (y0 >= z0) {
            i1 = 1;
            j1 = 0;
            k1 = 0;
            i2 = 1;
            j2 = 1;
            k2 = 0;
          } // X Y Z order
          else if (x0 >= z0) {
            i1 = 1;
            j1 = 0;
            k1 = 0;
            i2 = 1;
            j2 = 0;
            k2 = 1;
          } // X Z Y order
          else {
            i1 = 0;
            j1 = 0;
            k1 = 1;
            i2 = 1;
            j2 = 0;
            k2 = 1;
          } // Z X Y order
        }
        else { // x0<y0
          if (y0 < z0) {
            i1 = 0;
            j1 = 0;
            k1 = 1;
            i2 = 0;
            j2 = 1;
            k2 = 1;
          } // Z Y X order
          else if (x0 < z0) {
            i1 = 0;
            j1 = 1;
            k1 = 0;
            i2 = 0;
            j2 = 1;
            k2 = 1;
          } // Y Z X order
          else {
            i1 = 0;
            j1 = 1;
            k1 = 0;
            i2 = 1;
            j2 = 1;
            k2 = 0;
          } // Y X Z order
        }
        // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
        // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
        // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
        // c = 1/6.
        var x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords
        var y1 = y0 - j1 + G3;
        var z1 = z0 - k1 + G3;
        var x2 = x0 - i2 + 2.0 * G3; // Offsets for third corner in (x,y,z) coords
        var y2 = y0 - j2 + 2.0 * G3;
        var z2 = z0 - k2 + 2.0 * G3;
        var x3 = x0 - 1.0 + 3.0 * G3; // Offsets for last corner in (x,y,z) coords
        var y3 = y0 - 1.0 + 3.0 * G3;
        var z3 = z0 - 1.0 + 3.0 * G3;
        // Work out the hashed gradient indices of the four simplex corners
        var ii = i & 255;
        var jj = j & 255;
        var kk = k & 255;
        // Calculate the contribution from the four corners
        var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
        if (t0 < 0) n0 = 0.0;
        else {
          var gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
          t0 *= t0;
          n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
        }
        var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
        if (t1 < 0) n1 = 0.0;
        else {
          var gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
          t1 *= t1;
          n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
        }
        var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
        if (t2 < 0) n2 = 0.0;
        else {
          var gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
          t2 *= t2;
          n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
        }
        var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
        if (t3 < 0) n3 = 0.0;
        else {
          var gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
          t3 *= t3;
          n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
        }
        // Add contributions from each corner to get the final noise value.
        // The result is scaled to stay just inside [-1,1]
        return 32.0 * (n0 + n1 + n2 + n3);
      },
    // 4D simplex noise, better simplex rank ordering method 2012-03-09
    noise4D: function(x, y, z, w) {
        var permMod12 = this.permMod12;
        var perm = this.perm;
        var grad4 = this.grad4;

        var n0, n1, n2, n3, n4; // Noise contributions from the five corners
        // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in
        var s = (x + y + z + w) * F4; // Factor for 4D skewing
        var i = Math.floor(x + s);
        var j = Math.floor(y + s);
        var k = Math.floor(z + s);
        var l = Math.floor(w + s);
        var t = (i + j + k + l) * G4; // Factor for 4D unskewing
        var X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space
        var Y0 = j - t;
        var Z0 = k - t;
        var W0 = l - t;
        var x0 = x - X0; // The x,y,z,w distances from the cell origin
        var y0 = y - Y0;
        var z0 = z - Z0;
        var w0 = w - W0;
        // For the 4D case, the simplex is a 4D shape I won't even try to describe.
        // To find out which of the 24 possible simplices we're in, we need to
        // determine the magnitude ordering of x0, y0, z0 and w0.
        // Six pair-wise comparisons are performed between each possible pair
        // of the four coordinates, and the results are used to rank the numbers.
        var rankx = 0;
        var ranky = 0;
        var rankz = 0;
        var rankw = 0;
        if (x0 > y0) rankx++;
        else ranky++;
        if (x0 > z0) rankx++;
        else rankz++;
        if (x0 > w0) rankx++;
        else rankw++;
        if (y0 > z0) ranky++;
        else rankz++;
        if (y0 > w0) ranky++;
        else rankw++;
        if (z0 > w0) rankz++;
        else rankw++;
        var i1, j1, k1, l1; // The integer offsets for the second simplex corner
        var i2, j2, k2, l2; // The integer offsets for the third simplex corner
        var i3, j3, k3, l3; // The integer offsets for the fourth simplex corner
        // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
        // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
        // impossible. Only the 24 indices which have non-zero entries make any sense.
        // We use a thresholding to set the coordinates in turn from the largest magnitude.
        // Rank 3 denotes the largest coordinate.
        i1 = rankx >= 3 ? 1 : 0;
        j1 = ranky >= 3 ? 1 : 0;
        k1 = rankz >= 3 ? 1 : 0;
        l1 = rankw >= 3 ? 1 : 0;
        // Rank 2 denotes the second largest coordinate.
        i2 = rankx >= 2 ? 1 : 0;
        j2 = ranky >= 2 ? 1 : 0;
        k2 = rankz >= 2 ? 1 : 0;
        l2 = rankw >= 2 ? 1 : 0;
        // Rank 1 denotes the second smallest coordinate.
        i3 = rankx >= 1 ? 1 : 0;
        j3 = ranky >= 1 ? 1 : 0;
        k3 = rankz >= 1 ? 1 : 0;
        l3 = rankw >= 1 ? 1 : 0;
        // The fifth corner has all coordinate offsets = 1, so no need to compute that.
        var x1 = x0 - i1 + G4; // Offsets for second corner in (x,y,z,w) coords
        var y1 = y0 - j1 + G4;
        var z1 = z0 - k1 + G4;
        var w1 = w0 - l1 + G4;
        var x2 = x0 - i2 + 2.0 * G4; // Offsets for third corner in (x,y,z,w) coords
        var y2 = y0 - j2 + 2.0 * G4;
        var z2 = z0 - k2 + 2.0 * G4;
        var w2 = w0 - l2 + 2.0 * G4;
        var x3 = x0 - i3 + 3.0 * G4; // Offsets for fourth corner in (x,y,z,w) coords
        var y3 = y0 - j3 + 3.0 * G4;
        var z3 = z0 - k3 + 3.0 * G4;
        var w3 = w0 - l3 + 3.0 * G4;
        var x4 = x0 - 1.0 + 4.0 * G4; // Offsets for last corner in (x,y,z,w) coords
        var y4 = y0 - 1.0 + 4.0 * G4;
        var z4 = z0 - 1.0 + 4.0 * G4;
        var w4 = w0 - 1.0 + 4.0 * G4;
        // Work out the hashed gradient indices of the five simplex corners
        var ii = i & 255;
        var jj = j & 255;
        var kk = k & 255;
        var ll = l & 255;
        // Calculate the contribution from the five corners
        var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
        if (t0 < 0) n0 = 0.0;
        else {
          var gi0 = (perm[ii + perm[jj + perm[kk + perm[ll]]]] % 32) * 4;
          t0 *= t0;
          n0 = t0 * t0 * (grad4[gi0] * x0 + grad4[gi0 + 1] * y0 + grad4[gi0 + 2] * z0 + grad4[gi0 + 3] * w0);
        }
        var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
        if (t1 < 0) n1 = 0.0;
        else {
          var gi1 = (perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]] % 32) * 4;
          t1 *= t1;
          n1 = t1 * t1 * (grad4[gi1] * x1 + grad4[gi1 + 1] * y1 + grad4[gi1 + 2] * z1 + grad4[gi1 + 3] * w1);
        }
        var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
        if (t2 < 0) n2 = 0.0;
        else {
          var gi2 = (perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]] % 32) * 4;
          t2 *= t2;
          n2 = t2 * t2 * (grad4[gi2] * x2 + grad4[gi2 + 1] * y2 + grad4[gi2 + 2] * z2 + grad4[gi2 + 3] * w2);
        }
        var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
        if (t3 < 0) n3 = 0.0;
        else {
          var gi3 = (perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]] % 32) * 4;
          t3 *= t3;
          n3 = t3 * t3 * (grad4[gi3] * x3 + grad4[gi3 + 1] * y3 + grad4[gi3 + 2] * z3 + grad4[gi3 + 3] * w3);
        }
        var t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
        if (t4 < 0) n4 = 0.0;
        else {
          var gi4 = (perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]] % 32) * 4;
          t4 *= t4;
          n4 = t4 * t4 * (grad4[gi4] * x4 + grad4[gi4 + 1] * y4 + grad4[gi4 + 2] * z4 + grad4[gi4 + 3] * w4);
        }
        // Sum up and scale the result to cover the range [-1,1]
        return 27.0 * (n0 + n1 + n2 + n3 + n4);
      }
  };

function buildPermutationTable(random) {
  var i;
  var p = new Uint8Array(256);
  for (i = 0; i < 256; i++) {
    p[i] = i;
  }
  for (i = 0; i < 255; i++) {
    var r = i + 1 + ~~(random() * (255 - i));
    var aux = p[i];
    p[i] = p[r];
    p[r] = aux;
  }
  return p;
}
SimplexNoise._buildPermutationTable = buildPermutationTable;

// amd
if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {return SimplexNoise;}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
// common js
if (true) exports.SimplexNoise = SimplexNoise;
// browser
else if (typeof window !== 'undefined') window.SimplexNoise = SimplexNoise;
// nodejs
if (true) {
  module.exports = SimplexNoise;
}

})();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _simplexNoise = __webpack_require__(1);

var _simplexNoise2 = _interopRequireDefault(_simplexNoise);

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PirateMap = function () {
  function PirateMap() {
    _classCallCheck(this, PirateMap);

    var canvas = document.getElementsByTagName('canvas')[0];
    canvas.width = 1000;
    canvas.height = 600;
    this.canvas = canvas;
    this.simplex = new _simplexNoise2.default();
    this.drawMap();
  }

  /* Draw a compass on the canvas */


  _createClass(PirateMap, [{
    key: "drawCompass",
    value: function drawCompass() {
      var ctx = this.canvas.getContext('2d');
      var compassWidth = this.canvas.width / 5;
      var compassHeight = this.canvas.height / 5;
      ctx.fillStyle = "#58B8EB";
      ctx.fillStyle = "#F00";

      // draw outer circle
      ctx.beginPath();
      ctx.fillStyle = "#0FDDF5";
      ctx.arc(compassWidth / 2, this.canvas.height - compassHeight / 2, 22, 0, 36, false);
      ctx.fill();

      // draw inner circle
      ctx.beginPath();
      ctx.fillStyle = "#AFEEF9";
      ctx.arc(compassWidth / 2, this.canvas.height - compassHeight / 2, 20, 0, 36, false);
      ctx.fill();

      // lower niddle
      ctx.beginPath();
      ctx.moveTo(compassWidth / 2, this.canvas.height);
      ctx.lineTo(compassWidth / 2 - 5, this.canvas.height - compassHeight / 2);
      ctx.lineTo(compassWidth / 2, this.canvas.height - compassHeight / 2);
      ctx.lineTo(compassWidth / 2, this.canvas.height);
      ctx.fillStyle = "#DAE1EF";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(compassWidth / 2, this.canvas.height);
      ctx.lineTo(compassWidth / 2 + 5, this.canvas.height - compassHeight / 2);
      ctx.lineTo(compassWidth / 2, this.canvas.height - compassHeight / 2);
      ctx.lineTo(compassWidth / 2, this.canvas.height);
      ctx.fillStyle = "#91AEDC";
      ctx.fill();

      // upper niddle
      ctx.beginPath();
      ctx.moveTo(compassWidth / 2, this.canvas.height - compassHeight);
      ctx.lineTo(compassWidth / 2 - 5, this.canvas.height - compassHeight / 2);
      ctx.lineTo(compassWidth / 2, this.canvas.height - compassHeight / 2);
      ctx.lineTo(compassWidth / 2, this.canvas.height - compassHeight);
      ctx.fillStyle = "#FF532B";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(compassWidth / 2, this.canvas.height - compassHeight);
      ctx.lineTo(compassWidth / 2 + 5, this.canvas.height - compassHeight / 2);
      ctx.lineTo(compassWidth / 2, this.canvas.height - compassHeight / 2);
      ctx.lineTo(compassWidth / 2, this.canvas.height - compassHeight);
      ctx.fillStyle = "#DC052C";
      ctx.fill();
    }

    /* Generate alpha value based on co-ordinate of pixel
    using simplex noise */

  }, {
    key: "generateNoise",
    value: function generateNoise(x, y) {
      var nx = x / this.canvas.width - 0.5;
      var ny = y / this.canvas.height - 0.5;

      // mix things up with varied frquencies and octaves
      var frequency = 1.5;
      var value = 1 * this.simplex.noise2D(frequency * nx, frequency * ny) + 0.5 * this.simplex.noise2D(2 * frequency * nx, 2 * frequency * ny) + 0.25 * this.simplex.noise2D(4 * frequency * nx, 4 * frequency * ny) + 0.125 * this.simplex.noise2D(8 * frequency * nx, 8 * frequency * ny);
      value = Math.pow(value, 2);

      // Higher values at center
      var distance = Math.hypot(this.canvas.width / 2 - x, this.canvas.height / 2 - y) / 255;
      // calibration constants, came of with these by playing around
      // roughly regulate island size
      var a = 0.5;
      var b = 0.6;
      var c = 0.6;
      value = (value + a) * (1 - b * Math.pow(distance, c));
      value *= 255;
      return value;
    }
  }, {
    key: "drawWaterNames",
    value: function drawWaterNames() {
      var _this = this;

      var totalPoints = this.waters.length;
      var sectionLength = Math.floor(totalPoints / 3);
      var bayOne = utils.getRandomSample(this.waters.slice(totalPoints - sectionLength, totalPoints).filter(function (val) {
        return val[0] < _this.canvas.width - 200 && val[1] > 100;
      }));
      var ctx = this.canvas.getContext('2d');
      ctx.font = '30px "Tangerine"';
      ctx.fillStyle = "#000";
      ctx.fillText(bayOne[2] + " of " + utils.getRandomName(), bayOne[0], bayOne[1]);
      var bayTwo = utils.getRandomSample(this.waters.slice(0, sectionLength).filter(function (val) {
        return val[0] > 150 && val[1] > 100;
      }));
      ctx.font = '30px "Tangerine"';
      ctx.fillStyle = "#000";
      ctx.fillText(bayTwo[2] + " of " + utils.getRandomName(), bayTwo[0], bayTwo[1]);
    }

    /* Guide our pirates to the treasure */

  }, {
    key: "drawPath",
    value: function drawPath() {
      var totalPoints = this.lands.length;
      var sectionLength = Math.floor(totalPoints / 5);
      var treasure = this.lands[utils.getRandomInt(totalPoints - sectionLength, totalPoints)];
      var ctx = this.canvas.getContext('2d');
      ctx.beginPath();
      ctx.strokeStyle = "#FF532B";
      ctx.lineWidth = 5;
      ctx.moveTo(treasure[0] - 10, treasure[1] - 10);
      ctx.lineTo(treasure[0] + 10, treasure[1] + 10);
      ctx.stroke();
      ctx.moveTo(treasure[0] + 10, treasure[1] - 10);
      ctx.lineTo(treasure[0] - 10, treasure[1] + 10);
      ctx.stroke();

      var path = [];
      var start = 0;
      while (start < totalPoints - sectionLength) {
        var point = this.lands[utils.getRandomInt(start, start + sectionLength)];
        path.push(point);
        ctx.font = '30px "Tangerine"';
        ctx.fillStyle = "#000";
        ctx.fillText(point[2] + " of " + utils.getRandomName(), point[0] - 10, point[1] - 10);
        start = start + sectionLength;
      }
      path.push(treasure);

      ctx.setLineDash([10, 10]);
      ctx.beginPath();
      // draw a smooth curve through all the points in path
      // from http://stackoverflow.com/a/7058606
      // move to the first point
      ctx.moveTo(path[0][0], path[0][1]);
      for (var i = 1; i < path.length - 2; i++) {
        var xc = (path[i][0] + path[i + 1][0]) / 2;
        var yc = (path[i][1] + path[i + 1][1]) / 2;
        ctx.quadraticCurveTo(path[i][0], path[i][1], xc, yc);
      }
      // curve through the last two path
      ctx.quadraticCurveTo(path[i][0], path[i][1], path[i + 1][0], path[i + 1][1]);
      ctx.stroke();
    }

    /* Get the wheels running. Make shit happen. */

  }, {
    key: "drawMap",
    value: function drawMap() {
      var ctx = this.canvas.getContext('2d');
      var image = ctx.createImageData(this.canvas.width, this.canvas.height);
      var data = image.data;
      this.lands = [];
      this.waters = [];
      for (var x = 0; x < this.canvas.width; x++) {
        for (var y = 0; y < this.canvas.height; y++) {
          var value = this.generateNoise(x, y);
          var cell = (x + y * this.canvas.width) * 4;

          if (value > 200) {
            // mountains
            data[cell] = 54;
            data[cell + 1] = 68;
            data[cell + 2] = 50;
            data[cell + 3] = value; // alpha.
            this.lands.push([x, y, "Mountains"]);
          } else if (value > 150) {
            // jungle
            data[cell] = 54;
            data[cell + 1] = 68;
            data[cell + 2] = 53;
            data[cell + 3] = value;
            this.lands.push([x, y, "Jungles"]);
          } else if (value > 80) {
            // land
            data[cell] = 54;
            data[cell + 1] = 68;
            data[cell + 2] = 53;
            data[cell + 3] = value;
            this.lands.push([x, y, "Plains"]);
          } else if (value > 70) {
            // shallow waters
            data[cell] = 0;
            data[cell + 1] = 113;
            data[cell + 2] = 185;
            data[cell + 3] = (255 - value) / 1.05;
          } else {
            // deep waters
            data[cell] = 0;
            data[cell + 1] = 113;
            data[cell + 2] = 185;
            data[cell + 3] = 255 - value;
            this.waters.push([x, y, "Bay"]);
          }
        }
      }
      ctx.putImageData(image, 0, 0);
      this.drawCompass();
      this.drawPath();
      this.drawWaterNames();
      utils.tearCanvasBorders(this.canvas);
    }
  }]);

  return PirateMap;
}();

window.WebFont.load({
  google: {
    families: ['Tangerine']
  },
  active: function active() {
    new PirateMap();
  }
});

document.getElementsByTagName('button')[0].addEventListener('click', function () {
  var canvas = document.getElementsByTagName('canvas')[0];
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  new PirateMap();
});

document.getElementsByTagName('button')[0].addEventListener('click', function () {
  var canvas = document.getElementsByTagName('canvas')[0];
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementsByTagName('h1')[0].innerHTML = "The hidden treasure of Captain " + utils.getRandomName();
  new PirateMap();
});

document.getElementsByTagName('h1')[0].innerHTML = "The hidden treasure of Captain " + utils.getRandomName();

/***/ })
/******/ ]);