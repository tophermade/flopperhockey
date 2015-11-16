#pragma strict

var icon 		: GameObject;
var offIcon 	: GameObject;

var lumbergh 	: GameObject;

var on 			: boolean 		= true;


function Click(){
	if(on){
		on = false;
		offIcon.GetComponent(SpriteRenderer).enabled = true;
		icon.GetComponent(SpriteRenderer).enabled = false;
	} else {
		on = true;
		offIcon.GetComponent(SpriteRenderer).enabled = false;
		icon.GetComponent(SpriteRenderer).enabled = true;
	}

	if(lumbergh){
		lumbergh.SendMessage("SetPause", on);
	}
}


function Start () {

}

function Update () {

}