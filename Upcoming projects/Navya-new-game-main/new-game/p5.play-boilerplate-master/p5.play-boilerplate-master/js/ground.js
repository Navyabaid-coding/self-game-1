class Ground{
constructor(x,y,width,height){
  var  options = {
        'static':1.0,
        'density':1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
}

display(){
    rectMode(CENTER);
    fill(76,21,0);
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
}

}