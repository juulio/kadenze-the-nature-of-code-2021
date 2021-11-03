class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-1,1), random(-2,0));
        this.acc = createVector(0, 0);
        this.lifespan = 255;
        this.radius = 4;
    }

    isDead() {
        return this.lifespan < 0;
    }

    applyForce(force) {
        this.acc.add(force);
    }

    run() {
        this.update();
        this.display();
    }

    edges() {
        if(this.pos.y >= VIEWPORT_HEIGHT - this.radius) {
            this.pos.y = VIEWPORT_HEIGHT - r;
            this.vel.y *= -1;
        }
        if(this.pos.x >= VIEWPORT_WIDTH - this.radius) {
            this.pos.x = VIEWPORT_WIDTH - this.radius;
            this.vel.x *= -1;
        }
        else if(this.pos.x <= this.radius){
            this.pos.x = this.radius;
            this.vel *= -1;
        }
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
        this.lifespan -= 3;
    }

    display() {
        stroke(255, this.lifespan);
        strokeWeight(2);
        fill(255, this.lifespan);
        ellipse(this.pos.x, this.pos.y, this.radius * 2);
    }
}