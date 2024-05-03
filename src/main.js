class App {
    getRandomNumber() {
        const numbers = [];
        while (numbers.length < 3) {
            const number = Math.floor(Math.random() * 9) + 1;
            if (!numbers.includes(number)){
                numbers.push(number);
            }
        }
        return numbers.join('');
    }
}

document.getElementById("checkButton").addEventListener("click", function() {
    // App 클래스의 인스턴스 생성
    const app = new App();

    const randomNumber = app.getRandomNumber();
    // 입력값 가져오기
    let userInput = document.getElementById("userInput").value;

    console.log(randomNumber);
    console.log(userInput);

});

export default App;
