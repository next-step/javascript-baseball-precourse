import * as CommonComponents from '../views/common/index.js';
import { HEADING, DESCRIPTION } from '../utils/constants/baseball';

export default class BaseballGameController {
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
  }
}
