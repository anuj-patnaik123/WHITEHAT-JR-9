var ball ;
function setup() {
  createCanvas(400,400);

  ball=createSprite(200,200);
  ball.scale = 0.1
}

function draw() 
{
  background("yellow");

  if(keyIsDown(LEFT_ARROW)){
    ball.position.x = ball.position.x - 5
  }
  if(keyIsDown(RIGHT_ARROW)){
    ball.position.x = ball.position.x + 5
  }
  if(keyIsDown(UP_ARROW)){
    ball.position.y = ball.position.y - 5
  }
  if(keyIsDown(DOWN_ARROW)){
    ball.position.y = ball.position.y + 5
  }


  drawSprites();

}




