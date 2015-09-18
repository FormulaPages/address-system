'use strict';

var _constants = require('./constants');

function INDEX2ROW(index) {
  return Math.floor(index / _constants.MAX_COLS);
}
