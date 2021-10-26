let w;

function setup() {
    createCanvas(400, 400);
    w = new Walker();
}

function draw() {
    background(0);
    w.update();
    w.display();
}

function Walker() {
    this.pos = createVector(2, 2);
    
    this.update = function(){
        let vel = createVector(random(-2, 3), random(-2, 3));
        this.pos.add(this.vel);
    };

    this.display = function(){
        fill(255, 0, 0);
        ellipse(this.x, this.y, 30, 30);
    };
}