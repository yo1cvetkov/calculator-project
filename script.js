// click the number and show it on calc

import Calculator from "./Calculator.js";

const primaryOperandElement = document.querySelector("[data-primary-operand]");
const secondaryOperandElement = document.querySelector("[data-secondary-operand]");
const operationElement = document.querySelector("[data-operation]");

const calculator = new Calculator(primaryOperandElement, secondaryOperandElement, operationElement);

// Choose the operation

// Choose second operand

// Evalueate the operation

// Delete single num

// Clear the field

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-all-clear]")) {
    calculator.clear();
  }

  if (e.target.matches("[data-delete]")) {
    // Delete last digit
    calculator.removeDigit();
  }

  if (e.target.matches("[data-number]")) {
    // Display the number
    calculator.addDigit(e.target.textContent);
    // console.log(primaryOperand);
  }

  if (e.target.matches("[data-operation]")) {
    // Display the operation
    calculator.chooseOperation(e.target.textContent);
  }

  if (e.target.matches("[data-equals]")) {
    // Show the result
    calculator.evaluate();
  }
});
