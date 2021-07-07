class Virus{
    constructor(x,y){
     this.enemy=createSprite(x,y,20,20)  
     this.enemy.shapeColor="yellow"
     this.enemy.velocityY=2

     this.image=loadImage("images/covidvirus.png")
     this.enemy.addImage(this.image)
     this.enemy.scale=0.05
    // virusGroups.add(this.enemy)

    }
   display(){
      if(player.isTouching(this.enemy)){
          this.enemy.destroy()
          if(lives==3){
              life3.destroy()

          }
else if(lives==2){
    life2.destroy()
}
else{life1.destroy()}
      
      lives=lives-1;  }
      
}
end(){
    this.enemy.velocityY=0
}
}