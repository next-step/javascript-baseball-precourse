# javascript-baseball-precourse# javascript-baseball-precourse

## 기능

- 초기화
  - 임의의 수 생성
  - input value 비우기
- 입력확인
  - 입력이 잘못되면 에러 띄우기
- {strike: int, ball: int} getResult(int input)
- 결과에 따라 페이지 변경
  - strike 3개: "정답입니다" + 재시작버튼
  - else: input + strike와 ball 개수 각각 띄우기

### 구조

- main.js
  - 입력받기
  - 메인 로직
- game.js
  - 랜덤값 생성 및 관리
  - getResult
- resultLayout.js
  - 결과 페이지 관리 및 변경

## 참고

- [Git conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
- [Code concentions](https://github.com/airbnb/javascript)
