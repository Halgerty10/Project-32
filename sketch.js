const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1,base2;
var slingshot,block1;
var polygon,backgroundImg;
var score = 0;

function preload() {
    getBackgroundImage();
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,635,1200,50);
	




	//Create the Bodies Here.
	base1 = new Ground(480,500,225,25);
	base2 = new Ground(750,275,225,25);

	polygon = new Polygon(100,490,20,20)
	slingShot = new Slingshot(polygon.body,{x: 100, y: 450});


	block1 = new Block(400,450,40,50);
	block2 = new Block(440,450,40,50);
	block3 = new Block(480,450,40,50);
	block4 = new Block(520,450,40,50);
	block5 = new Block(560,450,40,50);

	block4_1 = new Block(670,225,40,50);
	block4_2 = new Block(710,225,40,50);
	block4_3 = new Block(750,225,40,50);
	block4_4 = new Block(790,225,40,50);
	block4_5 = new Block(830,225,40,50);

	//fill("pink");
	block2_1 = new Block(440,400,40,50);
	block2_2 = new Block(480,400,40,50);
	block2_3 = new Block(520,400,40,50);
	
	//fill("white");
	block3_1 = new Block(480,350,40,50);
	block6_1 = new Block(750,125,40,50);
	
	//fill("orange");
	block5_1 = new Block(710,175,40,50);
	block5_2 = new Block(750,175,40,50);
	block5_3 = new Block(790,175,40,50);

	Engine.run(engine);
}


function draw() {
	if(backgroundImg){
        background(backgroundImg);
    }else{
        background("white");
    }

	rectMode(CENTER);
  

	textSize(15);
	text("Press space for 2nd Chance!",200,100);
	text("Score:" + score,750,40);
	
  //here
	base1.display();
	base2.display();

	polygon.display();

	block1.display();
	block1.score();
	block2.display();
	block2.score();
	block3.display();
	block3.score();
	block4.display();
	block4.score();
	block5.display();
	block5.score();

	block2_1.display();
	block2_1.score();
	block2_2.display();
	block2_2.score();
	block2_3.display();
	block2_3.score();

	block3_1.display();
	block3_1.score();


	block4_1.display();
	block4_1.score();
	block4_2.display();
	block4_2.score();
	block4_3.display();
	block4_3.score();
	block4_4.display();
	block4_4.score();
	block4_5.display();
	block4_5.score();

	block5_1.display();
	block5_1.score();
	block5_2.display();
	block5_2.score();
	block5_3.display();
	block5_3.score();

	block6_1.display();
	block6_1.score();
	slingShot.display();
	ground.display();

  	drawSprites();
 
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon.body);
    }
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
	slingShot.fly();
}

async function getBackgroundImage(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    console.log(datetime);

    var hour = datetime.slice(11,13);
    console.log(hour);

    if(hour > 06 && hour < 19){
        bg = "daytime.jpg";
    }else {
        bg = "star wars outer space.jpg"
    }
    backgroundImg = loadImage(bg);
}