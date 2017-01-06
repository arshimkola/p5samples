var api="http://api.giphy.com/v1/gifs/trending?"
var apiKey="&api_key=dc6zaTOxFJmzC"
var query=""

function setup(){
	createCanvas(200,200);
	greeting = createElement('h2', 'Giphy Slug:');
  	greeting.position(20, 5);

	var url = api + apiKey;
	loadJSON(url,gotData)
}

function gotData(giphyResponse){
	console.log(giphyResponse)
	//var index = floor(random(giphyResponse.data.length))
	//greeting.html('Giphy Slug:'+index+' - size:'+giphyResponse.data.length);

	for(var index=0;index < giphyResponse.data.length;index++){
		createImg(giphyResponse.data[index].images.original.url)
	}
}