function add (a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(obj) {
  let result;
  const a = obj.firstOperand;
  const b = obj.secondOperand;
  const operation = obj.operator

  if (a !== undefined && b !== undefined) {
    if (operation === "add") {
      result = add(a, b);
    } else if (operation === "subtract") {
      result = subtract(a, b);
    } else if (operation === "multiply") {
      result = multiply(a, b);
    } else if (operation === "divide") {
      result = divide(a, b);
    }
  }

  return result;
}

let expression = {
  firstOperand: 5,
  secondOperand: 3,
  operator: "multiply"
}