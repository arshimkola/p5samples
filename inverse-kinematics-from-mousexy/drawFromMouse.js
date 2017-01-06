var sx,sy,ex,ey,hx,hy,hxo,hyo;
var armLength1,armLength2,ua,la;
var uad,lad;

function setup(){
  createCanvas(500,500);
  background(255, 224, 150);
  sx = width/2;
  sy = height/2;
  armLength1 = 100;
  armLength2 = 100;
}

function draw(){
  fill(255);
  rect(0,0,width,height);
  upperArm();
}

function upperArm(){
  var dx = mouseX - sx;
  var dy = mouseY - sy;
  var distance = sqrt(dx*dx+dy*dy);
  
  var a = armLength1;
  var b = armLength2;
  var c = min(distance, a + b);
  
  var B = acos((b*b-a*a-c*c)/(-2*a*c));
  var C = acos((c*c-a*a-b*b)/(-2*a*b));
  
  var D = atan2(dy,dx);
  var E = D + B + PI + C;
  
  ex = int((cos(E) * a)) + sx;
  ey = int((sin(E) * a)) + sy;
  print("UpperArm Angle=  "+degrees(E)+"    ");
  
  hx = int((cos(D+B) * b)) + ex;
  hy = int((sin(D+B) * b)) + ey;
  print("LowerArm Angle=  "+degrees((D+B)));
  
  stroke(255,0,0,100);
  fill(240,0,0,200);
  ellipse(sx,sy,10,10);
  ellipse(ex,ey,8,8);
  ellipse(hx,hy,6,6);
  stroke(0);
  line(sx,sy,ex,ey);
  line(ex,ey,hx,hy);
  //var angle = atan2(dy, dx);
  //println("angle = " + degrees(angle))
  //ex = int((cos(angle) * r)) + sx;
  //ey = int((sin(angle) * r)) + sy;
  //line(sx,sy,ex,ey);
}