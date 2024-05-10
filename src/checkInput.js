export default function checkInput(answer) {
    if (answer.length != 3)
        return false
    if (answer[0] == answer[1] || answer[1] == answer[2] || answer[2] == answer[0])
        return false
    if (answer[0] == 0 || answer[1] == 0 || answer[2] == 0)
        return false
    return true
}