# javascript-baseball-precourse
## 기능 요구사항
기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.
+ 같은 수가 같은 자리에 있으면 스트라이크
+ 같은 수가 다른 자리에 있으면 볼
+ 같은 수가 전혀 없으면 낫싱이라는 힌트를 얻음
+ 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리
<br>
+ 이와 같은 과정을 반복해 3자리 수를 모두 맞히면 게임이 종료되고 재시작 버튼 표시
+ 게임을 종료한 후 '게임 재시작' 할 수 있음
+ 사용자가 잘못된 값을 입력할 경우 alert()로 에러 메세지를 출력한 후 그 부분부터 입력을 다시 받음
<br><br>
## 기능 목록
+ index.html에 내용(틀) 작성
+ 컴퓨터가 랜덤한 숫자 3개 뽑는 기능 (난수 생성)
+ 사용자 입력 받기 (숫자의 개수가 맞지 않거나, 중복된 숫자가 있으면 다시 입력 받기 - alert())
+ 사용자가 입력한 숫자가 컴퓨터의 숫자와 일치하는지 판별
+ 결과 출력
+ 게임 재시작 버튼을 누르면 다시 시작 (루프)
