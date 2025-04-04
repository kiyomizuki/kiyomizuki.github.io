function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  
  //1
  fill('red');
  rect(200,100,100,100);
  rect(190,200,120,100);
  
  fill('lightblue');
  rect(200,200,100,100);
  rect(140,250,50,50);
  rect(310,250,50,50);
  triangle(220,150,270,150,240,220);
  
  //2
  fill('red');
  ellipse(550,230,150);
  ellipse(550,130,120);
  
  fill('blue');
  ellipse(550,250,110);
  ellipse(480,290,70,50);
  ellipse(620,290,70,50);
  ellipse(550,150,50,20);

}