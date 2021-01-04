class Chain
{
    constructor(bodyA,bodyB)
    {
        var options = {
            bodyA:bird.body,
            bodyB:constrainedlog.body,
            stiffness:0.04,
            lenght:10
    
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain)
    }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        strokeWeight(3);
    line (ponitA.x,ponitA.y,pointB.x,pointB.y);
    
    }
}