#pragma strict

var score1 		: GameObject;
var score2 		: GameObject;


function Highscore(score : int){
	score1.GetComponent(TextMesh).text = score.ToString();
	score2.GetComponent(TextMesh).text = score.ToString();
}

function Start () {

}

function Update () {

}