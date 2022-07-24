class Calculator {
  constructor(prevOpButton, curOpButton) {
    this.prevOpButton = prevOpButton;
    this.curOpButton = curOpButton;
    this.clear();
  }

  clear() {
    this.curOpButton = "";
    this.prevOpButton = "";
    this.operation = undefined;
  }

  delete() {}

  appendNum(num) {}
  operation(op) {}
  calculate() {}
  updateDisplay() {
    this.curOpButton.innerText = curOpButton;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");
const clearAllButton = document.querySelector("[data-clearAll]");
const prevOpButton = document.querySelector("[data-prev-op]");
const curOpButton = document.querySelector("[data-cur-op]");

const calculator = new Calculator();

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNum(button.innerText);
    updateDisplay();
  });
});
