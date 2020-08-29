var car, wall, thickness;
var speed, weight, deformation;
function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  speed = random(223, 321)
  weight = random(30, 52)
  bullet = createSprite(50, 200, 70, 10);
  wall = createSprite(1280,200,thickness,height/2)
  wall.shapeColor = color(230,230,230)
  bullet.velocityX = speed  
  bullet.shapeColor = "white"
}

function draw() {
  background(0,0,0); 
  if(wall.x-bullet.x <= (bullet.width+wall.width)/2){
  bullet.velocityX = 0
  deformation = (0.5 * speed * speed * weight)/(thickness*thickness*thickness);
  }
  
  if (deformation > 10){
    bullet.shapeColor = "red"
  }
  else{
    bullet.shapeColor = "green"
  }
  drawSprites() 
}
