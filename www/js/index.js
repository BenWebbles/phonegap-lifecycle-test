var key = "pen";
var value = window.localStorage.getItem(key);

    function onLoad() {
        window.localStorage.setItem(key, "black");
		console.log("on load");
		window.alert(key);
	}
	
	


    // device APIs are available
    //
    function onDeviceReady() {

		console.log("device ready");

    }




