function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);


    






    makeCreature (200, 200, 'pink', 'green') ;
    makeCreature (500, 300, 'green', 'blue') ;
    makeCreature (500, 100, 'blue', 'pink') ;


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function makeCreature (x, y, fillColor, eyeColor) {
     // your creature:
    fill(fillColor);
    circle(x, y, 300)

    fill(eyeColor);
    ellipse(x-50, y-50, 30, 40)
    ellipse(x+50, y-50, 30, 40)
}

function mouseClicked () {
    makeCreature (mouseX, mouseY, 'pink', 'green');
}