/*
   Author: Alok Mishra
   From: https://www.youtube.com/watch?v=17WoOqgXsRM
   This is a P5.js version of the Starfield in Processing video by Daniel Shiffman 
 */

var stars = []
var speed;
var centerX;
var centerY;

function setup(){
	createCanvas(1440,900); // 
	 
	for(var i=0;i< 2000;i++){
		stars[i] = new Star();
	}

	centerX=width/2;
	centerY=height/2;
}

function draw(){
	if (!mouseIsPressed)
		speed = map(mouseX,0,width,0,50);
	background(0);
	translate(centerX,centerY);
	noFill();
	stroke(1,45);
	ellipse(0,0,20,20);
	for(var i=0;i<stars.length;i++){
		stars[i].update(speed);
		stars[i].show();
	}
 	 
}



function mouseDragged() {
  var xDrag = centerX - mouseX;
  var yDrag = centerY - mouseY;
  centerX = mouseX;
  centerY = mouseY;
}