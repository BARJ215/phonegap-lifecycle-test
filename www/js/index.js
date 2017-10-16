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

var key = ["pen","eyes","birthday","phoneOS","glasses"];
var value = ["blue","brown","220597","android","true"];
var read;
if(key.length==value.length){
    for(i=0; i<key.length;i++){
        window.localStorage.setItem(key[i], value[i]);
    }
}

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    read = window.localStorage.getItem("eyes");
    $("#readText").text(read);
    
}