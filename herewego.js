let titlescreen
let music 

function preload(){
	titlescreen = loadImage('Titlescreen.jpg')
	music = loadSound('openmusic.mp3')


}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	background(0)

}

function startup(){

	if(mouseIsPressed == titlescreen){
		background() == titlescreen 
		music('Play Audio')
	}else{ background(0);
	}
}