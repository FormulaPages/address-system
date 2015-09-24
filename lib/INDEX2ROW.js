'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = INDEX2ROW;

var _formulaConstants = require('formula-constants');

function INDEX2ROW(index) {
  return Math.floor(index / _formulaConstants.MAX_COLS);
}

module.exports = exports['default'];
