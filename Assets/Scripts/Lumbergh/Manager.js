#pragma strict

var puckObject 			: GameObject;
var spawnParent 		: GameObject;
var spawns 				: GameObject[];

var lastSpawnPosition 	: GameObject;
var obstacle 			: GameObject;
var puck 				: GameObject;

var highScoreSpot 		: GameObject;
var highScorePrefab 	: GameObject;

var scoreDisplay 		: GameObject;

var playing 			: boolean 		= false;

var score 				: int 			= 0;
var lastSpawnTime  		: float 		= 0;

var startingPosition 	: Vector2 		= Vector2(0,0);


function UpdateScoreDisplay(){
	scoreDisplay.GetComponent(TextMesh).text = score.ToString();
}


function SpawnObstacle(){
	var spawnInt : int = Random.Range(0, spawns.length);
	
	if(spawns[spawnInt] == lastSpawnPosition && spawnInt > 0){
		spawnInt = spawnInt-1;
	}

	lastSpawnPosition = spawns[spawnInt];
	var newObstacle = Instantiate(obstacle, spawns[spawnInt].transform.position, Quaternion.identity);
}



// round helpers
function DestroyObstacles(){

}

function ProcessScore(){
	if(PlayerPrefs.GetInt("Highscore") > score){
		
	} else {
		PlayerPrefs.SetInt("Highscore", score);
	}
}


// rounds
function EndRound(){
	playing = false;
	ProcessScore();
}


function SetupRound(){
	score = 0;
	playing = true;
	DestroyObstacles();
	puck.transform.position = startingPosition;
}


function StartRound(){
	SetupRound();
	playing = true;
	puck.SendMessage("StartRound");

	if(PlayerPrefs.GetInt("Highscore")){
		if(PlayerPrefs.GetInt("Highscore") > 0){
			highScoreSpot = Instantiate(highScorePrefab, Vector3(0, PlayerPrefs.GetInt("Highscore") *5, 0), Quaternion.identity);
		}
	} else {	
		PlayerPrefs.SetInt("Highscore",0);
	}
}



// unity standard
function Start () {
	if(!puck){
		puck = GameObject.Find("Puck");
	}
	StartRound();
	SpawnObstacle();
}



function Update () {
	if(playing){
		var oldScore : float = score;
		score = puck.transform.position.y / 5;
		if(score > oldScore + .95){
			UpdateScoreDisplay();
		}
	}

	if(playing && lastSpawnTime < Time.time){
		lastSpawnTime = Time.time + .6;
		SpawnObstacle();
	}
}