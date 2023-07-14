let titlescreen
let music 
let layout
let defaultscreen
let statbutton
let rankbutton
let foodbutton
let fixbutton
let cambutton
let YOU
let musicii
let chili
let bilby
let textbox
let homie 
let truth
let spoopybackground
let realbilby
let endvideo
let finalvideo
let finalcredits = false
let bluepill =false 
let spookyscarybackground = false 

let spoopscreen
let script1 = ['Howdy, Macaroni! You must be new here.\n[PRESS "T" TO CONTINUE]', 'Mr. Yorke (MANAGER)\n couldn’t be here today so he trusted me and \n Bilby to run the place and get you started\n on your first day on the job!', 
	'You’re ready for your first day?\n Good!\n This is Bilby by the way. \n[PRESS "O" TO SWITCH CHARACTER]', '...', 'lets get started \n [PRESS 9 TO CONTINUE']

let script3 = ['CONGRATS!\n You completed your tasks for the day!\n[PRESS "T" TO CONTINUE], Me and Bilby decided to let you\n go for the night, Before you go theres a person\n at table\n 7 to take his order, Its his birthday so make sure you sing Happy Birthday to him and dont forget \n to give him the funny fries! [PRESS Z TO CONTINUE]']

let script4 = ['Its not my birthday[PRESS "O" TO CONTINUE]. What took you so long?, Forget it, Listen Imma cut to the chase.\n This place is not...right, This isnt where you want to be buddy.\n dont ask how I know, I just do..., If you wanna save yourself Imma just say one thing: RED [R] or BLUE [B]?'] 

let script5 =['You’re late….[PRESS "T" TO CONTINUE], I told you I can’t do overtime.\n So you’ll have to fill in for me. Jesus….., L-Let me turn my music off,   And for the love of God stop calling me “Bilby”.\n It’s not funny anymore, Camryn left By the way. She left your \n schedule on the table, She hates that stupid nickname you gave her too, You know the drill don’t f–ck up [PRESS "7" TO COMPLETE TASKS & "P" TO RETURN TO HOME'] 



let scriptstart= 0

let scriptend = 2

let gameFont

let startbihBool = false

let startBool = false

let bilbyBool = false

let theBeefBool = false

let darkoBool = false 



let textCounter = 0


let customer1 

let customer2

let customer3

let customer4

let customer5

let costumer6

let nameImput


let YOUX =540
let YOUY =330

let speedy = 1

let speedy2 = 3


let customer1rank = 15

let customer2rank

let customer3rank

let customer4rank

let customer5rank

let costumer6rank


let  customer1counter

let customer2counter

let customer3counter

let customer4counter

let customer5counter 

let costumer6counter

let customerbushBool = false 

let easteregg 

let eastereggii

let helpme = false 

let spookysounds 

let cursedcoldplay 

headphoneBool = false 







//need to fix font** 540,330*


//addnameinmput.value /separate text 
function preload(){
	startbih = loadImage ('defaultland.jpeg')
	titlescreen = loadImage('Titlescreen.jpg')
	music = loadSound('openmusic.mp3')
	layout = loadImage('open screen.png')
	statbutton =loadImage('statbutton.png')
	rankbutton = loadImage('rank button.png')
	foodbutton = loadImage('foodbutton.png')
	fixbutton = loadImage('fixbutton.png')
	cambuton = loadImage('cambutton.png')
	musicii = loadSound('song2.mp3')
	chili = loadImage('chili.jpg')
	textbox = loadImage('textbox.jpg')
	dafont = loadFont('BabyBlocks.ttf')
	bilby  = loadImage('Bilby.png')
	homie = loadImage('gamescreen.png')
	customer1 = loadImage('customerDESTINI.jpg')
	customer2 = loadImage('customerDREW.jpg')
	customer3 = loadImage('customerFRAN.jpg')
	customer4 = loadImage('customerMAWMAW.jpg')
	customer5 = loadImage('customerROLAND.jpg')
	costumer6 = loadImage('customerRUE.jpg')
	truth = loadImage('thetruth.png')
	spoopybackground = loadImage('spoopyscreen.jpg')
	easteregg = loadImage('easteregg1.jpg')
	eastereggii = loadImage('easteregg1BADGRANDPA.jpg')
	//endvideo = createVideo(['endovido.mp4'])
	spoopscreen = loadImage('scaryscreen.jpg')
	//finalvideo =createVideo(['jumpscare.mp4'])
	realbilby =loadImage('renderbilby.png') 
	spookysounds = loadSound('spoopy_noises.m4a')
	cursedcoldplay = loadSound('audiocreeps.m4a')



	YOU = createImg('sprito.gif') 



	

}

