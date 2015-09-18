# address system

The address system maps a two dimensional table to a single dimension.

The cell index encodes both the row and the column into a single integer.

The cell index is a value between 0 and 17179869183.

The max value is the binary number '1111111111111111111111111111111111'.

The first 20 bits from left-to-right is the row index; from 0...MAX_ROWS-1.

The remaining 14 bits are the column index; from 0...MAX_COLS-1.

# caveats

Since JavaScript doesn't have an unsigned shift left I was forced to resort to
multiplication which is less efficient but will have to do. If you can do fast
binary math in JavaScript then please send me a pull request.
