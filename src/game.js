/**
 * 숫자 야구 게임 클래스
 *
 * 랜덤값 생성(void init(void)) 및 관리
 * {strike: int, ball: int} getResult(int input) -> 입력값에 따라 결과리턴
 */
const getRandom = () => Math.floor(Math.random() * 9) + 1;
const int2Arr = input => {
    return [
        Math.floor(input/100),
        Math.floor(input/10)%10,
        input%10
    ];
}
const isValidInput = input => {
    // int input이 3자리의 distinct한 수인지 확인
    if(input > 999 || input < 100) return false;
    let arr = int2Arr(input);
    if(arr[0]===arr[1] || arr[0]===arr[2] || arr[1]===arr[2]) return false;
    return true;
}

function BaseBallGame(){
    this.answer = [1, 2, 3];
}
BaseBallGame.prototype.init = function(){
    // get distinct 3 digits number
    this.answer[0] = getRandom();
    let num = getRandom();
    while(this.answer[0] === num) num = getRandom();
    this.answer[1] = num;
    num = getRandom();
    while(this.answer[0] === num || this.answer[1] === num) num = getRandom();
    this.answer[2] = num;
}
BaseBallGame.prototype.getResult = function(input){
    if(!isValidInput(input)) throw "inValid input";
    let arr = int2Arr(input);
    let result = {
        strike: 0,
        ball: 0
    }
    arr.map((value, index) => {
        for(let i=0; i<3; i++){
            if(index===i && value===this.answer[i]) result.strike++;
            else if(value===this.answer[i]) result.ball++;
        }
    })
    return result;
}

const game = new BaseBallGame();
game.init();

export default game;

// ----------test code

// try{
//     console.log(game.getResult(321));
// } catch(error){
//     if(error!=="inValid input") throw error;
//     console.log(error);
// }