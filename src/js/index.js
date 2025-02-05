import { registerNewTodo, removeTodoElem, appendTodoListElem } from "./todo";

// todoリストの追加するボタンが押されたとき
document.addEventListener("DOMContentLoaded", () => {
  const registerButtonElem = document.getElementById("register");
  registerButtonElem.addEventListener("click", () => {
    registerNewTodo();

    removeTodoElem();

    appendTodoListElem();
  });
});
