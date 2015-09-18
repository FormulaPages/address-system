/*
The cell index tracks a rows and cols with a single dimension.

The cell index is a value between 0 and 17179869183.

The max value is the binary number '1111111111111111111111111111111111'.

The first 20 bits from left-to-right is the row index; from 0...MAX_ROWS-1.

The remaining 14 bits are the column index; from 0...MAX_COLS-1.

Unfortunately, since JavaScript doesn't have an unsigned shift left I was
forced to resort to multiplication which is less efficient but will have
to do.

Mapping the row/col efficiently to an array is the key to the money.
,*/
CELLINDEX = function(row, col) { return (Math.floor((row) * MAX_COLS) + (col)); },
INDEX2ADDR = function(index) { var row = INDEX2ROW(index); return { rowIndex: row, colIndex: index - (row * MAX_COLS) }; },
INDEX2COL = function(index) { return index - (INDEX2ROW(index) * MAX_COLS); },
INDEX2ROW = function(index) { return Math.floor(index / MAX_COLS); }
