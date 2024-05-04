class App {
    constructor() {
        this.randomNumber = this.getRandomNumber(); // 랜덤 숫자 생성
    }

    getRandomNumber() {
        const randomNumber = [];
        while (randomNumber.length < 3) {
            const number = Math.floor(Math.random() * 9) + 1;
            if (!randomNumber.includes(number)){
                randomNumber.push(number);
            }
        }
        return randomNumber.join('');
    }

    compareResult(userInput) {
        /*
        * 1. 스트라이크 : 같은 수가 같은 자리
        * 2. 볼 : 같은 수가 다른 자리
        * 3. 낫싱 : 같은 수가 없음
        */
    
        let result = {
            strike: 0,
            ball: 0,
            nothing: true
        };
    
        for (let i = 0; i < this.randomNumber.length; i++) {
            for (let j = 0; j < userInput.length; j++) {
                if (this.randomNumber[i] === userInput[j] && i === j) { // strike
                    result.strike++;
                    result.nothing = false;
                }
                else if (this.randomNumber[i] === userInput[j] && i != j) { // ball
                    result.ball++;
                    result.nothing = false;
                }
            }
        }
        console.log(result);
        return result;
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let app = null;
    let resultElement = document.getElementById("result");

    function startGame() {
        app = new App(); // App 클래스의 인스턴스 생성
        resultElement = document.getElementById("result");
        resultElement.innerHTML = `
            <p>🧢숫자를 입력하면 야구 게임이 시작됩니다.⚾️</p>
        `
        document.getElementById("userInput").value = "";
    }

    document.getElementById("checkButton").addEventListener("click", function() {
        
        const userInput = document.getElementById("userInput").value;
        const result = app.compareResult(userInput);
        displayResult(result);

        console.log("randomNumber:", app.randomNumber);
        console.log("userInput:", userInput);

        // 만약 스트라이크가 3개면 정답을 맞췄으므로 종료
        if (result.strike === 3) {
            resultElement.innerHTML = `
                <h4>🎉축하합니다! 숫자를 모두 맞췄습니다.🥳</h4>
                <p>게임을 새로 시작하시겠습니까?</p>
                <button id="restartButton">게임 재시작</button>
            `
        } else {
            document.getElementById("userInput").value = "";
        }

    });
});

export default App;
