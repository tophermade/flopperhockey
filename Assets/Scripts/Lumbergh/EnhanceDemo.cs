using UnityEngine;
using System;
using System.Collections;
using System.Collections.Generic;

public class EnhanceDemo : MonoBehaviour
{
    void Start()
    {
        Debug.Log("Enhance Demo - Start");
    }

    void OnEnable()
    {
    }

    void OnDisable()
    {
    }

    void OnGUI()
    {
        // Example GUI to trigger the Adsorb ads

        GUI.Box(new Rect(10, 10, 532, 280), "Enhance Unity Demo");

        if (GUI.Button(new Rect(20, 60, 512, 200), "Show Enhanced Ad"))
        {
            Debug.Log("Enhance Demo - Show Interstitial Ad");
            FGLConnector.ShowInterstitialAd();
        }
    }
}
