export let answer = [];

// 컴퓨터가 1~9 중에서 3개의 숫자를 랜덤으로 선택하는 함수
export const generateAnswer = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    answer.length = 0;
    for (let i = 0; i < 3; i += 1) {
        const index = Math.floor(Math.random() * numbers.length);
        answer.push(numbers[index]);
        numbers.splice(index, 1);
    }
};