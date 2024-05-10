export default function checkInput(answer) {
    if (answer.length > 3)
        return false
    if (answer.includes('0'))
        return false
    if ([...new Set(answer)].join('').length != answer.length)
        return false
    return true
}