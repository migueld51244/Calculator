let currentNumber = '';
let storedNumber = '';
let isOperatorClicked = false;


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
document.querySelector("#clear").addEventListener("click", () => 
  document.querySelector(".screen").innerHTML = "");


// Get operators
document.getElementById("plus").addEventListener("click", () => handleOperator("+"));
document.getElementById("minus").addEventListener("click", () => handleOperator("-"));
document.getElementById("times").addEventListener("click", () => handleOperator("*"));
document.getElementById("divide").addEventListener("click", () => handleOperator("/"));


function handleOperator(opr) {
  storedNumber = currentNumber;
  currentNumber = '';
  document.querySelector(".screen").innerText += opr;
  return opr;
}

// Functions to handle operations
function handleSum() {
  let calculation = storedNumber + currentNumber;
  document.querySelector(".screen").innerHTML = calculation;
}

function handleSubtract() {
  let calculation = storedNumber - currentNumber;
  document.querySelector(".screen").innerHTML = calculation;
}

function handleMultiplication() {
  let calculation = storedNumber * currentNumber;
  document.querySelector(".screen").innerHTML = calculation;
}

function handleDivide() {
  let calculation = storedNumber / currentNumber;
  document.querySelector(".screen").innerHTML = calculation;
}