class Snack{
    constructor(){
        this.r = random(3, 150);
        this.pos = createVector(random(-2*width, 2*width), random(-2*height, 2*height));
        this.red = random(0, 205);
        this.green = random(0, 205);
        this.blue = random(0, 205);
        this.alpha = random(100, 250);
    }

    show(){
        stroke(0);
        fill(this.red, this.green, this.blue, this.alpha);
        ellipse(this.pos.x, this.pos.y, this.r);
    }

    // All snacks move randomly 
    update(){
            this.pos.x += random(0, 3);
            this.pos.y += random(0, 3);
            this.pos.x -= random(0, 3);
            this.pos.y -= random(0, 3);
    }
}