function setup(){
	canvas = createCanvas(500, 500)
	canvas.position(windowWidth/2-250, 100)
	background(0)	
	YOU.hide()
	YOU.style('z-index','2')
	YOU.size(70,70)
	
	textAlign(CENTER)
	textFont(dafont);
	nameInput = createInput();
	nameInput.hide()
	frameRate(30);


}


function draw(){
	if(startBool == true){
		startup()
		
		
	}

	if(startbihBool == true){
		startit()
	}

	if(theBeefBool ==true){
		thebeef()
		
	}

	// if(darkoBool == true){
	// 	darktimes()
	// }


	// if(drakoBool == true){
	// 	drako()
	// }


	// if (helpme == true){
	// 	spoopytimes()
	// }



	// if(bluepill == true){
	// 	blu()
	// }


}

//start screen
function startup(){
	imageMode(CORNERS)
	background(titlescreen)
	imageMode(CENTER)
	image(layout,width/2,height/2,500,500)
	fill(0)
	text('PRESS SPACE TO START',width/2,200)
	textSize(20)

	textAlign(CENTER, CENTER);


	
}

//startscreen 
function startit(){
	imageMode(CORNERS)
	
	
	background(startbih)
	imageMode(CENTER)
	//image(layout,width/2,height/2,500,500)

	//need to fix the text

	image(chili,  230, 260, 334, 310)

	image(textbox, 232,464,288,98)
	fill(0)
	textSize(12)

	text(script1[textCounter],width/2-10,468)

	if(bilbyBool == true){
		image(bilby,  230, 260, 334, 310)
		if(theBeefBool==true&& textCounter < script1.length-1){
			text.hide()

			if(customerbushBool== true){
				customerbush()
			}
		}
	}



}



function playmusiclevel2(){
	music.stop()
	musicii.play()
}

// how to track positions conditional staated in furby game check with conditionals
//use distance function   

function thebeef(){

	customerbushBool=true
	startbihBool==false 
	image(homie,230, 260, 334, 310)
	image(rankbutton, 460,320,50,50 )
	image(foodbutton, 460,230,50,50 )
	image(fixbutton,460,140,50,50)
	image(statbutton,450,50,50,50)
	YOU.show()
	
	YOU.position(YOUX,YOUY)



	//text(script2,width/2-10,468)

	if (keyIsDown(LEFT_ARROW)) {
		YOUX -= 5;
	}

	if (keyIsDown(RIGHT_ARROW)) {
		YOUX += 5;
	}

	if (keyIsDown(UP_ARROW)) {
		YOUY -= 5;
	}

	if (keyIsDown(DOWN_ARROW)) {
		YOUY += 5;
	}

  //if(YOUX>=334){ NEED TO FIX WITH TEACHER HELP 
  	//print("OFF")
  //	YOUX = YOUX * speed

}


//need help  with nymbers 
function customerbush(){

	
}





// function blu(){

// 	if(bluepill==true){
// 		endvideo(windowWidth, windowHeight)
// 		endvideo.play()
// 	}

// }



















//the key press code

