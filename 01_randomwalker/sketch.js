import Walker from './01_randomwalker';

const VIEWPORT_WIDTH = 500;
const VIEWPORT_HEIGHT = 500;

let walker;

function setup() {
    createCanvas(VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
    walker = new Walker(VIEWPORT_WIDTH/2, VIEWPORT_HEIGHT/2);
    background(0);
}

function draw() {
    walker.update();
    walker.checkEdges();
    walker.pulse();
    walker.display();
}