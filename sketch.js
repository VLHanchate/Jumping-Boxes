var canvas;
var block1,block2,block3,block4, block5;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}

//block5 = Stop Block

function setup(){
    canvas = createCanvas(770,770);

    block1 = createSprite(100,750,180,30);
    block1.shapeColor = ("DarkOrange");

    block2 = createSprite(290,750,180,30);
    block2.shapeColor = ("DarkTurquoise");

    block3 = createSprite(480,750,180,30);
    block3.shapeColor = ("GreenYellow");

    block4 = createSprite(670,750,180,30);
    block4.shapeColor = ("Gold");

    block5 = createSprite(385,740,10,20);
    block5.shapeColor = ("red")

    ball = createSprite(random(20,750),100, 27,27);
    ball.shapeColor = ("White");
    ball.velocityX = random(6,9);
    ball.velocityY = random(6,9);

}

function draw() {
    background("Gainsboro");
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = ("DarkOrange");

    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = ("DarkTurquoise");
        music.play();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = ("GreenYellow");

    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = ("Gold");

    }

    if(block5.isTouching(ball) && ball.bounceOff(block5)){
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    drawSprites();

}
