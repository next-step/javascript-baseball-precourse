import { setAnswer } from "./initialGame.js";
let answer = []
playGame()

function playGame() {
    answer = setAnswer()
    console.log(answer)
}
