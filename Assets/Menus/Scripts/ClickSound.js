#pragma strict

var menuParent 	: GameObject;
var tapEffect 	: GameObject;
var baseColor 	: Color = new Color(1,1,1,.42);
var hoverColor 	: Color = new Color(1,1,1,.1);


function Click(){
	var effect = Instantiate(tapEffect, Vector3(transform.position.x, transform.position.y, transform.position.z + 10), Quaternion.identity);
	effect.gameObject.transform.parent = gameObject.transform;
}

function Awake(){
	tapEffect = Resources.Load("tapEffect");
}

function Start () {
	menuParent = GameObject.Find("MenuRoot");
	baseColor = menuParent.GetComponent(MasterButtonColors).baseColor;
	hoverColor = menuParent.GetComponent(MasterButtonColors).baseColor;
	gameObject.GetComponent(SpriteRenderer).color = baseColor;
}

function Update () {

}