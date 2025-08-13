let currentInput = '';
let operator = null;
let previousInput = '';
let isCalculated = false;

function appendNumber(number) {
  if (isCalculated) {
    currentInput = '';
    isCalculated = false;
  }
  currentInput += number;
  document.getElementById('output').value = currentInput;
}

function appendOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
  document.getElementById('output').value = previousInput + " " + operator;
}

function clearInput() {
  currentInput = '';
  previousInput = '';
  operator = null;
  document.getElementById('output').value = '';
}

function calculateResult() {
  if (currentInput === '' || previousInput === '') {
    alert('Invalid input!');
    return;
  }

  let result;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) {
    alert('Invalid number input!');
    return;
  }

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert('Cannot divide by zero!');
        return;
      }
      result = prev / current;
      break;
    default:
      alert('Invalid operation!');
      return;
  }

  document.getElementById('output').value = previousInput + " " + operator + " " + currentInput + " = " + result;
  currentInput = result.toString();
  previousInput = '';
  operator = null;
  isCalculated = true;
}

function performSquare() {
  if (currentInput === '') return;
  let number = parseFloat(currentInput);
  if (isNaN(number)) {
    alert('Invalid number input!');
    return;
  }
  let result = number * number;
  document.getElementById('output').value = currentInput + " x² = " + result;
  currentInput = result.toString();
  isCalculated = true;
}

