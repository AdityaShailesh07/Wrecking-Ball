class Crane{
    constructor(bodyA,pointB){
        var options={
            pointB:pointB,
            bodyA:bodyA,
            stiffness:1.3,
            length:500

        }
            this.pointB=pointB
            this.crane= Matter.Constraint.create(options)
            World.add(world,this.crane)

    }
    
    display(){
     push();
      strokeWeight(3) 
      stroke("white");
 line (this.pointB.x,this.pointB.y,this.crane.bodyA.position.x,this.crane.bodyA.position.y)
     pop()

    }

  }

