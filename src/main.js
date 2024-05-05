import {
  createRandomNumbers,
  getPlayerNumbers,
  compareNumbers,
} from "./modules/handleNumbers";

const computerNumbers = createRandomNumbers();

function goGame(event) {
  event.preventDefault(); //컴퓨터 숫자 재생성 막기 위한 새로고침 방지
  const playerNumbers = getPlayerNumbers();
  if (playerNumbers === null) return;
  const gameResult = compareNumbers(playerNumbers, computerNumbers);
}
