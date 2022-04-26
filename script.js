const container = document.querySelector('#gridContainer');

let gridSize = 16;
let divArray = [];
let divContainerArray = [];
let containerIndex = 0;

function createGrid(){
    for(i = 0; i < gridSize*gridSize; i++){
            if(i % gridSize === 0 || i === 0){
                divContainerArray[containerIndex] = document.createElement('div');
                divContainerArray[containerIndex].classList.add('row');
                container.appendChild(divContainerArray[containerIndex]);
                containerIndex++;
            }
            divArray[i] = document.createElement('div');
            divArray[i].classList.add('square');
            divContainerArray[containerIndex - 1].appendChild(divArray[i]);
        }
    }

    createGrid();

    // create gridSize * gridSize number of divs. e.g. 16*16 = 256
    // if i === a multiple of gridSize, then create a new div child.
    // essentially if gridSize === 16, create a new block every 16 divs