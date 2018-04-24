class Snack{
    constructor(low, high, x, y, iteration){
        this.r = random(low, high);
        this.pos = createVector(random((-2+iteration)*x, (2+iteration)*x), random((-2+iteration)*y, (2+iteration)*y));
        this.red = random(0, 205);
        this.green = random(0, 205);
        this.blue = random(0, 205);
        this.alpha = random(100, 220);
    }
    // Display the snacks with random color at random positions.
    show(){
        stroke(180, 180, 180, 180);
        fill(this.red, this.green, this.blue, this.alpha);
        ellipse(this.pos.x, this.pos.y, this.r);
    }

    // All snacks move randomly.
    update(){
            this.pos.x += random(-1, 1);
            this.pos.y += random(-1, 1);
    }
}