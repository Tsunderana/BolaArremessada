var block1;
var block2;
var block3;
var ground;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var block1_options = {
		restitution: 0.5,
		density: 1.2
	}

	var block2_options = {
		restitution: 0.2,
		friction: 0.01,
		
	}

	var block3_options = {
		restitution: 0.4,
		frictionAir: 0.01
	}

	var ground_options = {
		isStatic : true
	}

	block1 = Bodies.circle(80,100,20,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(700,390,20,40,ground_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(600,390,20,40,ground_options);
	World.add(world,block3);

	ground = Bodies.rectangle(400,400,800,20,ground_options);
    World.add(world,ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);
  Engine.update(engine);

  ellipse(block1.position.x,block1.position.y,20);
  rect(block2.position.x,block2.position.y,20,40);
  rect(block3.position.x,block3.position.y,20,40);
  rect(ground.position.x,ground.position.y,800,20);

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(block1,block1.position,{x:65,y:-65});
	}
}

//projeto PRO_1-1_C20_AtividadeDoAluno1-main
