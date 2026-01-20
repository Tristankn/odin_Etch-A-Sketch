
// const gridBox =

function createGridLines(){

    let flexGrid = document.querySelector("#flexGrid")
    
    for(i = 0; i < 16; i++){
        console.log("made class");
        
        const gridLine = document.createElement("div");
        gridLine.classList.add("gridLine");
        flexGrid.appendChild(gridLine);
    }
}

function createGridBoxes(){
    let gridLine = document.querySelectorAll(".gridLine");
    gridLine.forEach((line) => {
        for(i = 0; i < 16; i++){
            const gridBox = document.createElement("div");
            gridBox.classList.add("gridBox");
            line.appendChild(gridBox);
        }

    })
}

createGridLines();
createGridBoxes();
