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
