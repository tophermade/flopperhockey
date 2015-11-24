#pragma strict

// GameObject / AudioClip / Transform
var musicOne 		: AudioClip;

var soundToPlay 	: AudioClip;

var soundOne 		: AudioClip;
var soundTwo 		: AudioClip;
var soundThree 		: AudioClip;
var soundFour 		: AudioClip;
var soundFive 		: AudioClip;
var soundSix 		: AudioClip;
var soundError 		: AudioClip;



// Custom Function
function PlaySoundString(theClip : String){
	//print(theClip);
	var level :float = 1;

	if(theClip == 'tap'){
		soundToPlay = soundOne;
		level = .75;
	} else if(theClip == 'badtap'){
		soundToPlay = soundTwo;
		
	} else if(theClip == 'blockhit1'){
		soundToPlay = soundThree;
		level = .75;
		
	} else if(theClip == 'blockhit2'){
		soundToPlay = soundFour;
		level = .5;
		
	} else if(theClip == 'changedirection'){
		soundToPlay = soundFive;
		level = .9;
		
	} else if(theClip == 'coin'){
		soundToPlay = soundSix;
		level = .5;
		
	} else if(theClip == 'error'){
		soundToPlay = soundError;
	} else if(theClip == 'button'){
		soundToPlay = soundError;
	}

	GetComponent.<AudioSource>().PlayOneShot(soundToPlay, level);
}

function PlaySound(theClip : AudioClip){
	GetComponent.<AudioSource>().PlayOneShot(theClip, 1);
}



//StandardFunction
function Awake(){
	GetComponent.<AudioSource>().volume = .4;
	GetComponent.<AudioSource>().clip = musicOne;
	GetComponent.<AudioSource>().Play();
}

function Start(){

}

function Update(){
}

function FixedUpdate(){

}