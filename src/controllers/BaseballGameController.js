import * as CommonComponents from '../views/common/index.js';
import { HEADING, DESCRIPTION, PLACEHOLDER } from '../utils/constants/baseball.js';
import { BUTTON } from '../utils/constants/button.js';

export default class BaseballGameController {
  #inputValue;

  constructor({ $target }) {
    this.#gameStart({ $target });
  }

  #gameStart({ $target }) {
    this.#initializeHeader({ $target });
  }

  #initializeHeader({ $target }) {
    this.$Header = new CommonComponents.Header({ $target, title: HEADING.PAGE });
    this.#initializeDescription({ $target });
  }

  #initializeDescription({ $target }) {
    this.$Description = new CommonComponents.Description({
      $target,
      description: DESCRIPTION.GAME,
    });
    this.#initializeInput({ $target });
  }

  #initializeInput({ $target }) {
    this.$Input = new CommonComponents.Input({
      $target,
      type: 'text',
      placeholder: PLACEHOLDER.INPUT,
      onChange: value => {
        this.#inputValue = value;
      },
    });
    this.#initializeButton({ $target });
  }

  #initializeButton({ $target }) {
    this.$Button = new CommonComponents.Button({
      $target,
      type: 'button',
      text: BUTTON.ENTER,
    });
  }
}
