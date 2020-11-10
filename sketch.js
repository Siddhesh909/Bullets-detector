var bullet;
var wall;
var thickness;
var speed;
var weight;
function setup() {
  createCanvas(1600 , 400);

  thickness = random(20 , 80);
  speed = random(223 , 321);
  weight = (30 , 52);

  bullet = createSprite(50 , 200 , 50 , 20);
  bullet.shapeColor = "white";

  wall = createSprite(1200 , 200 , thickness , height/2);
  wall.shapeColor = color(90,90,90);
}

function draw() {
  background(0 ,0 ,0);  

  bullet.velocityX = speed;

  if(touching(bullet , wall) === true){

     bullet.velocityX = 0;
     var damage = 0.5 * width * speed * speed/thickness*thickness*thickness;

     if(damage > 10){
        wall.shapeColor = color(255 , 0 , 0);
     }

     if(damage < 10){
       wall.shapeColor = color(0 , 255 , 0);
     }
  }

  drawSprites();
}