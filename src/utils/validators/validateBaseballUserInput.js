import { NUMBER } from '../constants/baseball.js';

const DECIMAL = 10;

function isNumber(input) {
  return !Number.isNaN(parseInt(input, DECIMAL));
}

export default function validateBaseballUserInput(input) {
  if (!isNumber(input)) return false;
  return true;
}
