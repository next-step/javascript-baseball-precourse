export default (userinputElValue) => {
    let userInputList = userinputElValue.split('')
    //사용자 입력 문자 길이가 3이 아닐 시 false
    if(userInputList.length !== 3){
        return false
    }
    //사용자가 1~9가 아닌 다른 문자를 입력시 false
    for(let i = 0; i< 3; i+=1){
        if(!/[1-9]/.test(userInputList[i])){
            return false
        }
    }
    
    let list = []
    list.push(userInputList[0])
    for(let i = 1 ; i<3 ; i+=1){
        if(list.includes(userInputList[i])){
            return false
        }else{
            list.push(userInputList[i])
        }
    }
    return true
}