//This is our entry point. This is a simple app with one module which is what we are importing here...
//In this example require takes two params...an array of the modules to import by their path and the 
//parameters they map to passed into our function
require(['modules/todo/todoModule'], function (todo) {
	var contentDiv = document.getElementById("content");
	todo.load(contentDiv);
});

//here's what happens...app.js has a dep on todo, which has a dep on spinner so the browser will download 
//the scripts asynchronously:
// app.js
// todoModule.js
// spinner.js
