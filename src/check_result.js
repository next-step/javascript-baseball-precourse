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

export default function cknum(in_a,correct_b){

    //낫싱, 볼, 스트라이크

    const in_a_three= Math.floor(in_a / 100)
    const in_a_two= Math.floor((in_a - in_a_three*100)/10)
    const in_a_one= in_a  - in_a_three*100 - in_a_two*10

    const in_list= [in_a_three, in_a_two, in_a_one]



    const correct_b_three= Math.floor(correct_b /100)
    const correct_b_two= Math.floor((correct_b - correct_b_three*100)/10)
    const correct_b_one= correct_b  - correct_b_three*100 - correct_b_two*10

    const correct_list= [correct_b_three, correct_b_two, correct_b_one]

    
    let score = {ball: 0, strike: 0};

    for(let i=0;i<3;i++)
    {
        let j=0;
        let ck=same(in_list[i],correct_list[j],i,j,score)

        while(j<3 && ck === 0)
        {
            j++
            ck=same(in_list[i],correct_list[j],i,j,score)

        }
        

    }

    return score

}

