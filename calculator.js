function add (a, b) {
  return parseInt(a) + parseInt(b);
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

function operate(a, b, operator) {
  let result;

  if (operator === "add") {
    result = add(a, b);
  } else if (operator ==="subtract") {
    result = subtract(a, b);
  } else if (operator === "multiply") {
    result = multiply(a, b);
  } else if (operator === "divide") {
    result = divide(a, b)
  }

  return result;
}