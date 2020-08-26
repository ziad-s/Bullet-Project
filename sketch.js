var car, wall, thickness;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  speed = random(223, 321)
  weight = random(30, 52)
  bullet = createSprite(50, 200, 70, 10);
  wall = createSprite(1500,200,thickness,height/2)
  wall.shapeColor = color(80,80,80)
  wall.shapeColor=color(80,80,80)
  thickness = random(22,83)
  bullet.velocityX = speed  
  bullet.shapeColor = "white"
}

function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX = 0
 var deformation = (0.5 * speed * speed/thickness*thickness*thickness);
  }
  
  if (deformation > 10){
    bullet.shapeColor = "red"
  }
  else{
    bullet.shapeColor = "green"
  }
}
