class constrant{
    constructor(body1,point2) {
      var opt={
         bodyA: body1,
         pointB: point2,
         length: 20,
         stiffness: 0.1
      }

      this.con = Matter.Constraint.create(opt);
      World.add(world,this.con);

      this.point2 = point2;

      //load images
      this.img1 = loadImage("sprites/sling1.png");
      this.img2 = loadImage("sprites/sling2.png");
      this.img3 = loadImage("sprites/sling3.png");
    }
    display() {
      
          if(this.con.bodyA){
            strokeWeight(3);
            line(this.con.bodyA.position.x-19,this.con.bodyA.position.y+10,this.point2.x,
              this.point2.y);
              line(this.con.bodyA.position.x-19,this.con.bodyA.position.y+10,this.point2.x+30,
                this.point2.y);

                image(this.img3,this.con.bodyA.position.x-25,this.con.bodyA.position.y-5,10,20)
          }

          image(this.img1,200,30);
          image(this.img2,175,30);

    }
    fly() {
       this.con.bodyA = null;
    }
}