var db = window.openDatabase("foods_db", 1.0, "food database", 1024 * 1024);
db.transaction(createTable, error, success);
	
function createTable(tx) {	
 	tx.executeSql("CREATE TABLE IF NOT EXISTS foods_db(id UNIQUE, title TEXT)");
}
	
function success() {
	db.transaction(addFood, error);
}
	
function addFood(tx) {
	tx.executeSql("INSERT INTO foods_db(id, title) VALUES (1, 'Dinky Decker')");
	tx.executeSql("INSERT INTO foods_db(id, title) VALUES (2, '130kcal')");
	tx.executeSql("INSERT INTO foods_db(id, title) VALUES (3, '4.8g')");
    tx.executeSql("INSERT INTO foods_db(id, title) VALUES (4, '2.9g')");
    tx.executeSql("INSERT INTO foods_db(id, title) VALUES (5, '15g')");
    tx.executeSql("INSERT INTO foods_db(id, title) VALUES (6, '0.07g')");
}
	
function error(err) {
	alert("oops something went wrong " + err.message);
}


///////////////////////////////////////////////////////////////////
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
        output += '<li>' + value.name + '<ul><li>Calories:'+value.calories+'</li><li>Fat: '+value.fat+'</li><li>Saturates: '+value.saturates+'</li><li>Sugars: '+value.sugars+'</li><li>Salt: '+value.salt+'</li></ul></li>';
    });
    $('#searchFood').html(output).listview("refresh");
}