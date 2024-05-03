// #1 컴퓨터 1~9까지 서로 다른 임의의 수 3개 선택
function createRandomNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
        const tempNum = Math.floor(Math.random() * 9 + 1);
        if (!numbers.includes(tempNum)) {
            numbers.push(tempNum);
        }
    }
    return numbers.join('');
}

const secreteNum = createRandomNumbers();
console.log(`${secreteNum}`);