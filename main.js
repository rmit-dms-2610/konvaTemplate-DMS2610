//// KONVA SETUP

// first create stage
const stage = new Konva.Stage({
    container: "konva-stage",
    width: 500,
    height: 500,
});

// then first layer
const baseLayer = new Konva.Layer();

// create circle
const initCircle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 20,
    fill: "red"
});

// add circle to layer
baseLayer.add(initCircle);

// add layer to stage
stage.add(baseLayer);