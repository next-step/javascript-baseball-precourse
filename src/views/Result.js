import { HEADING } from '../utils/constants/baseball.js';

export default class Result {
  $container;

  $hintContainer;

  $winResult;

  constructor({ $target }) {
    this.$container = this.#createResultContainer();
    this.$hintContainer = this.#createHintContainer();
    this.#renderResult({ $target });
  }

  #createResultContainer() {
    const $div = document.createElement('div');
    $div.id = 'result';
    const $h2 = document.createElement('h2');
    $h2.textContent = HEADING.RESULT;
    $div.appendChild($h2)
    return $div;
  }

  #createHintContainer() {
    const $ul = document.createElement('ul');
    $ul.className = 'hint-container';
    return $ul;
  }

  #renderResult({ $target }) {
    this.$container.append(this.$hintContainer);
    $target.appendChild(this.$container);
  }
}
