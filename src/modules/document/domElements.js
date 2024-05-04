export default function getdomElements() {
  const userForm = document.querySelector("#user-form");
  const userFormInput = userForm.querySelector("input");
  const resultBox = document.querySelector("#result-Box");

  const domElements = Object.freeze({
    userForm,
    userFormInput,
    resultBox,
  });

  return domElements;
}
