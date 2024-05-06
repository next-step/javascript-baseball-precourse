//랜덤숫자 
//let list;
//let answer;
let result="";

function generatenum(){
    let numbers = [1,2,3,4,5,6,7,8,9];

    for(let i=0;i<3;i++){
        const idx = Math.floor(Math.random()*numbers.length);
        result += numbers[idx];
        numbers.splice(idx,1);
    }
    return result;
}