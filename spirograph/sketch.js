function setup() {
  createCanvas(720, 400);
  background(255);

  strokeWeight(4);
  stroke(0, 20, 0);

  fill(0,0,255);
  ellipse(50, 50, 80, 80);
  ellipse(50, 50, 10, 10);

  
  fill(255,0,0);
  ellipse(450, 50, 80, 80);
  ellipse(450, 50, 10, 10);

  fill(200,255,200);
  ellipse(250, 250, 80, 80);
  ellipse(250, 250, 10, 10);

}

function draw() {

  stroke(100, 100, 100);
  strokeWeight(4);
  line(50, 50, 450, 50);
  line(450, 50, 250, 250);
  line(250, 250, 50, 50);
}
