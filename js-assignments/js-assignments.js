// Assignment one (fahrenheit to celsius)

function convertTemperature() {
  let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  let celsius = ((fahrenheit - 32) * 5) / 9;
  let resultElement = document.getElementById("fahrenheit-result");
  resultElement.innerHTML = fahrenheit + "°F is " + celsius.toFixed(2) + "°C";
}

// Assignment Two (Counter)

let countElement = document.getElementById("count-result");
let count = countElement.innerHTML;

function increase() {
  count++;
  countElement.innerHTML = count;
}

function decrease() {
  count--;
  countElement.innerHTML = count;
}

function reset() {
  count = 0;
  countElement.innerHTML = count;
}

// Assignment Three (String Programs)
let convertedResultElement = document.getElementById("case-converted-result");

function convertToCapitalCase() {
  let stringInputElement = document.getElementById("string-input").value;
  let capitalCase =
    stringInputElement[0].toUpperCase() +
    stringInputElement.slice(1).toLowerCase();
  convertedResultElement.innerHTML = capitalCase;
}

function convertToUpperCase() {
  let stringInputElement = document.getElementById("string-input").value;
  let upperCase = stringInputElement.toUpperCase();
  convertedResultElement.innerHTML = upperCase;
}

function convertToLowerCase() {
  let stringInputElement = document.getElementById("string-input").value;
  let lowerCase = stringInputElement.toLowerCase();
  convertedResultElement.innerHTML = lowerCase;
}

// Assignment Four

function entryCheck(event) {
  event.preventDefault();
  let age = document.getElementById("age-input").value;
  let checkEntry = document.getElementById("entry-result");
  let accompaniedElement = document.getElementById("accompanied");
  let unaccompaniedElement = document.getElementById("unaccompanied");

  if (age === "") {
    checkEntry.style.color = "red";
    checkEntry.innerHTML = "Please, enter valid information";
  } else if (age < 13 && unaccompaniedElement.checked) {
    checkEntry.style.color = "orange";
    checkEntry.innerHTML = "Sorry, you are not allowed 😞";
  } else if (age >= 13 && unaccompaniedElement.checked) {
    checkEntry.style.color = "green";
    checkEntry.innerHTML = "You are allowed, Enjoy the movie.🎉";
  } else if (age < 13 && accompaniedElement.checked) {
    checkEntry.style.color = "green";
    checkEntry.innerHTML = "You are allowed, Enjoy the movie.🎉";
  } else if (age >= 13 && accompaniedElement.checked) {
    checkEntry.style.color = "green";
    checkEntry.innerHTML = "You are allowed, Enjoy the movie.🎉";
  } else {
    checkEntry.style.color = "red";
    checkEntry.innerHTML = "Please, enter valid information";
  }
}

// Assignment Five
//  Program One
console.log("Assignment Five");
console.log("---Awesome program");
const animals = ["Lion", "Tiger", "Elephant"];
console.log(animals);
for (let i = 0; i < animals.length; i++) {
  animals[i] = "Awesome " + animals[i];
}
console.log(`Awesome Animals :  ${animals}`);
console.log("_____________________________");

// Program Two

console.log("---String Generator");
function generateString(length) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphabets.length);
    result += alphabets.charAt(randomIndex);
  }
  return result;
}
const randomString = generateString(6);
console.log(`Random String : ${randomString}`);
console.log("_____________________________");

// Program Three
console.log("---Sum of five multiples");
const multiplesOfFive = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let sum = 0;
for (let i = 0; i < multiplesOfFive.length; i++) {
  sum += multiplesOfFive[i];
}
console.log(`Sum of five multiples : ${sum}`);
console.log("_____________________________");

// Program Four
console.log("---Encrypted String");
function replaceZ(stringInput) {
  let result = "";
  for (let i = 0; i < stringInput.length; i++) {
    if (i % 2 === 1) {
      result += "Z";
    } else {
      result += stringInput[i];
    }
  }
  return result;
}
const originalString = "Jegadeeshwaran";
const encryptedString = replaceZ(originalString);
console.log(`Original String : ${originalString}`);
console.log(`Encrypted String : ${encryptedString}`);
console.log("_____________________________");

// Assignment Six

function calculate() {
  let operatorElement = document.getElementById("operator").value;
  let operandOne = parseFloat(document.getElementById("operand-one").value);
  let operandTwo = parseFloat(document.getElementById("operand-two").value);
  let calculationResult = document.getElementById("calculation-result");
  let result;
  if (
    operatorElement === "+" ||
    operatorElement === "-" ||
    operatorElement === "*" ||
    operatorElement === "/"
  ) {
    if (!isNaN(operandOne) && !isNaN(operandTwo)) {
      if (operatorElement === "+") {
        result = operandOne + operandTwo;
      } else if (operatorElement === "-") {
        result = operandOne - operandTwo;
      } else if (operatorElement === "*") {
        result = operandOne * operandTwo;
      } else if (operatorElement === "/") {
        if (operandTwo !== 0) {
          result = operandOne / operandTwo;
        } else {
          result = "Division by zero is not allowed";
        }
      }
    } else {
      result = "Invalid operands";
    }
  } else {
    result = "Invalid operator";
  }
  calculationResult.textContent = result;
}
