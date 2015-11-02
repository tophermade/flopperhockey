#pragma strict

var puckObject 			: GameObject;
var spawns 				: GameObject[];
var lastSpawnPosition 	: GameObject;
var obstacle 			: GameObject;
var puck 				: GameObject;

var playing 			: boolean 		= false;

var score 				: int 			= 0;
var lastSpawnTime  		: float 		= 0;


function SpawnObstacle(){
	var spawnInt : int = Random.Range(0, spawns.length);
	
	if(spawns[spawnInt] == lastSpawnPosition && spawnInt > 0){
		spawnInt = spawnInt-1;
	}

	lastSpawnPosition = spawns[spawnInt];
	var newObstacle = Instantiate(obstacle, spawns[spawnInt].transform.position, Quaternion.identity);
}


function SetupRound(){
	score = 0;
	playing = true;
}


function Start () {
	if(!puck){
		puck = GameObject.Find("Puck");
	}
	SpawnObstacle();
}



function Update () {
	if(playing){
		score = puck.transform.position.y / 5;
	}

	if(lastSpawnTime < Time.time){
		lastSpawnTime = Time.time + .6;
		SpawnObstacle();
	}


}