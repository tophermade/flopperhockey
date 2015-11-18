#pragma strict

var coins 	: GameObject[];

var showThis 	: int;
var counted 	: int 	= 0;
var chanceToShow: int;

function Start () {

	showThis		= Random.Range(0, coins.length);
	counted 		= 0;
	chanceToShow	= Random.Range(0, 4);

	for(var coin : GameObject in coins){
		coin.gameObject.SetActive(false);
	}

	if(chanceToShow == 3 && coins.length > 0){
		coins[showThis].SetActive(true);

		var coinValue = Random.Range(1,7);
		var coinText: GameObject = coins[showThis].transform.Find("Pickup/Count").gameObject;

		coinText.GetComponent(TextMesh).text = coinValue.ToString();
		coins[showThis].transform.Find("Pickup").gameObject.GetComponent(StarPickup).starValue = coinValue;
	}

}

function Update () {

}