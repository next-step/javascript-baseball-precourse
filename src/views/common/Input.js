export default class Input {
  $input;

  onChange;

  onKeyup;

  constructor({ $target, type, placeholder, onChange, onKeyup }) {
    this.$input = this.#createInputElement(type, placeholder);
    this.#renderInput({ $target });
    this.onChange = onChange;
    this.onKeyup = onKeyup;
    this.$input.addEventListener('input', this.#handleInput.bind(this));
    this.$input.addEventListener('keyup', this.#handleKeyUp.bind(this));
  }

  clearInput() {
    this.$input.value = '';
  }

  #createInputElement(type, placeholder) {
    const $input = document.createElement('input');
    $input.type = type;
    $input.placeholder = placeholder;
    return $input;
  }

  #renderInput({ $target }) {
    $target.appendChild(this.$input);
  }

  #handleInput(e) {
    const { value } = e.target;
    if (this.onChange) this.onChange(value);
  }

  #handleKeyUp(e) {
    if (e.key === 'Enter') {
      this.clearInput();
      if (this.onKeyup) this.onKeyup();
    }
  }
}
