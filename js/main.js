const width = window.innerWidth;
const height = window.innerHeight;
const snacks = [];
const count = width/3;
let bubble;
const lives = 1;
let counter = lives;

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

function fillArr(){
    for(let i = 0; i < count; i++){
        snacks[i] = new Snack();
    }
}

function drawSnacks(){
    for(let snack of snacks){
        snack.show();
        snack.update();
    }
}

// Set the origin to the middle of the screen and set the scale of the canvas in depency to the bubble radius 
function translateAndScale(){
    translate(width/2, height/2);
    newZoom = 30 / (bubble.r*0.5);
    zoom = lerp(zoom, newZoom, 0.1);
    scale(zoom);    
    translate(-bubble.pos.x, -bubble.pos.y);
}


// Increse velocity when the radius of the player increase
function move(){
    if(keyCode === 37 && keyIsPressed === true){
        //left
        bubble.pos.x -= (3 / newZoom) + 0.7;
    }
    if(keyCode === 38 && keyIsPressed === true){
        //up
        bubble.pos.y -= (3 / newZoom) + 0.7;
    }
    if(keyCode === 39 && keyIsPressed === true){
        //right
        bubble.pos.x += (3 / newZoom) + 0.7;
    }
    if(keyCode === 40 && keyIsPressed === true){
        //down
        bubble.pos.y += (3 / newZoom) + 0.7;
    }
}

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

function restart(){
    counter = lives;
    document.querySelector("#wrapper").style.zIndex = -1;
    // document.querySelector("#counter").innerHTML = "Lifes: " +counter;
    bubble.pos.x = 0;
    bubble.pos.y = 0;
    bubble.r  = 15; 
    zoom = 1;
    newZoom = 0; 
    scale(1);
    fillArr();
    loop();
}

function setLives(){
    document.querySelector("#counter").innerHTML = "Lifes: " +counter;
}