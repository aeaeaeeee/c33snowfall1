class Snow
{
    constructor(x, y) {
        var options = {
            restitution: 0.9,
            friction: 0.9
        }
        this.image = loadImage("snow4.webp");
        this.body = Bodies.circle(x, y, 40, 40, 20, options);
        this.radius = 45;
        this.lifetime= 200;
        World.add(world, this.body);       
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        if(this.position.y > height)
        {
            Matter.Body.setPosition(this.body, {x: random(0, 1400), y: random(0, 50)});
        }
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        ellipseMode(RADIUS);
        image(this.image, pos.x, pos.y, this.radius, this.radius);
        pop();
    }

};

