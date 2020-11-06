class Rope{
    constructor(bodyA,bodyB){

        var options = {

            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.02,
            length : 10

        }

        this.rope = Matter.Constraint.create(options)
        World.add(world,this.rope)

    }

    display(){

        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;

        strokeWeight(5)
        line(posA.x,posA.y,posB.x,posB.y);
    }


}
