const width = window.innerWidth;
const height = window.innerHeight;
const snacks = [];
const count = width/9;
let bubble;
const lives = 1;
let counter = lives;


function setup(){
    createCanvas(width, height);
    fillArr();
    bubble = new Bubble();
}

function draw(){
    background(200);
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
    if(keyCode === 37 && keyIsPressed === true && bubble.x > 0){
        //left
        bubble.x -= 3;
    }
    if(keyCode === 38 && keyIsPressed === true && bubble.y > 0){
        //up
        bubble.y -= 3;
    }
    if(keyCode === 39 && keyIsPressed === true && bubble.x < width){
        //right
        bubble.x += 3;
    }
    if(keyCode === 40 && keyIsPressed === true && bubble.y < height){
        //down
        bubble.y += 3;
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
    bubble.x = width/2;
    bubble.y = height/2;
    fillArr();
    loop();
}

function setLives(){
    document.querySelector("#counter").innerHTML = "Lifes: " +counter;
}