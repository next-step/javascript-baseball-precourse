let balls = 0;
export function Ball(inputValue,value){
    for(let i = 0; i<3;i++){
        if(value.includes(parseInt(inputValue[i])))
            balls++;
    }
    
}

export {balls}