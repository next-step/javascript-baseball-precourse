function restartGame() {
  window.location.reload();
}
function endGame() {
  const confirmEnd = confirm("게임을 종료하시겠습니까?");
  if (confirmEnd) {
    window.location.reload();
  } else {
    return;
  }
}

export { restartGame, endGame };
