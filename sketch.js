const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImage,explorer;


function preload(){
backgroundImage=loadImage("jungle.png")


}
function setup(){
    var canvas = createCanvas(4000,700);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,7000,50)
  explorer=new Explorer(30,690,100,100)
   

}

function draw(){
    background(backgroundImage);

    Engine.update(engine);
  
    ground.display();
    explorer.display();

  
    if(keyIsDown(LEFT_ARROW)){
      explorer.moveLeft();
    }

    if(keyIsDown(RIGHT_ARROW)){
      explorer.moveRight();
    }

}

function moveleft(){
  if(keyDown(LEFT_ARROW)){
    Explorer.moveLeft();
  }
}

function moveright(){
  if(keyDown(RIGHT_ARROW)){
    Explorer.moveRight();
  }
}