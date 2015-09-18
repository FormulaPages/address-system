'use strict';

var _constants = require('./constants');

function INDEX2COL(index) {
  return index - INDEX2ROW(index) * _constants.MAX_COLS;
}
