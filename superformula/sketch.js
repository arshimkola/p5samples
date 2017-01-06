// superformula sketch

var t = 0; 
var o1 =0; 
var o2 =0; 
var o3 =0; 
var aSlider,bSlider,mSlider;
var fillCheckBox;
var doFill = false;

function setup() {
  createCanvas(700, 700);  // Size must be the first statement
  frameRate(30);
  stroke(255);     // Set line drawing color to white
  noFill();
  strokeWeight(2); 
  background(0); 
  aSlider = createSlider(0.1, 100, 2);
  aSlider.position(20, 20);
  bSlider = createSlider(0.1, 100, 2);
  bSlider.position(20, 50);
  mSlider = createSlider(0.1, 100, 6);
  mSlider.position(20, 80);

  fillCheckBox = createCheckbox('Fill',false);
  fillCheckBox.changed(myCheckedEvent);

  var o1 = random(PI); 
  var o2 = random(PI); 
  var o3 = random(PI); 
}

function draw() {
    refreshBG()
    push(); 
    translate(width/2, height/2); 
    // For something crazy
    if(doFill == true){
      fill(random(255),random(255),random(255))
    }

    beginShape(); 
    for (var theta = 0.001; theta < TWO_PI; theta += TWO_PI / 100.0) { 
      var rad = superFormula(theta, 
                  aSlider.value(), 
                  bSlider.value(), 
                  mSlider.value(), 
                  sin(t+o1), 
                  sin(t+o2)*0.5+0.5, 
                  sin(t+o3)*0.5+0.5); 

      var x = rad * cos(theta)*50; 
      var y = rad * sin(theta)*50;

      console.log("Values"+aSlider.value()+","+bSlider.value()+","+mSlider.value());
      stroke(random(255),random(255),random(255))

      vertex(x, y);
    } 
    endShape(CLOSE); 
    pop(); 
    t += 0.05;
}

function superFormula(theta,a,b,m,n1, n2,n3){
	return pow(pow(abs(cos( m * theta / 4.0) / a ),n2) +
		pow(abs(sin(m * theta / 4.0) / b ),n3), - 1.0 / n1);
}

function refreshBG(){
  background(0); 
  strokeWeight(1);
  stroke(255,255,255);
  aSlider.position(20, 20);
  bSlider.position(20, 50);
  mSlider.position(20, 80);
  fillCheckBox.position(130,100);
  textSize(16);
  textFont("Helvetica");
  text("a", 165, 25);
  text("b", 165, 55);
  text("m", 165, 85);
  text("fill", 165, 105);
}


function myCheckedEvent() {
  if (this.checked()) {
    doFill=true;
  } else {
    doFill=false;
  }
}
 