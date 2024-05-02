# javascript-baseball-precourse

### 🎏 플로우차트

1. 컴퓨터가 랜덤으로 3자리 수를 생성한다.
2. 클라이언트로부터 3자리 수를 입력 받는다.
   - 잘못된 값을 입력한 경우 alert 창으로 에러 메세지를 출력하고 그 부분부터 입력을 다시 받는다.
3. 숫자 야구 게임의 정답 여부를 반환한다.
   - 오답: 힌트를 보여준다. 다시 클라이언트로부터 3자리 수를 입력 받는다.
   - 정답: 게임이 종료되고 재시작 버튼이 표시된다.
4. 게임 재시작 버튼 클릭 시 클라이언트로부터 재시작 여부를 입력 받는다.
   - 다시 시작: 처음부터 시작한다.
   - 종료하기: 숫자 야구 게임을 완전히 종료한다.

### ✨ 주요 기능

> #### controlUserInput
>
> : 클라이언트의 입력을 제한한다.
>
> - limitInputLength: 입력 가능한 최대 글자수 3으로 설정
> - preventRefresh: 엔터 입력시 새로고침 방지
> - disbleInput
>   - 게임 중 정답 시 추가 입력 막기
>   - 게임 재시작 시 입력 다시 허용
> - resetInput: 입력창 초기화

> #### clickEventListener
>
> - clickNumberConfirm: 확인 버튼 클릭 시 playBaseball 실행
> - clickRestart: 재시작 버튼 클릭 시 재시작 selectRestart 실행

> #### getComputerNumber
>
> : 랜덤으로 중복이 없는 3자리 수의 컴퓨터 수를 뽑아 반환

> #### getUserNumber
>
> : 클라이언트로부터 입력 받은 수 중에 유효성 검사를 성공한 클라이언트 수를 반환

> #### playBaseball
>
> ##### [초기 세팅]: 초기 컴퓨터 수 저장
>
> ##### [게임 진행]: playBaseball
>
> - getStrikeBall: 컴퓨터 수와 클라이언트 수를 비교해 strike, ball 반환
> - 야구 게임 진행 결과 보여주기
> - 입력창 초기화
>
> ##### [게임 재시작]: restartBaseball
>
> - 컴퓨터 수 업데이트
> - 클라이언트 입력 허용하기

> #### setResult
>
> - strike, ball의 수로 숫자 야구 게임 결과 메세지 세팅
>   - 성공 시
>     - 클라이언트의 추가 입력 막기
>     - 재시작 버튼 보여주기
>   - 숫자 야구 게임 메세지 화면에 보여주기

> #### controlDisplay
>
> - displayResultMessage: 야구 게임 결과 메세지의 값과 display 속성을 설정
> - displayRestartButton: 재시작 버튼의 display 속성 설정

> #### selectRestart
>
> - confirm을 통해 재시작또는 완전히 종료 여부 선택
> - 확인(재시작)
>   - 결과 메세지, 재시작 버튼 화면에 없애기
>   - restartBaseball 실행하기
> - 취소(완전히 종료)
>   - 윈도우 새로고침
