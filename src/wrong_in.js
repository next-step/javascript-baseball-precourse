export default function retry(in_a)
{
    const in_a_three= Math.floor(in_a / 100)
    const in_a_two= Math.floor((in_a - in_a_three*100)/10)
    const in_a_one= in_a  - in_a_three*100 - in_a_two*10

    const in_list= [in_a_three, in_a_two, in_a_one]

    if( in_a_three>=10 || in_a_three===0 )
    {
        alert("3개의 숫자를 입력해주세요 !!")

        return 1
    }
    else if(in_a_three === in_a_two || in_a_three === in_a_one || in_a_two===in_a_one )
    {
        alert("중복되는 값이 있습니다. 다시 입력해주세요 !!");

        return 1
    }

    return 0
    
}