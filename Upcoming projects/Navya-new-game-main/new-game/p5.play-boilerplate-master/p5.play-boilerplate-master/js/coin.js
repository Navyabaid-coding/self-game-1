class Coin {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, radius, options);
      this.radius = radius;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green");
      fill(255);
      ellipse(300,200,  this.radius,  this.radius);
      pop();
    }
  };