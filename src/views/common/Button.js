export default class Button {
  $btn;

  constructor({ $target, type, text, onClick }) {
    this.$btn = this.#createBtnElement(type, text);
    this.#renderBtn({ $target });
    this.$btn.addEventListener('click', onClick);
  }

  #createBtnElement(type, text) {
    const $btn = document.createElement('button');
    $btn.type = type;
    $btn.textContent = text;
    return $btn;
  }

  #renderBtn({ $target }) {
    $target.appendChild(this.$btn);
  }
}
