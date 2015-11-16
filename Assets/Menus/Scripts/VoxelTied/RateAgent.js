#pragma strict

var iTunesLink 		: String = "itms-apps://itunes.apple.com/app/idYOUR_ID";
var androidLink 	: String = "market://details?id=com.nwz.APPNAME/";

function RateApp(){
	#if UNITY_IPHONE
		Application.OpenURL(iTunesLink);
	#endif

	#if UNITY_ANDROID
		Application.OpenURL(androidLink);
	#endif	
}