using System;
using UnityEngine;
using AppodealAds.Unity.Api;
using AppodealAds.Unity.Common;

// Example script showing how to invoke the Appodeal Ads Unity plugin.
public class AppodealDemo : MonoBehaviour, IInterstitialAdListener, IBannerAdListener, IVideoAdListener, IRewardedVideoAdListener
{

	#if UNITY_EDITOR
		string appKey = "a23f1c3c5f3a996c6f92ffdb6cb7f52ba14b26e45aab3188";
	#elif UNITY_ANDROID
		string appKey = "fee50c333ff3825fd6ad6d38cff78154de3025546d47a84f";
	#elif UNITY_IPHONE
		string appKey = "dee74c5129f53fc629a44a690a02296694e3eef99f2d3a5f";
	#else
		string appKey = "unexpected_platform";
	#endif

	void OnGUI()
	{
		// Puts some basic buttons onto the screen.
		GUI.skin.button.fontSize = (int) (0.05f * Screen.height);

		Rect requestBannerRect = new Rect(0.1f * Screen.width, 0.05f * Screen.height,
		                                  0.8f * Screen.width, 0.1f * Screen.height);
		if (GUI.Button(requestBannerRect, "Initialize " + Appodeal.getVersion()))
		{
			//Example for UserSettings usage
			UserSettings settings = new UserSettings ();
			settings.setAge(25).setBirthday ("01/01/1990").setAlcohol(UserSettings.Alcohol.NEUTRAL)
				.setSmoking(UserSettings.Smoking.NEUTRAL).setEmail("hi@appodeal.com").setFacebookId("0987654321")
				.setVkId("87654321").setGender(UserSettings.Gender.OTHER).setRelation(UserSettings.Relation.DATING)
				.setInterests("gym, cars, cinema, science").setOccupation(UserSettings.Occupation.WORK);

			Appodeal.initialize (appKey, Appodeal.ALL);
			//Appodeal.setTesting(true);
			Appodeal.setLogging(true);
			Appodeal.setBannerCallbacks (this);
			Appodeal.setInterstitialCallbacks (this);
			Appodeal.setVideoCallbacks (this);
			Appodeal.setRewardedVideoCallbacks(this);
		}

		Rect showBannerRect = new Rect(0.1f * Screen.width, 0.175f * Screen.height,
		                               0.8f * Screen.width, 0.1f * Screen.height);
		if (GUI.Button(showBannerRect, "Show Banner"))
		{
			Appodeal.show(Appodeal.BANNER_BOTTOM);
		}

		Rect showInterstitialRect = new Rect(0.1f * Screen.width, 0.3f * Screen.height,
		                               0.8f * Screen.width, 0.1f * Screen.height);
		if (GUI.Button(showInterstitialRect, "Show Interstitial"))
		{
			Appodeal.show(Appodeal.INTERSTITIAL);
		}

		Rect showVideoRect = new Rect(0.1f * Screen.width, 0.425f * Screen.height,
		                                  0.8f * Screen.width, 0.1f * Screen.height);
		if (GUI.Button(showVideoRect, "Show Video"))
		{
			Appodeal.show(Appodeal.VIDEO);
		}

		Rect showRewardedVideoRect = new Rect(0.1f * Screen.width, 0.55f * Screen.height,
		                              0.8f * Screen.width, 0.1f * Screen.height);
		if (GUI.Button(showRewardedVideoRect, "Show Rewarded"))
		{
			Appodeal.show(Appodeal.REWARDED_VIDEO);
		}


		Rect hideBannerRect = new Rect(0.1f * Screen.width, 0.675f * Screen.height,
		                                        0.8f * Screen.width, 0.1f * Screen.height);
		if (GUI.Button(hideBannerRect, "Hide Banner"))
		{
			Appodeal.hide(Appodeal.BANNER);
		}

	}

	#region Banner callback handlers

	public void onBannerLoaded() {
		print("Banner loaded");
		//Appodeal.show(Appodeal.BANNER);
	}
	public void onBannerFailedToLoad() { print("Banner failed"); }
	public void onBannerShown() { print("Banner opened"); }
	public void onBannerClicked() { print("banner clicked"); }

	#endregion

	#region Interstitial callback handlers

	public void onInterstitialLoaded() {
		print("Interstitial loaded");
		//Appodeal.show(Appodeal.INTERSTITIAL);
	}
	public void onInterstitialFailedToLoad() { print("Interstitial failed"); }
	public void onInterstitialShown() { print("Interstitial opened"); }
	public void onInterstitialClosed() {  print("Interstitial closed"); }
	public void onInterstitialClicked() { print("Interstitial clicked"); }

	#endregion

	#region Video callback handlers

	public void onVideoLoaded() {
		print("Video loaded");
		//Appodeal.show(Appodeal.VIDEO);
	}
	public void onVideoFailedToLoad() { print("Video failed"); }
	public void onVideoShown() { print("Video opened"); }
	public void onVideoClosed() { print("Video closed"); }
	public void onVideoFinished() { print("Video finished"); }

	#endregion

	#region Rewarded Video callback handlers
	
	public void onRewardedVideoLoaded() {
		print("Rewarded Video loaded");
		//Appodeal.show(Appodeal.VIDEO);
	}
	public void onRewardedVideoFailedToLoad() { print("Rewarded Video failed"); }
	public void onRewardedVideoShown() { print("Rewarded Video opened"); }
	public void onRewardedVideoClosed() { print("Rewarded Video closed"); }
	public void onRewardedVideoFinished(int amount, String name) { print("Rewarded Video finished: Reward: " + amount + name); }
	
	#endregion
}
