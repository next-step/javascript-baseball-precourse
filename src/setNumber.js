export default function setNumber() {
    let a, b, c
    
    a = rand()
    do {
        b = rand()
    } while (b == a)
    do {
        c = rand()
    } while (c == a || c == b)

    return a * 100 + b * 10 + c
}

function rand() {
    return Math.floor(Math.random() * 9) + 1
}