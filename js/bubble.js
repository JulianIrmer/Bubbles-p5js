class Bubble{
    constructor(){
        this.pos = createVector(0, 0);
        this.r = 15;
    }
    show(){
        stroke(255);
        fill(255, 0, 0, 200);
        ellipse(this.pos.x, this.pos.y, this.r);
    }

    eat(){
        for(let i = 0; i < snacks.length; i++){
            let d = dist(snacks[i].pos.x, snacks[i].pos.y, bubble.pos.x, bubble.pos.y);
        
            if(d <= (snacks[i].r/2) + (bubble.r/2)  && snacks[i].r <= bubble.r){
                // bubble.r += (snacks[i].r*0.2);

                bubble.r += snacks[i].r*0.2;
                snacks.splice(i,1);
            }
            else if(d <= (snacks[i].r/2) + (bubble.r/2) && snacks[i].r > bubble.r){
                counter--;
            }
        }
    }
}
