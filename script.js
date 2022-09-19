const grid = document.getElementById('grid')
const screen = document.getElementById('screen')
const clearBtn = document.getElementById('clear')
const prevDisplay = document.getElementById('prevDisplay')
const currDisplay = document.getElementById('currDisplay')
const nums = document.querySelectorAll('.grid #num')
const operations = document.querySelectorAll('.grid #operand')


clearBtn.addEventListener('click', clear) 


function clear() {
    currDisplay.textContent = '0'
    prevDisplay.textContent = ''
}