class Box  {
    constructor(x,y,width,height){
        var options={
            'isStatic':true,
            'restitution':0.1,
           'friction':5,
            'density':1

          }
          this.width = width;
          this.height = height;
          this.body=Bodies.rectangle(x,y,this.width,this.height,options)
          
          World.add(world,this.body)
    
        
    }   
display(){
    var pos=this.body.position
    var angle = this.body.angle;
    push() ;
    translate(pos.x,pos.y) ;
    rotate(angle); 
    rectMode(CENTER);
    strokeWeight(4);
    stroke("red")
    fill("red") ;
    rect(0,0,this.width,this.height);
    pop(); 
    }
}