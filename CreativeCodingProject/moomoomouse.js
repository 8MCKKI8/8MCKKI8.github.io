//files 
let furby 
let xPos
let yPos

let xSpeed = 2
let ySpeed = 2
let mouseDist

let startBool = true 
let winBool = false

let score = 0
let rotation = 0
function preload(){
	furby = loadImage('furby.png')
//calculate mouse distance from furby 

}
function setup(){
	createCanvas (windowWidth,windowHeight)

	xPos = random(15,windowWidth -15)
	yPos = random(15, windowHeight -15)

	imageMode(CENTER)
	textAlign(CENTER)

}

function draw(){
	background(0)

	if(startBool == true){

		start()
	}

	if(winBool == true){
		winScreen()
	}

}

function start(){

//update the X and Y position every frame

	background(0)

	fill(255)
	textSize(40)
	text(" Your Score, Dummy: " + score, windowWidth/2,50)

	if(xPos>= windowWidth -15 ||xPos <= 0){
		xSpeed = xSpeed * -1 

	}


		if(yPos>= windowHeight -15 || yPos <= 0){

			ySpeed = ySpeed * -1


		}

		image(furby,xPos,yPos,30,30)

		xPos = xPos + xSpeed
		yPos = yPos + ySpeed

		mouseDist = dist(mouseX,mouseY,xPos, yPos)

		if(mouseDist <= 15){
			xPos =random(15,windowWidth -15)
			yPos = random(15, windowHeight -15)

			xSpeed = xSpeed * 1.2
			ySpeed =ySpeed *1.2
			score++
		}

		if (score == 5){

			startBool =false
			winBool=true 
		}

	}	 

	function winScreen(){

		push()
		translate(windowWidth/2,windowHeight/2)
		rotate(radians(rotation))
		image(furby,0,0)
		pop()
		rotation++

		background (255)
		textSize(40)
		fill(0)
		text("YOU WON, surprisingly... " + score, windowWidth/2,50)
		image(furby,xPos,yPos,30,30)

	}



	function windowResized (){
		resizeCanvas(windowWidth,windowHeight);

	}
