// 유효성 체크
export function checkNumbers(guessNum) {
    const guessNumSet = new Set(guessNum)
    if (guessNum.length === 3 && guessNumSet.size === 3 && !guessNum.includes(0)) {
        return true
    } else {
        return false
    }
}
