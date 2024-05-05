export default (str) => {
    if(str=='🎉정답을 맞추셨습니다🎉'){
        let restartEls = document.querySelectorAll('.restart')
        restartEls.forEach(restartEl => {
            restartEl.style.display = 'block'
        })   
    }
    let resultTextEl = document.querySelector('#resultText')
    resultTextEl.style.visibility = "visible"
    resultTextEl.innerText = str
}