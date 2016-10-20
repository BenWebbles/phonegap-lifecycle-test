var key = "pen";
var value = "black";

    function onLoad() {
        window.localStorage.setItem(key, value);
		console.log("setting item");
    }
	


    // device APIs are available
    //
    function onDeviceReady() {
		window.localStorage.getItem(key);
		console.log("getting item");
       

    }

