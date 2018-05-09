var a=300;
var b=440;
var c= 550;
var img;
function setup() {
createCanvas(1400,700);
img = loadImage('green.png');

}

function draw() {
  noStroke();
  background(10,147,91);
  rectMode(CENTER);
  fill(13,121,90);
  rect(350,height/2+30,c,c);
  fill(10,82,53);
  rect(350,height/2+60,b-20,b);
  fill(67,96,144);
  rect(350,height/2+90,a,a);

  if(keyCode===UP_ARROW){
       a+=4;
       b+=5;
       c+=4;
        if(c>700){
            c=550;
        }
        if(b>530){
           b=440; 
        }
        if(a>395){
           a=300; 
        }
  }
   if(keyCode===DOWN_ARROW){       
     c=550;               
     b=440;              
     a=300; 
   
  }
  image(img, 700, 0, 700, 700);
}
