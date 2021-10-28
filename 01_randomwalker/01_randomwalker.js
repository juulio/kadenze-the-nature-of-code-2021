class Walker {
    constructor(x, y, t) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0.01, 0.01);
        // this.size = createVector(20, 20);
        this.size = 20;
        this.t = 0;
    }
    
    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.t = this.t + 0.04;
    }

    display() {
        point(this.pos.x, this.pos.y);
        stroke('purple'); // Change the color
        strokeWeight(this.size);
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
        this.size = map(sizeDelta, 0, 1, 5, 45);
    }
}