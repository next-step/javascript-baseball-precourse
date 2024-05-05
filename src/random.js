export default function randomNumberCreation(){    
    let randomNumber = Math.floor(Math.random() * 9) + 1
    numbers.push(randomNumber)
    while(numbers.length < 3){
        let randomNumber = Math.floor(Math.random() * 9) + 1
        if(!numbers.includes(randomNumber)){
            numbers.push(randomNumber)
        }
    }
}