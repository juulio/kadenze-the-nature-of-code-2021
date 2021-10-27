class Walker {
    constructor(x, y, t) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0.01);
        this.size = createVector(20, 20);
        this.t = 0;
    }
    
    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.t = this.t + 0.04;
    }

    display() {
        stroke(255);
        strokeWeight(2);
        fill(255, 0, 0);
        ellipse(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }

    checkEdges() {
        if (this.pos.x > VIEWPORT_WIDTH) {
            this.pos.x = 0;
        } 
        else if (this.pos.x < 0) {
            this.pos.x = width;
        }
    
        if (this.pos.y > VIEWPORT_HEIGHT) {
            this.pos.y = 0;
        } 
        else if (this.pos.y < 0) {
            this.pos.y = height;
        }
    }
    
    pulse() {
        let sizeDelta = noise(this.t);
        sizeDelta = map(sizeDelta, 0, 1, 10, 60);
        
        this.size.x = sizeDelta;
        this.size.y = sizeDelta;
    }
}