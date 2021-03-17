class Drops{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:1.3,
			friction:0.1,
			density:2
        }
        this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);
		
 }

 ellipse(){
	this.body.display();
 }

        display(){
            var pos=this.body.position;	
				
			
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
			
			
        }
 };

 var maxDrops=100;

 for(var i=0; i<maxDrops; i++){
	 drops.push(new createDrop(random(0,400),random(0,400)));
 }

 