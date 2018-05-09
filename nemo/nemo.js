var a,b,c,x,y,z;
var click = 0;
var img;
function setup(){
  a=240;
  b=232;
  c=82;
  x=28;
  y=68;
  z=147;
  createCanvas(1000,500);
  img= loadImage('nemo.png');
}

function draw() {
  image(img,500,0,500,500);
  if (click == 0){
    fill(170,68,57);
    rect(0,0,499,499);
    fill(x,y,z);
    ellipse(250,250,480,480);
    fill(a,b,c);
    ellipse(250,250,360,360);
    fill(x,y,z);
    ellipse(250,250,240,240);
    fill(a,b,c);
    ellipse(250,250,150,150);
    fill(x,y,z);
    ellipse(250,250,55,55);
  }
  else {
    fill(170,68,57);
    rect(0,0,499,499);
    fill(a, b, c);
    ellipse(250,250,480,480);
    fill(x, y, z);
    ellipse(250,250,360,360);
    fill(a, b, c);
    ellipse(250,250,240,240);
    fill(x, y, z);
    ellipse(250,250,150,150);
    fill(a, b, c);
    ellipse(250,250,55,55);
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseY > 0) {
    click = 1- click;
  }  
}
