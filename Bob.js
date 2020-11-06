class Bob{

    constructor(x,y,r){

        var options = {

            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2

        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.Bob = Bodies.circle(this.x,this.y,this.r/2,options);
       
        World.add(world,this.Bob);
        


    }

    display(){

        push();
        ellipseMode(CENTER);
        ellipse(this.x,this.y,this.r,this.r);
        pop();



    }




}