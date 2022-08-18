function add (a, b) {
  return (parseInt(a) + parseInt(b)).toString();
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === "0") {
    return 'ERROR!';
  }
  return a / b;
}

function operate(a, b, operator) {
  let result;

  if (operator === "+") {
    result = add(a, b);
  } else if (operator ==="-") {
    result = subtract(a, b);
  } else if (operator === "x") {
    result = multiply(a, b);
  } else if (operator === "/") {
    result = divide(a, b)
  }

  return result;
}

function updateDisplay(str) {
  const display = document.querySelector('.display-content');

  display.textContent = str;
}

function setFirstOperand(selection) {
  if (calcState.x === undefined) {
    calcState.x = selection;
  } else {
    calcState.x += selection;
  }

  updateDisplay(calcState.x);
}

function setOperator(selection) {
  calcState.ans = undefined;

  if (calcState.opr !== undefined && calcState.y !== undefined) {
    calcState.x = operate(calcState.x, calcState.y, calcState.opr);
    updateDisplay(calcState.x);
    calcState.y = undefined;
    calcState.opr = selection;
  } else if (calcState.opr === undefined && calcState.x !== undefined) {
    calcState.opr = selection;
  } else if (calcState.opr !== undefined) {
    calcState.opr = selection;
  }
}

function setSecondOperand(selection) {
  if (calcState.y === undefined) {
    calcState.y = selection;
  } else {
    calcState.y += selection;
  }

  updateDisplay(calcState.y);
}

function resetCalc() {
  calcState.x = undefined;
  calcState.y = undefined;
  calcState.opr = undefined;
  calcState.ans = undefined;
}

function resetDisplay() {
  const display = document.querySelector('.display-content');

  display.textContent = 0;
}



function calculate(event) {
  const button = event.target.textContent;

  if (button >= "0" && button <= "9" && calcState.ans !== undefined) {
    resetCalc();
  }

  if (button >= "0" && button <= "9" && calcState.opr === undefined) {
    setFirstOperand(button);
  }

  if (button === "+" || button === "-" || button === "x" || button === "/") {
    setOperator(button);
  }

  if (button >= "0" && button <= "9" && calcState.opr !== undefined) {
    setSecondOperand(button);
  }

  if (button === "=") {
    calcState.ans = operate(calcState.x, calcState.y, calcState.opr);
    updateDisplay(calcState.ans);
  }

  if (button === "AC") {
    resetDisplay();
    resetCalc();
  }
}

function initialize() {
  const buttons = document.querySelectorAll('.button')

  buttons.forEach(button => {
    button.addEventListener('click', calculate)
  });
}

let calcState = {};

initialize();