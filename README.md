# ⚾️ 숫자 야구 게임

카카오 테크 캠퍼스 2기 [Step1] 1회차 미니과제 - **숫자 야구(FE, JavaScript)**를 위한 레포입니다.

## **기능 목록**

### 게임 시작하기(초기 화면)

- 게임 플레이어는 ‘**시작하기**’ 버튼을 클릭하여 숫자 야구 게임을 시작할 수 있다.

### 숫자 맞추기(문제 출제 화면)

- 게임 플레이어가 ‘**시작하기**’ 버튼을 클릭하여 게임을 시작하면, 게임 규칙이 화면에 표시되고, 컴퓨터는 정답 숫자를 생성한다.
- 게임 플레이어가 숫자를 입력할 수 있는 입력창과 확인 버튼도 함께 화면에 표시된다.
- 게임 플레이어가 컴퓨터가 생각하고 있는 3개의 숫자를 입력하고, 확인 버튼을 눌러 입력한 숫자의 결과를 확인할 수 있다.

### 입력값 유효성 검사(문제 출제 화면)

- 숫자 맞추기에서 사용자가 입력한 3개의 숫자에 대해 유효성 검사를 진행한다.
- 1부터 9까지의 숫자가 아닌 값이 입력되면 alert 창에 ’**1~9 사이의 숫자를 입력해주세요**’ 라는 경고 메시지가 뜨고, 그 부분부터 다시 입력을 받는다.

### 게임 결과 판정(결과 화면)

**1) 정답인 경우**

- ‘🎉**정답을 맞추셨습니다**🎉’ 문구가 화면에 출력된다.
- ‘**게임을 새로 시작하시겠습니까?**’ 문구와 함께 ‘**게임 재시작**’ 버튼이 화면에 표시된다.
- ‘**종료하기**’ 버튼도 화면에 함께 표시된다.

**2) 오답인 경우**

- 게임 플레이어가 입력한 숫자의 결과를 출력하고, 입력창을 비워 다시 입력을 받을 수 있도록 한다.

### 게임 재시작(결과 화면)

- 게임 플레이어가 ‘**게임 재시작**’ 버튼을 클릭하면 숫자 맞추기(문제 출제 화면)로 돌아간다.

### 게임 종료(결과 화면)

- 게임 플레이어가 ‘종료하기’ 버튼을 클릭하면 게임이 완전히 종료되고, 게임 시작하기(초기 화면)로 돌아간다.
