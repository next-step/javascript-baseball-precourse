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

    // 입력이 올바른지 검사
    validateInput(userInput) {
        if (!this.validateLength(userInput)) {
            alert("세 자리 숫자를 입력해주세요!");
            document.getElementById("userInput").value = "";
            return false;
        }
        if (!this.validateDuplicates(userInput)) {
            alert("중복 없이 입력해주세요!");
            document.getElementById("userInput").value = "";
            return false;
        }
        return true;
    }

    validateLength(userInput) {
        return /^\d{3}$/.test(userInput);
    }

    validateDuplicates(userInput) {
        return new Set(userInput).size === userInput.length;
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let app = null;
    let resultElement = document.getElementById("result");

    function startGame() {
        app = new App(); // App 클래스의 인스턴스 생성
        resultElement = document.getElementById("result");
        document.getElementById("userInput").value = "";
    }
    
    function displayResult(result) {
        const resultElement = document.getElementById("result");
        if (result.nothing) { // strike = 0, ball = 0
            resultElement.innerHTML = `
                <h4>낫싱</h4>
            `;
        }
        else {
            if (result.strike != 0 && result.ball != 0) {
                resultElement.innerHTML = `
                    <h4>${result.strike}스트라이크</h4>
                    <h4>${result.ball}볼</h4>
                `;
            }
            else if (result.strike === 0 ) {
                resultElement.innerHTML = `
                    <h4>${result.ball}볼</h4>
                `;
            }
            else if (result.ball === 0) {
                resultElement.innerHTML = `
                    <h4>${result.strike}스트라이크</h4>
                `;
            }
        }
        
    }

    startGame();

    document.getElementById("checkButton").addEventListener("click", function() {
        
        const userInput = document.getElementById("userInput").value;
        if(!app.validateInput(userInput)) {
            return;
        }

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
            document.getElementById("restartButton").addEventListener("click", function() {
                startGame(); // 게임 재시작
            });
        } else {
            document.getElementById("userInput").value = "";
        }

    });
});

export default App;
