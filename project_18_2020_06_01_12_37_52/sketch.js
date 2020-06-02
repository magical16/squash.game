 var ball,img,paddle;
function preload() {
  ballimg = loadImage("ball.png");
  paddleimg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=9;
  ball.velocityY=5;
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg);
  

}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  paddle.collide(edges);
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  if (ball.x>400){
    reset();
  }
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}
function reset(){
  ball.x = 10
ball.y = 200;
ball.velocityX = 9;
ball.velocityY = 5;
} 

