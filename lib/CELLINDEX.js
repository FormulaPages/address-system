"use strict";

Object.defineProperty(exports, "__esModule", {
       value: true
});
exports.CELLINDEX = CELLINDEX;

function CELLINDEX(row, col) {
       return Math.floor(row * MAX_COLS) + col;
}
