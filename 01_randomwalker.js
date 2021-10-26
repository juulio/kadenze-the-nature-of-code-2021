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
    this.x = width/2;
    this.y = height/2;

    this.pos = createVector(width/2, height/2);
    
    this.update = function(){
    //    let vel = createVector(random(-5, 5), random(-5, 5));
        let vel = createVector(1, 1);
        this.pos.add(vel);
    };

    this.display = function(){
        fill(255, 0, 0);
        ellipse(this.pos.x, this.pos.y, 30, 30);
    };
}