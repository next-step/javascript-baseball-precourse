function same(a,b,i,j,score){

    if(i===j && a===b)
    {
        score.strike++
        return 1
    }
    else if(i!==j && a===b)
    {
        score.ball++
        return 1
    }
    else
    {
        return 0
    }

}

export default function ckNum(inA,correctB){


    const inThree= Math.floor(inA / 100)
    const inTwo= Math.floor((inA - inThree*100)/10)
    const inOne= inA  - inThree*100 - inTwo*10

    const inList= [inThree, inTwo, inOne]



    const correctThree= Math.floor(correctB/100)
    const correctTwo= Math.floor((correctB - correctThree*100)/10)
    const correctOne= correctB  - correctThree*100 - correctTwo*10

    const correctList= [correctThree, correctTwo, correctOne]

    
    let score = {ball: 0, strike: 0};

    for(let i=0;i<3;i++)
    {
        let j=0;
        let ck=same(inList[i],correctList[j],i,j,score)

        while(j<3 && ck === 0)
        {
            j++
            ck=same(inList[i],correctList[j],i,j,score)

        }
    }

    return score

}

