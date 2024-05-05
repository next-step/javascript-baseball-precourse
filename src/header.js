const h2El = document.createElement('h2')
const spanEl = document.createElement('span')
const h5El = document.createElement('h5')

//야구 이모티콘 설정
spanEl.innerHTML = '&#x26BE;'
spanEl.style.display = "inline";

//숫자 게임 시작하기 문구 설정
const game = document.createTextNode('숫자 게임 시작하기');

//예시 문구
const exText = '1~9까지의 수를 중복없이 3개 입력해주세요<br>올바른 예) 139<br>틀린 예) 122'
h5El.innerHTML = exText;

//h2요소에 span 요소 추가
h2El.appendChild(spanEl)

//h2요소에 문구 추가
h2El.appendChild(game)

//문서의 body에 h2 요소 추가
document.body.appendChild(h2El)
document.body.appendChild(h5El)
