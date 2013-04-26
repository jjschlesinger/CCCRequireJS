//define or export our module
define(['modules/spinner/spinnerModule'], function (spinnerModule) {

    //log jquery version
    if(console != 'undefined') {
        console.log("jQuery Version: " + $.fn.jquery);
    }
    
    //here is our module definition...
    var spinner = new spinnerModule();
    //a function that will append the todo items to the root element (el)
    var load = function(el) {
		spinner.start();
    	var todos = [
        {
            completed: false,
            text: "A simple to-do item"
        },
        {
            completed: true,
            text: "A completed to-do item"
        }];

        buildTodoList(el, todos);

        //register click event
        var addTodo = document.getElementById("addTodo");
        var newTodo = document.getElementById("newTodo");

        addTodo.onclick = function(e) {
            spinner.start();
            todos.push({completed: false, text: newTodo.value });
            newTodo.value = "";
            buildTodoList(el, todos);       
        };
		
    };

    var buildTodoList = function(el, todos) {

        //remove all child nodes
        el.empty();

        //just to simulate the spinner
        window.setTimeout(function(){
            var ul = $("<ul class=\"unstyled\"/>");

            for (var i = 0; i < todos.length; i++) {
                var checked = todos[i].completed ? "&nbsp;&nbsp;<i class=\"icon-ok\"></i>" : "";
                ul.append("<li>" + todos[i].text + checked + "</li>");
            }

            ul.appendTo(el);
            spinner.stop(); 
        }, 1000);
    };

    //here we return our module
    return {
    	load: load
    };
});