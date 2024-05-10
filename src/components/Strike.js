let strikes = 0;
export function Strike(inputValue,value){
    strikes = 0;
    for(let i = 0; i<3;i++){
        if(inputValue[i] == value[i])
            strikes++;
    }
    
}


export {strikes}