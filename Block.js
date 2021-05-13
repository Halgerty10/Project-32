class Block {
    constructor(x, y,width,height) {
      var options = {
          'isStatic': false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.color = color(random(0,255),random(0,255),random(0,255));
      this.width = width;
      this.height = height;
      this.Visibility = 255;

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;

      
     

      if(this.body.speed < 3){
        push();
        fill(this.color);
        translate(pos.x, pos.y);
        rect(0,0,this.width,this.height);
        pop();
      }else {
        World.remove(world,this.body);
        this.Visibility = this.Visibility - 5;
        push()
        tint(255,this.Visibility);
        rect(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
        pop()
      }
    }

    score(){
      if(this.Visibility < 0 && this.Visibility > -105){
        score = score + 1;
      }
    }

  };