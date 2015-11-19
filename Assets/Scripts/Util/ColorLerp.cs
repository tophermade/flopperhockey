 using UnityEngine;
 using System.Collections;
 
 public class ColorLerp : MonoBehaviour {
     public 	Color 	A 			= Color.magenta;
     private 	Color 	AA;
     public 	Color 	B 			= Color.blue;
     public 	Color 	C 			= Color.blue;
     public 	Color 	D 			= Color.blue;
     public 	Color 	E 			= Color.blue;
     public 	Color 	F 			= Color.blue;
     public 	float 	speed 		= 1.0f;
     public 	float 	pong 		= 0.0f;
     public 	int 	pongCount 	= 0;
     public 	bool 	canSwap 	= false;
 
     SpriteRenderer spriteRenderer;
 
     void Start() {
     	AA = A;
        spriteRenderer = GetComponent<SpriteRenderer>();
     }
     
     void Update(){
 	 	pong = Mathf.PingPong(Time.time * speed, 1.0f);
        spriteRenderer.color = Color.Lerp(A, B, pong);

        if(pong > .95 && canSwap){
        	canSwap = false;

        	if(pongCount == 0){
        		A = C;
        	} else if(pongCount == 1){
        		A = D;
        	} else if(pongCount == 2){
        		A = E;
        	} else if(pongCount == 3){
        		A = F;
        	} else if(pongCount == 4){
        		A = AA;
        		pongCount = -1;
        	}

        	pongCount++;
        } else if(pong < .08){
        	canSwap = true;
        }
     }
 }