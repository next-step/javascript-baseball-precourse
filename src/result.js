export default (str) => {
    //정답을 맞추면 클래스 .restart요소들이 보여야됨
    if(str=='🎉정답을 맞추셨습니다🎉'){
        let restartEls = document.querySelectorAll('.restart')
        restartEls.forEach(restartEl => {
            restartEl.style.display = 'block'
        })   
    }
    //전달 받은 문구가 보이게 함
    let resultTextEl = document.querySelector('#resultText')
    resultTextEl.style.visibility = "visible"
    resultTextEl.innerText = str
}