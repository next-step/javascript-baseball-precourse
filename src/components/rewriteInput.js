import { userInput } from './numberInput.js'

export function inputError() {
    alert('잘못된 값을 입력했습니다. 다시 입력해 주세요!')
    userInput.value = ''
    userInput.focus()
    return;
}