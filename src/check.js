//유효성 검사
export function checkAnswer(answer) {
    const userInput = document.getElementById('userInput').value;
        if (userInput.length !== 3) {
            alert('3자리 수를 입력하세요.');
            return;
        }
        answer = userInput.split('').map(Number);
        if (hasDuplicates(answer)) {
            alert('중복된 숫자를 포함할 수 없습니다.');
            return;
        }
        return answer;
    }
    
    //중복 제거
    function hasDuplicates(array) {
        return (new Set(array)).size !== array.length;
    }
    