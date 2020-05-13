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
/* harmony import */ var _static_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _static_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_static_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tasksMVC_tasksView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _tasksMVC_tasksModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _tasksMVC_tasksController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _formMVC_formView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _formMVC_formModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _formMVC_formController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);











const pubsub = new _pubsub__WEBPACK_IMPORTED_MODULE_7__["default"]();

const tasksView = new _tasksMVC_tasksView__WEBPACK_IMPORTED_MODULE_1__["default"]();
const tasksModel = new _tasksMVC_tasksModel__WEBPACK_IMPORTED_MODULE_2__["default"]();
const tasksController = new _tasksMVC_tasksController__WEBPACK_IMPORTED_MODULE_3__["default"](tasksModel, tasksView, pubsub);

const formView = new _formMVC_formView__WEBPACK_IMPORTED_MODULE_4__["default"]();
const formModel = new _formMVC_formModel__WEBPACK_IMPORTED_MODULE_5__["default"]();
const formController = new _formMVC_formController__WEBPACK_IMPORTED_MODULE_6__["default"](formModel, formView, pubsub);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".app {\n  display: flex;\n  justify-content: space-between;\n}\n\n.l-form {\n  width: 500px;\n}\n\n.l-container {\n  width: 250px;\n}\n\n.c-button__add {\n  width: 100%;\n  margin: 15px 0;\n}\n\n.c-task {\n  border: 1px solid #000;\n  margin: 15px 0;\n  padding: 10px;\n}\n\n.c-form {\n  position: relative;\n}\n\n.c-button__close {\n  position: absolute;\n  top: 15px;\n  right: 10px;\n}\n\n.c-address {\n  min-height: 25px;\n  padding: 10px 0;\n}\n\n.c-taskText {\n  min-height: 50px;\n  padding: 10px 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TasksView; });
/* harmony import */ var _reusable_reusable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);


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

  // bindEditTask(handler) {
  //   this.tasksContainer.addEventListener("click", (event) => {
  //     const dataId = event.target.dataset.editId;

  //     if (!dataId) {
  //       return;
  //     }

  //     const id = parseInt(dataId);

  //     handler(id);
  //   });
  // }

  bindRenderForm(handler) {
    this.addButton.addEventListener("click", handler);
  }
}


/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TasksModel; });
class TasksModel {
  constructor() {
    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TasksController; });
class TasksController {
  constructor(model, view, pubsub) {
    this.model = model;
    this.view = view;
    this.pubsub = pubsub;

    this.pubsub.subscribe("renderTasks", this.handlerRenderTasks.bind(this));

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
    this.view.bindRenderForm(this.handlerRenderForm.bind(this));
    // this.listView.bindCreateEditingForm(
    //   this.handleCreateEditingForm.bind(this)
    // );
    // this.listView.bindEditUser(this.handleEditUser.bind(this));
  }

  handlerRenderForm() {
    this.pubsub.publish("renderForm");
  }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormView; });
/* harmony import */ var _reusable_reusable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);


class FormView {
  constructor() {
    this.app = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["getElement"])(".app");

