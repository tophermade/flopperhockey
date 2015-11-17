#pragma strict

var lumbergh 		: GameObject;

var ripple 			: GameObject;
var rippleSpawn 	: GameObject;

var darkening 		: GameObject;

var playing 		: boolean 		= false;
var goingRight 		: boolean 		= true;

var currentSpeed 	: Vector2;
var accSpeed 		: float 		= 0;
var speed 			: float 		= 3;



function DisableTrail(){

}



function DestroyRipple(ripple: GameObject){
	yield WaitForSeconds(3);
	Destroy(ripple);
}


function ChangeDirection(){
	if(playing){
		if(goingRight){
			goingRight = false;
			currentSpeed = Vector2(-accSpeed,accSpeed);
		} else{
			goingRight =  true;
			currentSpeed = Vector2(accSpeed,accSpeed);
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
	} else if(tag == "Pickup"){
		lumbergh.SendMessage("PickupCoin");
		yield WaitForSeconds(1);
		Destroy(other.transform.gameObject);
	}
}



function OnTriggerEnter2D(other : Collider2D){
	print("hit trigger");
	var tag : String = other.transform.gameObject.tag;

	if(tag == "Pickup"){
		lumbergh.SendMessage("PickupCoin");
		other.transform.parent.transform.gameObject.GetComponent(Animator).SetTrigger("Play");
		//Destroy(other.transform.gameObject);
	}
}



function StartRound(){
	accSpeed = .1;
	currentSpeed = Vector2(accSpeed,accSpeed);
	playing = true;
}



function Start () {
	lumbergh = GameObject.Find("Lumbergh");
}



function FixedUpdate () {
	if(playing){

		if(accSpeed < speed){
			accSpeed = accSpeed +.02;
		}

		if(goingRight){
			currentSpeed = Vector2(-accSpeed,accSpeed);
		} else{
			currentSpeed = Vector2(accSpeed,accSpeed);
		}

		GetComponent(Rigidbody2D).velocity = currentSpeed;
	} else {
		GetComponent(Rigidbody2D).velocity = Vector2(0,0);
	}
}