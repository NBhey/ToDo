import "./style.css";
import addTodo from "./js/addTodo.js";
import saveData from "./js/localStorage.js";

const btn = document.getElementById("add");
const input = document.getElementById("input");
const list = document.querySelector(".list");

let todoList = [];

if (localStorage.getItem("todo")) {
  todoList = JSON.parse(localStorage.getItem("todo"));
  addTodo(todoList, list);
}

btn.addEventListener("click", () => {
  if (!input.value) return;
  let todoObj = {
    todo: input.value,
    description: '',
    checked: false,
    important: false,
  };
  todoList.push(todoObj);
  addTodo(todoList, list);
  saveData(todoList);
  input.value = "";
});

list.addEventListener("change", (e) => {
  let id = e.target.getAttribute("id");
  let valueLabel = list.querySelector("[for=" + id + "]").textContent;

  todoList.forEach((el) => {
    if (el.todo === valueLabel) {
      el.checked = !el.checked;
      saveData(todoList);
    }
  });
});

list.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  todoList.forEach((el, i) => {
    if (el.todo === e.target.innerHTML) {
      if (e.ctrlKey || e.metaKey) {
        todoList.splice(i, 1);
      } else {
        el.important = !el.important;
      }
      addTodo(todoList, list);
      saveData(todoList);
    }
  });
});


