const grid = document.getElementById('grid')
const screen = document.getElementById('screen')
const clearBtn = document.getElementById('clear')
const prevDisplay = document.getElementById('prevDisplay')
const currDisplay = document.getElementById('currDisplay')
const buttons = document.querySelectorAll('.grid button')

console.log(buttons)
clearBtn.addEventListener('click', clear) 


function clear() {
    currDisplay.textContent = '0'
    prevDisplay.textContent = ''
}