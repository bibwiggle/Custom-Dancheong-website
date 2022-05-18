

let x = 0
let angle = 0
// let color1
let c1 = localStorage.getItem("color1");  
let c2 = localStorage.getItem("color2");
let c3 = localStorage.getItem("color3");  
let c4 = localStorage.getItem("color4");  
let c5 = localStorage.getItem("color5");  
let c6 = localStorage.getItem("color6");  

let n1 = localStorage.getItem("number1"); 
let n2 = localStorage.getItem("number2");
let n3;
let n4;


function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasForHTML");
  angleMode(DEGREES)
  rectMode(CENTER)
  
  console.log(n1)
  console.log(n2)
  console.log(n3)
  console.log(n4)
  console.log(c5)
  console.log(c6)
}

function draw() {
  background(255);


 drawSquare();
 drawCircle();   
  


 translate(width/2, height/2); 
  push();
  for (let i = 0; i < n1; i += 1){
    
    
    rotate(sin(x)* -60);
    drawBC1();
    drawBC2();
    
   
  }
  pop();
  
for (let i = 0; i < n2; i += 1){
    
    rotate(sin(x) * 60);
    
    drawRC3();
    drawRC4();
  }
  x += 0.2


}

function drawBC1(){
  
  push();
  stroke(255)
  strokeWeight(3)
  fill(c1)
  ellipse(0, windowHeight * .3, 180, 180);
  pop();
}

function drawBC2(){
  noStroke();

  fill(c2)
  // fill(color1)
  ellipse(0, windowHeight * .3, 150, 150);
}

function drawRC3(){
  push();
  strokeWeight(3)
  stroke(255)
  fill(c3)
  ellipse(0, windowHeight * .2, 150, 150)
  pop();
}

function drawRC4(){
 
  noStroke();
  fill(c4)
  ellipse(0 , windowHeight * .2, 120, 120)

}

function drawCircle(){
  push();
  noFill();
  stroke(c5);
  strokeWeight(3)
  let x = 0
  let n3 = localStorage.getItem("number3"); 
  for(x = 0; x <= width; x += 50){ 
     
    for(let y = 0; y <= height; y+= 50){
      // ellipse(x, y, 35)
      ellipse(x, y, n3)
}
 }
  pop();
  }

function drawSquare(){
  push();
  noFill();
  stroke(c6)
  strokeWeight(5)
  let x = 0
  let n4 = localStorage.getItem("number4"); 
  for(x = 0; x <= width; x += 50){ 
     
    for(let y = 0; y <= height; y += 50){
    
      // rect(x, y, 45)
      rect(x, y, n4)
      
}
 }
  pop();
  }  


