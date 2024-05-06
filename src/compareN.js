function strikeball (user,useridx, computerN,strike,ball) {
    computerN.forEach((computer,idx) => {
        if(user === computer && useridx === idx) //===를 사용해 비교
            strike[0]++;
        
        else if (user === computer)
            ball[0]++;
    })
}



function comparenum (userN, computerN) {
    let strike = [0];
    let ball =[0];

    user.forEach((user,useridx) => {
        strikeball(user,useridx,comparenum,strike,ball)
    })
    return {strike, ball};
}

