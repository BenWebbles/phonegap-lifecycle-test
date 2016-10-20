var key = "pen";
var value = window.localStorage.getItem(key);

    function onLoad() {
        window.localStorage.setItem(key, value);
		console.log("on load");
		window.alert(value);
	}
	
	


    // device APIs are available
    //
    function onDeviceReady() {

		console.log("device ready");

    }




