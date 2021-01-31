class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");

    this.Xarray = []
    this.Yarray = []
  }
  display(){
    super.display();

    if(this.body.speed > 5 && this.body.position.x > 200) {
    var birdX = [this.body.position.x]
    var birdY = [this.body.position.y]
    
    this.Xarray.push(birdX);
    this.Yarray.push(birdY);
    }

    push()
    for(var i = 0; i< this.Xarray.length; i++) {
          ellipseMode(RADIUS);
          fill("white");
          noStroke();
          ellipse(this.Xarray[i], this.Yarray[i],2);
    }
    pop();
  }
}