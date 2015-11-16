using UnityEngine;
using System;
using System.Collections;
using AppodealAds.Unity.Common;

namespace AppodealAds.Unity.Api 
{
	public class Appodeal 
	{

		public const int INTERSTITIAL   = 1;
		public const int VIDEO          = 2;
		public const int BANNER         = 4;
		public const int BANNER_BOTTOM  = 8;
		public const int BANNER_TOP     = 16;
		public const int BANNER_CENTER  = 32;
		public const int REWARDED_VIDEO = 128;
		public const int ALL            = 255;
		public const int ANY            = 255;

		private static IAppodealAdsClient client;
		private static IAppodealAdsClient getInstance() {
			if (client == null) {
				client = AppodealAdsClientFactory.GetAppodealAdsClient();
			}
			return client;
		}

		public static void initialize(string appKey, int adTypes)
		{
			#if !UNITY_EDITOR
			getInstance().initialize(appKey, adTypes);
			#endif
		}

		public static void setInterstitialCallbacks(IInterstitialAdListener listener)
		{
			#if !UNITY_EDITOR
			getInstance().setInterstitialCallbacks (listener);
			#endif
		}
		
		public static void setVideoCallbacks(IVideoAdListener listener)
		{
			#if !UNITY_EDITOR
			getInstance().setVideoCallbacks (listener);
			#endif
		}

		public static void setRewardedVideoCallbacks(IRewardedVideoAdListener listener)
		{
			#if !UNITY_EDITOR
			getInstance().setRewardedVideoCallbacks (listener);
			#endif
		}
		
		public static void setBannerCallbacks(IBannerAdListener listener)
		{
			#if !UNITY_EDITOR
			getInstance().setBannerCallbacks (listener);
			#endif
		}
		
		public static void cache(int adTypes)
		{
			#if !UNITY_EDITOR
			getInstance().cache (adTypes);
			#endif
		}
		
		public static bool isLoaded(int adTypes) 
		{
			bool isLoaded = false;
			#if !UNITY_EDITOR
			isLoaded = getInstance().isLoaded (adTypes);
			#endif
			return isLoaded;
		}
		
		public static bool isPrecache(int adTypes) 
		{
			bool isPrecache = false;
			#if !UNITY_EDITOR
			isPrecache = getInstance().isPrecache (adTypes);
			#endif
			return isPrecache;
		}
		
		public static bool show(int adTypes)
		{
			bool show = false;
			#if !UNITY_EDITOR
			show = getInstance().show (adTypes);
			#endif
			return show;
		}
		
		public static bool showWithPriceFloor(int adTypes)
		{
			bool showWithPriceFloor = false;
			#if !UNITY_EDITOR
			showWithPriceFloor = getInstance().showWithPriceFloor (adTypes);
			#endif
			return showWithPriceFloor;
		}
		
		public static void hide(int adTypes)
		{
			#if !UNITY_EDITOR
			getInstance().hide (adTypes);
			#endif
		}
		
		public static void orientationChange()
		{
			#if !UNITY_EDITOR
			getInstance().orientationChange ();
			#endif
		}
		
		public static void setAutoCache(int adTypes, bool autoCache) 
		{
			#if !UNITY_EDITOR
			getInstance().setAutoCache (adTypes, autoCache);
			#endif
		}
		
		public static void setOnLoadedTriggerBoth(int adTypes, bool onLoadedTriggerBoth) 
		{
			#if !UNITY_EDITOR
			getInstance().setOnLoadedTriggerBoth (adTypes, onLoadedTriggerBoth);
			#endif
		}
		
		public static void disableNetwork(string network) 
		{
			#if !UNITY_EDITOR
			getInstance().disableNetwork (network);
			#endif
		}

		public static void disableNetwork(string network, int adType) 
		{
			#if !UNITY_EDITOR
			getInstance().disableNetwork (network, adType);
			#endif
		}
		
		public static void disableLocationPermissionCheck() 
		{
			#if !UNITY_EDITOR
			getInstance().disableLocationPermissionCheck ();
			#endif
		}		
		
		public static void setTesting(bool test) 
		{
			#if !UNITY_EDITOR
			getInstance().setTesting (test);
			#endif
		}

		public static void setLogging(bool logging) 
		{
			#if !UNITY_EDITOR
			getInstance().setLogging (logging);
			#endif
		}
		
        public static string getVersion()
        {
            string version = null;
            #if !UNITY_EDITOR
            version = getInstance().getVersion();
            #endif
            return version;
        }

		public static bool isLoadedWithPriceFloor(int adTypes)
        {
			bool isLoadedWithPriceFloor = false;
            #if !UNITY_EDITOR
			isLoadedWithPriceFloor = getInstance().showWithPriceFloor (adTypes);
			#endif
            return isLoadedWithPriceFloor;
        }
	
	}

	public class UserSettings
	{

		private static IAppodealAdsClient client;
		private static IAppodealAdsClient getInstance() {
			if (client == null) {
				client = AppodealAdsClientFactory.GetAppodealAdsClient();
			}
			return client;
		}

