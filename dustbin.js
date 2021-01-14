class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.dustbin2 = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png")
      World.add(world, this.dustbin2);
    }
    display(){
      var pos =this.dustbin2.position;
     push ()
     translate (pos.x,pos.y)
      imageMode(CENTER);
      
      image(this.image,0,0, this.width, this.height);
     pop ()
    }
  };
