export function createElementWithText(tag, text) {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}

export function appendChildren({ parent, childrens }) {
  childrens.forEach((child) => parent.appendChild(child));
}
