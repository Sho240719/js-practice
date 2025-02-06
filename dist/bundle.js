/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_requiren__.d(__webpack_exports__, {
/* harmony export */   appendTodoListElem: function() { return /* binding */ appendTodoListElem; },
/* harmony export */   registerNewTodo: function() { return /* binding */ registerNewTodo; },
/* harmony export */   removeTodoElem: function() { return /* binding */ removeTodoElem; }
/* harmony export */ });
var todoList = [];

// 新たに入力された要素を取得し、todoListに代入する関数
var registerNewTodo = function registerNewTodo() {
  var todoNameElem = document.getElementById("new-todo-name");
  var personElem = document.getElementById("new-person");
  var deadlineElem = document.getElementById("new-deadline");
  // 新たなTODOリストを追加
  todoList.push({
    todoName: todoNameElem.value,
    person: personElem.value,
    deadline: deadlineElem.value
  });
};

// todoリスト追加時に、todoの重複を避けるためにtodo一覧を削除する関数
var removeTodoElem = function removeTodoElem() {
  var tbodyElem = document.getElementById("tbody");
  while (tbodyElem.firstChild) {
    tbodyElem.removeChild(tbodyElem.firstChild);
  }
};

// todoリストの一覧を表示する関数
var appendTodoListElem = function appendTodoListElem() {
  todoList.forEach(function (todo) {
    // todoNameのtdを作成
    var todoNameTdElem = document.createElement("td");
    todoNameTdElem.textContent = todo.todoName;
    // personのtdを作成
    var personTdElem = document.createElement("td");
    personTdElem.textContent = todo.person;
    // deadlineのtdを作成
    var deadlineTdElem = document.createElement("td");
    deadlineTdElem.textContent = todo.deadline;
    var trElem = document.createElement("tr");
    trElem.appendChild(todoNameTdElem);
    trElem.appendChild(personTdElem);
    trElem.appendChild(deadlineTdElem);
    var tbodyElem = document.getElementById("tbody");
    tbodyElem.appendChild(trElem);
  });
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/js/todo.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");



// todoリストの追加するボタンが押されたとき
document.addEventListener("DOMContentLoaded", function () {
  var registerButtonElem = document.getElementById("register");
  registerButtonElem.addEventListener("click", function () {
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.registerNewTodo)();
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.removeTodoElem)();
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.appendTodoListElem)();
  });
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map