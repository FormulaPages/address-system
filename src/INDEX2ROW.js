import {MAX_COLS} from 'formula-constants';

export default function INDEX2ROW(index) {
  return Math.floor(index / MAX_COLS);
}
