//랜덤 넘버 생성
export function generateRandomNumber() {
    let randomNumbers = [];
    while (randomNumbers.length < 3) {
        const num = Math.floor(Math.random() * 9) + 1
        if (!randomNumbers.includes(num))
            randomNumbers.push(num);
    }
    return randomNumbers;
}
