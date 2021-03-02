
class Paper  {
    constructor(x,y,r){
       
    var options = {
        isStatic:false,
        'density':0.1,
        'friction':1.0,
        'restitution':0.6
    }
    
    this.x=x;
    this.y=380;
    this.r=70;
    this.image=loadImage("paper.png");


    this.body=Bodies.circle(this.x,this.y,this.r,options)
    World.add(world,this.body);
}
    
    display(){
        
        var pos=this.body.position
        push();
    translate(pos.x,pos.y);
    strokeWeight(1);
    fill("red");
    imageMode(CENTER)
    image(this.image, 0,0, this.r,this.r);
    pop();
    }
    }