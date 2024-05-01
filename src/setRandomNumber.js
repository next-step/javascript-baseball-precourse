export const setRandomNumber = () => {
  const num = new Set();
  while (num.size < 3) {
    const cur_num = Math.floor(Math.random() * 10);
    if (!num.has(cur_num)) {
      num.add(cur_num);
    }
  }

  return [...num];
};
