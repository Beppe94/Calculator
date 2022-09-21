let firstNum = 0;
let secondNum = 0;
let currOperation;
let displayRefresh = false

const grid = document.getElementById('grid');
const screen = document.getElementById('screen');
const clearBtn = document.getElementById('clear');
const prevDisplay = document.getElementById('prevDisplay');
const currDisplay = document.getElementById('currDisplay');
const nums = document.querySelectorAll('.grid #num');
const operations = document.querySelectorAll('.grid #operand');


clearBtn.addEventListener('click', clear);

nums.forEach((button) => 
    button.addEventListener('click', () => setNumbers(button.textContent))
)

operations.forEach((button) => 
    button.addEventListener('click', () => setOperand(button.textContent))
)

function setNumbers(num) {
    if(currDisplay.textContent == '0' || displayRefresh) 
        refresh()
    currDisplay.textContent += num

}

function refresh() {
    currDisplay.textContent = ''
    displayRefresh = false
}

function clear() {
    currDisplay.textContent = '0';
    prevDisplay.textContent = '';
    firstNum = ''
    secondNum = ''
    currOperation = null
}

function setOperand(operator) {
    if(currOperation !== null) compute()
    firstNum = currDisplay.textContent
    currOperation = operator
    prevDisplay.textContent = `${firstNum} ${currOperation}`
    displayRefresh = true
}

function compute() {
    if(currOperation == null || displayRefresh) return 
    if(currOperation == '/' && currDisplay.textContent == '0') {
        alert('Can\'t divide by 0!')
        return
    }
    secondNum = currDisplay.textContent
    currDisplay.textContent = roundRes(evaluate(currOperation, firstNum, secondNum))
    prevDisplay.textContent = `${firstNum} ${currOperation} ${secondNum} =`
    currOperation = null
}

function sum(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

