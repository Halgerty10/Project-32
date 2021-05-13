class Ground {
    constructor(x, y,width,height) {
      var options = {
          'isStatic': true,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.color = color(1,150,200);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      
      push();
      fill(this.color);
      translate(pos.x, pos.y);
      rect(0,0,this.width,this.height);
      pop();
    }
  }

  