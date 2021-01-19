
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1,box2,box3;
var paper;


function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  Engine.run(engine);

	ground = new Ground(600,600,1200,20);

	
  box1 = new Box(545,540,10,70);
  box2 = new Box(590,580,80,10);
  box3 = new Box(635,540,10,70);

  paper = new Paper(100,300,10);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine); 
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  paper.display();

  keyPressed();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{
      x:85,
      y:-85
    })
  }
}

