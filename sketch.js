
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1,box2,box3;
var paper;
var dustbin;
//function preload(){
  
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  Engine.run(engine);
  paper = new Paper(100,650,50);
	ground = new Ground(400,680,800,20);
 
 
   box1 = new Box(550,570);
  box2 = new Dustbin(700,565,10,200)
  // boxPosition=width/2-100
 	//boxY=610;


 //	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 //	boxleftSprite.shapeColor=color(255,0,0);

 //	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 //	World.add(world, boxLeftBody);
 // box3 = new Box(670,620,20,100);
 // paper = new Paper();

}


function draw() {
 // imageMode(CENTER);
  background(211,211,211);
  Engine.update(engine); 

  paper.display();

  ground.display();
//boxLeftBody.display()
  box1.display();
 box2.display();
 //dustbin.display
  //box3.display();
 

 //keyPressed();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-500})
     
  }
}

