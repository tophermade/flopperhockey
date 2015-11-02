﻿#pragma strict

var lumbergh 		: GameObject;

var goingRight 		: boolean 		= true;

var currentSpeed 	: Vector2;
var speed 			: float 		= 3;



function ChangeDirection(){
	if(goingRight){
		goingRight = false;
		currentSpeed = Vector2(-speed,speed);
	} else{
		goingRight =  true;
		currentSpeed = Vector2(speed,speed);
	}
}



function OnCollisionEnter2D(other : Collision2D){
	print("hit something");
	var tag : String = other.transform.gameObject.tag;

	if(tag == "Pickup"){

	} else if(tag == "Obstacle"){
		print("it was an obstacle");
	}
}


function Start () {
	currentSpeed = Vector2(speed,speed);
	lumbergh = GameObject.Find("Lumbergh");
}



function Update () {
	GetComponent(Rigidbody2D).velocity = currentSpeed;
}