using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using VoxelBusters.Utility;
using VoxelBusters.NativePlugins;

public class MarketAgent : MonoBehaviour {

	private BillingProduct[] products;

	public GameObject BuyAdsButton;
	public GameObject RestoreButton;
	public GameObject Adverts;
	
	//string buyThis = "noads";
	#if UNITY_ANDROID
		string buyThis = "swigswag.noads";
	#endif

	#if UNITY_IPHONE
		string buyThis = "swigswag.noads";
	#endif

	void BuyNoAds(){
		
		NPBinding.Billing.BuyProduct(buyThis);
	}

	void RestorePurchases (){
		NPBinding.Billing.RestoreCompletedTransactions();
	}

	void DidFinishProductsRequestEvent (BillingProduct[] _regProductsList, string _error){
		foreach (BillingProduct _eachProduct in _regProductsList){
			Debug.Log(_eachProduct);
		}
	}

	void DidReceiveTransactionInfoEvent (BillingTransaction[] _transactionList, string _error) {
		Debug.Log("transaction complete");
		foreach (BillingTransaction _eachTransaction in _transactionList){
			Debug.Log("Product Identifier = " 		+ _eachTransaction.ProductIdentifier);
			Debug.Log("Transaction State = "		+ _eachTransaction.TransactionState);
			Debug.Log("Verification State = "		+ _eachTransaction.VerificationState);
			Debug.Log("Transaction Date[UTC] = "	+ _eachTransaction.TransactionDateUTC);
			Debug.Log("Transaction Date[Local] = "	+ _eachTransaction.TransactionDateLocal);
			Debug.Log("Transaction Identifier = "	+ _eachTransaction.TransactionIdentifier);
			Debug.Log("Transaction Receipt = "		+ _eachTransaction.TransactionReceipt);
			Debug.Log("Error = "					+ _eachTransaction.Error.GetPrintableString());

			if(_eachTransaction.ProductIdentifier == buyThis && _eachTransaction.Error.GetPrintableString() == "NULL"){
				// this will handle both disabling ads first time and on restoration
				Debug.Log("yay!");
				BuyAdsButton.SetActive(false);
				Adverts.SendMessage("DisableAds");
			}
		}
	}

	void Start () {
		products = NPSettings.Billing.Products;
		NPBinding.Billing.RequestForBillingProducts(products);

		Billing.DidFinishProductsRequestEvent	+= DidFinishProductsRequestEvent;
		Billing.DidReceiveTransactionInfoEvent	+= DidReceiveTransactionInfoEvent;

		if(PlayerPrefs.GetString("ShowAds") == "false"){
			BuyAdsButton.SetActive(false);
		}

		#if UNITY_ANDROID
			RestoreButton.SetActive(false);
		#endif
	}

	void Update () {
	
	}
}
