export const selectRestart = () => {
  const isEnd = confirm(
    "숫자 야구 게임을 종료하시겠습니까? (취소: 다시 시작, 확인: 완전히 종료)",
  );
  if (isEnd) {
    console.log("종료");
  } else {
    console.log("다시 시작");
  }
};
