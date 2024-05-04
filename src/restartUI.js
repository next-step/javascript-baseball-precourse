import generateRandomNumber from "./numberGenerator.js";

let restartComment;
let restartButton;

// 정답 후 재시작 코멘트, 재시작 버튼 생성
export function restartUI(footer, result) {
  restartComment = document.createElement("p");
  restartButton = document.createElement("button");

  restartComment.setAttribute("class", "restart");
  restartComment.innerHTML = "게임을 새로 시작하시겠습니까?";
  restartButton.setAttribute("class", "restart");
  restartButton.innerHTML = "게임 재시작";

  footer.appendChild(restartComment);
  footer.appendChild(restartButton);

  // 재시작 버튼 클릭 이벤트 리스너 추가
  restartButton.addEventListener("click", function () {
    // 재시작 코멘트 및 버튼 제거
    footer.removeChild(restartComment);
    footer.removeChild(restartButton);
    footer.removeChild(result);
  });
}
