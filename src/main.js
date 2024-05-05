document.addEventListener("DOMContentLoaded", () => {

    let answer = []; // 정답 배열 초기화
    let numbers = []; // 1~9까지 숫자 배열 초기화
  
    // 1부터 9까지의 숫자를 배열에 추가
    for (let i = 1; i <= 9; i++) {
        numbers.push(i);
    }
  
    // 정답 배열에 1부터 9까지의 숫자 중에서 무작위로 선택된 3개의 숫자 선택
    for (let i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * numbers.length);
        answer.push(numbers[index]);
        numbers.splice(index, 1); // 선택된 숫자는 배열에서 제거
    }
    console.log(answer); // 정답 확인용 
  
    // 변수 선언
    const input = document.querySelector("#input"); // 인풋창
    const button = document.querySelector("#button"); // 제출 버튼
    const result = document.querySelector("#result"); // 결과
  
    // 숫자를 제대로 입력했는지 확인하고 결과를 출력하는 함수
    button.addEventListener("click", (e) => {
        e.preventDefault(); // 버튼의 기본 동작 방지
  
        let count = 0; // 정답 맞춘 숫자 개수 초기화
        let strike = 0; // 스트라이크 개수 초기화
        let ball = 0; // 볼 개수 초기화
        let inputValue = parseInt(input.value); // 인풋값을 숫자로 변환
        let strInputValue = inputValue.toString().split("").map(Number); // 인풋값을 문자열로 변환 후 배열로 분리
        let duplicatedInput = new Set(strInputValue); // 중복되는 숫자 확인을 위해 Set 객체 생성
  
        // 입력값과 정답 비교하여 스트라이크와 볼 개수 계산
        for (let i = 0; i < answer.length; i++) {
            let index = strInputValue.indexOf(answer[i]); // 입력값 배열에서 정답의 숫자 인덱스 찾기
            if (answer[i] == strInputValue[i]) { // 숫자와 위치가 모두 일치하는 경우
                count++; // 정답 맞춘 숫자 개수 증가
            }
  
            if (index > -1) { // 입력값 배열에서 정답의 숫자를 찾은 경우
                if (index == i) {
                    strike++; // 위치도 일치하는 경우 스트라이크 개수 증가
                } else {
                    ball++; // 위치는 다르지만 숫자는 일치하는 경우 볼 개수 증가
                }
            }
        }
  
        // 입력값이 제대로 되었는지 확인하고 결과를 출력
        if (isNaN(inputValue) || inputValue == "") { // 입력값이 숫자가 아닌 경우
            alert("숫자를 입력하세요");
        } else if (strInputValue.length !== 3) { // 입력값이 3자리 숫자가 아닌 경우
            alert("3자리 숫자를 입력하세요");
        } else if (duplicatedInput.size !== 3) { // 중복되는 숫자가 있는 경우
            alert("중복되지 않게 숫자를 입력하세요");
        } else if (count == 3) { // 정답을 맞춘 경우
          result.innerHTML = `<h3>🎉 정답을 맞추셨습니다. 🎉</h3>
          <p>게임을 새로 시작하시겠습니까?</p>`;
          
          // 재시작 버튼 생성 및 초기화
          const restartButton = document.createElement('button');
          restartButton.id = 'game-restart-button';
          restartButton.textContent = '재시작';
          result.appendChild(restartButton);
  
          // 재시작 버튼 클릭 시 초기화
          restartButton.addEventListener('click', () => {
              input.value = ""; // 인풋창 초기화
              result.innerHTML = ""; // 결과창 초기화
          
              answer = []; // 정답 배열 초기화
              for (let i = 1; i <= 9; i++) {
                  numbers.push(i);
              }
              for (let i = 0; i < 3; i++) {
                  let index = Math.floor(Math.random() * numbers.length);
                  answer.push(numbers[index]);
                  numbers.splice(index, 1);
              }
              console.log(answer); // 정답 확인용
          });
      } else if (ball === 0 && strike === 0) { // 낫싱인 경우 (아웃인 경우)
          result.append(inputValue + ' : ' + "낫싱", document.createElement('br'));
      } else { // 스트라이크 또는 볼이 있는 경우
          result.append(inputValue + ' : ' + strike + " 스트라이크 " + ball + " 볼 ", document.createElement('br'));      
      }
    });
  });