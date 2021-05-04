var dog, dogi ;
var happyDog, happyDogi;
var database;
var foodS;
var foodStock;
function preload()
{
  dogi = loadImage("images/Dog.png");
  happyDogi = loadImage("images/happydog.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250);
  dog.addImage(dogi);
  dog.scale = 0.15;

  // happyDog = createSprite()
  // happyDog = addImage(happyDogi);
  // happyDogi.scale = 1

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogi)
  }

  drawSprites();

  fill("white");
  text("FOOD REMAINING: " + foodS, 170,170);

  
  fill("white");
  text("Press UP Arrow To Feed The Dog", 170,350);
}

function writeStock(x){
  if(x <= 0){
    x = 0;
  }
  else{
    x = x-1
  }
   database.ref('/').update({
     Food: x
   })
}

function readStock (data){
  foodS = data.val();
  // dog.x = dogPosition.x
}

