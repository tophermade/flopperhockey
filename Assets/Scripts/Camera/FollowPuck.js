#pragma strict

var puck 		: GameObject;
var lumbergh 	: GameObject;

var playing 	: boolean 		= false;


function SetupRound(){
	puck = GameObject.Find("Puck");
	if(!lumbergh){
		lumbergh = GameObject.Find("Lumbergh");
	}
}


function Start () {
	lumbergh = GameObject.Find("Lumbergh");

	SetupRound();
}

function FixedUpdate () {
	if(playing){
		transform.position.y = puck.transform.position.y + 1.25;
	}
}