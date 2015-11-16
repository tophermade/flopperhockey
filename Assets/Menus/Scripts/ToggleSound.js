#pragma strict

var icon 		: GameObject;
var offIcon 	: GameObject;

var on 			: boolean 		= true;


function Click(){
	if(on){
		on = false;
		Camera.main.GetComponent(AudioListener).enabled = false;
		offIcon.GetComponent(SpriteRenderer).enabled = true;
		icon.GetComponent(SpriteRenderer).enabled = false;
	} else {
		on = true;
		Camera.main.GetComponent(AudioListener).enabled = true;
		offIcon.GetComponent(SpriteRenderer).enabled = false;
		icon.GetComponent(SpriteRenderer).enabled = true;
	}
	print(on);
}


function Start () {

}

function Update () {

}