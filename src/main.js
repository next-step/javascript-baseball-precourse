var rannum = [0, 0, 0]; // 컴퓨터 번호
var mynum = [0, 0, 0]; //내 번호
var mynumber;
var realmynumber;
var numberchecking = true;
var success = 0;
let strike = 0;
let ball = 0;

let number = document.getElementById("myinput"); // 아이디를 선택 -> .붙이지 않음
let btn = document.querySelector(".check"); //클래스를 선택 -> .붙여야함
// 버튼 요소를 선택합니다.
var replayButton = document.querySelector(".replay");

//랜덤 숫자 생성
function ranmakenum() {
  for (var i = 0; i < 3; i++) {
    rannum[i] = Math.floor(Math.random() * 10);
    if (i > 0) {
      for (var j = 0; j < i; j++) {
        if (rannum[i] == rannum[j] || rannum[i] == 0) {
          i--;
        }
      }
    }
  }
}

//입력받은 숫자를 배열에 저장하는 함수
function arraynumber(number) {
  for (var i = 2; i >= 0; i--) {
    if (number > 0) mynum[i] = number % 10;
    number = Math.floor(number / 10);
  }
}

//숫자 체크 해주는 함수 입력 잘못되었으면 alert
function checknumber(number) {
  if (!isNaN(number)) {
    // 입력된 값이 숫자일 경우
    if (number.length !== 3) {
      alert("3자리 숫자를 입력해주세요");
      numberchecking = !numberchecking;
    }
  } else {
    // 입력된 값이 숫자가 아닐 경우
    alert("숫자를 입력해주세요");
    numberchecking = !numberchecking;
  }
}

//내 숫자와 컴퓨터 숫자의 비교 -> indent 2번만 해서 구현하는걸 실패
function comparenum(rannum, mynum) {
  for (var i = 0; i < 3; i++) {
    if (mynum[i] === rannum[i]) {
      strike++;
    } else {
      for (var j = 0; j < 3; j++) {
        if (mynum[i] === rannum[j]) {
          ball++;
          break;
        }
      }
    }
  }
}

//스트라이크 출력
function strikeout(num) {
  if (num > 0 && num < 3) {
    strikenumber.textContent = `${num} 스트라이크`;
  } else if (num == 3) {
    strikenumber.textContent = "정답입니다!";
  }
}
//볼 출력
function ballout(num) {
  if (num > 0) {
    ballnumber.textContent = `${num} 볼`;
  }
}

//낫싱 출력
function notting(anum, bnum) {
  const result = document.querySelector(".result");
  if (anum === 0 && bnum === 0) {
    strikenumber.textContent =
      "낫싱! 모든 숫자가 틀렸습니다, 다시 시도해 주세요";
  }
}

//볼, 스트라이크의 갯수 알려주는 html 요소
const strikenumber = document.querySelector(".strike");
const ballnumber = document.querySelector(".ball");

//이전 출력값들 지우기
function deleteball() {
  ballnumber.textContent = "";
}
function deletestrike() {
  strikenumber.textContent = "";
}

//게임 재시작 관련
// 클릭 이벤트에 대한 핸들러를 설정합니다.
replayButton.addEventListener("click", function () {
  ranmakenum(); // ranmakenum 함수 호출
  console.log(rannum[0], rannum[1], rannum[2]);
  replayButton.classList.remove("show");
  strikenumber.textContent = "";
});

//버튼 보여주고 숨기기
function showbutton(num) {
  if (num === 3) {
    replayButton.classList.add("show");
  }
}
