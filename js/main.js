const width = window.innerWidth;
const height = window.innerHeight;
const snacks = [];
const count = width/10;
let bubble;
const lives = 1;
let counter = lives;


function setup(){
    createCanvas(width, height);
    // frameRate(30);
    fillArr();
    // setLives();
    bubble = new Bubble();
}

function draw(){
    background(20);
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

function move(){
    if(keyCode === 37 && keyIsPressed === true){
        //left
        bubble.x -= 4;
    }
    if(keyCode === 38 && keyIsPressed === true){
        //up
        bubble.y -= 4;
    }
    if(keyCode === 39 && keyIsPressed === true){
        //right
        bubble.x += 4;
    }
    if(keyCode === 40 && keyIsPressed === true){
        //down
        bubble.y += 4;
    }
}

function stopGame(){
    if(counter <= 0){
        noLoop();
        document.querySelector("#wrapper").style.zIndex = 1;
    }
}

function restart(){
    counter = lives;
    document.querySelector("#wrapper").style.zIndex = -1;
    // document.querySelector("#counter").innerHTML = "Lifes: " +counter;
    bubble.x = width/2;
    bubble.y = height/2;
    fillArr();
    loop();
}

function setLives(){
    document.querySelector("#counter").innerHTML = "Lifes: " +counter;
}