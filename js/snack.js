class Snack{
    constructor(){
        this.r = random(3, 80);
        this.x = random(this.r, width-this.r);
        this.y = random(this.r, height-this.r);
        this.red = random(0, 255);
        this.green = random(0, 255);
        this.blue = random(0, 255);
        this.alpha = random(0, 100);
    }

    show(){
        stroke(200);
        fill(this.red, this.green, this.blue, this.alpha);
        ellipse(this.x, this.y, this.r);
    }

    update(){
        if(this.x > 0 && this.x < width && this.y > 0 && this.y < height ){
            this.x += random(0, 3);
            this.y += random(0, 3);
            this.x -= random(0, 3);
            this.y -= random(0, 3);
        }

        if(this.x <= 0){
            this.x += random(0, 4);
        }
        if(this.x >= width){
            this.x -= random(0, 3);
        }
        if(this.y <= 0){
            this.y += random(0, 4);
        }
        if(this.y >= height){
            this.y -= random(0, 3);
        }
    }

    eat(){
        for(let i = 0; i < snacks.length; i++){
            let d = dist(snacks[i].x, snacks[i].y, snack.x, snack.y);
        
            if(d <= (snacks[i].r/2) + (snack.r/2)  && snacks[i].r <= snack.r){
                snack.r += (snacks[i].r*0.2);
                snacks.splice(i,1);
            }
            else if(d <= (snacks[i].r/2) + (snack.r/2) && snacks[i].r > snack.r){
                snack.r = 15;
                counter--;
            }
        }
    }
}