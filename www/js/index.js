/*
var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
//If device launched, run 'onDeviceReady' function
document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
    //document.getElementById("launched").innnerHTML = 'Application launched: '+launched_count;
	$("#resumed").text("Application resumed: " + resumed_count);
    //document.getElementById("resumed").innnerHTML = 'Application resumed: '+resumed_count;
	$("#paused").text("Application paused: " + paused_count);
    //document.getElementById("paused").innnerHTML = 'Application paused: '+paused_count;
}


// device APIs are available
//
    function onDeviceReady() {
        //If app is resumed, run 'onResume' function
        document.addEventListener("resume", onResume, false);
        //If app is paused, run 'onPause' function
        document.addEventListener("pause", onPause, false);
        
        launched_count++;
        updateDisplay();

        //alert("device ready");
        console.log("device ready");
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	//alert("pause");
    console.log("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	//alert("resume");
    console.log("resume");
    }
*/

var key = "NutritionalValue";
var nutritInfo = {"calories":"130kcal","fat":"4.8g","saturates":"2.9g","sugars":"15g","salt":"0.07g"};
var value = JSON.stringify(nutritInfo);

var readJSON;
var read;
window.localStorage.clear();
window.localStorage.setItem(key,value);

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    readJSON= window.localStorage.getItem(key);
    read = JSON.parse(readJSON);
    $("#cal").text(read.calories);
    $("#fat").text(read.fat);
    $("#sat").text(read.saturates);
    $("#sug").text(read.sugars);
    $("#salt").text(read.salt);
    
}