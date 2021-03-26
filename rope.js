class Rope{
   constructor(a,b){
        
        this.constraint=Matter.Constraint.create({
            bodyA:a,pointB:b,length:250,stiffness:1
          })
        Matter.World.add(world,this.constraint)
        
    }

Display(){
   
    var pointA=this.constraint.bodyA.position;
    var pointB=this.constraint.pointB;
   
 
    line(pointA.x,pointA.y,pointB.x,pointB.y);

}
}