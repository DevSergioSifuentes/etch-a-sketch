const display = document.querySelector("#display");
const resetButton = document.querySelector("#reset");
const randomButton = document.querySelector("#random");



function createGrid(number){
    value =(100/number)*5;
    for(let i=0; i < number*number; i++){
        let square = document.createElement("div");
        square.style.width= value.toString()+"px";
        square.style.height= value.toString()+"px";
        square.setAttribute("class","square-space");

        display.appendChild(square);
    }

    const pixels = document.querySelectorAll(".square-space");
    pixels.forEach((pixel) =>{
        pixel.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor= "black";
        })
    }
     )
}

function clearGrid(){
    while(display.firstChild){
        display.removeChild(display.firstChild);
    }
}

resetButton.addEventListener("click",() => {
    const choice = prompt("Select grid size (100 maximum): ","16");
    const numberChoice = parseInt(choice);
    
    if(numberChoice > 0 && numberChoice <= 100){
        clearGrid();
        createGrid(numberChoice);
    }
    else{
        alert("Please select a valid number ");
    }
})



createGrid(16);