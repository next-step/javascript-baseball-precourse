import answer from "./randomnums";
import userArray from "./checkinput";

//strike, ball 확인 및 출력

function checkStrikeandBall(userArray) {
	let strikes =0;
	let balls =0;

	for(let i=0;i<3;i++) {
		if(userArray[i] === answer[i]) {
		strikes++;
		}
		else if(answer.includes(userArray[i])) {
		balls++;
		}
	}
	
	let output = document.getElementById("output");
	if(strikes === 3) {
		out.innerHTML = "정답을 맞추셨습니다~!";
		GameOver = true;
		}
	else if(strikes === 0 && balls === 0) {
	out.innerHTML = "낫싱"; }
	else{
	out.innerHTML = `${strikes} 스트라이크, ${balls} 볼`;
	}
}