    this.formContainer = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      className: "l-form",
    });

    Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["appendChild"])(this.app, this.formContainer);

    // this.servicesField = createBasicElement({
    //   element: "div",
    // });

    this.serviceTasksField = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
    });

    this.fullTextArr = [];
  }

  _createTitle(titleText) {
    const taskFieldTitle = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "h3",
      className: "c-title",
      children: titleText,
    });

    return taskFieldTitle;
  }

  _createTaskField(titleText) {
    const title = this._createTitle(titleText);

    this.taskFieldText = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      className: "c-taskText",
    });

    this.taskFieldAddress = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      className: "c-address",
    });

    this.createTaskButton = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "input",
      className: "c-button__create",
      attributes: {
        value: "CREATE TASK",
        type: "submit",
      },
    });

    const taskField = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      children: [
        title,
        this.taskFieldText,
        this.taskFieldAddress,
        this.createTaskButton,
      ],
    });

    return taskField;
  }

  _createLocationField(titleText) {
    const title = this._createTitle(titleText);

    this.locationInput = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "input",
      className: "c-input__location",
      attributes: { required: "required" },
    });

    const locationField = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      children: [title, this.locationInput],
    });

    return locationField;
  }

  _createServiceField(titleText, services) {
    const servicesField = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
    });

    const title = this._createTitle(titleText);

    this.servicesContainer = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      className: "l-service",
    });

    services.forEach((el) => {
      const radio = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
        element: "input",
        attributes: {
          type: "radio",
          value: el.type,
          name: "service",
          id: el.type,
          required: "required",
        },
      });

      const label = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
        element: "label",
        attributes: {
          for: `${el.type}`,
        },
        children: el.type,
      });

      const div = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
        element: "div",
        className: `c-service__${el.type}`,
        children: [radio, label],
      });

      Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["appendChild"])(this.servicesContainer, div);
    });

    Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["appendChildren"])(servicesField, [title, this.servicesContainer]);
    this.servicesField = servicesField;

    return servicesField;
  }

  _createDescriptionField(titleText) {
    const title = this._createTitle(titleText);

    this.descriptionInput = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "textarea",
      className: "c-textarea__description",
    });

    const descriptionField = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      children: [title, this.descriptionInput],
    });

    return descriptionField;
  }

  fillAddress() {
    this.locationInput.addEventListener("input", (event) => {
      this.location = event.target.value;
      this.taskFieldAddress.innerHTML = `My address is ${this.location}`;
    });
  }

  fillTextTaskFieldText() {
    this.taskFieldText.innerHTML = "";
    this.taskFieldText.innerHTML = this.fullTextArr.reduce(
      (accum, text) => accum + text
    );
  }

  fillFirstPartTaskFieldText() {
    this.servicesContainer.addEventListener("click", (event) => {
      if (typeof event.target.value === "undefined") {
        return;
      }

      this.service = event.target.value;
      this.fullTextArr[0] = `I need a(an) ${this.service}`;
      this.fillTextTaskFieldText();
    });
  }

  fillSecondPartTaskFieldText() {
    this.serviceTaskContainer.addEventListener("click", (event) => {
      if (typeof event.target.value === "undefined") {
        return;
      }

      this.taskType = event.target.value;
      this.fullTextArr.splice(1, 1);
      this.fullTextArr[1] = ` to ${this.taskType}`;
      this.fillTextTaskFieldText();
    });
  }

  fillThirdPartTaskFieldText() {
    this.descriptionInput.addEventListener("input", (event) => {
      if (event.target.value === "") {
        this.fullTextArr.splice(2, 1);
        this.fillTextTaskFieldText();
        return;
      } else {
        this.description = event.target.value;

        this.fullTextArr[2] = ` , ${this.description}`;

        this.fillTextTaskFieldText();
      }
    });
  }

  clearFormContainer() {
    this.formContainer.innerHTML = "";
  }

  closeForm() {
    this.closeButton.addEventListener(
      "click",
      this.clearFormContainer.bind(this)
    );
  }

  renderServiceTaskField(titleText, tasks) {
    this.serviceTasksField.innerHTML = "";

    const title = this._createTitle(titleText);

    this.serviceTaskContainer = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      className: "l-tasks",
    });

    tasks.forEach((el) => {
      const radio = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
        element: "input",
        attributes: {
          type: "radio",
          value: el,
          name: "task",
          id: el,
          required: "required",
        },
      });

      const label = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
        element: "label",
        attributes: {
          for: `${el}`,
        },
        children: el,
      });

      const div = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
        element: "div",
        children: [radio, label],
      });

      this.serviceTaskContainer.appendChild(div);
    });

    Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["appendChildren"])(this.serviceTasksField, [title, this.serviceTaskContainer]);
    Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["appendChild"])(this.servicesField, this.serviceTasksField);

    this.fillSecondPartTaskFieldText();
  }

  renderForm(services) {
    this.clearFormContainer();

    const taskField = this._createTaskField("NEW TASK");
    const locationField = this._createLocationField("LOCATION");
    const servicesField = this._createServiceField("SERVICE TYPE", services);
    const descriptionField = this._createDescriptionField("TASK DESCRIPTION");

    this.closeButton = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "button",
      className: "c-button__close",
      attributes: {
        type: "button",
      },
      children: "X",
    });

    this.form = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "form",
      className: "c-form",
      children: [
        taskField,
        locationField,
        servicesField,
        descriptionField,
        this.closeButton,
      ],
    });

    Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["appendChild"])(this.formContainer, this.form);

    this.fillAddress();
    this.fillFirstPartTaskFieldText();
    this.fillThirdPartTaskFieldText();
    this.closeForm();
  }

  bindRenderServiceTaskField(handler) {
    this.servicesContainer.addEventListener("click", (event) => {
      if (typeof event.target.value === "undefined") {
        return;
      }

      const value = event.target.value;

      this.renderServiceTaskField(`${value} tasks`, handler(value));
    });
  }

  get _taskValues() {
    return {
      location: this.location,
      service: this.service,
      taskType: this.taskType,
      description: this.description,
      fullText: this.fullTextArr.reduce((accum, el) => accum + el),
    };
  }

  bindAddTask(handlerAdd, handlerRender) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (this._taskValues) {
        handlerAdd(this._taskValues);
        handlerRender();
      }

      this.clearFormContainer();
    });
  }

  /*   bindRenderTasks(handler) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      handler();
    });
  } */
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormModel; });
class FormModel {
  constructor() {
    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify([]));
    }

    this.services = [
      {
        type: "electrician",
        tasks: [
          "inspect electrical systems",
          "connect wires",
          "install electrical wiring",
          "repair electrical wiring",
          "install ground leads",
          "connect power cables",
        ],
      },
      {
        type: "plumber",
        tasks: [
          "unblock a toilet",
          "unblock a sink",
          "fix a water leak",
          "install a sink",
          "install a shower",
          "install a toilet",
        ],
      },
      {
        type: "gardener",
        tasks: [
          "plant and nurture new trees",
          "clear rubbish",
          "cut the grass",
          "emptying bins",
          "manage leaf raking",
          "service garden equipment ",
        ],
      },
      {
        type: "housekeeper",
        tasks: [
          "mop floors",
          "polish floors",
          "shampoo carpets",
          "clean wash basins",
          "tidy up rooms",
          "wash laundry",
        ],
      },
      {
        type: "cook",
        tasks: [
          "stock all ingredients",
          "prepare cooking ingredients",
          "prepare meat",
          "prepare dinner",
          "prepare lanch",
          "prepare salads",
        ],
      },
    ];
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

  getTasks(serviceType) {
    const service = this.services.find((el) => el.type === serviceType);
    return service.tasks;
  }

  //   _onChangeData(data) {
  //     localStorage.setItem("tasks", JSON.stringify(data));
  //     this.onTasksListChanged(this._data);
  //   }

  //   getTask(id) {
  //     return this._data.find((el) => (el.id = id));
  //   }

  get _data() {
    return JSON.parse(localStorage.getItem("tasks"));
  }

  addTask({ location, service, taskType, description = "", fullText }) {
    const tasks = this._data;
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
    console.log(this._data);
  }
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormController; });
class FormController {
  constructor(model, view, pubsub) {
    this.model = model;
    this.view = view;
    this.pubsub = pubsub;

    this.pubsub.subscribe("renderForm", this.handleRenderForm.bind(this));
  }

  handleRenderForm() {
    this.view.renderForm(this.model.services);
    this.handlerBindAddTask();
    this.handlerRenderServiceTaskField();
  }

  handleGetTasks(service) {
    return this.model.getTasks(service);
  }

  handleAddTask(task) {
    this.model.addTask(task);
  }

  handlerBindAddTask() {
    this.view.bindAddTask(
      this.handleAddTask.bind(this),
      this.handlerRenderTasks.bind(this)
    );
  }

  handlerRenderServiceTaskField() {
    this.view.bindRenderServiceTaskField(this.handleGetTasks.bind(this));
  }

  handlerRenderTasks() {
    this.pubsub.publish("renderTasks");
  }
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PubSub; });
class PubSub {
  constructor() {
    this.events = {};
  }

  publish(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((fn) => fn(data));
    }
  }

  subscribe(event, fn) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(fn);
  }
}


/***/ })
/******/ ]);