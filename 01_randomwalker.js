let w;

function setup() {
    createCanvas(900, 500);
    w = new Walker();
}

function draw() {
    background(220);
    w.update();
    w.display();
}

function Walker() {
    this.pos = createVector(width/2, 0);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.01);

    this.update = function(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        // this.pos = this.pos.add(this.vel);
    };

    this.display = function(){
        fill(255, 0, 0);
        ellipse(this.pos.x, this.pos.y, 30, 30);
    };
}