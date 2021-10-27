import Walker from './01_randomwalker';

let walker;

function setup() {
    createCanvas(600, 500);
    walker = new Walker(200, 200);
}

function draw() {
    background(220);
    walker.update();
    walker.display();
}