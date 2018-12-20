var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
//mode buttons	
	
	setModeButtons();
	setSquares();
	reset();
}


function setModeButtons(){
	for(var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
			if(this.textContent === "EASY"){
				numSquares = 3; }
			else { numSquares = 6;}

 		reset();	
	});
}
}

function setSquares(){
		for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
		//grab color of the clicked square
		var  clickedColor = this.style.background;
		//compare color to pickedColor
		if(pickedColor === clickedColor){
			messageDisplay.textContent = "CORRECT!"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "PLAY AGAIN?"
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "TRY AGAIN"
		}

		})
} 
}

function reset(){
//generate new colors
colors = generateRandomColors(numSquares);
//pick a new random color
pickedColor = pickColor();
//change colorDisplay to match picked color
colorDisplay.textContent = pickedColor;

//change colors of squares
for (var i=0; i<squares.length; i++){
if(colors[i]){
	squares[i].style.display="block";
squares[i].style.background = colors[i];}
else {squares[i].style.display="none";}
	
}
h1.style.background = "steel blue";
messageDisplay.textContent= " ";
resetButton.textContent= "New Colors"

}

// easybtn.addEventListener("click", function(){
// 	hardbtn.classList.remove("selected");
// 	easybtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i=0; i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}
// 		else {
// 	squares[i].style.display = "none";}
// 	}	
// });

// hardbtn.addEventListener("click", function(){
// 	easybtn.classList.remove("selected");
// 	hardbtn.classList.add("selected");
// 	numSquares=6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i=0; i<squares.length;i++){
// 	squares[i].style.background = colors[i];
// 	squares[i].style.display = "block";
// 	}	
// });


resetButton.addEventListener("click", function(){
//generate new colors
colors = generateRandomColors(numSquares);
//pick a new random color
pickedColor = pickColor();
//change colorDisplay to match picked color
colorDisplay.textContent = pickedColor;

//change colors of squares
for (var i=0; i<squares.length; i++){
squares[i].style.background = colors[i];

}
h1.style.background = "steel blue";
messageDisplay.textContent= " ";
this.textContent= "New Colors"
});





function changeColors(color){
//loop through all the squares
for(var i=0; i<squares.length; i++){
	squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(numSquares){
	//make an array
	var arr = []
	//add num random colors to array
	for( var i=0; i<numSquares; i++){
		//get random color and push into an array
		arr.push(randomColor()) }
	//return that array
	return arr;
}


function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256)
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256)
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")"
}





