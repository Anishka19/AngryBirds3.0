class Chain{
    constructor(bodyA, bodyB) {
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.05,
            length : 10
        }

        this.chain = Constraint.create(options);

        World.add(world, this.chain);
    }
    display(){
        var a = this.chain.bodyA.position;
        var b = this.chain.bodyB.position;

        line(a.x, a.y, b.x, b.y);
    }
}