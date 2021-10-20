var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombieImg;
var bullet;
var score=0;

function preload(){
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  bgImg = loadImage("assets/bg.jpeg");
  zombieImg = loadImage("assets/zombie.png");
}

function setup() {
createCanvas(1000,700);

bg = createSprite(500,400,1000,700)
bg.addImage(bgImg)

player = createSprite(200,500,50,50);
player.addImage(shooterImg);
player.scale = 0.3;
player.debug = false;
player.setCollider("rectangle",0,0,300,300);

bullet=createSprite(player.x,player.y,7,7);

zombieG=new Group();
bulletG=new Group();
}

function draw() {
  background(0); 
  text("score: "+ score,500,400);
  fill(225);
  text("Press Space to shoot",650 ,350);
  textSize(20);
  fill(225)

if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(bullet.collide(zombieG)){
  zombieG.destroyEach();
  bulletG.destroyEach();
  score+=50;
}

if(zombieG.collide(player)){
  player.destroy();
  zombieG.destroyEach();
  zombieG.visible=false;
  zombieG.velocityX=0;
  score=0;
  bullet.visible=false;
}

s();
shootBullet()
createZombie()
drawSprites();


}

function createZombie() {
  if (frameCount % 200 == 0) {
  var zombie = createSprite(random(500,1000),(random(0,500)));
  zombie.addImage(zombieImg);
  zombie.scale=0.2;
  zombie.velocityX = -3;
  zombieG.add(zombie);
  }
}

function s(){
  if(keyWentDown("space")){
    player.addImage(shooter_shooting);
    bullet.velocityX=5;
  }
  else if(keyWentUp("space")){
    player.addImage(shooterImg);
    bullet.velocityX=5;
  }
}
function shootBullet(){
  if(keyDown("space")){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= player.y-20
  bullet.scale=0.12
  bullet.velocityX= 7
  bulletG.add(bullet);
  }
}
