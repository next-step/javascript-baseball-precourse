export const result = (strike, ball, footer) => {
  const resultFirst = footer.querySelector('.result__first');
  const resultSecond = footer.querySelector('.result__second');
  const resultSecondP = resultSecond.querySelector('p');
  if (strike === 3) {
    resultSecond.style.display = 'none';
    resultFirst.style.display = 'block';
    return;
  }
  resultFirst.style.display = 'none';
  resultSecond.style.display = 'block';
  if (strike === 0 && ball === 0) resultSecondP.textContent = '낫싱';
  else if (strike >= 1 && ball >= 1)resultSecondP.textContent = `${strike} 스트라이크 ${ball} 볼`
  else if (strike >= 0 && ball === 0) resultSecondP.textContent = `${strike} 스트라이크`;
  else if (strike === 0 && ball >= 0) resultSecondP.textContent = `${ball} 볼`;
}