// DEFAULT VARIABLES
// VARIABLES
let arrayNumber = [];
let currentOperator = '';
let lastNumber = 0;
let currentNumber = 0;
let readyGet_2ndNum = false;
let lastDisplay = [];

// SELECTORS
const numBtn = document.querySelectorAll(`[data-num]`);
const deleteBtn = document.getElementById(`deleteBtn`);
const clearBtn = document.getElementById(`clearBtn`);
const operatorBtn = document.querySelectorAll(`[data-operator]`)
const currentOperationScreen = document.getElementById(`currentOperationScreen`)
const lastOperationScreen = document.getElementById(`lastOperationScreen`)


// EVENTS
numBtn.forEach((button) => {
    button.addEventListener('click', addNumber);
})
deleteBtn.addEventListener('click', deleteNumber);
clearBtn.addEventListener('click', clearNumber);
operatorBtn.forEach((button) => {
    button.addEventListener('click', storeOperator)
})

// FUNCTIONS
function addNumber(e) {
    arrayNumber.push(e.target.value);
    displayScreen();
    console.log(arrayNumber);
}
function deleteNumber() {
    arrayNumber.pop();
    displayScreen();
}
function clearNumber() {
    arrayNumber = [];
    currentOperator = '';
    lastNumber = 0;
    currentNumber = 0;
    readyGet_2ndNum = false;
    lastDisplay = [];
    displayLastOperation()
    displayScreen();
}

function storeOperator(e) {
    currentOperator = e.target.value;

    if (readyGet_2ndNum===false){
        lastNumber = arrayNumber.join("")
        readyGet_2ndNum = true;
        arrayNumber = [];
        displayScreen();
    } else if (readyGet_2ndNum===true){
        currentNumber = arrayNumber.join("")
        arrayNumber = [];
        displayScreen();
    }
    console.log(lastNumber)
    console.log(typeof(lastNumber));
    console.log(currentOperator);
    
    displayLastOperation()

    if (!lastNumber && !currentNumber && !currentOperator){
        calculation()
    }
}
function displayLastOperation() {
    // lastDisplay.push();
    lastOperationScreen.innerHTML = lastDisplay.join(" ");
}

function displayScreen() {
    currentOperationScreen.innerHTML = arrayNumber.join("")

}

//BASIC OPERATOR FUNCTION
function add(a, b) {
    return a+b;
}
function subtract(a, b) {
    return a-b;
}
function multiply(a, b) {
    return a*b;
}
function divide(a, b) {
    return a/b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case 'x':
            return multiply(a, b)
        case '÷':
            return divide(a,b)
        default:
            return 0;
    }
}

function calculation() {
    lastNumber = operate(currentOperator, lastNumber, currentNumber);
}


// WHEN WINDOW IS LOADED
// window.onload = function(){
//     console.log(numButton);
// };