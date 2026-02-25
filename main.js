//// FIND ELEMENTS
const stageContainer = document.getElementById("stage-container");

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

// resize stage on container element size change
// window.addEventListener("resize", () => {
//     // find new stage container size
//     stageWidth = stageContainer.offsetWidth;
//     stageHeight = stageContainer.offsetHeight;
//     // apply to stage
//     stage.width(stageWidth);
//     stage.height(stageHeight);
//     drawCircle();
// });

// then first layer
const baseLayer = new Konva.Layer();

drawCircle();

// add layer to stage
stage.add(baseLayer);

//// DRAWING FUNCTION

let circleColour = "red";

function drawCircle(){
    // create circle
    let initCircle = new Konva.Circle({
        x: stageWidth / 2,
        y: stageHeight / 2,
        radius: 20,
        fill: circleColour
    });

    // add circle to layer
    baseLayer.add(initCircle);
}