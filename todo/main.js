var todoList = document.querySelector(".todo-list");
var todoInput = document.querySelector(".new-todo");
todoInput.addEventListener("keypress", function addLine(event){ 
    if (event.keyCode === 13) {
    var user_input = event.target.value;
    console.log(user_input);
    todoList.insertAdjacentHTML("beforeend", "<li><div class='view'><label>"+ user_input + "</label></div></li>")

    };


});





