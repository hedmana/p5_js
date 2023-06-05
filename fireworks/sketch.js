let fireworks = []
let textToRotate;

function setup() {
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
}

function draw() {
    colorMode(RGB);
    background(0, 10);

    textToRotate = "FIREWORKS!";
    rotateText(width / 2, 2000 + height/2, 2000, textToRotate);

    if (random(1) < 0.05 ) {
        fireworks.push(new Firework(random(width), height));
    }

    for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].render();
        if (fireworks[i].done()) {
            fireworks.splice(i, 1);
        }
    }
}

function rotateText(x, y, radius, txt) {
    chars = txt.split("")

    charSpacingAngleDeg = 3;

    textAlign(CENTER, BASELINE)
    textSize(100)
    fill('red')

    push()

    translate(x, y)

    rotate(radians((-chars.length + 1.5) * charSpacingAngleDeg / 2))

    for (let i = 0; i < chars.length; i++) {
        text(chars[i], 0, -radius)
        rotate(radians(charSpacingAngleDeg))
    }

    pop()
}