let form = document.querySelector("form");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");

function getTodo(value) {
  let todo = document.createElement("div");
  let textEl = document.createElement("span");

  textEl.innerHTML = value;

  todo.appendChild(textEl);
  let closeEL = document.createElement("span");
  closeEL.innerHTML = "&times;";
  closeEL.classList.add("delete");

  closeEL.addEventListener("click", function (e) {
    todos.removeChild(todo);
  });
  todo.appendChild(closeEL);
  todo.classList.add("todo");
  return todo;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;
  if (!value.trim()) return;
  todos.appendChild(getTodo(value));
  input.value = "";
});
