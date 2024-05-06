import compar from './compar'
import strMake from './strmake'
import result from './result.js'

const userData ={
    ballcount : 0 ,
    strikecount : 0
}


export default function comparison (numbers, user){
    //사용자에게 받은 문자열 쪼개기
    let userList = user.split('')
    //userData 리셋
    userData.ballcount = 0;
    userData.strikecount = 0;
    if(userList[0]==numbers[0] && userList[1]==numbers[1] && userList[2]==numbers[2]){
        result('🎉정답을 맞추셨습니다🎉')
    }else(
        indexNum(numbers, user)
    )
}

function indexNum (numbers, user) {
    for(let i = 0; i<3; i+=1){
        for(let j = 0; j<3; j +=1){
            //값 비교 함수
            compar(userData, numbers,i,user,j)
        }
    }
    //결과 문구 생성 함수
    let str = strMake(userData)
    //화면에 문구 보이게 하는 함수
    result(str)
}

