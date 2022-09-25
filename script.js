let firstNum = 0;
let secondNum = 0;
let currOperation;
let displayRefresh = false

const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const equalBtn = document.getElementById('equal');
const prevDisplay = document.getElementById('prevDisplay');
const currDisplay = document.getElementById('currDisplay');
const nums = document.querySelectorAll('.grid #num');
const operations = document.querySelectorAll('.grid #operand');
const dotBtn = document.getElementById('point')

window.addEventListener('keydown', keyboardInput)
clearBtn.addEventListener('click', clear);
equalBtn.addEventListener('click', compute);
deleteBtn.addEventListener('click', deleteNum)
dotBtn.addEventListener('click', point)

nums.forEach((button) => 
    button.addEventListener('click', () => setNumber(button.textContent))
)

operations.forEach((button) => 
    button.addEventListener('click', () => setOperand(button.textContent))
)

function setNumber(num) {
    if(currDisplay.textContent == '0' || displayRefresh) 
        refresh()
    currDisplay.textContent += num
}

function deleteNum() {
    currDisplay.textContent = currDisplay.textContent.toString().slice(0, -1)
}

function refresh() {
    currDisplay.textContent = ''
    displayRefresh = false
}

function point() {  
    if(currDisplay.textContent === '') {
        currDisplay.append('0.')
    } else if(currDisplay.textContent) {
        currDisplay.append('.')
    }
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

function roundRes(n) {
    return Math.round(n * 1000) / 1000
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

function keyboardInput(e) {
    if(e.key >= 0 && e.key <= 9) {
        setNumber(e.key)
    } else if(e.key == '.') {
        point()
    } else if(e.key == 'Enter') {
        compute()
    } else if(e.key == 'Backspace') {
        deleteNum()
    } else if(e.key == 'Escape') {
        clear()
    } else if(e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
        setOperand(e.key)
    }
}

function evaluate(operator, a, b) {
    a = Number(a)
    b = Number(b)

    if(operator === '+') {
        return sum(a,b)
    } else if(operator === '-') {
        return subtract(a, b)
    } else if(operator === '*') {
        return multiply(a, b)
    } else if(operator === '/') {
        if(b === 0) {
            return null
        } else {
            return divide(a, b)
        }
    }
}