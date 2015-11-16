#pragma strict

function Expire(){
	yield WaitForSeconds(.5);
	Destroy(gameObject);
}

function Start () {
	Expire();

}

function Update () {

}