export function generateNumber() {
    let numbers = '';
    while (numbers.length < 3) {
        const randomNumber = Math.floor(Math.random() * 9) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers += randomNumber;
        }
    }
    return numbers;
}