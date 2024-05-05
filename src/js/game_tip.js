let _tips = [];

const setRequire = (unit) => {
  const unitSpan = _tips.filter((tip) => tip.textContent === unit)[0];
  unitSpan.className = "require";
};

const setExclude = (unit) => {
  const unitSpan = _tips.filter((tip) => tip.textContent === unit)[0];
  unitSpan.className = "exclude";
};

const resetAllTips = () => {
  for (let tip of _tips) {
    tip.className = "";
  }
};

const init_game_tip = (game_tip, usage_numbers) => {
  for (const num of usage_numbers) {
    const span = document.createElement("span");
    span.textContent = num;
    game_tip.appendChild(span);
    _tips.push(span);
  }
  resetAllTips();
};

export { init_game_tip, setRequire, setExclude, resetAllTips };
