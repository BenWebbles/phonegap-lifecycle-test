var key = "pen";
var value = window.localStorage.getItem(key);

    function onLoad() {
        window.localStorage.setItem(key, value);
		console.log("on load");
    }
	


    // device APIs are available
    //
    function onDeviceReady() {
		window.alert(value);
		console.log("device ready");

    }




