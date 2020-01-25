console.log("HI");

let particles = [];
let n;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  n = 100;
  for (let i=0; i < n; i++) {
    particles.push(new Particle);
  }
}

function draw() {
  background("black");
  particles.forEach((particle, indx) => {
    particle.drawParticle();
    particle.move();
    particle.bounce();
    particle.drawEdges(particles.slice(indx));
  });
}


class Particle {
  constructor() {
    // position
    this.pos = createVector(random(width), random(height));
    this.size = 10;
    this.color = "yellow";
    this.velocity = createVector(random(-3,3), random(-3,3));
  }

  drawParticle() {
    noStroke();
    fill(this.color);
    circle(this.pos.x, this.pos.y, this.size);
    console.log(this.pos.x);
    console.log(this.pos.y);
    console.log(this.size);
  }

  move() {
    this.pos.add(this.velocity);
  }

  bounce() {
    if (this.pos.x > width || this.pos.x < 0) {
      this.velocity.x *= -1
    }
    if (this.pos.y > height || this.pos.y < 0) {
      this.velocity.y *= -1
    }
  }

  drawEdges(particles) {
    particles.forEach(particle => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      if (d < 150) {
        stroke("yellow");
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }

}
