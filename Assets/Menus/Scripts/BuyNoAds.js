#pragma strict

var purchaser : GameObject;


function Start(){
	purchaser = GameObject.Find("Purchaser");
}

function Click(){
	purchaser.SendMessage("BuyNoAds");
}