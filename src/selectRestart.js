import { restartBaseball } from "./playBaseball";
import { resetScreen } from "./resetScreen";

/** 재시작 또는 종료 여부를 받는다.
 * 재시작: 컴퓨터 수 다시 뽑기/ 게임 종료: 새로고침
 */
export const selectRestart = () => {
  const isEnd = confirm(
    "숫자 야구 게임을 재시작하시겠습니까? (취소: 완전히 종료, 확인: 재시작)",
  );
  if (isEnd) {
    alert("게임을 재시작합니다.");
    resetScreen();
    restartBaseball();
  } else {
    alert("게임이 종료되었습니다.");
    window.location.reload();
  }
};
