export class BaseComponent {
  constructor({ tag = "div", parent, elementClass = [], text = "", id }) {
    this.element = document.createElement(tag);
    this.element.classList.add(...elementClass);
    if (parent) {
      parent.append(this.element);
    }
    if (id) {
      this.element.id = id;
    }
    this.element.textContent = text;
  }
  getNode() {
    return this.element;
  }
  addClass(...classes) {
    this.element.classList.add(...classes);
  }
  removeClass(...classes) {
    this.element.classList.remove(...classes);
  }
  stylize(prop, value) {
    this.element.style[prop] = value;
  }
  setAttribute(atribute, value) {
    this.element.setAttribute(atribute, value);
  }
  addEvent(event, func) {
    this.element.addEventListener(event, func);
  }
  insertChildren(...children) {
    children.forEach((component) => {
      this.element.append(component.getNode());
    });
  }
  replaceChildren(...components) {
    const elements = components.map((item) => item.getNode());
    this.element.replaceChildren(...elements);
  }
  destroy() {
    this.element.remove();
  }
}
