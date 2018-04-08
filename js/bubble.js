class Bubble{
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.r = 15;
    }
    show(){
        stroke(0);
        fill(255, 0, 0, 255);
        ellipse(this.x, this.y, this.r);
    }

    eat(){
        for(let i = 0; i < snacks.length; i++){
            let d = dist(snacks[i].x, snacks[i].y, bubble.x, bubble.y);
        
            if(d <= (snacks[i].r/2) + (bubble.r/2)  && snacks[i].r <= bubble.r){
                bubble.r += (snacks[i].r*0.2);
                snacks.splice(i,1);
            }
            else if(d <= (snacks[i].r/2) + (bubble.r/2) && snacks[i].r > bubble.r){
                bubble.r = 15;
                counter--;
            }
        }
    }
}
