#pragma strict

var bankCount 		: GameObject;
var balance 		: int;


function Deposit(depositAmount : int){
	balance = balance + depositAmount;
	PlayerPrefs.SetInt("Balance", balance + depositAmount);
	bankCount.GetComponent(TextMesh).text = balance.ToString();
}



function Withdraw(withdrawalAmount : int){
	balance = balance - withdrawalAmount;
	PlayerPrefs.SetInt("Balance", balance - withdrawalAmount);
	bankCount.GetComponent(TextMesh).text = balance.ToString();
}



function Start () {
	bankCount = GameObject.Find("BankCount");

	if(PlayerPrefs.HasKey("Balance")){
		balance = PlayerPrefs.GetInt("Balance");
	} else {
		balance = 25;
		PlayerPrefs.SetInt("Balance", balance);
	}

	bankCount.GetComponent(TextMesh).text = balance.ToString();
}



function Update () {

}