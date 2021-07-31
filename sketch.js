var maxNumPowers = 3, powersCollected = 0;


function preload() {
  trollImg = loadImage("images/rpgcharacter_18.png");
  beamImg = loadImage("images/gameplayobject_arrow_02.png");
  powerPadImg = loadImage("images/powerupBlue_bolt.png");
  watergirlImg = loadImage("images/gameplayadventure_04.png");
  exitImg = loadImage("images/exit.png");
  fireImg = loadImage("images/fire.jpeg");

}

function setup() {
  createCanvas(1400,740);
  troll=createSprite(1210,270,10,10);
  troll.addImage(trollImg);
  troll.scale = 0.4;
  
  
  
  beam = createSprite(108,185);
  beam.addImage(beamImg)
  beam.scale = 0.1;
  beam.visible = false;
  

  powerPad=createSprite(1025,490);
  powerPad.addImage(powerPadImg);
  
  watergirl=createSprite(390,530,20,20);
  watergirl.addImage(watergirlImg);
  watergirl.scale = 0.07;
  
  exit=createSprite(900,300,50,50);
  exit.addImage(exitImg);
  exit.scale = 0.3;
  
  fireboy=createSprite(390,480);
  fireboy.addImage(fireImg); 
  fireboy.scale = 0.10;

  b4=createSprite(700,560,700,10)
  b4.shapeColor = "brown";

  b5=createSprite(355,410,10,300)
  b5.shapeColor = "brown";
  
  b6=createSprite(500,260,300,10)
  b6.shapeColor = "brown";

  b7=createSprite(700,250,300,30);
  b7.shapeColor = "brown";

  b8=createSprite(800,220,300,30);
  b8.shapeColor = "brown";

  b9=createSprite(900,195,330,30);
  b9.shapeColor = "brown";

  b10=createSprite(1055,490,10,150);
  b10.shapeColor = "brown";

  b11=createSprite(1150,410,200,20);
  b11.shapeColor = "brown";

  b12=createSprite(1250,300,10,240);
  b12.shapeColor = "brown";

  b13=createSprite(1130,195,240,30);
  b13.shapeColor = "brown";

  b14=createSprite(400,500,100,10);
  b14.shapeColor = "brown";

  Lava=createSprite(550,440,100,10);
  Lava.shapeColor = "orange"

  lava2=createSprite(600,560,100,10);
  lava2.shapeColor = "orange"

  b17=createSprite(1025,530,50,50);
  b17.shapeColor = "red"

  b18=createSprite(800,440,100,10);
  b18.shapeColor = "blue"

  b19=createSprite(1210,365,70,70)
  b19.shapeColor = "red"

  b20=createSprite(950,330,200,10)
  b20.shapeColor = "brown"
 
  b21=createSprite(950,400,100,20)
  b21.shapeColor = "brown"
  
  ToxicAcid=createSprite(1100,395,70,10);
  ToxicAcid.shapeColor = "green"

  gate1=createSprite(750,520,20,70);
  gate1.shapeColor = (rgb(0,0,128));

  button1=createSprite(700,550,30,10);
  button1.shapeColor = (rgb(0,0,128));

  ToxicAcidBeam=createSprite(700,395,200,10)
  ToxicAcidBeam.shapeColor = "red"
  ToxicAcidBeam.setVelocity(-12,0)
  edges = createEdgeSprites();
  
  button2=createSprite=(700,200,100,100)
  button2.shapeColor = "red"
}

