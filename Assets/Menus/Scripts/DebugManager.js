#pragma strict

var hideOnDevice 		: GameObject[];

function Awake(){
	if(!Application.isEditor){
		for(var item : GameObject in hideOnDevice){
			item.SetActive(false);
		}			
	}
}

function Start () {

}

function Update () {

}