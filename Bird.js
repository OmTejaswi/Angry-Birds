class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");

    this.Xarray = []
    this.Yarray = []
  }
  display(){
    super.display();

    var birdX = [this.body.position.x]
    var birdY = [this.body.position.y]

    this.Xarray.push(birdX);
    this.Yarray.push(birdY);

    for(var i = 0; i< this.Xarray.length; i++) {
          ellipseMode(RADIUS);
          fill("white");
          noStroke();
          ellipse(this.Xarray[i], this.Yarray[i],2);
    }
  }
}