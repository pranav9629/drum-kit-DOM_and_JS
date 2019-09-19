// number of html elements that has class as .drum or no. of buttons in total that are available

var numberOfButtons = document.querySelectorAll(".drum").length; 

// this function is used to select an even that specifically does something when a case with any of the provided particular charecters are selected!

function selection(event){

	switch(event) {

		case "w":
		var tom1 = new Audio("sounds/tom-1.mp3");
		tom1.play();
		break;

		case "a":
		var tom1 = new Audio("sounds/tom-2.mp3");
		tom1.play();
		break;

		case "s":
		var tom1 = new Audio("sounds/tom-3.mp3");
		tom1.play();
		break;

		case "d":
		var tom1 = new Audio("sounds/tom-4.mp3");
		tom1.play();
		break;

		case "j":
		var tom1 = new Audio("sounds/snare.mp3");
		tom1.play();
		break;

		case "k":
		var tom1 = new Audio("sounds/crash.mp3");
		tom1.play();
		break;

		case "l":
		var tom1 = new Audio("sounds/kick-bass.mp3");
		tom1.play();
		break;

		default: console.log("No such key!");

	}
}

function buttonAnimation(event){
	var activeButton = document.querySelector("." + event);
	activeButton.classList.add("pressed");

	setTimeout(function(){ activeButton.classList.remove("pressed"); }, 100);
}


// there are two ways of playing sound. One is by click and the other is by selecting a keyboard charecter

// first choice is via click method. for all buttons of class ".drum", when they are clicked, sound is made. A loop is made
// to specify what sort of sound that particular button makes.

for(var i=0; i<numberOfButtons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
	var currentButton = this.innerHTML;
	selection(currentButton);
	buttonAnimation(currentButton);
});

}


// .key method or object specifices the choice of selection when a key is pressed. 

document.addEventListener("keypress",function(event){
	selection(event.key);
	buttonAnimation(event.key);
});

