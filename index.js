let currentNumber = "";
let storedNumber = "";
let isResultDisplayed = false;
let operator = "";
let isDecimalPointEntered = false;
let firstTimeOpr = true;
let isErrorDisplayed = false;
let result = "";
const screen = document.querySelector(".screen");
const enterBTN = document.querySelector("#enter");

// Get numbers
document.getElementById("zero").addEventListener("click", () => getNum("0"));
document.getElementById("one").addEventListener("click", () => getNum("1"));
document.getElementById("two").addEventListener("click", () => getNum("2"));
document.getElementById("three").addEventListener("click", () => getNum("3"));
document.getElementById("four").addEventListener("click", () => getNum("4"));
document.getElementById("five").addEventListener("click", () => getNum("5"));
document.getElementById("six").addEventListener("click", () => getNum("6"));
document.getElementById("seven").addEventListener("click", () => getNum("7"));
document.getElementById("eight").addEventListener("click", () => getNum("8"));
document.getElementById("nine").addEventListener("click", () => getNum("9"));

function getNum(num) {
  errorHandler();
  isResultDisplayed = false;
  currentNumber += num;
  screen.innerText += num;
  return Number(currentNumber);
}

// Clear Screen
document.querySelector("#clear").addEventListener("click", () => {
  screen.innerHTML = "";
  clearStoredNumbers();
});

// Get operators
document.getElementById("plus").addEventListener("click", () => {
  handleOperator("+");
  isDecimalPointEntered = false;
});
document.getElementById("minus").addEventListener("click", () => {
  handleOperator("-");
  isDecimalPointEntered = false;
});
document.getElementById("times").addEventListener("click", () => {
  handleOperator("*");
  isDecimalPointEntered = false;
});
document.getElementById("divide").addEventListener("click", () => {
  handleOperator("/");
  isDecimalPointEntered = false;
});

function roundedNum(num) {
  // Return if not number
  if(typeof num !== 'number') {
    return num;
  }
  let rounding;
  let treatedResult = num.toString();
  let dotIndex = treatedResult.indexOf(".");
  // If there is no dot, return
  if(dotIndex === -1) {
    return num;
  }

  // Count decimal places
  let decimalPlaces = treatedResult.length - dotIndex - 1;
  if(decimalPlaces >= 8) {
    return Number(num.toFixed(8));
  } else {
    return num;
  }
}

function handleOperator(opr) {
  errorHandler();
  let calc;
  if (operator === "") {
    storedNumber = currentNumber;
    operator = opr;
    currentNumber = "";
    screen.innerText += opr;
  } else if (operator !== "" && currentNumber !== "") {
    if (operator === "+") {
      calc = add(storedNumber, currentNumber);
    } else if (operator === "-") {
      calc = subtract(storedNumber, currentNumber);
    } else if (operator === "*") {
      calc = multiply(storedNumber, currentNumber);
    } else if (operator === "/") {
      calc = divide(storedNumber, currentNumber);
    }
    calc = roundedNum(calc);
    screen.innerText = calc;
    storedNumber = calc;
    operator = opr;
    currentNumber = "";
    screen.innerText += opr;
  } else if (operator !== "" && currentNumber === "") {
    operator = opr;
  }
}

// Functions to handle operations
function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  if(Number(b) === 0) {
    isErrorDisplayed = true;
    return 'ERROR: Cannot divide by 0';
  }
  return Number(a) / Number(b);
}

// Error handler
function errorHandler() {
  if(isErrorDisplayed === true) {
  // Clears all
  clearStoredNumbers();
  screen.innerText = "";
  }
  isErrorDisplayed = false;
}

function operate(operator, a, b) {
  if(operator === "+") {
    return add(a, b);
  } else if(operator === "-") {
    return subtract(a, b);
  } else if(operator === "*") {
    return multiply(a, b);
  } else if(operator === "/") {
    return divide(a, b);
  }
}

// Add interaction to ENTER BTN
enterBTN.addEventListener("click", () => {
  errorHandler();
  if (operator === "+") {
    result = operate("+", storedNumber, currentNumber);
    result = roundedNum(result);
    screen.innerText = result;
    storedNumber = result;
    clearOprAndCurrentNum();
  } else if (operator === "-") {
    result = operate("-", storedNumber, currentNumber);
    result = roundedNum(result);
    screen.innerText = result;
    storedNumber = result;
    clearOprAndCurrentNum();
  } else if (operator === "*") {
    result = operate("*", storedNumber, currentNumber);
    result = roundedNum(result);
    screen.innerText = result;
    storedNumber = result;
    clearOprAndCurrentNum();
  } else if (operator === "/" && currentNumber === "0") {
    result = operate("/", storedNumber, currentNumber);
    screen.innerText = result;
    clearStoredNumbers();
  } else if (operator === "/") {
    result = operate("/", storedNumber, currentNumber);
    result = roundedNum(result);
    screen.innerText = result;
    storedNumber = result;
    clearOprAndCurrentNum();
  }

  if(isErrorDisplayed === false) {
    isDecimalPointEntered = false;
    isResultDisplayed = true;
    firstTimeOpr = true;
  }
});

function clearStoredNumbers() {
  storedNumber = "";
  operator = "";
  currentNumber = "";
}

function clearOprAndCurrentNum() {
  operator = "";
  currentNumber = "";
}

// Code to handle dot button
document.getElementById("dot").addEventListener("click", () => {
  errorHandler();
  if (isDecimalPointEntered === true) {
    return;
  } else {
    isDecimalPointEntered = true;
    screen.innerText += ".";
    currentNumber += ".";
  }
});

// Code to handle delete button
document.getElementById("delete").addEventListener("click", () => {
  errorHandler();
  let screenContent = screen.innerText;

  let lastChar = screenContent[screenContent.length - 1];

  if (isResultDisplayed === true) {
    isResultDisplayed = false;
    screen.innerText = "";
    clearStoredNumbers();
  } else if (lastChar === ".") {
    isDecimalPointEntered = false;
    let sliced = currentNumber.slice(0, -1);
    currentNumber = sliced;
  } else if (currentNumber !== "" && "0123456789".includes(lastChar)) {
    let sliced = currentNumber.slice(0, -1);
    currentNumber = sliced;
  } else if (storedNumber !== "" && "0123456789".includes(lastChar)) {
    let sliced = storedNumber.slice(0, -1);
    storedNumber = sliced;
  } else if (currentNumber === "" && operator !== "") {
    operator = "";
  }
  removeItemFromScreen();
  console.log(storedNumber);
  console.log(operator);
  console.log(currentNumber);
});

function removeItemFromScreen() {
  let currentText = screen.innerText;
  screen.innerText = currentText.slice(0, -1);
}