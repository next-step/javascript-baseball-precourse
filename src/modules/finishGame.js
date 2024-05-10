function finishGame() {
    const runBoard = document.querySelector(".runGame");
    const finishBoard = document.querySelector(".finishGame");

    // window.close();
    runBoard.style.display = "none";
    finishBoard.style.display = "block";
}

export { finishGame };