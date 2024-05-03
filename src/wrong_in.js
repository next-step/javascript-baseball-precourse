export default function retry(inA)
{
    const inThree= Math.floor(inA / 100)
    const inTwo= Math.floor((inA - inThree*100)/10)
    const inOne= inA  - inThree*100 - inTwo*10

    if(isNaN(inA))
    {
        alert("⚠️ 숫자를 입력해주세요 !!")

        return 1
    }


    if( inThree>=10 || inThree===0 )
    {
        alert("⚠️ 3개의 숫자를 입력해주세요 !!")

        return 1
    }
    else if(inThree === inTwo || inThree === inOne || inTwo===inOne )
    {
        alert("⚠️ 중복되는 값이 있습니다. 다시 입력해주세요 !!");

        return 1
    }

    return 0
    
}