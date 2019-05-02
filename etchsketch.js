let rainbowMode = false;

function drawGrid(size) {
    let container = document.querySelector("#container");
    let cell;

    for (let rows = 0; rows < size; rows++) {
        for (let cols = 0; cols < size; cols++){
            cell = document.createElement("div");
            cell.classList.add("gridSquare");
            container.appendChild(cell);
        }
    }
    container.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function removeGrid(){
    $("#container").empty();
}

drawGrid(16);

$("#reset").click(function(){
    $(".gridSquare").removeClass("change");
    let size = prompt("How many squares per side?: ");
    removeGrid();
    drawGrid(size);
});


$("#rainbow").click(function(){
    rainbowMode = true;
});   
$("#grayscale").click(function(){
    rainbowMode = false;
    $("#container").on("mouseover", ".gridSquare", function () {
        $(this).addClass("change");
    });
});

if (rainbowMode == false){  
    $("#container").on("mouseover", ".gridSquare", function () {  
        $(this).addClass("change");
        });
}
if (rainbowMode == true){
    $("#container").on("mouseover", ".gridSquare", function () {
        $(this).css("background-color", getRandomColor());
    });
}

$("#clear").click(function(){
    $(".gridSquare").removeClass("change");
});







