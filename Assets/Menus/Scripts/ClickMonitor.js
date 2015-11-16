#pragma strict


function Update(){ 
	var hit : RaycastHit;

	if (Input.GetMouseButtonDown(0)) {
		print("tapping");
		var ray : Ray = gameObject.GetComponent(Camera).ScreenPointToRay (Input.mousePosition);
		if (Physics.Raycast (ray,hit)) {
			hit.transform.gameObject.SendMessage("Click");
			print(hit.transform.gameObject.name);
		}
	}
}

function FixedUpdate(){

}