class Particle {
    constructor(x, y, color, dispersion, explosion) {
        this.pos = createVector(x, y);
        this.color = color;
        this.explosion = explosion;
        this.lifespan = 255;
        this.dispersion = dispersion; 
        if (this.explosion) {
            this.vel = p5.Vector.random2D();
            this.vel.mult(random(1, 6));
        }
        else {
            this.vel = createVector(0, random(-17, -10));
        }
        this.acc =  createVector(0, 0);
        this.gravity = createVector(0, 0.01);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    done() {
        if (this.lifespan < 0) {
            return true;
        }
        else {
            return false;
        }
    }

    update() {
        if (this.explosion) {
            this.vel.mult(this.dispersion/100);
            this.lifespan -= 6;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.applyForce(this.gravity);
    }

    render() {
        colorMode(HSB);
        if (this.explosion) {
            strokeWeight(4);
            stroke(this.color, 255, 255, this.lifespan);
        }
        else {
            strokeWeight(6);
            stroke(this.color, 255, 255);
        }
        point(this.pos.x, this.pos.y);
    }
}