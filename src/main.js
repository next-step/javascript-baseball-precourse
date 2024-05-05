import { setAnswer } from "./initialGame.js";
import { checkNumbers } from "./validCheck.js";

let answer = []
playGame()

function playGame() {
    answer = setAnswer()
    console.log(answer)
}

// console.group(checkNumbers(answer))