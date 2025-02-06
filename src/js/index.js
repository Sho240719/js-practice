import { registerNewTodo, removeTodoElem, appendTodoListElem } from "./todo";
import "../css/style.css";

// todoリストの追加するボタンが押されたとき
document.addEventListener("DOMContentLoaded", () => {
  const registerButtonElem = document.getElementById("register");
  registerButtonElem.addEventListener("click", () => {
    registerNewTodo();

    removeTodoElem();

    appendTodoListElem();
  });
});
