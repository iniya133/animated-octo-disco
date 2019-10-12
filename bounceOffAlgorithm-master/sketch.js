var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4, gameObject5;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
gameObject1 = createSprite(200, 300, 50, 40);
gameObject1.shapeColor = "blue";
gameObject2 = createSprite(300, 300, 50, 40);
gameObject2.shapeColor = "blue";
gameObject3 = createSprite(500, 300, 50, 40);
gameObject3.shapeColor = "blue";
gameObject4 = createSprite(600, 300, 50, 40);
gameObject4.shapeColor = "blue";
gameObject5 = createSprite(100, 300, 50, 40);
gameObject5.shapeColor = "blue";

  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
gameObject5.x = World.mouseX;
gameObject5.y = World.mouseY;

if (isTouching(gameObject5,gameObject4)){
gameObject5.shapeColor = "red";
gameObject4.shapeColor = "red";
}
else {
  gameObject4.shapeColor = "blue";
  gameObject5.shapeColor = "blue";
}
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

