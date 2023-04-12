var Sea, ship;
var SeaImg, ShipImg;
function preload(){
SeaImg=loadImage("sea.png");
ShipImg=loadAnimation("ship-1.png", "ship-1.png", "ship-2.png", "ship-1.png",);
}

function setup(){
  createCanvas(400,400);
  Sea=createSprite(400, 200)
  Sea.addImage(SeaImg);
  Sea.velocityX=-5;
  Sea.scale=0.3

  Ship=createSprite(130, 200, 30, 30);
  Ship.addAnimation("move","img");
  Ship.scale=0.25;
}

function draw() {
  background("blue");
    drawSprites();
if (Sea.x<0){
  Sea.x=Sea.width/8;
}
 
}
