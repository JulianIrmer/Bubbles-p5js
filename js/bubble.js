class Bubble{
    constructor(){
        this.pos = createVector(0, 0);
        this.r = 20;
    }
    show(){
        stroke(255);
        fill(255, 0, 0, 200);
        ellipse(this.pos.x, this.pos.y, this.r);
        
        // Displaying the radius inside the bubble 
        // textSize(this.r*0.33);
        // fill(0, 0, 0, 100);
        // noStroke();
        // text(floor(this.r), this.pos.x-(this.r*0.13), this.pos.y+2);
        
    }

// Calculating the distance between objects. 
// At intersections the player eats the snack when the player's radius is bigger.
// Eaten snacks will be deleted from the array.
    eat(){
        for(let i = 0; i < snacks.length; i++){
            let d = dist(snacks[i].pos.x, snacks[i].pos.y, bubble.pos.x, bubble.pos.y);
        
            if(d <= (snacks[i].r/2) + (bubble.r/2)  && snacks[i].r <= bubble.r){
                if(bubble.r <= 1000){
                    bubble.r += snacks[i].r*0.2;
                }
                snacks.splice(i,1);
            }
            else if(d <= (snacks[i].r/2) + (bubble.r/2) && snacks[i].r > bubble.r){
                counter--;
            }
        }
    }
}
