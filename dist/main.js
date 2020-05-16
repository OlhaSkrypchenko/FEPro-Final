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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./map_bg.png */ "./static/map_bg.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "body {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 14px;\n  color: #1a1b1f;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-size: cover;\n  margin: 0;\n  padding: 0;\n}\n\n.app {\n  display: flex;\n  justify-content: space-between;\n}\n\n.l-form {\n  width: 500px;\n}\n\n.l-container {\n  width: 330px;\n  margin: 10px 40px;\n}\n\n.c-button__add {\n  width: 100%;\n  padding: 18px;\n  border-radius: 5px;\n  background-color: #fff;\n  outline: none;\n  border: none;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  color: #4c71fe;\n  font-size: 14px;\n  font-weight: bold;\n  transition: all, 1ms;\n}\n\n.c-button__add:hover {\n  transform: scale(1.05);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);\n}\n\n.c-button__add:active {\n  box-shadow: 0 0 12px rgba(0, 0, 0, 1);\n}\n\n.c-task {\n  width: 100%;\n  padding: 18px;\n  border-radius: 5px;\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  margin: 10px 0;\n  padding: 10px 16px;\n  box-sizing: border-box;\n  transition: all, 1ms;\n}\n\n.c-task:hover {\n  transform: scale(1.05);\n}\n\n.c-date {\n  color: #909090;\n  font-size: 13px;\n}\n\n.c-text {\n  font-weight: bold;\n}\n\n.c-button__edit {\n  width: 50px;\n  padding: 10px;\n  border-radius: 3px;\n  background-color: #4c71fe;\n  outline: none;\n  border: none;\n  color: #fff;\n  font-size: 13px;\n  font-weight: bold;\n  margin-right: 5px;\n}\n\n.c-button__edit:hover {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);\n}\n\n.c-button__edit:active {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 1);\n}\n\n.c-button__delete {\n  padding: 10px;\n  border-radius: 3px;\n  background-color: #fff;\n  outline: none;\n  border: none;\n  color: #4c71fe;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.c-button__delete:hover {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);\n}\n\n.c-button__delete:active {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 1);\n}\n\n.l-form {\n  width: 500px;\n  padding: 0;\n}\n\n.c-form {\n  width: 100%;\n  background-color: #fff;\n  position: relative;\n}\n\n.c-button__close {\n  position: absolute;\n  top: 15px;\n  right: 10px;\n  border-radius: 5px;\n  background-color: #fff;\n  outline: none;\n  border: none;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n  color: #4c71fe;\n  font-size: 14px;\n  font-weight: bold;\n  transition: all, 1ms;\n}\n\n.c-button__close:hover {\n  transform: scale(1.05);\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);\n}\n\n.c-button__close:active {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 1);\n}\n\n.c-title {\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #a6a6a6;\n  letter-spacing: 1px;\n}\n\n.c-task-field {\n  background-color: #f1f1f1;\n  padding: 12px 40px;\n}\n\n.c-button__create {\n  padding: 12px;\n  border-radius: 3px;\n  background-color: #4c71fe;\n  outline: none;\n  border: none;\n  color: #fff;\n  font-size: 14px;\n  font-weight: bold;\n  margin-right: 5px;\n}\n\n.c-button__create:hover {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);\n}\n\n.c-button__create:active {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 1);\n}\n\n.c-address {\n  font-size: 12px;\n  min-height: 25px;\n  margin: 25px 0;\n}\n\n.c-taskText {\n  font-size: 16px;\n  font-weight: bold;\n  min-height: 50px;\n  margin: 25px 0;\n}\n\n.c-input__location {\n  border: none;\n  outline: none;\n  font-size: 16px;\n  width: 100%;\n}\n\n.c-textarea__description {\n  border: none;\n  outline: none;\n  font-size: 16px;\n  width: 100%;\n  resize: none;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.c-location-field,\n.c-service__field,\n.c-description__field {\n  padding: 12px 40px;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.c-service-tasks-field {\n  padding: 12px 0;\n  border-top: 1px solid #f1f1f1;\n}\n\n.l-service {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 12px 0 24px;\n}\n\n.l-service .c-label {\n  text-transform: capitalize;\n}\n\n.c-label::first-letter {\n  text-transform: capitalize;\n}\n\n.l-service-tasks {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n}\n\n.c-service-task {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 20px 0 15px;\n}\n\n/* .c-input-service {\n  opacity: 0;\n} */\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
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

/***/ "./src/formMVC/formController.js":
/*!***************************************!*\
  !*** ./src/formMVC/formController.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormController; });
class FormController {
  constructor(model, view, pubsub) {
    this.model = model;
    this.view = view;
    this.pubsub = pubsub;

    this.pubsub.subscribe("renderAddForm", this.handleRenderAddForm.bind(this));
    this.pubsub.subscribe("renderEditForm", (id) => {
      this.handleRenderEditForm(id);
    });
    this.pubsub.subscribe("closeEditForm", (id) => {
      this.handleCloseEditForm(id);
    });
  }

  async handleRenderAddForm() {
    try {
      const services = await this.model.getServiceData();
      this.view.renderAddForm(services);
      this.handlerBindAddTask();
      this.handlerRenderServiceTaskField();
    } catch (error) {
      this.handlerRenderError();
    }
  }

  async handleRenderEditForm(id) {
    try {
      const services = await this.model.getServiceData();
      const task = await this.model.getTask(id);
      this.view.renderEditForm(task, services);
      this.handlerBindEditTask();
      this.handlerRenderServiceTaskField(task.taskType);
    } catch (error) {
      this.handlerRenderError();
    }
  }

  handleCloseEditForm(id) {
    this.view.closeEditForm(id);
  }

  handleGetServiceTasks(service) {
    return this.model.getServiceTasks(service);
  }

  handlerBindAddTask() {
    const handleAddTask = async (task) => {
      await this.model.addTask(task);
      this.handlerRenderTasks();
    };
    this.view.bindAddTask(handleAddTask);
  }

  handlerBindEditTask() {
    const handleEditTask = async (task) => {
      await this.model.editTask(task);
      this.handlerRenderTasks();
    };
    this.view.bindEditTask(handleEditTask);
  }

  handlerRenderServiceTaskField(checkedTypeRadio) {
    this.view.bindRenderServiceTaskField(
      this.handleGetServiceTasks.bind(this),
      checkedTypeRadio
    );
  }

  handlerRenderTasks() {
    this.pubsub.publish("renderTasks");
  }

  handlerRenderError() {
    this.pubsub.publish("renderError");
  }
}


/***/ }),

