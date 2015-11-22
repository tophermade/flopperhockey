#pragma strict

var lumbergh 		: GameObject;
var soundAgent 		: GameObject;

var ripple 			: GameObject;
var rippleSpawn 	: GameObject;

var darkening 		: GameObject;

var playing 		: boolean 		= false;
var goingRight 		: boolean 		= true;

var currentSpeed 	: Vector2;
var accSpeed 		: float 		= 0;
var speed 			: float 		= 6;


function Boost(newSpeed : int){
	speed = newSpeed;
}


function DisableTrail(){

}



function DestroyRipple(ripple: GameObject){
	yield WaitForSeconds(3);
	Destroy(ripple);
}


function ChangeDirection(){
	if(playing){
		soundAgent.SendMessage("PlaySoundString", "changedirection");
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

	if(tag == "Obstacle"){
		print("it was an obstacle");
		playing = false;
		gameObject.GetComponent(CircleCollider2D).enabled = false;
		Camera.main.SendMessage("ShakeUsingPreset", "SmallShake");
		lumbergh.SendMessage("EndRound");
		soundAgent.SendMessage("PlaySoundString", "blockhit1");
		currentSpeed = Vector2(0,0);
	} else if(tag == "Pickup"){
		lumbergh.SendMessage("PickupCoin");
		soundAgent.SendMessage("PlaySoundString", "coin");
		yield WaitForSeconds(1);
		other.transform.gameObject.SendMessage("DestroySelf");
	}
}



function OnTriggerEnter2D(other : Collider2D){
	print("hit trigger");
	var tag : String = other.transform.gameObject.tag;

	if(tag == "Pickup"){
		lumbergh.SendMessage("PickupCoin");
		soundAgent.SendMessage("PlaySoundString", "coin");
		other.transform.parent.transform.gameObject.GetComponent(Animator).SetTrigger("Play");

		yield WaitForSeconds(1);
		other.transform.gameObject.SendMessage("DestroySelf");
		//Destroy(other.transform.gameObject);
	}
}



function StartRound(){
	accSpeed = .1;
	speed = 6;
	currentSpeed = Vector2(accSpeed,accSpeed);
	playing = true;
	gameObject.GetComponent(CircleCollider2D).enabled = true;
}



function Start () {
	lumbergh 	= GameObject.Find("Lumbergh");
	soundAgent 	= GameObject.Find("SoundAgent");
}



function FixedUpdate () {
	if(playing){

		if(accSpeed < speed){
			if(speed < 7){
				accSpeed = accSpeed +.02;
			} else {
				accSpeed = accSpeed +.0075;
			}
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