//// FIND ELEMENTS
const stageContainer = document.getElementById("stage-container");
const circleButton = document.getElementById("circle-button");

//// INIT VARIABLES
let stageWidth = stageContainer.offsetWidth;
let stageHeight = stageContainer.scrollHeight;

//// KONVA SETUP

// first create stage
const stage = new Konva.Stage({
    container: "konva-stage",
    width: stageWidth,
    height: stageHeight
});

// then first layer
const baseLayer = new Konva.Layer();

//drawCircle();

// add layer to stage
stage.add(baseLayer);

//// DRAWING FUNCTION

let circleColour = "red";

function drawCircle(){
    // create circle
    let initCircle = new Konva.Circle({
        x: stageWidth * Math.random(),
        y: stageHeight * Math.random(),
        radius: 50 * Math.random(),
        fill: circleColour
    });

    // add circle to layer
    baseLayer.add(initCircle);
}

circleButton.addEventListener("click", drawCircle);