#pragma strict

var adverts : GameObject;


function Start(){
	adverts = GameObject.Find("Adverts");
}

function Click(){
	adverts.SendMessage("RestorePurchases");
}