window.addEventListener("DOMContentLoaded", domLoaded);

function convertCtoF(degreesCelsius) {
	var degreesFahrenheit = (degreesCelsius * (9/5)) + 32;
	return degreesFahrenheit;
}

function convertFtoC(degreesFahrenheit) {
	return (degreesFahrenheit - 32) * (5/9);
}

function changePics(degreesFahrenheit){
	if(degreesFahrenheit < 32){
		return"cold.gif";	
	}
	else if(degreesFahrenheit >= 32 && degreesFahrenheit <= 50){
		return"cool.gif";
	}
	else if(degreesFahrenheit > 50){
		return"warm.gif"
	}
}

function checkErrorInput(input){
	if(isNaN(parseFloat(input))){
		return false; // input is not valid throws error and returns false
	}
	else{
		return true; // valid input
	}
}

function domLoaded() {
	//initialize the image and error messages
	var convertButton=document.getElementById("convertButton");
	var cInput = document.getElementById("cInput");
	var fInput = document.getElementById("fInput");
	var img = document.getElementById("weatherImage");
	var errorMessage = document.getElementById("errorMessage");
	convertButton.addEventListener("click",function(){
	if(cInput.value.length>0){
		var cels = parseFloat(cInput.value);
		if(!isNaN(cels)){
			fInput.value = convertCtoF(cels);
		}
		else{
			errorMessage.innerHTML= cInput.value + " is not a number";
		}
	}
	else if(fInput.value.length>0){
		var fahr = parseFloat(fInput.value);
		if(!isNaN(fahr)){
			cInput.value = convertFtoC(fahr);
		}
		else{
			errorMessage.innerHTML=cInput.value +" is not a number";
		}
	}
	});

	if(parseFloat(fInput.value) < 32){
		img.src = "cold.gif";
	}
	else if(parseFloat(fInput.value) >= 32 && parseFloat(fInput.value) <= 50){
		img.src = "cool.gif";
	}
	else {
		img.src = "warm.gif";
	}

//	img.src=changePics(parseFloat(fInput.value));
	
	cInput.addEventListener("input", function(){
		cInput.value = "";
        errorMessage.value = "";

	});

	fInput.addEventListener("input", function(){
		fInput.value = "";
        errorMessage.value = "";
	});

}
