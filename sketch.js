function setup() {
  createCanvas(400, 400);
}

function draw() {
//background
  background(0, 255, 183)
  
//eyes
fill(255, 255, 87);
circle (200,200,400);
fill(255, 255, 255)
circle(90,150,90)
circle(300,150,90)
//pupils
fill(0)
circle(90,150,40)
circle(300,150,40);
//nose
fill(255, 107, 97)
circle(195,200,90);
fill(255)
circle(205,180,20)
//mouth
fill(235, 0, 121)
arc(150, 300, 80, 80, 100, PI + QUARTER_PI, CHORD);
describe('white open arc with black outline with top right missing');
//cheeks
fill (235, 0, 63)
circle (60,240,50)
circle(340,240,50)
}
