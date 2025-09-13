const display = document.querySelector("#display");
const resetButton = document.querySelector("#reset");
const randomButton = document.querySelector("#random");

let randomOption = false;
let quantity = 16;

function getRandomRgb(){
    let rbg= [];
    rbg.push(Math.floor(Math.random()*256)).toString();
    rbg.push(Math.floor(Math.random()*256)).toString();
    rbg.push(Math.floor(Math.random()*256)).toString();

    return rbg;
}

function createGrid(number){
    
    value =(100/number)*5;
    for(let i=0; i < number*number; i++){
        let square = document.createElement("div");
        square.style.width= value.toString()+"px";
        square.style.height= value.toString()+"px";
        square.style.opacity = "0.0";
        square.setAttribute("class","square-space");
        let randomRgb=getRandomRgb();
        if(randomOption === false){
            square.style.backgroundColor = "black";
        }else{

            let randomRgbString = "rgb("+randomRgb[0]+
            ","+randomRgb[1]+","+randomRgb[2]+")";
            square.style.backgroundColor = randomRgbString;
        }
        display.appendChild(square);
    }

    const pixels = document.querySelectorAll(".square-space");
    pixels.forEach((pixel) =>{
        pixel.addEventListener("mouseover", (e) => {
            let opacityValue=e.target.style.opacity;
            let newOpacity = 0;
            if(parseFloat(opacityValue) <1 ){
                newOpacity =(parseFloat(opacityValue) + .10).toString(); 
            }
            else{
                newOpacity = "1";
            }
            e.target.style.opacity = newOpacity;
        })
    }
     )

     quantity = number;
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

randomButton.addEventListener("click",(e) =>{
    if(randomOption === false){
        e.target.style.backgroundColor ="yellow"
        randomOption = true;
    }else{
        e.target.style.backgroundColor ="white"
        randomOption = false;
    }

    clearGrid();
    createGrid(quantity);
} )


createGrid(quantity);