function draw() {
  background("black");
  watergirl.setVelocity(0,0);
  drawSprites();
  
  watergirl.bounceOff(b4)
  watergirl.bounceOff(b5)
  watergirl.bounceOff(b6)
  watergirl.bounceOff(b7)
  watergirl.bounceOff(b8)  
  watergirl.bounceOff(b9) 
  watergirl.bounceOff(b10)
  watergirl.bounceOff(b11)
  watergirl.bounceOff(b12)
  watergirl.bounceOff(b13)
  watergirl.bounceOff(b14) 
  watergirl.bounceOff(b17)
  watergirl.bounceOff(b18)
  watergirl.bounceOff(b19)
  watergirl.bounceOff(b20)
  watergirl.bounceOff(ToxicAcidBeam)
  ToxicAcidBeam.bounceOff(b5)
  ToxicAcidBeam.bounceOff(b21)
  watergirl.bounceOff(b21)
  fireboy.bounceOff(b4)
  fireboy.bounceOff(b5)
  fireboy.bounceOff(b6)
  fireboy.bounceOff(b7)
  fireboy.bounceOff(b8)  
  fireboy.bounceOff(b9) 
  fireboy.bounceOff(b10)
  fireboy.bounceOff(b11)
  fireboy.bounceOff(b12)
  fireboy.bounceOff(b13)
  fireboy.bounceOff(b14) 
  fireboy.bounceOff(b17)
  fireboy.bounceOff(b18)
  fireboy.bounceOff(b19)
  fireboy.bounceOff(b20)
  fireboy.bounceOff(ToxicAcidBeam)
  fireboy.bounceOff(b21)

  if (gate1.visible){
        watergirl.bounceOff(gate1)
        fireboy.bounceOff(gate1);
  }
  
  if (keyDown("UP_ARROW")) {
    watergirl.setVelocity(0,-15);
  }
  watergirl.velocityY += 1.5;

  /*if (keyDown(UP_ARROW)) { 
   //   watergirl.setVelocity(0,-6) 
 }
  if (keyDown(DOWN_ARROW)) {
    watergirl.setVelocity(0,6);
  }*/
  if (keyDown("LEFT_ARROW")) {
    watergirl.setVelocity(-6,0);
  }
  if (keyDown("RIGHT_ARROW")) {
    watergirl.setVelocity(6,0);
  }
  if(keyDown("DOWN_ARROW")){
    watergirl.setVelocity(0,15)
  }

  if(keyDown("A")){
    fireboy.setVelocity(-6,0);
  }
  if(keyDown("D")){
    fireboy.setVelocity(6,0)
  }
  if(keyDown("w")){
    fireboy.setVelocity(0,-6)
  }
  if(keyDown("s")){
    fireboy.setVelocity(0,6)
  }

  if (watergirl.isTouching(button1)||fireboy.isTouching(button1)){
   
    gate1.visible = false ;
  }
      
  if (watergirl.isTouching(Lava) || watergirl.isTouching(lava2) ||
      watergirl.isTouching(troll) || watergirl.isTouching(ToxicAcid)){
      watergirl.x = 390;
      watergirl.y = 530;
  }
  if(fireboy.isTouching(ToxicAcid)||fireboy.isTouching(b18)){
    fireboy.x = 390 
    fireboy.y = 480
  }
  
  if (watergirl.isTouching(powerPad)||fireboy.isTouching(powerPad)){
    powerPad.visible = false;
    powersCollected++;
  }
  
  if (keyDown("f") && powersCollected> 0){
    beam.x = watergirl.x + 10;
    beam.y = watergirl.y;
    beam.x = fireboy.x
    beam.y = fireboy.y
    beam.visible = true;
    beam.velocityX = 5;
    powersCollected--;
  }
  
  if (troll.isTouching(beam)){
    troll.destroy();
    beam.destroy();
   
  }
  if (beam.velocityX!==0 && beam.isTouching(edges[2])){
    beam.destroy();    
  }

  if (watergirl.isTouching(exit)){
    watergirl.visible = false;
    troll.visible = false;
    gate1.visible = false;
    button1.visible = false;
    beam.visible = false;
    powerPad.visible = false;
    exit.visible = false;
    lava.visible = false;
    lava2.visible = false;
    lava3.visible = false;
    b1.visible = false;   
    b2.visible = false;  
    b3.visible = false;
    
    text("YOU WON LEVEL 1! CONGRATS",100,200,200,200);
  }
  
  
    
}
