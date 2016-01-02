using UnityEngine;
using System.Collections;

public class ShareAgent : MonoBehaviour {

	void ShareText(string txt){
		ShareBunch.GetInstance().ShareText(txt);
	}

}
