#pragma strict

var icon 		: GameObject;
var offIcon 	: GameObject;
var soundAgent 	: GameObject;

var on 			: boolean 		= true;


function Click(){
	if(on){
		on = false;
		PlayerPrefs.SetString("Sound", "Off");
		offIcon.GetComponent(SpriteRenderer).enabled = true;
		icon.GetComponent(SpriteRenderer).enabled = false;
	} else {
		on = true;
		PlayerPrefs.SetString("Sound", "On");
		offIcon.GetComponent(SpriteRenderer).enabled = false;
		icon.GetComponent(SpriteRenderer).enabled = true;
	}
	soundAgent.SendMessage("ToggleSound",on);
	print(on);
}


function Start () {
	soundAgent = GameObject.Find("SoundAgent");

	if(PlayerPrefs.GetString("Sound") == "Off"){
		offIcon.GetComponent(SpriteRenderer).enabled = true;
		icon.GetComponent(SpriteRenderer).enabled = false;
		on=false;
		soundAgent.SendMessage("ToggleSound",on);
	}
}

function Update () {

}