
  let furby 
  let furbyBrushBool=false
  let ellipseBrushBool = false 

  function preload(){ 
    furby = loadImage('furby.png') 

  }
   
  function setup(){
     createCanvas(windowWidth, windowHeight)
     background (255)

   }


   function draw(){


    if(ellipseBrushBool == true){
     ellipseBrush()
    }

     if (furbyBrushBool == true){  
      furbyBrush()
     }

    } 

    function ellipseBrush(){

  if(mouseIsPressed){

   ellipse(mouseX,mouseY, 40, 40)
  }

  }

  function furbyBrush(){
  if(mouseIsPressed){
   image(furby,mouseX,mouseY, 40, 40)
  }
  }

  function ellipseBrush(){
  if(mouseIsPressed){
   ellipse(mouseX,mouseY, 40, 40)
   }
  }

  function keyPressed(){
    if(key == 'e'){
     ellipseBrushBool = true;
     furbyBrushBool = false;
  }
    if(key == 'f'){
   ellipseBrushBool = false;
     furbyBrushBool = true;


    }

    }
