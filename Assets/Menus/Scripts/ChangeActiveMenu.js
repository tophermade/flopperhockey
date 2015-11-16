#pragma strict

var menuCam 		: GameObject;

var spotActive 		: GameObject;
var spotIncoming 	: GameObject;
var spotExit 		: GameObject;

var startingMenu 	: GameObject;
var lastActive 		: GameObject;
var currentActive 	: GameObject;



var damp 				: float 		= .1;
var velocity		 	: Vector3		= Vector3.zero;



function ChangeActive(newActive : GameObject){
	if(lastActive){
		lastActive.transform.position = spotExit.transform.position;
	}
	lastActive = currentActive;
	currentActive = newActive;
	newActive.transform.position = spotIncoming.transform.position;
}



function Start () {
	menuCam.transform.position = transform.position;
	currentActive = startingMenu;
}



function Update () {
	currentActive.transform.position = Vector3.SmoothDamp(currentActive.transform.position, spotActive.transform.position, velocity, damp);
	if(lastActive){
		lastActive.transform.position = Vector3.SmoothDamp(lastActive.transform.position, spotExit.transform.position, velocity, damp);
	}
}