/***/ "./src/formMVC/formModel.js":
/*!**********************************!*\
  !*** ./src/formMVC/formModel.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormModel; });
class FormModel {
  constructor() {
    this.serviceData;
    this.url = "http://localhost:3000";
  }

  _createTaskDate() {
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

  async _fetchServiceData() {
    const response = await fetch(`${this.url}/services`);
    return await response.json();
  }

  async getServiceData() {
    if (!this.serviceData) {
      this.serviceData = await this._fetchServiceData();
    }

    return this.serviceData;
  }

  getServiceTasks(serviceType) {
    const service = this.serviceData.find((el) => el.type === serviceType);
    return service.tasks;
  }

  async getTasksData() {
    const response = await fetch(`${this.url}/tasks`);
    return await response.json();
  }

  async getTask(id) {
    const response = await fetch(`${this.url}/tasks/${id}`);
    return await response.json();
  }

  async addTask({ location, service, taskType, description = "", fullText }) {
    const task = {
      date: this._createTaskDate(),
      location,
      service,
      taskType,
      description,
      fullText,
    };

    await fetch(`${this.url}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(task),
    });
  }

  async editTask({
    id,
    date,
    location,
    service,
    taskType,
    description = "",
    fullText,
  }) {
    const task = {
      id,
      date,
      location,
      service,
      taskType,
      description,
      fullText,
    };

    await fetch(`${this.url}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(task),
    });
  }
}


/***/ }),

/***/ "./src/formMVC/formView.js":
/*!*********************************!*\
  !*** ./src/formMVC/formView.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormView; });
/* harmony import */ var _reusable_reusable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reusable/reusable */ "./src/reusable/reusable.js");


class FormView {
  constructor() {
    this.app = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["getElement"])(".app");

