using UnityEngine;
using System.Collections;
using InControl;

public class ControllerMaster : MonoBehaviour {

    public GameObject previousButton;
    public GameObject currentButton;
    public GameObject onClickButton;

    public string inactiveColor = "6598EC";
    public string highlightColor = "333333";

    public bool canMove = true;


    void SetCurrent(GameObject curr){
        currentButton = curr;
        currentButton.SendMessage("Activate", highlightColor);

        if(previousButton){
            previousButton.SendMessage("Deactivate", inactiveColor);
            previousButton = null;
        }
    }


    void TryMove(string direction){
        canMove = false;
        
        GameObject nextButton = null;

        if(direction == "right"){
            nextButton = currentButton.GetComponent<ControllerButton>().rightButton;
        } else if(direction == "left"){
            nextButton = currentButton.GetComponent<ControllerButton>().leftButton;
        } else if(direction == "up"){
            nextButton = currentButton.GetComponent<ControllerButton>().upButton;
        } else if(direction == "down"){
            nextButton = currentButton.GetComponent<ControllerButton>().downButton;
        }
        Debug.Log(nextButton);

        if(nextButton != null){
            previousButton = currentButton;
            currentButton = nextButton;
            previousButton.SendMessage("Deactivate", inactiveColor);
            nextButton.SendMessage("Activate", highlightColor);
        }
    }


    void OnPress(){
        canMove = false;        
        GameObject nextButton = null;

        currentButton.transform.Find("Background").gameObject.SendMessage("Click");

        nextButton = currentButton.GetComponent<ControllerButton>().clickButton;
        if(nextButton != null){
            previousButton = currentButton;
            currentButton = nextButton;
            previousButton.SendMessage("Deactivate", inactiveColor);
            nextButton.SendMessage("Activate", highlightColor);            
        }
    }


    void Start () {

    }

    
    // Update is called once per frame
    void Update () {
        // Use last device which provided input.
        InputDevice device = InputManager.ActiveDevice;

        float lsx = device.LeftStickX.Value;
        float lsy = device.LeftStickY.Value;

        if (device.Direction.Up.WasPressed){
            Debug.Log("up");
        }

        if (device.Action1.WasPressed){
            Debug.Log("button 1 pressed");
            OnPress();
        }

        //Debug.Log(device.LeftStickX.Value);
        
        if(canMove){
            // left stick
            if(lsx > .3){
                Debug.Log("right");
                TryMove("right");
            } else if(lsx < -.3){
                Debug.Log("left");
                TryMove("left");
            } else if(lsy > .3){
                Debug.Log("up");
                TryMove("up");
            } else if(lsy < -.3){
                Debug.Log("down");
                TryMove("down");
            }
        }
        
        if(canMove){
            // dpad
            lsx = device.DPadX.Value;
            lsy = device.DPadY.Value;

            if(lsx > .3){
                Debug.Log("right");
                TryMove("right");
            } else if(lsx < -.3){
                Debug.Log("left");
                TryMove("left");
            } else if(lsy > .3){
                Debug.Log("up");
                TryMove("up");
            } else if(lsy < -.3){
                Debug.Log("down");
                TryMove("down");
            }
        }

        if(lsx < .08 && lsx > -.08 & lsy < .08 && lsy > -.08){
            canMove = true;
        }
    
    }
}
