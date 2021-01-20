var cat,mouse,bg;
function preload() {
    //loading the images here
    catImg1 =loadImage("images/tomOne.png");
    catImg2and3 =loadAnimation("images/tomThree.png","images/tomTwo.png");
    catImg4 =loadImage("images/tomFour.png");
    bg =loadImage("images/garden.png");
    mImg1 =loadAnimation("images/jerryOne.png");
    mImg2 =loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    mImg3 =loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("sleeping",catImg1);
    cat.scale= 0.2;

    mouse=createSprite(200,600);
    mouse.addAnimation("standing",mImg1);
    mouse.scale = 0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
  if (cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("catLastImage",catImg4);
    cat.x=300;
    cat.changeAnimation("catLastImage");

    mouse.addAnimation("mouseLastImage",mImg3);
    mouse.changeAnimation("mouseLastImage");
    
  }else {
      cat.addAnimation("catSitting",catImg1);
      cat.changeAnimation("catSitting");
  }
  
    drawSprites();
}

function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catImg2and3);
      cat.changeAnimation("catRunning");
      mouse.addAnimation("teasing",mImg2);
      mouse.changeAnimation("teasing");
  }
}
