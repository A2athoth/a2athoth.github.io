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
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);

    span.innerText = newTodo.text;
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = { id: Date.now(), text: todoInput.value };
    todoInput.value = ""; //clear input
    todos.push(newTodo);
    drawTodo(newTodo);
    saveTodos(todos);
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(drawTodo); //same
}
