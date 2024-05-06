//볼, 스트라이크 개수 세는 함수
export default (userData, num, index1, user, index2) => {
    //값과 인덱스가 동일하면 스트라이크, 값만 동일하면 볼
    if(num[index1] == user[index2] && index1 == index2){
        userData.strikecount += 1
    }else if(num[index1] == user[index2]){
        userData.ballcount+=1
    }
}