//Create variables here 
var dogImg;
var happydogImg;
var food;
var milk;
var database;
var canvas;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happydogImg = loadImage("images/a.png");
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  
  food = new Food();
  dog = createSprite(displayWidth/2 - 200, displayHeight - 100);
  food.getfood();
  dog.addImage("dog1", dogImg);
  dog.addImage("dog2", happydogImg);
 // form = new Form;
 // form.display();
}

function draw() {  
  background(46, 139, 87);
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    
    food.deductFood();
 }
  text("Feed your pet and make him feel happy"+ milk, 250, 50);
  fill("red");
  stroke(20);
}



