
//랜덤 수 생성 함수
function makeRandom() {
    let computer = [];

    while(computer.length <3){
        let random = Math.floor(Math.random() * 9) + 1;
        
        if(!computer.includes(random)){
            computer.push(random);
        }
    }

    return computer;
}

//입력값 검사 함수
function checkNumber(userNum) {
    
    if(isNaN(userNum)){
        alert("숫자를 입력해 주세요.");
        return;
    }
    else if( userNum.length != 3){
        alert("세자리 수를 입력해 주세요.");
        return;
    }
    else if( (userNum[0] == userNum[1]) || (userNum[0] == userNum[2]) || (userNum[1] == userNum[2]) ){
        alert("중복되지 않는 수를 입력해 주세요.");
        return;
    }
    else if(userNum.includes(0)){
        alert("1~9까지의 수를 입력해 주세요.");
        return;
    }

    return true;
}

//숫자 비교 함수
function getResult(computer, userNum) {
    
    let strike = 0;
    let ball = 0;
    const userArr = userNum.split('').map(Number);

    //count strike
    for(let i=0; i<userArr.length; i++){
        if(userArr[i] === computer[i]){
            strike += 1;
        }
    }

    //count ball
    for(let i=0; i<userArr.length; i++){
        if(computer.includes(userArr[i])){
            ball += 1;
        }
    }
    ball -= strike;

    return[strike, ball];
}

//점수 출력 함수
function showResult(resultArr) {
    if(resultArr[0]==0 && resultArr[1]==0){
        return "낫싱";
    } 
    else if(resultArr[1] == 0) {
        return (resultArr[0] + "스트라이크");
    } else {
        return (resultArr[1] + "볼 " + resultArr[0] + "스트라이크");
    }

}
export {makeRandom, checkNumber, getResult, showResult};



