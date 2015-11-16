#pragma strict

var bank 				: GameObject;

var itemOwned 			: boolean 	= false;
var itemCost 			: int 		= 0;
var itemName 			: String;
var unownedBackground	: String 	= "333333";
var ownedBackground 	: String 	= "ffffff";



function HexToColor(hex : String) : Color{
    var r = byte.Parse(hex.Substring(0,2), System.Globalization.NumberStyles.HexNumber);
    var g = byte.Parse(hex.Substring(2,2), System.Globalization.NumberStyles.HexNumber);
    var b = byte.Parse(hex.Substring(4,2), System.Globalization.NumberStyles.HexNumber);
    return new Color32(r,g,b, 255);
}


function MakeSelectionActive(){
	IsOwned();
	// what goes down here depends on the game
}


function PurchaseComplete(){
	PlayerPrefs.SetInt("Owns-" + itemName, 1);
	MakeSelectionActive();
}


function PurchaseFailed(){

}


function IsOwned(){
	itemOwned = true;
	gameObject.GetComponent(SpriteRenderer).color = HexToColor(ownedBackground);
}


function Click(){
	if(itemOwned){
		MakeSelectionActive();
	} else {
		if(PlayerPrefs.GetInt("Balance") >= itemCost){
			bank.SendMessage("Withdraw", itemCost);
			PurchaseComplete();
		} else {
			PurchaseFailed();
		}
	}
}

function Start () {
	bank = GameObject.Find("Bank");

	if(PlayerPrefs.GetInt("Owns-" + itemName) == 1){
		IsOwned();
	} else {
		gameObject.GetComponent(SpriteRenderer).color = HexToColor(unownedBackground);
	}
}

function Update () {

}