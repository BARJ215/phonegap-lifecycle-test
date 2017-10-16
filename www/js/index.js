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

var key = "chocbar";
var data =[ 
    {"name":"Dinky Decker","calories":"130kcal","fat":"4.8g","saturates":"2.9g","sugars":"15g","salt":"0.07g"}, {"name":"Oreo","calories":"83kcal","fat":"5.2g","saturates":"2.9g","sugars":"7.3g","salt":"0.06g"},
    {"name":"Fudge Mini","calories":"116kcal","fat":"4.2g","saturates":"2.3g","sugars":"16g","salt":"0.0g"},
    {"name":"Big Tasty","calories":"186kcal","fat":"12g","saturates":"6.5g","sugars":"16g","salt":"0.16g"},
    {"name":"Curly Wurly","calories":"118kcal","fat":"4.6g","saturates":"2.5g","sugars":"12.5g","salt":"0.18g"}
];
var value = JSON.stringify(data);
var readJSON;
var read;

window.localStorage.clear();
window.localStorage.setItem(key,value);

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    readJSON= window.localStorage.getItem(key);
    read = JSON.parse(readJSON);
    var output = '';
    $.each(read, function (index, value) {
        output += '<li>' + value.name + '</li>';
    });
    $('#searchFood').html(output).listview("refresh");
}