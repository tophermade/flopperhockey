#pragma strict

var puckObject 			: GameObject;
var obstacleParent 		: GameObject;
var spawn 				: GameObject;

var obstacles 			: GameObject[];

var obstacle 			: GameObject;
var puck 				: GameObject;

var menuRoot 			: GameObject;
var gameOverPanel 		: GameObject;

var highScoreSpot 		: GameObject;
var highScorePrefab 	: GameObject;
var highScoreGO 		: GameObject;

var scoreDisplay 		: GameObject;
var scoreDisplayGO 		: GameObject;

var bank 				: GameObject;

var playing 			: boolean 		= false;

var score 				: int 			= 0;

var spawnCount 			: int 			= 0;
var lastSpawnAt 		: float 		= 0;
var lastSpawnTime  		: float 		= 0;

var startingPosition 	: Vector2 		= Vector2(0,0);



// play helpers
function PickupCoin(){
	bank.SendMessage("Deposit", 3);
}


function UpdateScoreDisplay(){
	scoreDisplay.GetComponent(TextMesh).text = score.ToString();
	scoreDisplayGO.GetComponent(TextMesh).text = score.ToString();
}


function SpawnObstacle(){
	var obstacleID : int = Random.Range(0, obstacles.length);
	obstacle = obstacles[obstacleID];

	var newObstacle = Instantiate(obstacle, spawn.transform.position, Quaternion.identity);
	newObstacle.transform.parent = obstacleParent.transform;
	spawnCount++;

	if(newObstacle.name == "MediumObstacle"){

	} else {

	}
	
	// if(spawns[spawnInt] == lastSpawnPosition && spawnInt > 0){
	// 	spawnInt = spawnInt-1;
	// }

	// lastSpawnPosition = spawns[spawnInt];

}



// round helpers
function DestroyObstacles(){
	for(var child : Transform in obstacleParent.transform){
		Destroy(child.gameObject);
	}

	if(PlayerPrefs.GetInt("Highscore")){
		var hs : int = PlayerPrefs.GetInt("Highscore");
		if(PlayerPrefs.GetInt("Highscore") > 0){
			highScoreSpot = Instantiate(highScorePrefab, Vector3(0, hs *5, 0), Quaternion.identity);
			highScoreSpot.transform.parent = obstacleParent.transform;
			highScoreSpot.SendMessage("Highscore", hs);
		}
	} else {	
		PlayerPrefs.SetInt("Highscore",0);
	}
}


function ProcessScore(){
	if(PlayerPrefs.GetInt("Highscore") > score){
		
	} else {
		PlayerPrefs.SetInt("Highscore", score);
	}

	highScoreGO.GetComponent(TextMesh).text = "Best " + PlayerPrefs.GetInt("Highscore").ToString();
}



// rounds
function EndRound(){
	playing = false;
	ProcessScore();

	yield WaitForSeconds(.5);
	menuRoot.SendMessage("ChangeActive", gameOverPanel);
}


function SetupRound(){
	score = 0;
	spawnCount = 0;
	lastSpawnAt = 0;

	playing = true;

	UpdateScoreDisplay();

	puck.transform.position = startingPosition;	
	yield WaitForSeconds(.5);
	DestroyObstacles();
	puck.transform.Find("RippleSpawner").GetComponent(TrailRenderer).enabled = true;
}


function StartRound(){
	SetupRound();
	playing = true;
	puck.SendMessage("StartRound");

	
}


function RestartGame(){
	puck.transform.Find("RippleSpawner").GetComponent(TrailRenderer).enabled = false;
	StartRound();
}



// unity standard
function Start () {
	if(!puck){
		puck = GameObject.Find("Puck");
	}
	//StartRound();
	//SpawnObstacle();
}



function Update () {
	var puckPosition : float = puck.transform.position.y;
	//print(lastSpawnAt);

	if(playing){
		var oldScore : float = score;
		score = puckPosition / 5;
		if(score > oldScore + .95){
			UpdateScoreDisplay();
		}

		if(score == 10){
			puck.SendMessage("Boost", 6.5);	
		}

		if(score == 20){
			puck.SendMessage("Boost", 7);	
		}

		if(score == 30){
			puck.SendMessage("Boost", 7.5);	
		}

		if(score == 40){
			puck.SendMessage("Boost", 8);	
		}

		if(score == 50){
			puck.SendMessage("Boost", 8.5);	
		}

		if(score == 50){
			puck.SendMessage("Boost", 9);	
		}

		if(score == 60){
			puck.SendMessage("Boost", 9.5);	
		}

		if(score == 70){
			puck.SendMessage("Boost", 10);	
		}

		if(score == 110){
			puck.SendMessage("Boost", 11);	
		}

		if(score == 200){
			puck.SendMessage("Boost", 13);	
		}
	}

	if(playing && puckPosition > lastSpawnAt){
		lastSpawnAt = puckPosition +9;
		lastSpawnTime = Time.time + .6;
		SpawnObstacle();
	}
}