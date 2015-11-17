#pragma strict

var upButton 		: GameObject;
var rightButton 	: GameObject;
var downButton 		: GameObject;
var leftButton 		: GameObject;
var clickButton 	: GameObject;

var previousButton 	: GameObject;
var menuManager 	: GameObject;

var buttonSprite 	: GameObject;

var isInitial 		: boolean 		= false;



function HexToColor(hex : String) : Color{
    var r = byte.Parse(hex.Substring(0,2), System.Globalization.NumberStyles.HexNumber);
    var g = byte.Parse(hex.Substring(2,2), System.Globalization.NumberStyles.HexNumber);
    var b = byte.Parse(hex.Substring(4,2), System.Globalization.NumberStyles.HexNumber);
    return new Color32(r,g,b, 255);
}



function Deactivate(highlight : String){
	buttonSprite.GetComponent(SpriteRenderer).color = HexToColor(highlight);
}
function Deactivate(highlight : Color){
	buttonSprite.GetComponent(SpriteRenderer).color = highlight;
}



function Activate(highlight : String){
	buttonSprite.GetComponent(SpriteRenderer).color = HexToColor(highlight);
}
function Activate(highlight : Color){
	buttonSprite.GetComponent(SpriteRenderer).color = highlight;
}



function SetPrevious(prev : GameObject){
	previousButton = prev;
}


function Awake(){
	buttonSprite = gameObject.transform.Find("Background").gameObject;
}

function Start () {
	menuManager = GameObject.Find("MenuRoot");

	if(isInitial){
		menuManager.SendMessage("SetCurrent", gameObject);
	}
}



function Update () {

}