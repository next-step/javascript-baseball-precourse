export function calculateHint(playerInput, comRandom) {
    let strike = 0
    let ball = 0
    
    playerInput.forEach((num, index) => {
        if (num === comRandom[index])   strike++
        else if (comRandom.includes(num))   ball++
    });

    console.log('스트라이크 개수: ', strike, ', 볼 개수: ', ball)
    return {strike, ball}
}