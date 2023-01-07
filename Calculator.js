import displayNumber from "./utils/displayNumber.js";

export default class Calculator {
  constructor(primaryOperandElement, secondaryOperandElement, operationElement) {
    this.#primaryOperandElement = primaryOperandElement;
    this.#secondaryOperandElement = secondaryOperandElement;
    this.#operationElement = operationElement;

    this.clear();
  }

  #primaryOperandElement;
  #secondaryOperandElement;
  #operationElement;

  clear() {
    this.primaryOperand = 0;
    this.secondaryOperand = null;
    this.operation = null;
  }

  get primaryOperand() {
    return parseFloat(this.#primaryOperandElement.dataset.value);
  }

  set primaryOperand(value) {
    this.#primaryOperandElement.dataset.value = value ?? "";
    this.#primaryOperandElement.textContent = displayNumber(value);
  }

  get secondaryOperand() {
    return parseFloat(this.#secondaryOperandElement.dataset.value);
  }

  set secondaryOperand(value) {
    this.#secondaryOperandElement.dataset.value = value ?? "";
    this.#secondaryOperandElement.textContent = displayNumber(value);
  }

  get operation() {
    return this.#operationElement.textContent;
  }

  set operation(value) {
    this.#operationElement.textContent = value ?? "";
  }

  addDigit(digit) {
    if (digit === "." && this.#primaryOperandElement.dataset.value.includes(".")) return;
    if (this.primaryOperand === 0) {
      this.primaryOperand = digit;
      return;
    } else {
      this.primaryOperand = this.#primaryOperandElement.dataset.value + digit;
    }
  }

  chooseOperation(operation) {
    if (this.operation !== "") return;
    this.operation = operation;
    this.secondaryOperand = this.primaryOperand;
    this.primaryOperand = 0;
  }

  evaluate() {
    let result;
    switch (this.operation) {
      case "*":
        result = this.secondaryOperand * this.primaryOperand;
        break;
      case "÷":
        result = this.secondaryOperand / this.primaryOperand;
        break;
      case "+":
        result = this.secondaryOperand + this.primaryOperand;
        break;
      case "-":
        result = this.secondaryOperand - this.primaryOperand;
        break;
      default:
        return;
    }

    this.clear();
    this.primaryOperand = result;

    return result;
  }

  removeDigit() {
    const numberString = this.#primaryOperandElement.dataset.value;
    if (numberString.length <= 1) {
      this.primaryOperand = 0;
      return;
    }
    this.primaryOperand = numberString.substring(0, numberString.length - 1);
  }
}
