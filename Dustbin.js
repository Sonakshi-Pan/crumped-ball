class Dustbin {
    constructor(x,y,width,height){
        var options={
            'isStatic':true,
            'restitution':0.1,
           'friction':5,
            'density':1.2

          }
          this.width=width;
          this.height=height
        
          //this.image = loadImage("paper.png");
          this.body = Bodies.rectangle(x,y,this.width,this.height,options);
          World.add(world, this.body)
    }
    display(){
        var pos=this.body.position
        push(); 
        rectMode(CENTER);
        translate(this.body.position.x,this.body.position.y) ;
        fill ("white");
        rect(0,0,this.width,this.height);
        pop() ;  
    }
}