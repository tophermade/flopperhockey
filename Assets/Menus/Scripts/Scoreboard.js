#pragma strict

var score 			: GameObject;
var highScore 		: GameObject;

var best 			: int 			= 0;

function SetScore(newScore : int){
	score.GetComponent(TextMesh).text = newScore.ToString();

	if(newScore > best){
		best = newScore;
		PlayerPrefs.SetInt("HighScore", best);
		highScore.GetComponent(TextMesh).text = "best " + best.ToString();
	}
}




function Start () {
	if(PlayerPrefs.HasKey("HighScore")){
		best = PlayerPrefs.GetInt("HighScore");
	}
	highScore.GetComponent(TextMesh).text = "best " + best.ToString();
}

function Update () {

}