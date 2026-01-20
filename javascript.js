
// const gridBox =

/*
Sets up the 16 horizontal lines of the grid

Assumes the flexGrid is already implemented in the DOM
*/

const GRIDSIZE = 16;

function createGridLines(){

    let flexGrid = document.querySelector("#flexGrid")
    
    for(let i = 0; i < GRIDSIZE; i++){
        console.log("made class");
        
        const gridLine = document.createElement("div");
        gridLine.classList.add("gridLine");
        flexGrid.appendChild(gridLine);
    }
}
/*
Fills the lines with grid boxes

Assumes the createGridLines is already called upon to set up the lines
*/

function createGridBoxes(){
    let gridLines = document.querySelectorAll(".gridLine");
    gridLines.forEach((line) => {
        for(let i = 0; i < GRIDSIZE; i++){
            const gridBox = document.createElement("div");
            gridBox.classList.add("gridBox");
            line.appendChild(gridBox);
        }

    })
}









createGridLines();
createGridBoxes();
