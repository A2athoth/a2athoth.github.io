const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoForm input:first-child");
const todoList = document.querySelector("#todoList");
const TODOS_KEY = "todos";

let todos = [];

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((item) => {
        return item.id !== parseInt(li.id);
    });

    saveTodos(todos);
}

function editTodo(event) {
    const li = event.target.parentElement;
    const checkbox = li.querySelector("input[type=checkbox]");

    console.log(checkbox.checked);

    console.log("todosb4", todos);
    todos.forEach((item) => {
        if (item.id === parseInt(li.id)) {
            item.checked = checkbox.checked;
            console.log("changed");
        }
    });
    console.log("todosAft", todos);

    // todos = todos.filter((item) => {
    //   return item.id !== parseInt(li.id);
    // });

    saveTodos(todos);
}

function saveTodos(todoList) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoList));
    if (todoList.length === 0) {
        localStorage.removeItem(TODOS_KEY);
    }
}

function drawTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const checkbox = document.createElement("input");
    const button = document.createElement("button");
    checkbox.setAttribute("type", "checkbox");
    button.innerText = "X";
    checkbox.addEventListener("change", editTodo);
    button.addEventListener("click", deleteTodo);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);

    span.innerText = newTodo.text;
    if (newTodo.checked) {
        checkbox.setAttribute("checked", true);
    }
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = { id: Date.now(), text: todoInput.value, checked: false };
    todoInput.value = ""; //clear input
    todos.push(newTodo);
    drawTodo(newTodo);
    saveTodos(todos);
}

function handleTodoSelected(event) {
    event.preventDefault();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(drawTodo); //same
}
