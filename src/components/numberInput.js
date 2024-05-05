import { inputError } from './rewriteInput.js';

export const userInput = document.getElementById('userInput')

export function checkInput() { // 잘못된 값 입력하는지 검증
    const numbers = userInput.value.split('').map(Number)
    const isValid = numbers.length === 3 && numbers.every(num => num>=1 && num<=9 && Number.isInteger(num))
    const isDuplicate = new Set(numbers).size === numbers.length

    if (!isValid || !isDuplicate) {
        inputError()
    }
    console.log('입력 받은 숫자: ', numbers)
    return numbers
}