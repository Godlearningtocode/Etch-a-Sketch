const container = document.querySelector('.container');
/** @type {HTMLElement} */
const board = document.querySelector('.board');
const row = 16;
const column = 16; 
const btn = document.createElement('button');
/** @type {HTMLElement} */
let color = document.querySelector('.color');
let reset = document.createElement('button');

btn.classList.add('btn');
btn.textContent = row + " x " + column;
container.appendChild(btn);

reset.classList.add('reset');
reset.textContent = "Reset!";
container.appendChild(reset);

btn.addEventListener('click', () => {
    changeSize();
})

function cell(row, column) {
    for (let i=0; i<(row*column); i++) {
        board.style.gridTemplateRows = `repeat(${row}, 2fr)`;
        board.style.gridTemplateColumns = `repeat(${column}, 2fr)`;
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.appendChild(cell);
    }        
}

cell(row, column);

const square = document.querySelectorAll('.cell').forEach(eachCell => {
    eachCell.addEventListener('click', () => {
        eachCell.style.backgroundColor = randomColor();
    })
})

function changeSize() {
    const gridSize = prompt("Please enter a grid size!");
    board.textContent = "";
    btn.textContent = gridSize + " x " + gridSize;
    if (gridSize > 64) {
        return "Please choose a lower Grid size!"
    } else {
        for (let i=0; i<(gridSize*gridSize); i++) {
            board.style.gridTemplateRows = `repeat(${gridSize}, 2fr)`;
            board.style.gridTemplateColumns = `repeat(${gridSize}, 2fr)`;
            const cell = document.createElement('div');
            cell.classList.add('cell');
            board.appendChild(cell);
            const square = document.querySelectorAll('.cell').forEach(eachCell => {
                eachCell.addEventListener('click', () => {
                    eachCell.style.backgroundColor = randomColor();
                })
            })
        }
    }
}

function randomColor() {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
}

reset.addEventListener('click', () => {
    board.textContent = "";
    cell(row, column);
    const square = document.querySelectorAll('.cell').forEach(eachCell => {
        eachCell.addEventListener('click', () => {
            eachCell.style.backgroundColor = randomColor();
        })
    })
})