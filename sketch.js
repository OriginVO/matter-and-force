var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);

		grounObj=new ground(width/2,670,width,20);
		leftSide= new ground(1100,600,20,120);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.bodies.circle(200,100,10,ball_options);
	world.add(world,body);

	Engine.run(engine);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
  
}


function draw() {
  rectMode(CENTER);	
  background(0);
  
  grounObj.display()
  drawSprites();
  Matter.bodies.circle=createSprite(200,200,10,ball_options);
}


function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,body.postion)
	}
}
