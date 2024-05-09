let answer;

export const SetAnswer = () => {
    answer = "";
    while (answer.length < 3) {
        let num = Math.floor(Math.random() * 9) + 1;
        if (!answer.includes(num.toString())) {
            answer += num.toString();
        }
    }
    console.log(answer);
};

export { answer };
