<h1> KAKAO Tech Campus 과제 : ⚾️ Javascript Baseball </h1>

<h3>✓ 구현된 기능들</h3>

1. 기본적인 페이지 뼈대 구현

2. 스크립트 모듈화

  - 세 자리수 타겟 넘버 생성

  - 사용자 입력 처리

  - 사용자 입력의 결과 값 생성

  - 결과 값을 화면에 출력

  - 게임 재 시작 문구 출력

  - 게임 재 시작 버튼 생성

  - 게임을 완전히 종료하는 버튼 생성



<br>

------

<h3>☑️ 과제 제출 전 체크 리스트</h3>

- 터미널에서 `node --version` 을 실행하여 Node.js 버전이 18.17.1 이상 인지 확인한다.
- 아래 명령을 입력하여 패키지를 설치한 후 실행하는데 문제가 없어야 한다.

  ```
  npm install
  npm run start
  ``` 

<h3>⭐️ 과제 진행 요구 사항</h3>

- 미션은 숫자 야구 저장소를 fork 하고 clone 하는 것으로 시작한다.

- 기능을 구현하기 전 `README.md` 에 구현할 기능 목록을 정리해 추가한다.

- Git의 커밋 단위는 앞 단계에서 `README.md` 에 정리한 기능 목록 단위로 추가한다.

- <a href = "https://gist.github.com/stephenparish/9941e89d80e2bc58a153">AngularJS Git Commit Message Convention</a> 을 참고해 커밋 메세지를 작성한다.

- 자세한 과제 진행 방법은 미니과제 진행 가이드 문서를 참고한다.

<br>

------


<h3>⚾️ 기능 요구 사항</h3>

- 기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.
- 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱이라는 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.

  ```
  e.g. 상대방의 수가 425 일 때,
  
  - 123 을 제시한 경우 : 1 스트라이크
  - 456 을 제시한 경우 : 1 스트라이크 1볼
  - 789 를 제시한 경우 : 낫싱
  ```

- 위 숫자 야구 게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
- 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료되고, 재시작 버튼이 표시된다.
- 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다.
- 사용자가 잘못된 값을 입력할 경우 `alert()` 로 에러 메세지를 출력 후 그 부분부터 입력을 다시 받는다.

<br>

------


<h3>🖥️ 프로그래밍 요구 사항 1</h3>

- Node.js 18.17.1 버전에서 실행 가능해야 한다.

- package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.

- 프로그램 종료 시 process.exit() 를 호출하지 않는다.

- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.

<h3>🖥️ 프로그래밍 요구 사항 2 </h3>

- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
  - 기본적으로 Airbnb JavaScript Style Guide를 원칙으로 한다.

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.

- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.

- import 문을 사용하여 스크립트를 모듈화하여 가져올 수 있도록 한다.
