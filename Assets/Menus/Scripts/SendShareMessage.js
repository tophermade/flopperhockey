#pragma strict

var share		: GameObject;


function Start(){
	if(!share){
		share = GameObject.Find("Social");
	}
}

function Click(){
	#if UNITY_IPHONE
		share.SendMessage("ShareText", "I just scored " + PlayerPrefs.GetInt("HighScore").ToString() + " in SwigSwag! Can you beat that?");
	#endif

	#if UNITY_ANDROID
		share.SendMessage("ShareText", "I just scored " + PlayerPrefs.GetInt("HighScore").ToString() + " in SwigSwag! Can you beat that?");
	#endif	
}