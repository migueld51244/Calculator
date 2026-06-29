let currentNumber = '';
let storedNumber = '';
let isOperatorClicked = false;
let operator = '';
let isDecimalPointEntered = false;


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
  storedNumber = currentNumber;
  currentNumber = '';
  document.querySelector(".screen").innerText += opr;
  operator = opr;
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
}
);

function clearStoredNumbers() {
  storedNumber = '';
  operator = '';
  currentNumber = '';
}

document.getElementById("dot").addEventListener("click", () => {
  if(isDecimalPointEntered === true) {
    return
  } else {
    isDecimalPointEntered = true;
    document.querySelector(".screen").innerText += '.';
    currentNumber += '.';
  }
});
// to add concatenation, store the result in a varialbe and keep onking on it