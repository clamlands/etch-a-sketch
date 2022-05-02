const container = document.querySelector('#gridContainer');

let gridSize = 16;
let divArray = [];
let divContainerArray = [];
let containerIndex = 0;

//displays the current slider value
let slider = document.getElementById('myRange');
let output = document.getElementById('slideValue');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    gridSize = this.value;
    createGrid();
}

createGrid();

//creates the grid
function createGrid(){
container.innerHTML = '';
    for(i = 0; i < gridSize*gridSize; i++){
            if(i % gridSize === 0 || i === 0){ //if statement creates each individal row
                divContainerArray[containerIndex] = document.createElement('div');
                divContainerArray[containerIndex].classList.add('row');
                container.appendChild(divContainerArray[containerIndex]);
                containerIndex++;
            }
            divArray[i] = document.createElement('div');
            divArray[i].classList.add('square');
            divContainerArray[containerIndex - 1].appendChild(divArray[i]);
        }
        colorSquares();
    }


// USING ONDRAGSTART OR DRAGSTART WITHIN AN EVENT LISTENER ARE BOTH VIABLE OPTIONS. DECIDE WHICH.
/*
//prevents squares from being dragged
document.body.ondragstart = () => {
    return false;
}
*/
document.body.addEventListener('dragstart', (event) => {
    event.preventDefault();
});

//change color of square when mouse down
let mouseDown = false;
document.addEventListener('mousedown', () => {
    mouseDown = true;
});
//stops changing color of square when mouse up
document.addEventListener('mouseup', () => {
    mouseDown = false;
});

//event listener changes color of square when mouseover
function colorSquares(){
const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        if(mouseDown === true){
            square.setAttribute('style', 'background-color:blue;')
        };
    })
    square.addEventListener('mousedown', () => {
        square.setAttribute('style', 'background-color:blue;')
    })
});
};