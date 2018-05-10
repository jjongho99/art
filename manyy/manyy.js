var c = new Array(3);
var click = 0;
var img;
function setup() {
  c[0] = '#CE5E2A';
  c[1] = '#0E37C6';
  c[2] = '#EA053E';
  
  createCanvas(1500,560);
  img= loadImage('many.png');
  stroke(128);
  strokeWeight(3);
    for(var i =0;i<16;i++){
       for(var j=0;j<16;j++){
          fill(c[int(random(c.length))]);
          
        rect(i*50,j*40,50,40);        
       
    }
  }
}

function draw() {
  image(img,750,0,750,560);
}

function mousePressed() {

       for(var i=0; i<16; i++){
           for(var j =0; j<16; j++){
             fill(c[int(random(c.length))]);
             rect(i*50,j*40,50,40); 
        
           }
     
  }
}
