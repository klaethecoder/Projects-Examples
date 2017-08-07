
//THIS FUNCTION CHANGES THE BACKGROUND COLOR OF THE SQUARE
function changeBG(el, clr){
	var elem = document.getElementById(el);
	elem.style.transition = "background 1.0s linear 0s";
	elem.style.background = clr;


}
//THIS FUNCTION CREATES AN ANIMATION THAT FADES THE SQUARE OUT
function fadeOut(el){
var elem = document.getElementById(el);
	elem.style.transition = "opacity 1.0s linear 0s";
	elem.style.opacity = 0;
}

//THIS FUNCTION CREATES AN ANIMATION THAT FADES THE SQUARE IN
function fadeIn(el){
var elem = document.getElementById(el);
	elem.style.transition = "opacity 1.0s linear 0s";
	elem.style.opacity = 1;
}

//THIS FUNCTION CREATES AN ANIMATION THAT SLIDES THE SQUARE UP
function slideOpen(el){
var elem = document.getElementById(el);
	elem.style.transition = "height 0.5s linear 0s";
	elem.style.height = '100px';
}

//THIS FUNCTION CREATES AN ANIMATION THAT SLIDES THE SQUARE DOWN
function slideClose(el){
var elem = document.getElementById(el);
	elem.style.transition = "height 0.5s linear 0s";
	elem.style.height = 0;
}

//THIS FUNCTION CREATES AN ANIMATION OF A SQUARE THAT IS OFF THE SCREEN THAT COMES IN FROM THE LEFT
function slideIn(el){
var elem = document.getElementById(el);
	elem.style.transition = "left 0.5s linear 0s";
	elem.style.left = '0px';
}

//THIS FUNCTION CREATES AN ANIMATION OF A SQUARE THAT TAKES IT OFF THE SCREEN
function slideOut(el){
var elem = document.getElementById(el);
	elem.style.transition = "left 0.5s linear 0s";
	elem.style.left = '-400px';
}

