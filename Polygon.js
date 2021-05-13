class Polygon {
    constructor(x, y,radius) {
      var options = {
          'isStatic': false,
          'restituition': 0,
          'friction': 1,
          'density': 1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      

      push();
      translate(pos.x, pos.y);
      fill("orange");
      //ellipse(0,0,this.radius,this.radius);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius*2,40);
      pop();
    }
  };
