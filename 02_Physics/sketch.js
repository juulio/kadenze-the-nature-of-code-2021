import Particle from './particle';

const VIEWPORT_WIDTH = 500;
const VIEWPORT_HEIGHT = 500;

let particle;

function setup() {
    createCanvas(VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
    particle = new Particle();
}

function draw() {
    background(51);

    let gravity = createVector(0, 0.1);
    let wind = createVector(0.3, 0);
    
    particle.applyForce(gravity);
    particle.applyForce(wind);

    particle.update();
    particle.edges();
    particle.display();
}

