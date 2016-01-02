/**
 * Enhance connector for Unity
 */

using UnityEngine;

public class FGLConnector : MonoBehaviour
{
    ///// PUBLIC /////

    /**
     * Show interstitial ad
     */
    public static void ShowInterstitialAd()
    {
        InitializeEnhance();
        AndroidJavaClass adConnectorClass = new AndroidJavaClass("com.fgl.enhance.connector.FGLConnector");
        adConnectorClass.CallStatic("showInterstitialAd");
    }

    ///// PRIVATE /////

    /**
     * Initialize - you must attach this script to one of your game objects
     */
    void Awake()
    {
        InitializeEnhance ();

        DontDestroyOnLoad(this);
    }

    static void InitializeEnhance()
    {
        if (!mInitialized)
        {
            mInitialized = true;

            AndroidJavaClass unityConnectorClass = new AndroidJavaClass("com.fgl.enhance.connector.FGLConnector");
            AndroidJavaClass playerClass = new AndroidJavaClass("com.unity3d.player.UnityPlayer");
            AndroidJavaObject activity = playerClass.GetStatic<AndroidJavaObject>("currentActivity");
            unityConnectorClass.CallStatic("initialize", activity);
        }
    }

    static bool mInitialized = false;
}
