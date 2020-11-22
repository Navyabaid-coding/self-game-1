
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var PLAY = 1;
var END= 0;
var gameState =PLAY;
var score =0;

var engine, world;
var player,coin,ground;
//var playerImg,coinImg;
var obstaclesGroup,obstacle1,obstacle2,obstacle3;

function preload(){
 player=loadImage("images/my player.png");
 coin=loadImage("images/coin.png");
 obstacle1=loadImage("images/New folder/o1.jfif");
 obstacle2=loadImage("images/New folder/o2.jfif");
 obstacle3=loadImage("images/New folder/o3.jfif");
}

function setup(){
    var canvas = createCanvas(displayWidth-50,displayHeight-50);
    engine = Engine.create();
    world = engine.world;
    player = new Players(100,100,20,80);
    coin = new Coin(600,200,30,30);
    ground=new Ground(10,380,50,200)
    
    obstaclesGroup = new Group();
}

function draw(){

    background(0);
    Engine.update(engine);
    player.display();
    coin.display();
    ground.display();

    text("SCORE"+score,displayWidth-90,displayHeight-90);
    if(gameState===PLAY){
        score= score+ Math.round(getFrameRate()/60);
        ground.velocityX=-(4+4*score/100);
        carmera.position.x=display.width/2;
        camera.position.y=player.position.y;

        if(keyDown(rightArrow)){
            player.velocityX=-5;
        }
        if(keyDown(leftArrow)){
            player.velocityX= 5;
        
        }

        spawnObstacles();

    }







  
}

function spawnObstacles(){

   if (frameCount % 20 === 0) {
        obstacles = createSprite(random(100, 1000), 0, 100, 100);
        obstacles.velocityX = 6;
       obstacles.lifetime=100;
       var rand = Math.round(random(1,5));
      switch(rand){
      case 1: obstacles.addImage(obstacle1);
          break;
          case 2: obstacles.addImage(obstacle2);
          break;
           case 3: obstacles.addImage(obstacle3);
        break;
           
    } obstacleGroup.add(obstacles);
}}



