#pragma strict


var starValue 		: int 		= 3;

function DestroySelf(){
	yield WaitForSeconds(3);
	Destroy(gameObject.transform.parent.gameObject);
}

function Start () {

}

function Update () {

}