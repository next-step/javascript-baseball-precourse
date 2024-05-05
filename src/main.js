import { randNumGenerator } from "./randNumGen.js";
import { userInput } from "./getUserInput.js";
// import { reload } from "./gg.js";

// 랜덤 숫자 생성..
randNumGenerator();
// 공 던졌다!
const pitch = document.querySelector(".pitch");
pitch.addEventListener("click", main);

function main() {
  userInput();
}
