function setup() {
  createCanvas(800,400);
 movingrect = createSprite(400, 200, 50, 50);
 fixedrect = createSprite (200,200,50,50);
 movingrect.shapeColor = "cyan"
 fixedrect.shapeColor = "pink"
}

function draw() {
  background(0); 
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY 
  if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2) {
    movingrect.shapeColor = "purple"
    fixedrect.shapeColor = "lightgreen"
    fixedrect.velocityX = 5
    fixedrect.velocityY = -3
    movingrect.velocityX = 6
    movingrect.velocityY = -4
  }
  else{
    movingrect.shapeColor = "cyan"
    fixedrect.shapeColor = "pink"
  }
  drawSprites();
}