#pragma strict

var social : GameObject;


function Start(){
	social = GameObject.Find("Social");
}

function Click(){
	social.SendMessage("ShowLeaderboards");
}