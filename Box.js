class Box {
    constructor(x,y,width,height){
        var options={
            'isStatic':true,
            'restitution':0.1,
           'friction':5,
            'density':1.2

          }
          this.x=x;
          this.y=y;
         // this.width = 200;
         // this.height =213;
        //  this.thickness=20
          this.body1=Bodies.rectangle(this.x,this.y,this.width,this.thickness,options)
          this.body2=Bodies.rectangle(this.x+this.width/2,this.y+this.width/2,150,this.height,options)
          this.body3=Bodies.rectangle(this.x+this.width,this.y,this.width,this.thickness,options)
          this.image=loadImage("dustbin.png")
          World.add(world,this.body1);    
          World.add(world,this.body2);
          World.add(world,this.body3)
          
          console.log(this.body1.position)
        console.log(this.body2.position)
    }   
display(){
    var posBody1 = this.body1.position;
    var posBody2 = this.body2.position;
    
    var angle = this.body1.angle;
    push() ;
    translate(this.body1.position.x,this.body1.position.y) ;
    translate()
    rotate(this.body1.angle);
    rectMode(CENTER) 
    angleMode(RADIANS);
    fill("wwhite") ;
   rect(0,0,10,200);
    pop();
 
    push();
    translate(this.body2.position.x,this.body2.position.y) ;
    rotate(this.body2.angle);
    angleMode(RADIANS)
    rectMode(CENTER);
    fill("white")
    rect(630,670,150,10);
    pop()


    push() ;
    translate(this.body3.position.x,this.body3.position.y) ;
    translate()
    rotate(this.body3.angle);
    imageMode(image) 
    angleMode(RADIANS);
    fill("red") ;
    image(this.image,550,465,150,200);
    pop();
 
    
    }
    
   
}   





