export default function retry(in_a)
{
    const inThree= Math.floor(in_a / 100)
    const inTwo= Math.floor((in_a - inThree*100)/10)
    const inOne= in_a  - inThree*100 - inTwo*10

    if( inThree>=10 || inThree===0 )
    {
        alert("3개의 숫자를 입력해주세요 !!")

        return 1
    }
    else if(inThree === inTwo || inThree === inOne || inTwo===inOne )
    {
        alert("중복되는 값이 있습니다. 다시 입력해주세요 !!");

        return 1
    }

    return 0
    
}