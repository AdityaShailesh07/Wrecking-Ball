const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball,rope,floor1,floor2,floor3,floor4,floor5,floor6,floor7,floor8,floor9,floor10,floor11,floor12,floor13,floor14,ground;


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,785,1200,30)

    ball = new WreckingBall(600,400,80,80)
    
    floor1 = new Building(1000,100,200,50)
    floor2 = new Building(1000,100,200,50)
    floor3 = new Building(1000,100,200,50)
    floor4 = new Building(1000,100,200,50)
    floor5 = new Building(1000,100,200,50)
    
    floor6 = new Building(800,100,200,50)
    floor7 = new Building(800,100,200,50)
    floor8 = new Building(800,100,200,50)
    floor9 = new Building(800,100,200,50)
    floor10 = new Building(800,100,200,50)
    floor11 = new Building(800,100,200,50)
    floor12 = new Building(800,100,200,50)
    floor13 = new Building(800,100,200,50)
    floor14 = new Building(800,100,200,50)
    floor15 = new Building(800,100,200,50)
    floor16 = new Building(800,100,200,50)
    rope = new Crane(ball.body,{x:500, y:100});
}

function draw(){
    background(0);
    Engine.update(engine);
  ground.display();
  fill("orange")
  floor6.display();
  floor7.display();
  floor8.display();
  floor9.display();
  floor10.display();
  floor11.display();
  floor12.display();
  floor13.display();
  floor14.display();
  floor15.display();
  floor16.display();
  floor16.display();
  fill("red")
  floor1.display();
  floor2.display();
  floor3.display();
  floor4.display();
  floor5.display();
  fill("orange")
  ball.display();
  
  rope.display();

  
}
function mouseDragged(){

        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}