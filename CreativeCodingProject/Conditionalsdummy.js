  let ellipseX=600;



  function setup(){

  createCanvas(windowWidth,windowHeight)
  textAlign(CENTER,CENTER);
  }



 //for(){

 
function draw(){
  ellipse(ellipseX,500,100,100)

  if(keyIsPressed == true) {
    background(187,77,209);
   fill(0, 255, 183)
     ellipseX = 800
  }else{
  background(150) 
  fill(0, 255, 183)
  text('Grimace',200,200);
 image(furby,mouseX,mouseY)

  }
   for(let i = 0 ; i < windowWidth; i=i+10){
  print(i)
  line(i, 0, i,windowHeight)
}

for(let i = 0; i <100; i++){
  ellipse(random(windowWidth), random(windowHeight), 20, 20)
} 
}

function preload(){
  furby =loadImage ('furby.png')
}


  function mouseClicked(){
  // if(ellipseX ==300){
  // ellipse = 300
  // }
  // if(ellipseX == 800){
  // 	ellipseX=300
}