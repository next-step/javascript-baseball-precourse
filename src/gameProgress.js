let strike
let ball

export function markAnswer(answer, number) {
    const number_digit = number.toString()
    strike = 0
    ball = 0

    for(let i=0; i<3; i+=1) {
        if(number_digit[i] == answer[i])
            strike += 1
        else if(number_digit.includes(answer[i]))
            ball += 1
    }

    if(strike == 3)
        return true
    else
        return false
}

export function makeHint() {
    let content = ""

    if(ball != 0)
        content += ball+"볼 "
    if(strike != 0)
        content += strike+"스트라이크"
    if(ball == 0 && strike == 0)
        content = "낫싱"

    return content
}