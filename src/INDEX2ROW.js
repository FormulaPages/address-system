import {MAX_COLS} from './constants';

export default function INDEX2ROW(index) {
  return Math.floor(index / MAX_COLS);
}
