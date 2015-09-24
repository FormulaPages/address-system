import {MAX_COLS} from 'formula-constants';
import INDEX2ROW from './INDEX2ROW';

export default function INDEX2ADDR(index) {
  var row = INDEX2ROW(index);
  return { rowIndex: row, colIndex: index - (row * MAX_COLS) };
}
