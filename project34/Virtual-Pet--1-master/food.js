class Food{
constructor() {
    this.food = 0;
    this.milk = loadImage("Milk.png");
    this.lastFed = 0;
}

getfood() {
  var foodRef = database.ref("food");
  foodRef.on("value",(data)=>{
      milk = data.val();
  })
}
   update(milk) {
    database.ref('/').update({food:milk});
   }
  deductFood() {
   milk = milk-1;
    food.update(milk);
   dog.changeImage("dog2", happydogImg);
   }
     
//lastFed() {
//  feedtimeRef = database.ref("feedtime");
//  feedtime.on("value", (data=>{
  //  feedtime.data.val();
 // }))
 // }
}










