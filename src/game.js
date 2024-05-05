export function checkIsValidate(userNumbers) {
  const isSolo = userNumbers.every((num, index) => userNumbers.indexOf(num) === index);
  return userNumbers.length === 3 && isSolo;
}
