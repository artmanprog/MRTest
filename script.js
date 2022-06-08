

function showMiniCart(){
	//Show mini cart
	
}

function getData(){
	//Get data from site
	var http = new XMLHttpRequest();
	http.open("GET","https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product", false);
	http.send(null);
	
	const resp = JSON.parse(http.responseText);

	addData(resp);

}

function addData(response){
	
	//Content
	document.getElementById("product-title").innerHTML = response.title;
	document.getElementById("product-price").innerHTML = "$" +response.price + ".00";
	document.getElementById("content-details").innerHTML = response.description;
	document.getElementById("shirt-image").src = "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg";
	
	//Buttons
	document.getElementById("btn-size-s").innerHTML = response.sizeOptions[0].label;
	document.getElementById("btn-size-m").innerHTML = response.sizeOptions[1].label;
	document.getElementById("btn-size-l").innerHTML = response.sizeOptions[2].label;
	
	
}

function setSize(){
	alert(document.getElementById("btn-size-s") == "btn-size-s");

}

function addToCart(){
	//Add/Update the Cart
}