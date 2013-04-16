//define or export our module
define(['modules/spinner/spinnerModule'], function (spinnerModule) {
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
        while(el.hasChildNodes()) {
            el.removeChild(el.lastChild);
        }

        var ul = document.createElement("ul");

        for (var i = 0; i < todos.length; i++) {
            var completedText = todos[i].completed ? " (done)" : "";
            var todoText = document.createTextNode(todos[i].text + completedText); 
            var li = document.createElement("li");
            li.appendChild(todoText);
            ul.appendChild(li);
        }

        //just to simulate the spinner
        window.setTimeout(function(){
            el.appendChild(ul);
            spinner.stop(); 
        }, 1000);
    };

    //here we return our module
    return {
    	load: load
    };
});