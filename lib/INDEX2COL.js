'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = INDEX2COL;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _formulaConstants = require('formula-constants');

var _INDEX2ROW = require('./INDEX2ROW');

var _INDEX2ROW2 = _interopRequireDefault(_INDEX2ROW);

function INDEX2COL(index) {
  return index - (0, _INDEX2ROW2['default'])(index) * _formulaConstants.MAX_COLS;
}

module.exports = exports['default'];
