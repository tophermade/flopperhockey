using UnityEngine;
using System.Collections;
using UnityEngine.SocialPlatforms;

public class InitializeSocialPlatforms : MonoBehaviour {

	void InitializeSocial(){
		#if UNITY_IPHONE

		#endif
		
		#if UNITY_ANDROID

		#endif	
	}


	void PostScore(){
		#if UNITY_IPHONE

		#endif
		
		#if UNITY_ANDROID
			// Social.ReportScore(12345, "Cfji293fjsie_QA", (bool success) => {
		 //    });
		#endif				
	}


	void ShowAchievements(){
		#if UNITY_IPHONE

		#endif
		
		#if UNITY_ANDROID
			//Social.ShowAchievementsUI();
		#endif				
	}



	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
