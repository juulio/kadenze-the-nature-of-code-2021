class Particle {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 1);
        this.mass = m;
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    display() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
    }

    applyForce(force) {
        let tempForce = force.copy();
        tempForce.div(this.mass);
        this.acc.add(tempForce);
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