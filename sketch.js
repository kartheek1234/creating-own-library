var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect =createSprite(200, 200, 30, 100);
  movingRect= createSprite(200,50,100,30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  movingRect.debug=true;
  fixedRect.debug=true;
  fixedRect.velocityY=-2;
  movingRect.velocityY=2;
}

function draw() {
  background("black");  
 // movingRect.x= World.mouseX;
//  movingRect.y= World.mouseY;
  if(isTouching(fixedRect, movingRect)){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";

  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";

  }
  bounceOff(movingRect, fixedRect);
  drawSprites();
}

