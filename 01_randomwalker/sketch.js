import Walker from './01_randomwalker';

const VIEWPORT_WIDTH = 500;
const VIEWPORT_HEIGHT = 500;

let walker;

function setup() {
    createCanvas(VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
    walker = new Walker(200, 100);
}

function draw() {
    background(220);
    walker.update();
    walker.checkEdges();
    walker.pulse();
    walker.display();
}