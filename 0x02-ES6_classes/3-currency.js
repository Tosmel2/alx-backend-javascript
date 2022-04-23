export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this.code;
  }

  set code(code) {
    this.code = code;
  }

  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
