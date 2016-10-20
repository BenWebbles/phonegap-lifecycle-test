/*var key = "pen";
var value = "black";
var get = window.localStorage.getItem(key);

    function onLoad() {
        window.localStorage.setItem(key, value);
		console.log("on load");
		window.alert(get);
	}
	
	


    // device APIs are available
    //
    function onDeviceReady() {

		console.log("device ready");

    }
*/
var chocolate = {
	"chocName": "Fudge",
	"overview": {
		"chocCal": "114kcal"
		"chocFat": "3.4g"
		"chocSalt": "0.10g"
	}
	
}

function onLoad() {
	console.log(
		chocolate.chocName +
		"has "+
		chocCal +
		"amount of calories per bar!");
}

