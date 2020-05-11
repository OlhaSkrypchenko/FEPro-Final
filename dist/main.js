/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tasksMVC_tasksView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _tasksMVC_tasksModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _tasksMVC_tasksController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




const tasksView = new _tasksMVC_tasksView__WEBPACK_IMPORTED_MODULE_0__["default"]();
const tasksModel = new _tasksMVC_tasksModel__WEBPACK_IMPORTED_MODULE_1__["default"]();
const tasksController = new _tasksMVC_tasksController__WEBPACK_IMPORTED_MODULE_2__["default"](tasksModel, tasksView);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TasksView; });
/* harmony import */ var _reusable_reusable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class TasksView {
  constructor() {
    this.app = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["getElement"])(".app");
    this.container = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["getElement"])(".l-container");
    this.addButton = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "button",
      className: "c-button__add",
      children: "+ NEW TASK",
    });

    this.tasksContainer = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      className: "l-tasks",
    });

    Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["appendChildren"])(this.container, [this.addButton, this.tasksContainer]);
  }

  createTaskCard(task) {
    const date = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "p",
      className: "c-date",
      children: task.date,
    });

    const text = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "p",
      className: "c-text",
      children: task.fullText,
    });

    const editButton = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "button",
      className: "c-button__edit",
      children: "EDIT",
      attributes: {
        "data-edit-id": task.id,
      },
    });

    const deleteButton = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "button",
      className: "c-button__delete",
      children: "DELETE",
      attributes: {
        "data-id": task.id,
      },
    });

    const buttonContainer = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      className: "l-button-container",
      children: [editButton, deleteButton],
    });

    this.taskCard = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      className: "c-task",
      attributes: {
        id: task.id,
      },
      children: [date, text, buttonContainer],
    });

    Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["appendChild"])(this.tasksContainer, this.taskCard);
  }

  renderTasks(tasks) {
    if (tasks.length === 0) {
      this.tasksContainer.innerHTML = "";
      return;
    }

    this.tasksContainer.innerHTML = "";
    tasks.forEach((task) => this.createTaskCard(task));
  }

  bindDeleteTask(handler) {
    this.tasksContainer.addEventListener("click", (event) => {
      const dataId = event.target.dataset.id;

      if (!dataId) {
        return;
      }

      const id = parseInt(dataId);

      handler(id);
    });
  }

  bindEditTask(handler) {
    this.tasksContainer.addEventListener("click", (event) => {
      const dataId = event.target.dataset.editId;

      if (!dataId) {
        return;
      }

      const id = parseInt(dataId);

      handler(id);
    });
  }

  bindRenderForm(handler) {
    this.addButton.addEventListener("click", handler);
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendChild", function() { return appendChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendChildren", function() { return appendChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBasicElement", function() { return createBasicElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return getElement; });


function appendChild(element, children = "") {
  if (children === null) {
    return;
  }

  if (typeof children === "string" || typeof children === "number") {
    return (element.innerText += children);
  }

  return element.append(children);
}

function appendChildren(element, children = "") {
  if (Array.isArray(children)) {
    children.forEach((el) => appendChild(element, el));
  } else {
    appendChild(element, children);
  }
}

function createBasicElement({
  element,
  className = [],
  attributes = {},
  children = "",
}) {
  const el = document.createElement(element);

  if (typeof className === "string") {
    el.classList.add(className);
  } else {
    el.classList.add(...className);
  }

  for (let key in attributes) {
    el.setAttribute(key, attributes[key]);
  }

  appendChildren(el, children);

  return el;
}

function getElement(selector) {
  return document.querySelector(selector);
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TasksModel; });
class TasksModel {
  constructor() {
    this.tasks = [
      {
        id: 0,
        location: "sd",
        service: "plumber",
        taskType: "dfdf",
        description: "dfdfvfdv",
        fullText: "Hello",
      },
      {
        id: 1,
        location: "sd",
        service: "plumber",
        taskType: "dfdf",
        description: "dfdfvfdv",
        fullText: "Hola",
      },
      {
        id: 2,
        location: "sd",
        service: "plumber",
        taskType: "dfdf",
        description: "dfdfvfdv",
        fullText: "Halo",
      },
    ];

    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
  }

  createTaskDate() {
    const currentDate = new Date();

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = days[currentDate.getDay()];

    const month = months[currentDate.getMonth()];

    const date = currentDate.getDate();

    const hours =
      currentDate.getHours() < 10
        ? `0${currentDate.getHours()}`
        : currentDate.getHours();

    const minutes =
      currentDate.getMinutes() < 10
        ? `0${currentDate.getMinutes()}`
        : currentDate.getMinutes();

    return `${day}, ${month} ${date}, ${hours}:${minutes}`;
  }

  _onChangeData(data) {
    localStorage.setItem("tasks", JSON.stringify(data));
    this.onTasksListChanged(this._data);
  }

  get _data() {
    return JSON.parse(localStorage.getItem("tasks"));
  }

  getTask(id) {
    return this._data.find((el) => (el.id = id));
  }

  addTask({ location, service, taskType, description = "", fullText }) {
    const task = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      date: this.createTaskDate(),
      location,
      service,
      taskType,
      description,
      fullText,
    };

    localStorage.setItem("tasks", JSON.stringify([...this._data, task]));
  }

  deleteTask(id) {
    const data = this._data.filter((el) => el.id !== id);

    this._onChangeData(data);
  }

  editTask({ id, location, service, taskType, description = "", fullText }) {
    const data = this._data.map((task) =>
      task.id === id
        ? {
            id,
            date: this.createTaskDate(),
            location,
            service,
            taskType,
            description,
            fullText,
          }
        : task
    );
    this._onDataChange(data);
  }

  bindTasksListChanged(callback) {
    this.onTasksListChanged = callback;
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TasksController; });
class TasksController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.handlerRenderTasks();

    this.model.bindTasksListChanged(this.onTasksListChanged.bind(this));
    this.onTasksListChanged(this.model._data);
  }

  onTasksListChanged(data) {
    this.view.renderTasks(data);
  }

  handleDeleteTask(id) {
    this.model.deleteTask(id);
  }

  handlerRenderTasks() {
    this.view.renderTasks(this.model._data);
    this.view.bindDeleteTask(this.handleDeleteTask.bind(this));
    // this.listView.bindCreateEditingForm(
    //   this.handleCreateEditingForm.bind(this)
    // );
    // this.listView.bindEditUser(this.handleEditUser.bind(this));
    // this.listView.bindRenderFormPage(this.handlerRenderForm.bind(this));
  }
}


/***/ })
/******/ ]);