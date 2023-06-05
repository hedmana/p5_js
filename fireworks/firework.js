class Firework {
    constructor() {
        this.color = random(255);
        this.dispersion = random(90, 98);
        this.firework = new Particle(random(width), height, this.color, this.dispersion, false);
        this.explosion = [];
        this.exploded = false;
    }

    explode() {
        for (let i = 0; i < 100; i++) {
            let p = new Particle(this.firework.pos.x, this.firework.pos.y, this.color, this.dispersion, true);
            this.explosion.push(p);
        }
    }

    done() {
        if (this.exploded && this.explosion.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    update() {
        if (!this.exploded) {
            this.firework.update();
            if (this.firework.vel.y >= 0) {
                this.exploded = true;
                this.explode();
                delete this.firework;
            }
        }

        for (let i = this.explosion.length - 1; i >= 0; i--) {
            this.explosion[i].update();
            if (this.explosion[i].done()) {
                this.explosion.splice(i, 1);
            }
        };
    } 

    render() {
        if (!this.exploded) {
            this.firework.render();
        }

        this.explosion.forEach(function(particle) {
            particle.render();
        });
    }
}