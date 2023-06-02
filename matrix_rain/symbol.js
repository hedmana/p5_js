let color = [0, 255, 70];

class Symbol {
    constructor(x, y, speed, size) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size 
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
        fill(color);
        textSize(this.size);
        text(this.value, this.x, this.y);
        this.move();
        this.setRandomSymbol();
    }
}