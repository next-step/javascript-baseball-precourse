import { createRandomNum } from "./createRandomNum.js"
import { playBaseball } from "./playBaseball.js";
//랜덤 숫자 생성
createRandomNum()

// 야구게임 시작
document.querySelector('.search-submit').addEventListener('click', playBaseball);
