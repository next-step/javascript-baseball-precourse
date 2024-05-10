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

export { makeRandom };