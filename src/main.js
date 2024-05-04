let value = [];
startGame();


function startGame(){
    //1. 임의의 정답값 설정. value
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    value.length=0;
    for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * (array.length - i));
    value.push(array[randomIndex]); 
    array.splice(randomIndex, 1);// 중복 제거.
    }

    //개발 테스트용.
    console.log(value);

    document.querySelector('.result').style.display = 'none';
    document.getElementById('num').value = ' ';
}


//2. 확인 버튼 click시 
document.getElementById("submit").addEventListener('click',check);
document.getElementById('restart').addEventListener('click',startGame);


 
function check(){
    const input = document.getElementById('num').value;
    const  inputValue= String(input);
    var strikes = calculateStrikes(inputValue,value);
    var balls = calculateBalls(inputValue, value);
    balls = balls-strikes;

    let result;

    switch (true) {
        case strikes > 0 && balls > 0:
            result = `${strikes} 스트라이크, ${balls} 볼`;
            break;
        case (strikes > 0 && strikes < 3) && balls === 0:
            result = `${strikes} 스트라이크`;
            break;
        case strikes === 0 && balls > 0:
            alert(`${balls} 볼`);
            break;
        case strikes == 3:
            document.querySelector('.result').style.display = 'block';
        break;
        default:
            result = '낫싱';
            break;
    }



    if (result) {
            alert(result);
    }
}

function calculateStrikes(inputValue, value){
    let strikes = 0;
    for(let i = 0; i<3;i++){
        if(inputValue[i] == value[i])
            strikes++;
    }
    return strikes;
}


function calculateBalls(inputValue, value){
    //개발테스트용
    //console.log(inputValue);
    let balls = 0;
    for(let i = 0; i<3;i++){
        if(value.includes(parseInt(inputValue[i])))
            balls++;
    }
    return balls;
}


 