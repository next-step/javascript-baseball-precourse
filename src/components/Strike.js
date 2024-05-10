let strikes = 0;
export function Strike(inputValue,value){
    
    for(let i = 0; i<3;i++){
        if(inputValue[i] == value[i])
            strikes++;
    }
    
}


export {strikes}