
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof
var bob1,bob2,bob3,bob4,bob5
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	roof=new Roof(295,130,50,440)
	bob1=new bob(170,360,30)
	bob2=new bob(230,360,30)
	bob3=new bob(290,360,30)
	bob4=new bob(350,360,30)
	bob5=new bob(410,360,30)
rope1=new Rope(bob1.body,{x:170,y:130})
rope2=new Rope(bob2.body,{x:230,y:130})
rope3=new Rope(bob3.body,{x:290,y:130})
rope4=new Rope(bob4.body,{x:350,y:130})
rope5=new Rope(bob5.body,{x:410,y:130})
  console.log(roof.x,roof.y)
  console.log(bob1.r)
  //console.log(rope4.offsetY)
}


function draw() {

  rectMode(CENTER);
  background("white");
  
   

  
  rope1.Display()
  rope2.Display()
  rope3.Display()
  rope4.Display()
  rope5.Display()
  roof.Display() 
  bob1.Display()

  bob2.Display()
 
  bob3.Display()


  bob4.Display()




  bob5.Display()
text("PRESS UP ARROW KEY TO SEE MAGIC",200,60)
  drawSprites()
 
}

function keyPressed(){

  if (keyCode===(UP_ARROW)){
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-10})
  }
}


