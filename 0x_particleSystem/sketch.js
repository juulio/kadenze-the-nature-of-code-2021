import ParticleSystem from './ParticleSystem';

const VIEWPORT_WIDTH = 500;
const VIEWPORT_HEIGHT = 500;

let ps;

function setup() {
    createCanvas(VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
    ps = new ParticleSystem(VIEWPORT_WIDTH/2, 40);
}

function draw() {
    background(0);
    ps.run();
    ps.addParticle();
}