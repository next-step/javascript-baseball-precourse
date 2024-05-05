import compar from './compar'
import strMake from './strmake'
import result from './result'

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
            compar(userData, numbers,i,user,j)
        }
    }
    let str = strMake(userData)
    result(str)
}

// function result (str){
//     if(str=='🎉정답을 맞추셨습니다🎉'){
//         let restartEls = document.querySelectorAll('.restart')
//         restartEls.forEach(restartEl => {
//             restartEl.style.display = 'block'
//         })   
//     }
//     let resultTextEl = document.querySelector('#resultText')
//     resultTextEl.style.visibility = "visible"
//     resultTextEl.innerText = str
// }
