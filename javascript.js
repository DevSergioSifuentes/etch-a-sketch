const display = document.querySelector("#display");

function createGrid(number){
    value =(100/number)*5;
    //valueString = value.toString()+"%";
    console.log(value);
    for(let i=0; i < number*number; i++){
        let square = document.createElement("div");
        square.style.width= value.toString()+"px";
        square.style.height= value.toString()+"px";
        square.setAttribute("class","square-space");

        display.appendChild(square);
    }
}

createGrid(16);