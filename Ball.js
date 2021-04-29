class Ball 
{
    constructor(x, y, width, height) {
    var options = {
          'restitution':1,
          'friction':0,
          'density':0.5,
      }
      this.body = Bodies.rectangle(x, y, 10, 10, options);
      this.width = 10;
      this.height = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  
