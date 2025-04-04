//ELLIPSE VARS
let rotateValue = 0;
let r = 255;
let rSpeed = 1;

//LINE VARS
let line1 = 118;
let line2 = 115;
let lineSpeed = 0.75;
let lineSpeed2 = 1;
let colorFormChange = 255;
let colorSpeedChange = 2;
let colorFormChange2 = 128;
let colorSpeedChange2 = 0;

//OTHER VARS
let kakeruNaruse;
let gNote;

//PARTICLES
let particleTexture;
let particleSystem;

function preload() {
    particleTexture = loadImage('particlesmaybe.webp');
	kakeruNaruse = loadImage("kakeru.png");
	gNote = loadSound("g-note.mp3");
	gNote.setVolume(0.5);
	gNote.play();
    }

function setup() {
  createCanvas(600, 500);
  colorMode(HSB);

  // Initializing particle system
  particleSystem = new ParticleSystem(
    0,
    createVector(width / 2, height - 60),
    particleTexture
);

}

function draw() {
  background(0);
  
  image(kakeruNaruse,400,150,300,300);

  push();
    rotateValue = rotateValue + 0.01;
    rotate(rotateValue);
    r += rSpeed;
    if (r < 0 || r > 255){
      rSpeed = rSpeed * -1;
    }
    fill(r,52,125);
    ellipse(400,200,50,100);
  pop();
  
    push();
    rotateValue = rotateValue + 0.01;
    rotate(rotateValue);
    r += rSpeed;
    if (r < 0 || r > 255){
      rSpeed = rSpeed * -1;
    }
    fill(r,52,143);
    ellipse(500,200,50,100);
  pop();
  
  push();
    line1 += lineSpeed;
    line2 += lineSpeed2;
    if (line1 > 200 || line1 < 5){
      lineSpeed *= -1;
    }
    if (line2 > 200 || line2 < 30){
      lineSpeed2 *= -1;
    }
  
    colorFormChange += colorSpeedChange;
    if (colorFormChange < 100 || colorFormChange > 255){
      colorSpeedChange = colorSpeedChange * -1;
    }
  
    colorFormChange2 += colorSpeedChange2;
    if (colorFormChange2 < 0 || colorFormChange2 > 255){
      colorSpeedChange2 = colorSpeedChange2 * -2;
    }
  pop();
  
  push();
    stroke(colorFormChange,colorFormChange2,143);
    fill(colorFormChange,colorFormChange2,143);
    line(5,83,5,line1);
    line(15,83,15,line1);
    line(25,85,25,line2);
  pop();
  
  push();
    stroke(colorFormChange,0,143);
    fill(colorFormChange,0,143);
    line(56,85,56,line2);
    line(66,83,66,line1);
    line(76,83,76,line1);
    line(86,83,86,line1);
    line(96,83,96,line1);
    line(106,85,106,line2);
  pop();
  
  push();
    stroke(colorFormChange,colorFormChange2,143);
    fill(colorFormChange,colorFormChange2,143);
    line(137,85,137,line2);
    line(147,83,147,line1);
    line(157,83,157,line1);
    line(167,83,167,line1);
    line(177,83,177,line1);
    line(187,85,187,line2);
  pop();
  
    push();
    stroke(colorFormChange,0,143);
    fill(colorFormChange,0,143);
    line(216,85,216,line2);
    line(226,83,226,line1);
    line(236,83,236,line1);
    line(246,83,246,line1);
    line(256,83,256,line1);
    line(266,85,266,line2);
  pop();
  
  push();
    stroke(colorFormChange,colorFormChange2,143);
    fill(colorFormChange,colorFormChange2,143);
    line(216,85,216,line2);
    line(226,83,226,line1);
    line(236,83,236,line1);
    line(246,83,246,line1);
    line(256,83,256,line1);
    line(266,85,266,line2);
  pop();
  
  push();
    stroke(colorFormChange,colorFormChange2,143);
    fill(colorFormChange,colorFormChange2,0);
    line(380,85,380,line2);
    line(390,83,390,line1);
    line(400,83,400,line1);
    line(410,83,410,line1);
    line(420,83,420,line1);
    line(430,87,430,line2);
  pop();
  
  push();
    stroke(colorFormChange,0,143);
    fill(colorFormChange,0,143);
    line(460,85,460,line2);
    line(470,83,470,line1);
    line(480,83,480,line1);
    line(490,83,490,line1);
    line(500,83,500,line1);
    line(510,86,510,line2);
  pop();
  
  push();
    stroke(colorFormChange,colorFormChange2,143);
    fill(colorFormChange,colorFormChange2,143);
    line(535,85,535,line2);
    line(545,83,545,line1);
    line(555,83,555,line1);
    line(565,83,565,line1);
    line(575,83,575,line1);
    line(585,86,585,line2);
  pop();
  
  // Calculate the wind force based on the mouse x position
  let dx = map(mouseX, 0, width, -0.2, 0.2);
  let wind = createVector(dx, 0);

  // Apply wind and run the particle system
  particleSystem.applyForce(wind);
  particleSystem.run();
  for (let i = 0; i < 2; i += 1) {
    particleSystem.addParticle();
  }

  // Draw arrow representing the wind force
  drawVector(wind, createVector(width / 2, 50, 0), 500);
}

// Display an arrow to show a vector magnitude + direction
function drawVector(v, loc, scale) {
  push();
  let arrowSize = 4;
  translate(loc.x, loc.y);
  stroke(255);
  strokeWeight(3);
  rotate(v.heading());

  let length = v.mag() * scale;
  line(0, 0, length, 0);
  line(length, 0, length - arrowSize, +arrowSize / 2);
  line(length, 0, length - arrowSize, -arrowSize / 2);
  pop();
}

class ParticleSystem {
  constructor(particleCount, origin, textureImage) {
    this.particles = [];

    // Make a copy of the input vector
    this.origin = origin.copy();
    this.img = textureImage;
    for (let i = 0; i < particleCount; ++i) {
      this.particles.push(new Particle(this.origin, this.img));
    }
  }

  run() {
    // Loop through and run each particle
    for (let i = this.particles.length - 1; i >= 0; i -= 1) {
      let particle = this.particles[i];
      particle.run();

      // Remove dead particles
      if (particle.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  // Apply force to each particle
  applyForce(dir) {
    for (let particle of this.particles) {
      particle.applyForce(dir);
    }
  }

  addParticle() {
    this.particles.push(new Particle(this.origin, this.img));
  }
} // class ParticleSystem

class Particle {
  constructor(pos, imageTexture) {
    this.loc = pos.copy();

    let xSpeed = randomGaussian() * 0.3;
    let ySpeed = randomGaussian() * 0.3 - 1.0;

    this.velocity = createVector(xSpeed, ySpeed);
    this.acceleration = createVector();
    this.lifespan = 100.0;
    this.texture = imageTexture;
    this.color = color(frameCount % 256, 143, 143);
  }

  // Update and draw the particle
  run() {
    this.update();
    this.render();
  }

  // Draw the particle
  render() {
    imageMode(CENTER)
    tint(this.color, this.lifespan);
    image(this.texture, this.loc.x, this.loc.y);
  }

  applyForce(f) {
    // Add the force vector to the current acceleration vector
    this.acceleration.add(f);
  }

  isDead() {
    return this.lifespan <= 0.0;
  }

  // Update the particle's position, velocity, lifespan
  update() {
    this.velocity.add(this.acceleration);
    this.loc.add(this.velocity);
    this.lifespan -= 2.5;

    // Set the acceleration to zero
    this.acceleration.mult(0);
  }  
  
}

function  mouseClicked(){
  	gNote.play();
}