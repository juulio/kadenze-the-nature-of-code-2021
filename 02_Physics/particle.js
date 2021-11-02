class Particle {
    constructor(x, y) {
        this.pos = createVector(width/2, height/2);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    display() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 48, 48);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    edges() {
        if(this.pos.y > VIEWPORT_HEIGHT) {
            this.vel.y *= -1;
            this.pos.y = VIEWPORT_HEIGHT;
        }
        if(this.pos.x > VIEWPORT_WIDTH) {
            this.vel.x *= -1;
            this.pos.x = VIEWPORT_WIDTH;
        }
    }
}