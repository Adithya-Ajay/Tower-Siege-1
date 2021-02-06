const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(650,height,1300,20);

    box1 = new Box(600,600,90,90);
    box2= new Box(700,600,90,90);
    box3 = new Box(800,600,90,90);
    box4 = new Box(900,600,90,90);
    box5= new Box(1000,600,90,90);
    box6 = new Box(1100,600,90,90);
    box7 = new Box(1200,600,90,90);

    box8 = new Box(650,600-45,90,90);
    box9 = new Box(750,600-45,90,90);
    box10 = new Box(850,600-45,90,90);
    box11 = new Box(950,600-45,90,90);
    box12 = new Box(1050,600-45,90,90);
    box13 = new Box(1150,600-45,90,90);
    box0 = new Box(1250,600-45,90,90);

    box14 = new Box(650+50,600-90,90,90);
    box15 = new Box(750+50,600-90,90,90);
    box16 = new Box(850+50,600-90,90,90);
    box17 = new Box(950+50,600-90,90,90);
    box18 = new Box(1050+50,600-90,90,90);
    box19 = new Box(1150+50,600-90,90,90);

    box20 = new Box(650+100,600-135,90);
    box21 = new Box(750+100,600-135,90,90);
    box22 = new Box(850+100,600-135,90,90);
    box23 = new Box(950+100,600-135,90,90);
    box24 = new Box(1050+100,600-135,90,90);
    box25 = new Box(1150+100,600-135,90,90);

    box26 = new Box(650+150,600-180,90,90);
    box27 = new Box(750+150,600-180,90,90);
    box28 = new Box(850+150,600-180,90,90);
    box29 = new Box(950+150,600-180,90,90);
    box30 = new Box(1050+150,600-180,90,90);
    box31 = new Box(1150+150,600-180,90,90);






    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:430});
}

function draw(){
    background(100);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box0.display();

    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();

    
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();

    bird.display();
  
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}