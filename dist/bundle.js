/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendTodoListElem: () => (/* binding */ appendTodoListElem),
/* harmony export */   registerNewTodo: () => (/* binding */ registerNewTodo),
/* harmony export */   removeTodoElem: () => (/* binding */ removeTodoElem)
/* harmony export */ });
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/js/todo.js");


// todoリストの追加するボタンが押されたとき
document.addEventListener("DOMContentLoaded", () => {
  const registerButtonElem = document.getElementById("register");
  registerButtonElem.addEventListener("click", () => {
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.registerNewTodo)();

    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.removeTodoElem)();

    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.appendTodoListElem)();
  });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map