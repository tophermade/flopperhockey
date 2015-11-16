#pragma strict

var message 		: String;
var messageValue	: String;
var sendTo 			: GameObject;

function Click(){
	if(messageValue){
		sendTo.SendMessage(message, messageValue);
	} else {
		sendTo.SendMessage(message);
	}
}