import checkStrikeandBall from "./compareN";
export default userArray;

//input 확인
function checkN() {
    
    if(GameOver) {
    alert("게임이 종료되었습니다. 다시시작해주세요.");
    return;
    }
    
    let UserInput = document.getElementById("UserInput").value;
    
    if (!Validput(UserInput)) {
    alert("올바른 3자리 숫자를 입력해주세요");
    return;
    }
    let userArray = UserInput.split("").map(Number);

    

    checkStrikeandBall(userArray);
    
}