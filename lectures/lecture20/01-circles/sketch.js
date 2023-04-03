function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    let counter =0;
    while (counter<8) {
        circle (100,200 + counter * 50, 50);
        counter +=1;
    }

    drawGrid(canvasWidth, canvasHeight);
}
