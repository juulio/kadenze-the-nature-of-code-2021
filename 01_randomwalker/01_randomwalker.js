class Walker {
    constructor(x, y, t) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.size = 20;
        this.t = 0;
    }
    
    update() {
        this.vel.add(this.acc);
        this.t = this.t + 0.08;
    }

    display() {
        let randomN = floor(random(4)),
            r = floor(random(255)),
            g = floor(random(255)),
            b = floor(random(255)),
            a = floor(random(255));

        switch (randomN) {
            case 0:
                this.pos.x += 4;
                break;
            case 1:
                this.pos.x -= 4;
                break;
            case 2:
                this.pos.y += 4;
                break;
            case 3:
                this.pos.y -= 4;
                break;
        }
     
        noStroke();
        fill(r, g, b, a);
        circle(this.pos.x, this.pos.y, this.size);
        
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
        this.size = map(sizeDelta, 0, 1, 5, 30);
    }
}