export function threeRandom () {
    const randomNum = new Set()

    while (randomNum.size < 3) {
        const randomOne = Math.floor(Math.random() * 9) +1
        randomNum.add(randomOne)
    }

    return Array.from(randomNum)
}