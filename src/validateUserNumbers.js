export const validateUserNumbers = (value) => {
  // 세 자리의 중복되지 않는 숫자(1~9 사이) 정규식
  const regex = /^(?!.*(.).*\1)[1-9]{3}$/;

  return regex.test(value);
};
