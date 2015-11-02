#pragma strict

var playerPuck 		: GameObject;

var playing 		: boolean 		= false;



function SetupRound(){
	playing = true;
	playerPuck = GameObject.Find("Puck");
}



function Start () {
	SetupRound();
}



function Update () {

	if(Input.GetMouseButtonDown(0)){
		if(playing){
			print("touched");
			playerPuck.SendMessage("ChangeDirection");
		}
	}

}