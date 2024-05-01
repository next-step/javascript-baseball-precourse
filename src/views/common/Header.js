export default class Header {
  $header;

  $heading;

  constructor({ $target, title }) {
    this.$header = this.#createHeaderElement();
    this.$heading = this.#createHeadingElement(title);
    this.#renderHeader({ $target });
  }

  #createHeaderElement() {
    const $header = document.createElement('header');
    $header.setAttribute('id', 'header');
    return $header;
  }

  #createHeadingElement(title) {
    const $h1 = document.createElement('h1');
    $h1.textContent = title;
    return $h1;
  }

  #renderHeader({ $target }) {
    this.$header.appendChild(this.$heading);
    $target.appendChild(this.$header);
  }
}
