export default (userData) => {
    if(userData.ballcount > 0 && userData.strikecount > 0){
        return `${userData.ballcount}볼 ${userData.strikecount}스트라이크`
    }else if(userData.ballcount > 0){
        return `${userData.ballcount}볼`
    }else if(userData.strikecount>0){
        return`${userData.strikecount}스트라이크`
    }else{
        return '낫싱'
    }
}