var paddle1, paddle2;

function setup() {
  createCanvas(600,400)
  paddle1 = createVector(0,0);
  paddle2 = createVector(0,0);
}
function draw(){
  background(51);
  rect(paddle1.x, paddle1.y, 20, 100);
  rect(paddle2.x, paddle2.y, 20, 100); 
}