function keyPressed(){
	if(key == 'g'){
		startBool = true
		music.play()

		print('g key')


		
	}

	if(keyCode === 32){
		if(startBool == true){
			startbihBool = true
			startBool = false
			playmusiclevel2()
			return false
		}
		//space continued.

		if(startbihBool == true && textCounter == 4){
			textCounter = 0
			startbihBool == false
			
			print(textCounter)

			return false


		}


	}


	if(key == 't'){
		//going through convo 1 array
		if(startbihBool == true && textCounter < script1.length-1){
			if(textCounter == 3){
				bilbyBool = false
			}
			textCounter++
			print(textCounter)


			return false
		}
	}

		// if(level == true && textCounter < script2.length-1){
		// 	// if(textCounter == 3){
		// 	// 	bilbyBool = false
		// 	// }
		// 	++
		// 	print(textCounter)


		// 	return false
		// }

textCounter

		// if(key == 'z'){
		// //going through convo 1 array
		// 	if(darkoBool == true && textCounter < script3.length-1){
		// 		if(textCounter == 4){
		// 			bilbyBool = false
		// 		}
		// 		textCounter++
		// 		print(textCounter)


		// 		return false
		// 	}

		// 	if(darko == true && textCounter < script3.length-1){
		// 		if(textCounter == 4){
		// 			bilbyBool = false
		// 		}
		// 		textCounter++
		// 		print(textCounter)


		// 		return false

		// 	}



		//}

		if(key =='o'){
			if(startbihBool == true && textCounter == 2){
				textCounter++
				bilbyBool = true
				print(textCounter)

				print('bilby')
			}


		}

		if(key =='9'){
			theBeefBool =true

		}


		if(theBeefBool == true){
			if(key == '9'){

			}
		}

		// if(customerbushBool == true){
		// 	if(key == '1'){
		// 		image(customer1,230, 260, 334, 310)

		// 	} 



		// 	if(key == '2'){
		// 		image(customer2,230, 260, 334, 310 )

		// 	}
		// 	image(customer2,230, 260, 334, 310 )

		// 	if(key == '3'){
		// 		image(customer3,230, 260, 334, 310)

		// 	}


		// 	if(key == '4'){
		// 		image(customer4,230, 260, 334, 310 )

		// 	}

		// 	if(key== '5'){
		// 		image(customer5,230, 260, 334, 310 )

		// 	}

		// 	if(key == '6'){
		// 		image(customer6,230,260,334,310)

		// 	}



		// 	if(key == 'u' ){
		// 		darkoBool == true 

		// 	} 

		// 	if(key == 'z' ){

		// 		drakoBool ==true 
		// 	}

		// 	if(key== 'r'){
		// 		helpme ==true

		// 	}

		// 	if(key== 'b'){
		// 		bluepill ==true 

		// 	}

		// }

		

	}

	// function customerbush(){





	// }




	// function darktimes(){
	// 	image(chili,  230, 260, 334, 310)

	// 	image(textbox, 232,464,288,98)
	// 	fill(0)
	// 	textSize(12)

	// 	text(script3[textCounter],width/2-10,468)


	// }


	// function drako(){
	// 	if(drakoBool ==true)
	// 		musicii.stop()
	// 	image(truth,  230, 260, 334, 310)


	// 	image(textbox,232,464,288,98)
	// 	fill(0)
	// 	textSize(12)

	// 	text(script4[textCounter],width/2-10,468)

	// 	if(darko == true && textCounter < script3.length-1){
	// 		if(textCounter == 4){
	// 			bilbyBool = false
	// 		}
	// 		textCounter++
	// 		print(textCounter)


	// 		return false
	// 	}
	// }

	// function spoopytimes(){

	// 	imageMode(CORNERS)


	// 	background(spoopybackground)
	// 	imageMode(CENTER)
	// //image(layout,width/2,height/2,500,500)

	// //need to fix the text

	// 	image(realbilby,  230, 260, 334, 310)

	// 	image(textbox, 232,464,288,98)
	// 	fill(0)
	// 	textSize(12)

	// 	text(script5[textCounter],width/2-10,468)


	// 	if(helpme == true && textCounter < script5.length-1){
	// 		if(textCounter == 8){
	// 			bilbyBool = false
	// 		}
	// 		textCounter++
	// 		print(textCounter)


	// 		return false


	// 	}

	// 	spookynoiseman()
	// 	cursedcoldplay()

	// 	if(script5>=3){
	// 		headphoneBool=false
	// 	}



	// 	if(key=='7'){
	// 		finalcredits==true
	// 	}
	// 	if (finalcredits == true){
	// 		creditvideo()
	// 	}

	// 	function creditvideo(){
	// 		creditvideo.play()



	// 	}

	// 	if(key== 'i'){
	// 		spookyscarybackground==true
	// 	}

	// 	if(spookyscarybackground ==true){
	// 		change()
	// 	}
	// }

	// function change(){
	// 	image(spoopscreen,230, 260, 334, 310 )


	// }




	// if(helpme == true){
	// 	headphoneBool = true

	// }

	// if(headphoneBool == true){
	// 	headphonemusic()

	// }


	// function spookynoiseman(){
	// 	spookysounds.play()
	// }

	// function headphonemusic(){
	// 	cursedcoldplay.play()
	// }