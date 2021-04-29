const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var box;
var ball, ball1 , ball2 ,ball3;
var rock;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    box = new Box(300,250)
    ball = new Ball(400,250)
    ball1 = new Ball(410,250);
    ball2 = new Ball(420,250);
    ball3 = new Ball(430,250);
    rock = new Rock(500,250) 

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    box.display();
    ball.display();
    ball1.display();
    ball2.display();
    ball3.display();
    rock.display();

         
 
}