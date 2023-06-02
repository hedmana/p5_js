let symbol;

class Stream {
    constructor(x, symbolSize) {
        this.x = x;
        this.y = random(0, -1000);
        this.symbolSize = symbolSize;
        this.symbols = [];
        this.symbolCount = round(random(5, height / this.symbolSize));
        this.speed = random(2, 10);
        this.initSymbols();
    }

    initSymbols() {
        let first = round(random(0, 4)) == 1;
        for (let i = 0; i <= this.symbolCount; i++) {
            symbol = new Symbol(this.x, this.y, this.speed, this.symbolSize, first);
            this.symbols.push(symbol);
            this.y -= symbol.getSize();
            first = false;
        }
    }

    render() {
        this.symbols.forEach(function(symbol) {
            symbol.render()
        });
    }
}