export default function checkNumber(userInput) {
  if (!/^\d{3}$/.test(userInput) || new Set(userInput).size !== 3) {
    alert("3자리 수를 중복 없이 입력해주세요");
    return;
  }
}
