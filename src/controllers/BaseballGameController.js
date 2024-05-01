import * as CommonComponents from '../views/common/index.js';
import * as Components from '../views/index.js';
import BaseballGame from '../models/BaseballGame.js';
import validateBaseballUserInput from '../utils/validators/validateBaseballUserInput.js';
import { DESCRIPTION, HEADING, HINT, PLACEHOLDER } from '../utils/constants/baseball.js';
import { BUTTON } from '../utils/constants/button.js';
import { MESSAGE } from '../utils/constants/message.js';

export default class BaseballGameController {
  #inputValue;

  #baseballGame;

  #hint;

  constructor({ $target }) {
    this.#baseballGame = new BaseballGame();
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
      onKeyup: () => this.#showResult(),
    });
    this.#initializeButton({ $target });
  }

  #showResult() {
    if (this.#validateInput()) {
      this.#processHintOrSuccess();
      return;
    }
    this.#handleValidationFailure();
  }

  #validateInput() {
    return validateBaseballUserInput(this.#inputValue);
  }

  #processHintOrSuccess() {
    this.#hint = this.#baseballGame.generateHint(this.#inputValue);
    if (this.#hint.join(' ') === HINT.WIN) {
      this.$Result.renderWin();
      return;
    }
    this.$Result.renderHint(this.#hint);
  }

  #handleValidationFailure() {
    alert(MESSAGE.VALIDATE_ERROR);
  }

  #initializeButton({ $target }) {
    this.$Button = new CommonComponents.Button({
      $target,
      type: 'button',
      text: BUTTON.ENTER,
      onClick: () => {
        this.$Input.clearInput();
        this.#showResult();
      },
    });
    this.#initializeResult({ $target });
  }

  #initializeResult({ $target }) {
    this.$Result = new Components.Result({ $target });
  }
}
