const todoForm = document.querySelector(".todo-js-form");
const todoInput = document.querySelector(".todo-js-form-input_value");
const todoList = document.querySelector(".todo-js-form-list");
const todoItem = "todoSaveArray";

let todoSaveArray = [];

function saveTodoLocalStorage() {
    localStorage.setItem(todoItem, JSON.stringify(todoSaveArray));
}

function removeTodoList(event) {
    const removeList = event.target.parentElement;
    removeList.remove();
    todoSaveArray = todoSaveArray.filter((item) => item.id !== parseInt(removeList.id));
    saveTodoLocalStorage();
}

function paintTodoHandler(todoValueObj) {
    const newList = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");
    todoList.appendChild(newList);
    newList.id = todoValueObj.id;
    newList.appendChild(newSpan);
    newList.appendChild(newBtn);
    newSpan.innerText = `${todoValueObj.text}    `;
    newBtn.innerText = `❌`;

    newBtn.addEventListener("click", removeTodoList);
}

function todoFormHandler(event) {
    event.preventDefault();
    const saveTodoInputValue = todoInput.value;
    todoInput.value = "";
    const todoValueObj = {
        text: saveTodoInputValue,
        id: Date.now(),
    }
    paintTodoHandler(todoValueObj);
    todoSaveArray.push(todoValueObj);
    saveTodoLocalStorage();
}

todoForm.addEventListener("submit", todoFormHandler);

const getTodoValueLocalStorage = localStorage.getItem(todoItem);

if (getTodoValueLocalStorage !== null) {
    const parseGetTodoValueLocalStorage = JSON.parse(getTodoValueLocalStorage);
    todoSaveArray = parseGetTodoValueLocalStorage;
    parseGetTodoValueLocalStorage.forEach(paintTodoHandler);
}