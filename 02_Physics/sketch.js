import Particle from './particle';

const VIEWPORT_WIDTH = 500;
const VIEWPORT_HEIGHT = 500;

let particle1, particle2;

function setup() {
    createCanvas(VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
    particle1 = new Particle(200, 100, 1);
    particle2 = new Particle(400, 100, 4);
}

function draw() {
    background(51);

    let wind = createVector(0.3, 0);
    
    let gravity1 = createVector(0, 0.1*particle1.mass);
    particle1.applyForce(gravity1);
    particle1.update();
    particle1.edges();
    particle1.display();
    
    let gravity2 = createVector(0, 0.1*particle2.mass);
    particle2.applyForce(gravity2);
    particle2.update();
    particle2.edges();
    particle2.display();
    
    if(mouseIsPressed){
        particle1.applyForce(wind);
        particle2.applyForce(wind);
    }
}

