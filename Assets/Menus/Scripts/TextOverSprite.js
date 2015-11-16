var layerName 		: String;
var textRenderer    : Renderer;

function Awake ()
{
textRenderer = gameObject.GetComponent(Renderer);
}

function Start () 
{
	textRenderer.sortingLayerName = layerName;
}