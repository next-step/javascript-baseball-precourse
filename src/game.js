/**
 * 숫자 야구 게임 클래스
 *
 * 랜덤값 생성(void init(void)) 및 관리
 * {'s': int, 'b': int} getResult(int input) -> 입력값에 따라 결과리턴
 */
const getRandom = () => Math.floor(Math.random() * 9) + 1;


function BaseBallGame(){
    this.answer = [1, 2, 3];
}
BaseBallGame.prototype.init = function(){
    // get distinct 3 digits number
    this.answer[0] = getRandom();
    let num = getRandom();
    while(this.answer[0] == num) num = getRandom();
    this.answer[1] = num;
    num = getRandom();
    while(this.answer[0] == num || this.answer[1] == num) num = getRandom();
    this.answer[2] = num;
}