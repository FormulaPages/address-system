'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = INDEX2ADDR;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _INDEX2ROW = require('./INDEX2ROW');

var _INDEX2ROW2 = _interopRequireDefault(_INDEX2ROW);

function INDEX2ADDR(index) {
  var row = (0, _INDEX2ROW2['default'])(index);
  return { rowIndex: row, colIndex: index - row * MAX_COLS };
}

module.exports = exports['default'];
