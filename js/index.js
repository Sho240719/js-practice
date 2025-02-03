let todoList = [];

// 新たに入力された要素を取得し、todoListに代入する関数
const registerNewTodo = () => {
  const todoNameElem = document.getElementById("new-todo-name");
  const personElem = document.getElementById("new-person");
  const deadlineElem = document.getElementById("new-deadline");
  // 新たなTODOリストを追加
  todoList.push({
    todoName: todoNameElem.value,
    person: personElem.value,
    deadline: deadlineElem.value,
  });
};

// todoリスト追加時に、todoの重複を避けるためにtodo一覧を削除する関数
const removeTodoElem = () => {
  const tbodyElem = document.getElementById("tbody");
  while (tbodyElem.firstChild) {
    tbodyElem.removeChild(tbodyElem.firstChild);
  }
};

// todoリストの一覧を表示する関数
const appendTodoListElem = () => {
  todoList.forEach((todo) => {
    // todoNameのtdを作成
    const todoNameTdElem = document.createElement("td");
    todoNameTdElem.textContent = todo.todoName;
    // personのtdを作成
    const personTdElem = document.createElement("td");
    personTdElem.textContent = todo.person;
    // deadlineのtdを作成
    const deadlineTdElem = document.createElement("td");
    deadlineTdElem.textContent = todo.deadline;

    const trElem = document.createElement("tr");
    trElem.appendChild(todoNameTdElem);
    trElem.appendChild(personTdElem);
    trElem.appendChild(deadlineTdElem);

    const tbodyElem = document.getElementById("tbody");
    tbodyElem.appendChild(trElem);
  });
};

// todoリストの追加するボタンが押されたとき
document.addEventListener("DOMContentLoaded", () => {
  const registerButtonElem = document.getElementById("register");
  registerButtonElem.addEventListener("click", () => {
    registerNewTodo();

    removeTodoElem();

    appendTodoListElem();
  });
});
