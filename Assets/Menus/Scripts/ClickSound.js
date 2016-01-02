#pragma strict

var menuParent 	: GameObject;
var tapEffect 	: GameObject;
var soundAgent 	: GameObject;


function Click(){
	var effect = Instantiate(tapEffect, Vector3(transform.position.x, transform.position.y, transform.position.z + 10), Quaternion.identity);
	//effect.gameObject.transform.parent = gameObject.transform;
	soundAgent.SendMessage("PlaySoundString", "tap");
}

function Awake(){
	tapEffect = Resources.Load("tapEffect");
}

function Start () {
	soundAgent = GameObject.Find("SoundAgent");
	menuParent = GameObject.Find("MenuRoot");
}

function Update () {

}