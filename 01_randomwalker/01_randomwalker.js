class Walker {
    constructor(x, y) {
        this.pos = createVector(width / 2, 0);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0.01);
    }
    
    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        // this.vel.limit(4);
    }

    display() {
        stroke(255);
        strokeWeight(2);
        fill(255, 0, 0);
        ellipse(this.pos.x, this.pos.y, 30, 30);
    }
}