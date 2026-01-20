
/*
Sets up the 16 horizontal lines of the grid

Assumes the flexGrid is already implemented in the DOM
*/

const GRID_HEIGHT = 50;
const GRID_WIDTH = 50;
let drawingColor = "white";

function createGridLines(){

    let flexGrid = document.querySelector("#flexGrid")
    
    for(let i = 0; i < GRID_HEIGHT; i++){
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
        for(let i = 0; i < GRID_WIDTH; i++){
            const gridBox = document.createElement("div");
            gridBox.classList.add("gridBox");
            line.appendChild(gridBox);
        }

    })
}

createGridLines();
createGridBoxes();

/*
Initiates a vairable for determening if mouse is pressed or not.
Ads eventlisteners to make boxes change colors when mouse is hovering over them
while the mouse is clicked
*/
let screen = document.querySelector("body");
let mousedown = false;
let gridBoxes = document.querySelectorAll(".gridBox");
gridBoxes.forEach(box => {
    box.addEventListener('mouseenter', draw);
})

screen.addEventListener('mousedown', () => {
    mousedown = true;
})

screen.addEventListener('mouseup', () => {
    mousedown = false;
})


/*

*/

let colors = document.querySelectorAll(".color");
colors.forEach(color => {
    color.addEventListener('click', changeColor);
})

function changeColor(event){
    drawingColor = event.currentTarget.id;
}




function draw(event){
    if(mousedown){

        event.currentTarget.style.backgroundColor = drawingColor;
    }
}