    this.formContainer = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      className: "l-form",
    });

    Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["appendChild"])(this.app, this.formContainer);

    this.serviceTasksField = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      className: "c-service-tasks-field",
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

  _createTaskField({
    titleText = "NEW TASK",
    buttonValue = "CREATE TASK",
  } = {}) {
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
        value: buttonValue,
        type: "submit",
      },
    });

    const taskField = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      className: "c-task-field",
      children: [
        title,
        this.taskFieldText,
        this.taskFieldAddress,
        this.createTaskButton,
      ],
    });

    return taskField;
  }

  _createLocationField({ titleText = "LOCATION", location = "" } = {}) {
    const title = this._createTitle(titleText);

    this.locationInput = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "input",
      className: "c-input__location",
      attributes: {
        placeholder: "Enter your address",
        required: "required",
        value: location,
      },
    });

    const locationField = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      className: "c-location-field",
      children: [title, this.locationInput],
    });

    return locationField;
  }

  _createServiceField({
    titleText = "SERVICE ",
    services,
    checkedService = "",
  } = {}) {
    const servicesField = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      className: "c-service__field",
    });

    const title = this._createTitle(titleText);

    this.servicesContainer = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      className: "l-service",
    });

    services.forEach((el) => {
      const radio = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
        element: "input",
        className: "c-input__service",
        attributes: {
          type: "radio",
          value: el.type,
          name: "service",
          id: el.type,
          required: "required",
        },
      });

      if (checkedService === radio.id) {
        radio.setAttribute("checked", "checked");
        this.checkedRadio = radio.value;
      }

      const label = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
        element: "label",
        className: "c-label",
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

  _createDescriptionField({
    titleText = "TASK DESCRIPTION",
    description = "",
  } = {}) {
    const title = this._createTitle(titleText);

    this.descriptionInput = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "textarea",
      className: "c-textarea__description",
      attributes: {
        placeholder: "Enter your description",
      },
      children: description,
    });

    const descriptionField = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      className: "c-description__field",
      children: [title, this.descriptionInput],
    });

    return descriptionField;
  }

  fillAddress(location = "") {
    if (this.locationInput.value) {
      this.taskFieldAddress.innerHTML = `My address is ${location}`;
    }

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
    if (this.checkedRadio) {
      this.fullTextArr[0] = `I need a(an) ${this.checkedRadio}`;
      this.fillTextTaskFieldText();
    }

    this.servicesContainer.addEventListener("click", (event) => {
      if (typeof event.target.value === "undefined") {
        return;
      }

      this.service = event.target.value;
      this.fullTextArr[0] = `I need a(an) ${this.service}`;
      this.checkedTypeRadio = "";
      this.fullTextArr.splice(1);
      this.fillTextTaskFieldText();
    });
  }

  fillSecondPartTaskFieldText() {
    if (this.checkedTypeRadio) {
      this.fullTextArr[1] = ` to ${this.checkedTypeRadio}`;
      this.fillTextTaskFieldText();
    }

    this.serviceTaskContainer.addEventListener("click", (event) => {
      if (typeof event.target.value === "undefined") {
        return;
      }

      this.taskType = event.target.value;

      this.fullTextArr[1] = ` to ${this.taskType}`;

      this.fillTextTaskFieldText();
      this.fillThirdPartTaskFieldText();
    });
  }

  fillThirdPartTaskFieldText() {
    if (this.descriptionInput.value) {
      this.fullTextArr[2] = ` , ${this.descriptionInput.value}`;
      this.fillTextTaskFieldText();
    }

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
    this.fullTextArr = [];
    this.checkedRadio = "";
    this.checkedTypeRadio = "";
  }

  closeForm() {
    this.closeButton.addEventListener("click", () => {
      this._resetInputValues();
      this.clearFormContainer();
      this.editTaskId = "";
      this.editTaskDate = "";
    });
  }

  renderServiceTaskField(titleText, tasks, checkedServiceType = "") {
    this.serviceTasksField.innerHTML = "";

    const title = this._createTitle(titleText);

    this.serviceTaskContainer = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
      element: "div",
      className: "l-service-tasks",
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

      if (checkedServiceType === radio.id) {
        radio.setAttribute("checked", "checked");
        this.checkedTypeRadio = radio.value;
      }

      const label = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
        element: "label",
        className: "c-label",
        attributes: {
          for: `${el}`,
        },
        children: el,
      });

      const div = Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["createBasicElement"])({
        element: "div",
        className: "c-service-task",
        children: [radio, label],
      });

      this.serviceTaskContainer.appendChild(div);
    });

    Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["appendChildren"])(this.serviceTasksField, [title, this.serviceTaskContainer]);
    Object(_reusable_reusable__WEBPACK_IMPORTED_MODULE_0__["appendChild"])(this.servicesField, this.serviceTasksField);

    this.fillSecondPartTaskFieldText();
  }

  renderAddForm(services) {
    this.clearFormContainer();

    const taskField = this._createTaskField();
    const locationField = this._createLocationField();
    const servicesField = this._createServiceField({ services });
    const descriptionField = this._createDescriptionField();

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

  bindRenderServiceTaskField(handler, checkedTypeRadio = "") {
    if (this.checkedRadio) {
      this.renderServiceTaskField(
        `${this.checkedRadio} tasks`,
        handler(this.checkedRadio),
        checkedTypeRadio
      );
    }

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
      id: this.editTaskId ? this.editTaskId : "",
      date: this.editTaskDate ? this.editTaskDate : "",
      location: this.location,
      service: this.service,
      taskType: this.taskType,
      description: this.description,
      fullText: this.fullTextArr.reduce((accum, el) => accum + el),
    };
  }

  bindAddTask(handlerAdd) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (this._taskValues) {
        handlerAdd(this._taskValues);
      }

      this._resetInputValues();
      this.clearFormContainer();
    });
  }

  bindEditTask(handlerEdit) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (this._taskValues) {
        handlerEdit(this._taskValues);
      }

      this._resetInputValues();
      this.clearFormContainer();
    });
  }

  _resetInputValues() {
    this.locationInput.value = "";
    this.descriptionInput.value = "";
  }

  renderEditForm(task, services) {
    this.clearFormContainer();

    this.editTaskId = task.id;
    this.editTaskDate = task.date;

    const taskField = this._createTaskField({
      titleText: "EDIT TASK",
      buttonValue: "SAVE",
    });
    const locationField = this._createLocationField({
      location: task.location,
    });
    const servicesField = this._createServiceField({
      services,
      checkedService: task.service,
    });
    const descriptionField = this._createDescriptionField({
      description: task.description,
    });

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

    this.fillAddress(task.location);
    this.fillFirstPartTaskFieldText();
    this.fillThirdPartTaskFieldText();
    this.closeForm();
  }

  closeEditForm(id) {
    if (this.editTaskId === id) {
      this._resetInputValues();
      this.clearFormContainer();
      this.editTaskId = "";
      this.editTaskDate = "";
    }
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../static/styles.css */ "./static/styles.css");
/* harmony import */ var _static_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_static_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tasksMVC_tasksView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksMVC/tasksView */ "./src/tasksMVC/tasksView.js");
/* harmony import */ var _tasksMVC_tasksModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasksMVC/tasksModel */ "./src/tasksMVC/tasksModel.js");
/* harmony import */ var _tasksMVC_tasksController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasksMVC/tasksController */ "./src/tasksMVC/tasksController.js");
/* harmony import */ var _formMVC_formView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formMVC/formView */ "./src/formMVC/formView.js");
/* harmony import */ var _formMVC_formModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formMVC/formModel */ "./src/formMVC/formModel.js");
/* harmony import */ var _formMVC_formController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formMVC/formController */ "./src/formMVC/formController.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");











