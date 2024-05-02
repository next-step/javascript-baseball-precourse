import { HEADING } from '../utils/constants/baseball.js';
import { BUTTON } from '../utils/constants/button.js';
import { MESSAGE } from '../utils/constants/message.js';

export default class Result {
  $container;

  $hintContainer;

  $winResult;

  constructor({ $target }) {
    this.$container = this.#createResultContainer();
    this.$hintContainer = this.#createHintContainer();
    this.$winResult = this.#createWinResult();
    this.#renderResult({ $target });
  }

  renderHint(hint) {
    this.#createHint(hint);
    this.#scrollHintContainer();
  }

  renderWin() {
    this.#clearHintContainer();
    this.#showWinResult();
  }

  #createResultContainer() {
    const $div = document.createElement('div');
    $div.id = 'result';
    const $h2 = document.createElement('h2');
    $h2.textContent = HEADING.RESULT;
    $div.appendChild($h2);
    return $div;
  }

  #createHintContainer() {
    const $ul = document.createElement('ul');
    $ul.className = 'hint-container';
    return $ul;
  }

  #createHint(hint) {
    const $li = document.createElement('li');
    $li.textContent = hint.join(' ');
    this.$hintContainer.appendChild($li);
  }

  #createWinResult() {
    const $div = document.createElement('div');
    const $strong = this.#createStrongElement(MESSAGE.WIN);
    const $p = this.#createParagraphElement(MESSAGE.RETRY);
    const $btn = this.#createRetryButton();
    $div.append($strong, $p, $btn);
    return $div;
  }

  #createStrongElement(text) {
    const $strong = document.createElement('strong');
    $strong.textContent = text;
    return $strong;
  }

  #createParagraphElement(text) {
    const $p = document.createElement('p');
    $p.textContent = text;
    return $p;
  }

  #createRetryButton() {
    const $btn = document.createElement('button');
    $btn.textContent = BUTTON.RETRY;
    $btn.addEventListener('click', () => this.#handleRetryButtonClick());
    return $btn;
  }

  #renderResult({ $target }) {
    this.$container.append(this.$hintContainer);
    $target.appendChild(this.$container);
  }

  #clearHintContainer() {
    this.$hintContainer.innerHTML = '';
  }

  #showWinResult() {
    this.$hintContainer.appendChild(this.$winResult);
  }

  #scrollHintContainer() {
    this.$hintContainer.scrollTop = this.$hintContainer.scrollHeight;
  }

  #handleRetryButtonClick() {
    window.location.reload();
  }
}
