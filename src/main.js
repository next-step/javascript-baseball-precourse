import { HandleInput } from "./modules/HandleInput.js";
import { SetAnswer } from "./modules/SetAnswer.js";
import { OnlyNumber } from "./modules/OnlyNumber.js";
import { ResetValues } from "./modules/ResetValues.js";
import { EndGame } from "./modules/EndGame.js";

SetAnswer();

document.querySelector("form").addEventListener("submit", HandleInput);
document.querySelector("input").addEventListener("keydown", OnlyNumber);

// 추가된 버튼의 이벤트 리스너를 할당합니다.
document.getElementById("resetBtn").addEventListener("click", ResetValues);
document.getElementById("endGameBtn").addEventListener("click", EndGame);
