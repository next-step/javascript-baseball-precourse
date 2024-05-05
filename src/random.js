export default (numbers) => {
    //1~9까지 난수 생성 
    let randomNumber = Math.floor(Math.random() * 9) + 1
    numbers.push(randomNumber)
    while(numbers.length < 3){
        let randomNumber = Math.floor(Math.random() * 9) + 1
        //안겹치면 배열에 추가
        if(!numbers.includes(randomNumber)){
            numbers.push(randomNumber)
        }
    }
}