#pragma strict

function DestroySelf(){
	yield WaitForSeconds(3);
	Destroy(gameObject.transform.parent.gameObject);
}

function Start () {

}

function Update () {

}