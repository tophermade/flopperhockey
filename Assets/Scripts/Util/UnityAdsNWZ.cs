using UnityEngine;
using UnityEngine.Advertisements;

public class UnityAdsNWZ : MonoBehaviour
{
  public void ShowInterstertial()
  {
    if (Advertisement.IsReady())
    {
      Advertisement.Show();
    }
  }
}