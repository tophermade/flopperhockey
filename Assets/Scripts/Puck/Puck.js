#pragma strict

var lumbergh 		: GameObject;

var ripple 			: GameObject;
var rippleSpawn 	: GameObject;

var darkening 		: GameObject;

var playing 		: boolean 		= false;
var goingRight 		: boolean 		= true;

var currentSpeed 	: Vector2;
var speed 			: float 		= 3;



function DestroyRipple(ripple: GameObject){
	yield WaitForSeconds(3);
	Destroy(ripple);
}


function ChangeDirection(){
	if(playing){
		if(goingRight){
			goingRight = false;
			currentSpeed = Vector2(-speed,speed);
		} else{
			goingRight =  true;
			currentSpeed = Vector2(speed,speed);
		}
		var newRipple = Instantiate(ripple, rippleSpawn.transform.position, Quaternion.identity);
		DestroyRipple(newRipple);
	}
}



function OnCollisionEnter2D(other : Collision2D){
	print("hit something");
	var tag : String = other.transform.gameObject.tag;

	if(tag == "Pickup"){

	} else if(tag == "Obstacle"){
		print("it was an obstacle");
		playing = false;
		Camera.main.SendMessage("ShakeUsingPreset", "SmallShake");
		lumbergh.SendMessage("EndRound");
		currentSpeed = Vector2(0,0);
	}
}



function StartRound(){
	currentSpeed = Vector2(speed,speed);
	playing = true;
}



function Start () {
	lumbergh = GameObject.Find("Lumbergh");
}



function Update () {
	if(playing){
		GetComponent(Rigidbody2D).velocity = currentSpeed;
	} else {
		GetComponent(Rigidbody2D).velocity = Vector2(0,0);
	}
}