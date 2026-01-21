
/*
Sets up the 16 horizontal lines of the grid

Assumes the flexGrid is already implemented in the DOM
*/

let GRID_HEIGHT = 64;
let GRID_WIDTH = 64;
let drawingColor = "white";
let mousedown = false;



function createGridLines(){

    let flexGrid = document.querySelector("#flexGrid")
    
    for(let i = 0; i < GRID_HEIGHT; i++){
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

    addEventListeners();
}

createGridLines();
createGridBoxes();

let slider = document.querySelector("#sizeSlider");
slider.addEventListener("input", updateGrid);

function updateGrid(){
    let lines = document.querySelectorAll(".gridLine");

    let sliderValue = slider.value;
    GRID_HEIGHT = sliderValue;
    GRID_WIDTH = sliderValue;
    lines.forEach(line => {
        line.remove();
    });

    createGridLines();
    createGridBoxes();

    let sizeSliderTitle = document.querySelector("#sizeSliderTitle");
    sizeSliderTitle.textContent = `Selected grid size: ${GRID_HEIGHT} x ${GRID_HEIGHT}`;

}

/*
Initiates a vairable for determening if mouse is pressed or not.
Ads eventlisteners to make boxes change colors when mouse is hovering over them
while the mouse is clicked
*/


function addEventListeners(){

    let screen = document.querySelector("body");
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
    
}

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


let resetButton = document.querySelector("#resetButton");

resetButton.onclick = () => {
    let gridBoxes = document.querySelectorAll(".gridBox");
    gridBoxes.forEach(box =>{
        box.style.backgroundColor = "white";
    })

}









