const width = window.innerWidth;
const height = window.innerHeight;
const snacks = [];
const count = width/3;
let bubble;
let counter = 1;
let vel;
let zoom = 1;
let newZoom;

function setup(){
    createCanvas(width, height);
    fillArr();
    bubble = new Bubble();
}

function draw(){
    background(127+(bubble.pos.x*0.01),127-(bubble.pos.y*0.01), 127+(bubble.pos.x*0.01));
    translateAndScale();
    drawSnacks();
    bubble.show();
    bubble.eat();
    move();
    stopGame();
}

// Fill the array with snacks.
function fillArr(){
    for(let i = 0; i < count; i++){
        snacks[i] = new Snack();
    }
}

// Display snacks on the canvas.
function drawSnacks(){
    for(let snack of snacks){
        snack.show();
        snack.update();
    }
}

// Set the origin to the middle of the screen and set the scale of the canvas in depency to the bubble radius. 
function translateAndScale(){
    translate(width/2, height/2);
    newZoom = 30 / (bubble.r*0.8);
    zoom = lerp(zoom, newZoom, 0.1);

    if( zoom <= 0.35){
        zoom = 0.35;
    }    
    scale(zoom);
    translate(-bubble.pos.x, -bubble.pos.y);

// Calculation the velocity of the player in depency of the scaling.
    vel = (4 / newZoom) + 0.7;
}


// Increase velocity when the radius of the player increases.
function move(){
    if(keyCode === 37 && keyIsPressed === true){
        //left
        bubble.pos.x -= vel;
    }
    if(keyCode === 38 && keyIsPressed === true){
        //up
        bubble.pos.y -= vel;
    }
    if(keyCode === 39 && keyIsPressed === true){
        //right
        bubble.pos.x += vel;
    }
    if(keyCode === 40 && keyIsPressed === true){
        //down
        bubble.pos.y += vel;
    }
}

// Stopping the game if the player hits a bigger opponent.
function stopGame(){
    if(counter <= 0){
        noLoop();
        document.querySelector("#wrapper").style.zIndex = 1;
        document.querySelector('#result').innerHTML = 'GAME OVER!';
    }

    if(snacks.length <= 0){
        noLoop();
        document.querySelector("#wrapper").style.zIndex = 1;
        document.querySelector('#result').innerHTML = 'YOU WON!';
    }
}

// Resets the whole game.
function restart(){
    counter = 1;
    document.querySelector("#wrapper").style.zIndex = -1;
    bubble.pos.x = 0;
    bubble.pos.y = 0;
    bubble.r  = 20; 
    zoom = 1;
    newZoom = 0; 
    scale(1);
    fillArr();
    loop();
}
