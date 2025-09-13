const display = document.querySelector("#display");


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





createGrid(16);