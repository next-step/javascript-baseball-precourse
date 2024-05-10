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

export { getResult };