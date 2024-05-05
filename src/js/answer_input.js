let _answer = [];
let _answer_inputs;
let _onEndInput;

const validateAnswerUnit = (unit) => {
  const regexp = /^[1-9]$/;
  return regexp.test(unit);
};

const fillAnswerUnit = (unit) => {
  _answer.push(parseInt(unit));
  if (_answer.length < 3) {
    _answer_inputs[_answer.length].focus();
  } else {
    _onEndInput(_answer);
  }
};

const handleAnswerUnitKeydown = (e) => {
  if (e.key === "Backspace") {
    _answer.pop();
    _answer_inputs[_answer.length].focus();
  }
};

const handleAnswerUnitInput = (e) => {
  const value = e.target.value;
  if (value === "") {
    return;
  } else if (!validateAnswerUnit(value)) {
    alert("1부터 9까지의 숫자만 입력할 수 있습니다.");
    e.target.value = "";
  } else if (_answer.includes(value)) {
    alert("중복된 숫자는 입력할 수 없습니다.");
    e.target.value = "";
  } else {
    fillAnswerUnit(value);
  }
};

const handleAnswerReset = () => {
  _answer = [];
  for (const input of _answer_inputs) {
    input.value = "";
  }
  _answer_inputs[0].focus();
};

const init_answer_input = (answer_input, onEndInput) => {
  _answer_inputs = answer_input.children;

  for (const input of _answer_inputs) {
    input.addEventListener("input", handleAnswerUnitInput);
    input.addEventListener("keydown", handleAnswerUnitKeydown);
    input.addEventListener("click", handleAnswerReset);
  }

  _onEndInput = onEndInput;
};

const start_input = () => {
  handleAnswerReset();
};

export { init_answer_input, start_input };
