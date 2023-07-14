

let canvas
let playButton

let modemSlider 
let modemRateSlider
let BGSlider

let amplitude 
let level
let r
let g
let b
let modem

let baby

let selectBG

function preload(){
	modem =loadSound('ModemSound.mp3')
    baby = createImge('dancingbaby2.gif')
    airstrikeFont =loadFont('airstrike.ttf')

}

function setup(){
	canvas = createCanvas(windowWidth,windowHeight)
	canvas.style('z-index','-1')
	canvas.position (0,0)
	background (0)

	playButton = createButton('Play Audio')
	playButton.position(50,300)
	playButton.mousePressed(playModem)
	
    fill(255, 153, 255)
	modemSlider = createSlider (0,1,1,0.01)
	modemRateSlider = createSlider (0,3,1,0.1)
	BGSlider = createSlider(0,255,0,1)

	amplitude = new p5.Amplitude()

	selBackground = createSelect();
	selBackground. position (10,100)
	selBackground.option('pink')
	selBackground.option('purple')
	selBackground.changed(changedBackground)

	amplitude = new p5.Amplitude()


}

 function playModem(){

 	if(!modem.isPlaying()){
 		modem.loop()
 		playButton.html('Pause Audio')

 	}else{
 		modem.pause()
 		playButton.html('Play Audio')


 	}
 }


function changeBackground(){
	if(selBackground.value() =='red'){

	r =255
	g =0
	b =0

	if(selBackground.value()== 'blue'){

    r =255
	g =0
	b =0


	}

}




function draw(){

	background(r, g, b)
	textFont(airstrikeFont)
	fill(255)
	text('Dancing Baby Site!', windowWidth/2, 50)
	baby.position(200,200)
	level = amplitude.getLevel()
	let size = map(level,0,.6,0,900)
	ellipse(width/2,height/2,size,size)

	modem.setVolume(modemSlider.value())
	 print(modemSlider.value())

	 modem.rate(modemRateSlider.value())
} 
}
