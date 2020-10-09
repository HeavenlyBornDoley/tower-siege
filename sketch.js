const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon)

//  box1 = new box(330,235,40,50);
//  box2 = new box(360,235,40,50);
//  box3 = new box(390,235,40,50);
//  box4 = new box(420,235,40,50);
//  box5 = new box(420,235,40,50);
//  box6 = new box(420,235,40,50);
//box7 = new box(420,235,40,50);
  box8 = new box(420,235,40,50);
  box9 = new box(330,235,40,50);
  box12 = new box(450,235,40,50);
  box13 = new box(360,235,40,50);
  box14 = new box(390,235,40,50);
  box15 = new box(420,235,40,50);
  box16 = new box(390,235,40,50);

  ground1 = new Ground(200,395,800,5)

  slingshot = new SlingShot(this.polygon,{x:100,y:200});
  

}

function draw() {
  background(255,255,255);  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  box4.display();

}
function mouseDragged(){
  if(gamestate != "launched"){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});}
}


function mouseReleased(){
  slingshot.fly();
  gamestate = "launched"
}