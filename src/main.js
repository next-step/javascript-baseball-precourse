import randomNum from "./randomnums";
import checkN from "./checkinput";
import checkinput from "./checkinput";
import replay from "./replay";


let answer = randomNum();
let GemeOver =false;

//입력값이 유효한지
function isValidnum(input){
    //세 자리 숫자확인
    if (!/^\d{3}$/.test(input)) {
        return false;
}
    // 입력이 숫자로 이루어져 있는지 확인
    for (let i = 0; i < input.length; i++) {
        if (isNaN(parseInt(input[i]))) {
        return GemeOver;
        }
    }

    return true;
}

checkN(input)





window.checkN=checkN;
window.restart=restart;