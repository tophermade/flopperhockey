#pragma strict

var mainMenu 		: GameObject;
var setThisToActive : GameObject;

function Click(){
	mainMenu.SendMessage("ChangeActive", setThisToActive);
}