using UnityEngine;
using System.Collections;
using UnityEngine.Advertisements;
// using AppodealAds.Unity.Api;
// using AppodealAds.Unity.Common;

public class UnityAdsNwz : MonoBehaviour {

	void DisableAds(){
		//Appodeal.hide(Appodeal.BANNER);
		PlayerPrefs.SetString("ShowAds", "false");
	}

	void ShowInterstertial(){
		if(PlayerPrefs.GetString("ShowAds") != "false"){
			// if(Appodeal.isLoaded(Appodeal.INTERSTITIAL)){
			// 	Appodeal.show(Appodeal.INTERSTITIAL);
			// }			
		}
	}

	void ShowVideo(){
		if(PlayerPrefs.GetString("ShowAds") != "false"){
			// if(Appodeal.isLoaded(Appodeal.VIDEO)){
			// 	Appodeal.show(Appodeal.VIDEO);
			// }			
		}
	}

	void RewardVideo(){
		if(PlayerPrefs.GetString("ShowAds") != "false"){
			// if(Appodeal.isLoaded(Appodeal.REWARDED_VIDEO)){
			// 	Appodeal.show(Appodeal.REWARDED_VIDEO);
			// }			
		}
	}

	void Start () {		
		// #if UNITY_IPHONE
	 //  		string appKey = "f8dc4a2bcab5d15fd9f88039c3a86a53a7e3649fd7853a15";
		// #endif

		// #if UNITY_ANDROID
	 //    	string appKey = "f8dc4a2bcab5d15fd9f88039c3a86a53a7e3649fd7853a15";
		// #endif	
		// Appodeal.initialize(appKey, Appodeal.ALL);
		// Appodeal.show(Appodeal.BANNER_BOTTOM);
	}

	void Update () {
	
	}
}