function app() {
  const pubsub = new _pubsub__WEBPACK_IMPORTED_MODULE_7__["default"]();

  const tasksView = new _tasksMVC_tasksView__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const tasksModel = new _tasksMVC_tasksModel__WEBPACK_IMPORTED_MODULE_2__["default"]();
  const tasksController = new _tasksMVC_tasksController__WEBPACK_IMPORTED_MODULE_3__["default"](tasksModel, tasksView, pubsub);

  const formView = new _formMVC_formView__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const formModel = new _formMVC_formModel__WEBPACK_IMPORTED_MODULE_5__["default"]();
  const formController = new _formMVC_formController__WEBPACK_IMPORTED_MODULE_6__["default"](formModel, formView, pubsub);
}

app();


/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/*! exports provided: default */
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


/***/ }),

/***/ "./src/reusable/reusable.js":
/*!**********************************!*\
  !*** ./src/reusable/reusable.js ***!
  \**********************************/
/*! exports provided: appendChild, appendChildren, createBasicElement, getElement */
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

/***/ "./src/tasksMVC/tasksController.js":
/*!*****************************************!*\
  !*** ./src/tasksMVC/tasksController.js ***!
  \*****************************************/
/*! exports provided: default */
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
    this.pubsub.subscribe("renderError", this.handlerRenderError.bind(this));

    this.handlerRenderTasks();

    this.model.bindTasksListChanged(this.onTasksListChanged.bind(this));
  }

  handlerRenderError() {
    this.view.bindRenderError();
  }

  onTasksListChanged(data) {
    this.view.renderTasks(data);
  }

  async deleteHandle(id) {
    await this.model.deleteTask(id);
    this.handleCloseEditForm(id);
  }

  async handlerRenderTasks() {
    const data = await this.model.getTasksData();
    this.view.renderTasks(data);
    this.view.bindDeleteTask(this.deleteHandle.bind(this));
    this.view.bindRenderAddForm(this.handlerRenderAddForm.bind(this));
    this.view.bindRenderEditForm((id) => {
      this.handlerRenderEditForm.call(this, id);
    });
  }

  handlerRenderAddForm() {
    this.pubsub.publish("renderAddForm");
  }

  handlerRenderEditForm(id) {
    this.pubsub.publish("renderEditForm", id);
  }

  handleCloseEditForm(id) {
    this.pubsub.publish("closeEditForm", id);
  }
}


