var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
 function createApple(){
   apple = createSprite(random(50,350),40,10,10);
   apple.addImage(apple.png);
   apple.scale = 0.05;
   apple.velocityY = 5;
   apple.lifetime = 150;
 }
  
 var select_sprites = Math.round(random(1,2));

 if(frameCount % 80 == 0) {
   if(select_sprites == 1) {
     function createApple()
    }
    else{
      function createLeaves()
   }
 }