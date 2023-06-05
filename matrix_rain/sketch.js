let symbolSize = 40;
let symbolRain = [];

function setup() {
    createCanvas(
        window.innerWidth, 
        window.innerHeight
    );
    
    let x = 0;
    for (let i = 0; i <= width / symbolSize; i++) {
        let stream = new Stream(x, symbolSize);
        symbolRain.push(stream);
        x += symbolSize;
    }
}

function draw() {
    background(0, 90);
    symbolRain.forEach(function(stream){
        stream.render();
    });
}
