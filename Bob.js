class bob{
    constructor(x,y,r){
        this.x=x
        this.y=y
        this.r=r
      
       
        this.body=Bodies.circle(this.x,this.y,this.r,{isStatic:false,density:1.2,restitution:1,friction:0})
        Matter.World.add(world,this.body)
        
    }
    Display(){
      
        push()
        ellipseMode(RADIUS)
        fill("blue")
        translate(this.body.position.x,this.body.position.y) 
        rotate(this.body.angle)
        ellipse(0,0,this.r)
       pop()
    }
    }
   /* function keyPressed(){

        if (keyCode===(UP_ARROW)){
            Matter.Body.applyForce(ball1.body,ball1.body.position,{x:240,y:-200})
        }
    }*/