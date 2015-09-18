import {MAX_COLS} from './constants';
import INDEX2ROW from './INDEX2ROW':

export default function INDEX2COL(index) {
  return index - (INDEX2ROW(index) * MAX_COLS);
}
