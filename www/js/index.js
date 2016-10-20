var key = "pen";
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




