
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("on load");
    }
	


    // device APIs are available
    //
    function onDeviceReady() {
		console.log("device ready");
       

    }

var key = "pen";
var value = "black";

window.localStorage.setItem( key, value );

