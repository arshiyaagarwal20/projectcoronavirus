class Sanitizer{
    constructor(x,y){
      this.sanitizer=createSprite(x,y,15,15)
      this.sanitizer.velocityY=2
      this.image=loadImage("images/ab.png")
      this.sanitizer.addImage(this.image)
      this.sanitizer.scale=0.2
    //  sanitizerGroups.add(this.sanitizer)
    }
   display(){

    if(player.isTouching(this.sanitizer)){
      score=score+100;
      this.sanitizer.destroy()  
      }
   }
    end(){
this.sanitizer.velocityY=0
   }
}

