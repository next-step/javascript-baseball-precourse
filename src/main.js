function setAnswer() {
    while (answer.length < 3) {
        const randomNum = Math.floor(Math.random() * 10).toString();
        if (!answer.includes(randomNum)) answer += randomNum;
    }
    document.getElementById("result").innerHTML = '컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!';
    return answer;
}