/***/ }),

/***/ "./src/tasksMVC/tasksModel.js":
/*!************************************!*\
  !*** ./src/tasksMVC/tasksModel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TasksModel; });
class TasksModel {
  constructor() {
    this.url = "http://localhost:3000";
  }

  async getTasksData() {
    const response = await fetch(`${this.url}/tasks`);
    return await response.json();
  }

  async deleteTask(id) {
    await fetch(`${this.url}/tasks/${id}`, {
      method: "DELETE",
    });

    const data = await this.getTasksData();
    this.onTasksListChanged(data);
  }

  bindTasksListChanged(callback) {
    this.onTasksListChanged = callback;
  }
}


/***/ }),

/***/ "./src/tasksMVC/tasksView.js":
/*!***********************************!*\
  !*** ./src/tasksMVC/tasksView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TasksView; });
/* harmony import */ var _reusable_reusable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reusable/reusable */ "./src/reusable/reusable.js");


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
    if (!tasks || tasks.length === 0) {
      this.tasksContainer.innerHTML = "";
      return;
    }

    this.tasksContainer.innerHTML = "";
    tasks.forEach((task) => this.createTaskCard(task));
  }

  bindDeleteTask(handler) {
    if (this.deleteListener) {
      this.tasksContainer.removeEventListener("click", this.deleteListener);
    }

    this.deleteListener = (event) => {
      const dataId = event.target.dataset.id;

      if (!dataId) {
        return;
      }

      const id = parseInt(dataId);
      handler(id);
    };

    this.tasksContainer.addEventListener("click", this.deleteListener);
  }

  bindRenderAddForm(handler) {
    this.addButton.addEventListener("click", handler);
  }

  bindRenderEditForm(handler) {
    this.tasksContainer.addEventListener("click", (event) => {
      const dataId = event.target.dataset.editId;

      if (!dataId) {
        return;
      }

      const id = parseInt(dataId);
      handler(id);
    });
  }

  bindRenderError() {
    this.app.innerHTML = "";
    this.app.innerHTML = "Щось пішло не так. Спробуйте пізніше";
  }
}


/***/ }),

/***/ "./static/map_bg.png":
/*!***************************!*\
  !*** ./static/map_bg.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7fae9930dbc7e89246da851a6c88e283.png");

/***/ }),

/***/ "./static/styles.css":
/*!***************************!*\
  !*** ./static/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./static/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });