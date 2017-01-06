function Star(){
	this.x = random(-width/2,width/2);
	this.y = random(-height/2,height/2);
	this.z = random(width);
	this.size = random(3);
	this.pz = this.z

	this.update = function(inSpeed){
		 this.z = this.z -inSpeed;
		 if(this.z < 1){
		 	this.z = random(width);
		 	this.x = random(-width/2,width/2);
			this.y = random(-height/2,height/2);
			this.pz = this.z
		 }
	}

	 

	this.show = function(){
		
		var sx = map( this.x / this.z, 0, 1,0,width);
		var sy = map( this.y / this.z , 0 , 1, 0,height);
		var sz = map( this.z  , 0,width,5,0);
		//console.log(sx+","+sy);
		//fill(255,0,255);
		noStroke();
		//ellipse(sx,sy,sz,sz);

		var px = map( this.x / this.pz, 0, 1,0,width);
		var py = map( this.y / this.pz, 0, 1,0,height);
		this.pz = this.z;
		stroke(0,0,255);
		line(px,py,sx,sy);
	}

	 
}