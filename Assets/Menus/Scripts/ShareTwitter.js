#pragma strict

var lumbergh : GameObject;


function Start(){
	lumbergh = GameObject.Find("Lumbergh");
}

function Click(){
	lumbergh.SendMessage("ShareOnTwitter");
}