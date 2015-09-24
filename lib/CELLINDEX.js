"use strict";

Object.defineProperty(exports, "__esModule", {
       value: true
});
exports["default"] = CELLINDEX;

function CELLINDEX(row, col) {
       return Math.floor(row * MAX_COLS) + col;
}

module.exports = exports["default"];
