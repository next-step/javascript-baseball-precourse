import * as CommonComponents from '../views/common/index.js';
import { HEADING } from '../utils/constants/baseball';

export default class BaseballGameController {
  constructor({ $target }) {
    this.#gameStart({ $target });
  }

  #gameStart({ $target }) {
    this.#initializeHeader({ $target });
  }

  #initializeHeader({ $target }) {
    this.$Header = new CommonComponents.Header({ $target, title: HEADING.PAGE });
  }
}
