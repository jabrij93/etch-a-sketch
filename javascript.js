let container = document.querySelector('.container');
let rows = document.getElementsByClassName('gridRow');
let duplicateOfInput = document.getElementById('duplicateOfInput');
let button = document.getElementById('submit');
let inputFromBox = document.getElementById('size-box');

button.addEventListener('click', createGrid);

createGrid(16);
draw();

// createGrid(anyNumber);
// draw();

// duplicateOfInput.textContent = `${input}`;

// const rainbow = document.getElementsByClassName('rainbow');
let reset = document.getElementById('clear-button');
reset.addEventListener('click', clearGrid);


function createGrid() {
    let number = inputFromBox.value ;
    makeRow(number);
    makeColumn(number);
    draw();
}

function makeRow(numberOfRow) {
    container.innerHTML = "";
    for (let i = 0; i <numberOfRow; i++) {
        let row = document.createElement('div');
        container.appendChild(row);
        row.classList.add('gridRow');
    }
}

function makeColumn(numberOfColumn) {
    for ( let i = 0; i < rows.length; i++) {
        for ( let j = 0; j < numberOfColumn; j++) {
            let column = document.createElement('div');
            rows[j].appendChild(column);
            column.classList.add('gridColumn');
        }   
    }
} 

//adds event listener to all divs with class "column"
//added in global scope to allow drawing on page load
//this refers to the element triggering the mouseover event listener
function draw() {
    let columns = document.getElementsByClassName("gridColumn");
    for (let i = 0; i < columns.length; i++) {
        columns[i].addEventListener("mouseover", changeColor);
        }

    function changeColor() {
        let blue = document.getElementById('blue');
        let eraser = document.getElementById('eraser');
        let black = document.getElementById('black');
        let rainbow = document.getElementById('rainbow');

        if (blue.checked) {
            this.style.backgroundColor = '#36367e';
        } else if (eraser.checked) {
            this.style.backgroundColor = '#84a8bb';
        } else if (gray.checked) {
            this.style.backgroundColor = '#a0a0a3';
        } else if (rainbow.checked) {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = '#' + randomColor;
        }
    }
} 

//eraser function loops through all column divs and sets background to "" in DOM
function clearGrid() {
    let columns = document.getElementsByClassName("gridColumn");
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.backgroundColor = '';
    }
}