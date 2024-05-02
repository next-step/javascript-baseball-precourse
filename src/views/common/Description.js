export default class Description {
  $paragraph;

  constructor({ $target, description }) {
    this.$paragraph = this.#createParagraphElement(description);
    this.#renderDescription({ $target });
  }

  #createParagraphElement(description) {
    const $p = document.createElement('p');
    $p.setAttribute('class', 'description');
    $p.textContent = description;
    return $p;
  }

  #renderDescription({ $target }) {
    $target.appendChild(this.$paragraph);
  }
}
