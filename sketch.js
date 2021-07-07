
var score=0 
var sanitizerGroups
var virusGroups
var arr=[]
var array=[]
var player
var life1, life2,life3
var lives=3
 var flag=0
var playerImg2
var Visibility=255

function preload(){
bgImage=loadImage("images/background.jpg")
playerIm=loadAnimation("images/Runner-1.png","images/Runner-2.png")
playerImg2=loadAnimation("images/Runner-1.png")
lifeIm=loadImage("images/life1.png")
life2Im=loadImage("images/life2.png")
life3Im=loadImage("images/life3.png")
gameoverIm=loadImage("images/stayhome.png")
bg2Im=loadImage("images/post2.png")
}
function setup(){
 createCanvas(800,1000)
 //tint(255,Visibility)
bg=createSprite(400,500,800,2000)
bg.addImage(bgImage)

bg.scale=1.5
player=createSprite(400,850,10,10)
player.shapeColor="red"
player.addAnimation("boy",playerIm)
player.scale=0.1
ground=createSprite(700,900,1400,20)
ground.visible=false;
life1=createSprite(100,300,20,20)
life1.addImage(lifeIm)
life1.scale=0.05
life2=createSprite(150,300,20,20)
life2.addImage(life2Im)
life2.scale=0.05
life3=createSprite(200,300,20,20)
life3.addImage(life3Im)
life3.scale=0.05
gameover=createSprite(450,500)
gameover.addImage(gameoverIm)
gameover.visible=false;
//virusGroups=new Group()
//sanitizerGroups=new Group()
}

function draw(){
background("lightblue")
 var r=Math.round(random(1,2))
 if(flag==0){

if(r==1){
  if(frameCount%100==0){
    virus1=new Virus(random(100,700),0)
    array.push(virus1)
  }
  
}
else{


if(frameCount%150==0){
  sanitizer=new Sanitizer(random(100,700),0)
  arr.push(sanitizer)
}
}}
player.velocityY=player.velocityY+0.5
player.collide(ground)
bg.velocityY=10;
if(keyDown("LEFT_ARROW")){
  player.x=player.x-4
}
if(keyDown("RIGHT_ARROW")){
  player.x=player.x+4
}
if(bg.y>=700){
  bg.y=500
}
for(var i=0;i<arr.length;i++){
  arr[i].display()
}
for(var i=0;i<array.length;i++){
  array[i].display()
}
if(lives==0){
gameover.visible=true;
bg.velocityY=0
//bg.addImage(bg2Im)
for(var i=0;i<arr.length;i++){
  arr[i].end()
}
gameover.scale=2
for(var i=0;i<array.length;i++){
  array[i].end()
}
player.addAnimation("p2",playerImg2)
player.changeAnimation("p2")
flag=1
//Visibility=Visibility-100
}
drawSprites()
stroke(2)
fill("black")
text("Score:",600,300)
text(score,640,300)

}