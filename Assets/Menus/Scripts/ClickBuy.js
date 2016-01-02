#pragma strict

var bank 				: GameObject;
var lumbergh 			: GameObject;

var itemOwned 			: boolean 	= false;
var isActive 			: boolean 	= false;
var itemCost 			: int 		= 0;
var itemName 			: String;
var unownedBackground	: String 	= "333333";
var activeBackground	: String 	= "333333";
var ownedBackground 	: String 	= "ff0000";



function HexToColor(hex : String, alpha: int) : Color{
    var r = byte.Parse(hex.Substring(0,2), System.Globalization.NumberStyles.HexNumber);
    var g = byte.Parse(hex.Substring(2,2), System.Globalization.NumberStyles.HexNumber);
    var b = byte.Parse(hex.Substring(4,2), System.Globalization.NumberStyles.HexNumber);
    return new Color32(r,g,b, alpha);
}




function MakeActive(){
	PlayerPrefs.SetString("Player", itemName);
	gameObject.GetComponent(SpriteRenderer).color = HexToColor(activeBackground, 255);
	lumbergh.SendMessage("SetupPlayer");
}


function TryPurchase(){
	if(bank.GetComponent(Bank).balance >= itemCost){
		bank.SendMessage("Withdrawal");
		itemOwned = true;
		PlayerPrefs.SetInt(itemName + "-IsOwned", 1);
		print("purchase succeeded");
		MakeActive();
	} else {
		print("purchase failed");
	}
}


function Click(){
	if(itemOwned){
		MakeActive();
	} else {
		TryPurchase();
	}
}


function Start(){
	bank 		= GameObject.Find("Bank");
	lumbergh 	= GameObject.Find("Lumbergh");

	if(PlayerPrefs.HasKey(itemName + "-IsOwned")){

		if(PlayerPrefs.GetInt(itemName + "-IsOwned") == 1){// owned
			itemOwned = true;
			
			if(isActive){
				gameObject.GetComponent(SpriteRenderer).color = HexToColor(activeBackground, 255);
			} else {
				gameObject.GetComponent(SpriteRenderer).color = HexToColor(ownedBackground, 200);
			}

		} else {// not owned
			itemOwned = false;
			gameObject.GetComponent(SpriteRenderer).color = HexToColor(unownedBackground, 200);
		}

	}
}
