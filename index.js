let currentNumber = '';
let storedNumber = '';
let isResultDisplayed = false;
let operator = '';
let isDecimalPointEntered = false;
let firstTimeOpr = true;


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



function getNum(num){
  isResultDisplayed = false;
  currentNumber += num;
  document.querySelector(".screen").innerText += num;
  return Number(currentNumber);
}

// Clear Screen
document.querySelector("#clear").addEventListener("click", () => {
  document.querySelector(".screen").innerHTML = "";
  clearStoredNumbers();
});
  


// Get operators
document.getElementById("plus").addEventListener("click", () => {
  handleOperator("+")
  isDecimalPointEntered = false;
});
document.getElementById("minus").addEventListener("click", () => {
  handleOperator("-")
  isDecimalPointEntered = false;
});
document.getElementById("times").addEventListener("click", () => {
  handleOperator("*")
  isDecimalPointEntered = false;
});
document.getElementById("divide").addEventListener("click", () => {
  handleOperator("/")
  isDecimalPointEntered = false;
});


function handleOperator(opr) {
  let calc;
  if(operator === ""){
    storedNumber = currentNumber;
    operator = opr;
    currentNumber = "";
    document.querySelector(".screen").innerText += opr;
  } else if(operator !== "" && currentNumber !== ""){
    if(operator === "+"){
      calc = storedNumber + currentNumber;
    } else if(operator === "-") {
      calc = storedNumber - currentNumber      ;
    } else if(operator === "*") {
      calc = storedNumber * currentNumber;
    } else if(operator === "/") {
      calc = storedNumber / currentNumber;
    }
    document.querySelector(".screen").innerText = calc;
    storedNumber = calc;
    operator = opr;
    currentNumber = "";
    document.querySelector(".screen").innerText += opr;
  } else if(operator !== "" && currentNumber === ""){
    operator = opr;
  }
}



// Functions to handle operations
function handleSum() {
  let calculation = Number(storedNumber) + Number(currentNumber);
  document.querySelector(".screen").innerHTML = calculation;
}

function handleSubtract() {
  let calculation = Number(storedNumber) - Number(currentNumber);
  document.querySelector(".screen").innerHTML = calculation;
}

function handleMultiplication() {
  let calculation = Number(storedNumber) * Number(currentNumber);
  document.querySelector(".screen").innerHTML = calculation;
}

function handleDivide() {
  let calculation = Number(storedNumber) / Number(currentNumber);
  document.querySelector(".screen").innerText = calculation;
}

// Get ENTER button
const enterBTN = document.querySelector("#enter");

// Add interaction to ENTER BTN
enterBTN.addEventListener("click", () => {
  if(operator === '+') {
    handleSum();
    clearStoredNumbers();
  } else if(operator === '-') {
    handleSubtract();
    clearStoredNumbers();
  } else if(operator === '*') {
    handleMultiplication();
    clearStoredNumbers();
  } else if (operator === '/' && currentNumber === '0') {
    document.querySelector(".screen").innerText = 'ERROR: Cannot divide by 0'
    clearStoredNumbers();
  } else if(operator === '/') {
    handleDivide();
    clearStoredNumbers();
  }
  isDecimalPointEntered = false;
  isResultDisplayed = true;
  firstTimeOpr = true;
  let result = document.querySelector(".screen").innerText;
  storedNumber = result;
}
);

function clearStoredNumbers() {
  storedNumber = '';
  operator = '';
  currentNumber = '';
}


// Code to handle dot button
document.getElementById("dot").addEventListener("click", () => {
  if(isDecimalPointEntered === true) {
    return
  } else {
    isDecimalPointEntered = true;
    document.querySelector(".screen").innerText += '.';
    currentNumber += '.';
  }
});

// Code to handle delete button
document.getElementById("delete").addEventListener("click", () => {
  let screenContent = document.querySelector(".screen").innerText;

  let lastChar = screenContent[screenContent.length -1];

  if(isResultDisplayed === true) {
    isResultDisplayed = false;
    document.querySelector(".screen").innerText = "";
    clearStoredNumbers();
  } else if(lastChar === ".") {
    isDecimalPointEntered = false;
    let sliced = currentNumber.slice(0, -1);
    currentNumber = sliced;
  } else if(currentNumber !== "" && "0123456789".includes(lastChar)) {
    let sliced = currentNumber.slice(0, -1);
    currentNumber = sliced;
  } else if(storedNumber !== "" && "0123456789".includes(lastChar)) {
    let sliced = storedNumber.slice(0, -1);
    storedNumber = sliced;
  } else if(currentNumber === "" && operator !== "") {
    operator = "";
  }
  removeItemFromScreen();
  console.log(storedNumber);
  console.log(operator);
  console.log(currentNumber);
});

function removeItemFromScreen() {
  let currentText = document.querySelector(".screen").innerText;
  document.querySelector(".screen").innerText = currentText.slice(0, -1);
}