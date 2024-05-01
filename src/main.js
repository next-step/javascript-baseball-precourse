import { EndGame } from './modules/EndGame.js';
import { InputNumber } from './modules/InputNumber.js';
import { RandomNumber } from './modules/RandomNumber.js';
import { RestartGame } from './modules/RestartGame.js';

RandomNumber();
document.querySelector('form').addEventListener('submit', InputNumber);
document.getElementById('restartBtn').addEventListener('click', RestartGame);
document.getElementById('endBtn').addEventListener('click', EndGame);
