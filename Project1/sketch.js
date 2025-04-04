function setup() {
  createCanvas(600, 800);
}

function draw() {
  background('#e4bbf2');
  
  push();
    fill(255);
    textSize(70);
    stroke(0);
    strokeWeight(4);
    text('Bunny Stuffie', 100,100)
  pop();
  
  strokeWeight(2);
  fill('#ed77a6');
  ellipse(210,570,200,90);
  ellipse(410,570,200,90);
  ellipse(210,770,200,90);
  ellipse(410,770,200,90);
  ellipse(300,630,250, 300);
  ellipse(350,250,70,200);
  triangle(240,390,230,230,290,250);
  circle(300,400,200);
  
  push();
    strokeWeight(1);
    fill("purple");
    triangle(290,430,310,430,300,450);
  pop();
  
  push();
    strokeWeight(3);
    fill('#662405');
    circle(350,400,25)
    circle(250,400,25)
    fill('black');
    line(300,450,320,470);
    line(300,450,280,470);
  pop();
  
  push();
  fill('#62576b');
    triangle(300,530,200,550,200,500);
      beginShape();
        vertex(300,530);
        vertex(390,520);
        vertex(400,450);
      endShape(CLOSE);
    circle(300,520,50);
  pop();
  
  strokeWeight(0);
  fill('#bb9bd4');
  square(0,100,100);
  square(0,300,100);
  square(0,500,100);
  square(500,200,100);
  square(500,400,100);
  square(500,600,100);
  
  strokeWeight(2);
  fill('#5a6982')
  beginShape();
    vertex(180,670);
    vertex(420,670);
    vertex(420,710);
    vertex(460,730);
    vertex(460,800);
    vertex(330,800);
    vertex(310,790);
    vertex(290,800);
    vertex(160,800);
    vertex(160,730);
    vertex(170,730);
  endShape(CLOSE);
  
}