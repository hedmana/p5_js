let color1 = [0, 255, 70];
let color2 = [200, 255, 180];

class Symbol {
    constructor(x, y, speed, size, first) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size
        this.first = first;
        this.switchInterval = round(random(2, 20));
        this.value;
        this.setRandomSymbol();
    }

    getSize() {
        return this.size;
    }

    setRandomSymbol() {
        if (frameCount % this.switchInterval == 0) {
            this.value = String.fromCharCode(
                0x30A0 + round(random(0, 96))
            );
        }

    }
    
    move() {
        this.y = (this.y > height) ? 0 : this.y += this.speed;
    }

    render() {
        if (this.first){
            fill(color2);
        } else {
            fill(color1)
        }

        textSize(this.size);
        text(this.value, this.x, this.y);
        this.move();
        this.setRandomSymbol();
    }
}