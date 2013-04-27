
require.config({
    paths: {
        "jquery": "libs/jquery",
	}
});

//This is our entry point. This is a simple app with one module which is what we are importing here...
//In this example require takes two params...an array of the modules to import by their path and the 
//parameters they map to passed into our function
require(['jquery', 'modules/todo/todoModule'], function ($, todo) {
	
	//log jquery version
    if(console != 'undefined') {
        console.log("jQuery Version: " + $.fn.jquery);
	}

	todo.load($("#content"));
});
