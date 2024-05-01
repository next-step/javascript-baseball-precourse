import { setRandomNumber } from "./setRandomNumber";
import { limitInputLength } from "./limitInputLength";
import { setUserNumber } from "./setUserNumber";

const computer = setRandomNumber();
console.log(computer);

limitInputLength();
document.getElementById("userButton").addEventListener("click", setUserNumber);
