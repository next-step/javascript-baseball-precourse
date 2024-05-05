
export function setAnswer() {
    const numbers = []
    while(numbers.length < 3) {
        const randomNum = Math.floor(Math.random() * 9) + 1
        if (!numbers.includes(randomNum))
            numbers.push(randomNum)
    }
    return numbers
}