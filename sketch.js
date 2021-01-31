const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backGround;
var platform;
var eboj;
var bgNight;

var gameState;
var fired;
var score = 0;

function preload() {
    //bg = loadImage("sprites/bg.png");
    api();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    platform = new Ground(150,310,300,160);

  

    eboj = new constrant(bird.body,{x: 190, y:60});

    //call
    //api();

    fired = false;

}

function draw(){
    
    Engine.update(engine);

   
    background("#fff");

    if(bgNight) {
        background(bgNight);
    }

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
 

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();

    platform.display();

    eboj.display();

    //scoring
    pig1.scoring();
    pig3.scoring();

   // drawSprites();
    
    textSize(20);
    fill("black")
   // noStroke();
    text("score: " + score, width-200,height/3);
    pop();

    
}

function mouseDragged() {
    if(fired === false) {
    Matter.Body.setPosition(bird.body,{x:mouseX , y: mouseY})
    }
}

function mouseReleased() {
     eboj.fly();
     fired = true;
 //    gameState = "over";
}

async function api() {
    var timeData = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var jsonCoverter = await timeData.json();
    var date = jsonCoverter.datetime;
    var take = date.slice(11,13);
    console.log(take);

    if(take > 06 && take < 18) {
        bg = "sprites/bg.png";
    } else {
        bg = "sprites/bg2.jpg";
    }
    bgNight = loadImage(bg);
}