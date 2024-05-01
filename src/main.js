import { generateAnswer } from './generateAnswer.js';
import { handleInput } from './handleInput.js';
import { restartGame } from './restart.js';
import { endGame } from './endGame.js';

// 초기 설정
generateAnswer();
document.querySelector("form").addEventListener("submit", handleInput);
document.getElementById("restartButton").addEventListener("click", restartGame);
document.getElementById("endButton").addEventListener("click", endGame);