		public enum Gender {
			OTHER, MALE, FEMALE
		}
		
		public enum Occupation {
			OTHER, WORK, SCHOOL, UNIVERCITY
		}
		
		public enum Relation {
			OTHER, SINGLE, DATING, ENGAGED, MARRIED, SEARCHING
		}
		
		public enum Smoking {
			NEGATIVE, NEUTRAL, POSITIVE
		}
		
		public enum Alcohol {
			NEGATIVE, NEUTRAL, POSITIVE
		}
				
		public UserSettings ()
		{
			#if !UNITY_EDITOR
			getInstance().getUserSettings();
			#endif
		}
		
		public UserSettings setAge(int age)
		{
			#if !UNITY_EDITOR
			getInstance().setAge(age);
			#endif
			return this;
		}
		
		public UserSettings setBirthday(string bDay)
		{
			#if !UNITY_EDITOR
			getInstance().setBirthday(bDay);
			#endif
			return this;
		}
		
		public UserSettings setEmail(string email)
		{
			#if !UNITY_EDITOR
			getInstance().setEmail(email);
			#endif
			return this;
		}
		
		public UserSettings setFacebookId(string fbId)
		{
			#if !UNITY_EDITOR
			getInstance().setFacebookId(fbId);
			#endif
			return this;
		}
		
		public UserSettings setVkId(string vkId)
		{
			#if !UNITY_EDITOR
			getInstance().setVkId(vkId);
			#endif
			return this;
		}
		
		public UserSettings setGender(Gender gender)
		{
			switch(gender) {
				case Gender.OTHER:
				{
					#if !UNITY_EDITOR
					getInstance().setGender(1);
					#endif
					return this;
				} 
				case Gender.MALE:
				{
					#if !UNITY_EDITOR
					getInstance().setGender(2);
					#endif
					return this;
				} 
				case Gender.FEMALE:
				{
					#if !UNITY_EDITOR
					getInstance().setGender(3);
					#endif
					return this;
				}
			}
			return null;
		}
		
		public UserSettings setInterests(string interests)
		{
			#if !UNITY_EDITOR
			getInstance().setInterests(interests);
			#endif
			return this;
		}
		
		public UserSettings setOccupation(Occupation occupation)
		{
			switch(occupation) {
				case Occupation.OTHER:
				{
					#if !UNITY_EDITOR
					getInstance().setOccupation(1);
					#endif
					return this;
				} 
				case Occupation.WORK:
				{
					#if !UNITY_EDITOR
					getInstance().setOccupation(2);
					#endif
					return this;
				} 
				case Occupation.SCHOOL:
				{
					#if !UNITY_EDITOR
					getInstance().setOccupation(3);
					#endif
					return this;
				}
				case Occupation.UNIVERCITY:
				{
					#if !UNITY_EDITOR
					getInstance().setOccupation(4);
					#endif
					return this;;
				}
			}
			return null;
		}
		
		public UserSettings setRelation(Relation relation)
		{
			switch(relation) {
				case Relation.OTHER:
				{
					#if !UNITY_EDITOR
					getInstance().setRelation(1);
					#endif
					return this;
				} 
				case Relation.SINGLE:
				{
					#if !UNITY_EDITOR
					getInstance().setRelation(2);
					#endif	
					return this;
				} 
				case Relation.DATING:
				{
					#if !UNITY_EDITOR
					getInstance().setRelation(3);
					#endif
					return this;
				} 
				case Relation.ENGAGED:
				{
					#if !UNITY_EDITOR
					getInstance().setRelation(4);
					#endif
					return this;
				} 
				case Relation.MARRIED:
				{
					#if !UNITY_EDITOR
					getInstance().setRelation(5);
					#endif	
					return this;
				} 
				case Relation.SEARCHING:
				{
					#if !UNITY_EDITOR
					getInstance().setRelation(6);
					#endif
					return this;
				} 
			}
			return null;
		}
		
		public UserSettings setAlcohol(Alcohol alcohol)
		{
			switch(alcohol) {
				case Alcohol.NEGATIVE:
				{
					#if !UNITY_EDITOR
					getInstance().setAlcohol(1);
					#endif
					return this;
				} 
				case Alcohol.NEUTRAL:
				{
					#if !UNITY_EDITOR
					getInstance().setAlcohol(2);
					#endif
					return this;
				} 
				case Alcohol.POSITIVE:
				{
					#if !UNITY_EDITOR
					getInstance().setAlcohol(3);
					#endif
					return this;
				}
			}
			return null;
		}
		
		public UserSettings setSmoking(Smoking smoking)
		{
			switch(smoking) {
				case Smoking.NEGATIVE:
				{
					#if !UNITY_EDITOR
					getInstance().setSmoking(1);
					#endif
					return this;
				} 
				case Smoking.NEUTRAL:
				{
					#if !UNITY_EDITOR
					getInstance().setSmoking(2);
					#endif
					return this;
				} 
				case Smoking.POSITIVE:
				{
					#if !UNITY_EDITOR
					getInstance().setSmoking(3);
					#endif
					return this;
				}
			}
			return null;
		}
		
	}
}
