let imgs = []

let RandomButton

let canvas 

let namesArray = ['Sloop', 'Bloop', 'Poop', 'Jo']

let name = 0

let randImage  = 0 



function preload(){
	for(let i = 0 ; i<3; i++){
		imgs[i] = loadImage ( i + '.jpg')

	}

}

 function setup(){
 	canvas= createCanvas(windowWidth, windowHeight)
 	canvas.style ('z-index', '-1')
 	canvas.position(0,0)


 	randomButton = createButton('Random Image and Name')
 	randomButton. mousePressed(randImageName)


 	imageMode(CENTER)
 	textAlign(CENTER)

 }


function randImageName(){
	randImage = int(random(imgs.length))
	name= int(random(namesArray.length))
}


function draw(){
	background(255)
	image(imgs[randImage], windowWidth/2, windowHeight/2)
	 textSize(200)
     fill(200,30,100)
      text(namesArray[name], 200,300)



}

html,body {
	margin:0;
	padding:0;

}
canvas{
	display: block;
}

button{


}

input{

}

.button {
  background-color: rgba(200,40,180,0.3)
  border: none;
  color: white;
  padding:55px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  }