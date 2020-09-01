class Form{

constructor() {
    this.button = createButton("feed the pet");
    this.button1 = createButton("add food");
    this.title = createElement("h2");
    
}
 

display(){
 this.title.html("Hi there myself bruno");
 this.title.position(100,100);
 if(mousePressed(this.button1)) {
    food = food+1;
    food.addImage("milk1",milk);
    food.update(food);
    this.title.hide();
    this.button.hide();
    this.button1.hide();
 }
if(mousePressed(this.button)) {
    milkRef = database.ref("milk");
    milk.on("value", (data)=>{
        milk.data.val();
    })
    milk.addImage("milk1", this.milk);
    milk = milk - 1;
    food = food + 1;
}


}



}