(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "http://localhost:3000/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return parseProjectUrl; });
/* unused harmony export combineProjectUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createPageTableOfContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createProjectLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createProjectTopics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createSideMenuEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildItemTree; });
/* unused harmony export lookupProject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getVersionsUrl; });
/* unused harmony export getLatestVersion */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getProjectTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getDocumentTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getDocumentTagsAndDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getProjectVersionPagesUrl; });
/* unused harmony export getProjectVersionPages */
/* unused harmony export getPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return replaceVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getNextPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getPreviousPage; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function parseProjectUrl(projectFullURL) {
  ///docs/hub/2.0/something/something/something
  var urlParts = projectFullURL.split('/');
  var projectFolder = urlParts[2];
  var projectVersion = urlParts[3];
  var projectDocParts = urlParts.slice(4);
  var projectDoc = projectDocParts.join('/');
  return {
    projectFullURL: projectFullURL,
    projectFolder: projectFolder,
    projectVersion: projectVersion,
    projectDocParts: projectDocParts,
    projectDoc: projectDoc,
    projectDocTitle: projectDocParts[projectDocParts.length - 1]
  };
}
function combineProjectUrl(projectParts) {
  ///docs/hub/2.0/something/something/something
  return "/docs/".concat(projectParts.projectFolder, "/").concat(projectParts.projectVersion, "/").concat(projectParts.projectDoc);
}
function createPageTableOfContents(projectUrlParts, projects) {
  var project = lookupProject(projectUrlParts, projects);
  var projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);
  var toc = [{
    name: 'Introduction',
    link: '#root'
  }];

  if (projectVersionPages) {
    var currentIndex = projectVersionPages.find(function (indexItem) {
      return indexItem.link === projectUrlParts.projectFullURL;
    });

    if (currentIndex && currentIndex.toc) {
      toc = toc.concat(currentIndex.toc.filter(function (item) {
        return item.level > 1;
      }).map(function (item) {
        return {
          name: item.name,
          link: "#".concat(Object(_paths__WEBPACK_IMPORTED_MODULE_1__[/* sanitizeHashId */ "a"])(item.name, false, true)),
          level: item.level
        };
      }));
    }
  }

  return toc;
}
function createProjectLinks(projects) {
  var menuEntries = [];

  for (var i = 0; i < projects.length; i++) {
    if (projects[i].home) {
      var latestVersion = getLatestVersion(projects[i]);
      var projectVersionPages = getProjectVersionPages(projects[i], latestVersion);
      var me = {
        folder: projects[i].folder,
        name: projects[i].name,
        link: projectVersionPages[0].link
      };
      menuEntries.push(me);
    }
  }

  return menuEntries;
}
function createProjectTopics(projects) {
  var projectTopics = [];

  for (var i = 0; i < projects.length; i++) {
    if (projects[i].home) {
      projectTopics.push(_objectSpread({
        name: projects[i].name
      }, projects[i].home));
    }
  }

  return projectTopics;
}
function createSideMenuEntries(projects, projectFullURL) {
  var menuEntries = [];

  for (var i = 0; i < projects.length; i++) {
    if (projects[i].home) {
      var latestVersion = getLatestVersion(projects[i]);

      if (latestVersion) {
        var projectVersionPages = getProjectVersionPages(projects[i], latestVersion);

        if (projectVersionPages) {
          var isChildActive = getPage(projectVersionPages, projectFullURL) !== undefined;
          menuEntries.push({
            name: projects[i].name,
            expanded: isChildActive,
            selected: isChildActive,
            items: buildItemTree(projectVersionPages, projectFullURL)
          });
        }
      }
    }
  }

  return menuEntries;
}
function buildItemTree(projectVersionPages, projectFullURL) {
  if (!projectVersionPages) {
    return [];
  }

  var tree = [];
  var inSection;
  var inSectionSub;

  for (var i = 0; i < projectVersionPages.length; i++) {
    var nameParts = projectVersionPages[i].name.split('/');

    if (nameParts.length === 1) {
      tree.push({
        type: 'section-link',
        link: projectVersionPages[i].link,
        name: projectVersionPages[i].name,
        selected: projectVersionPages[i].link === projectFullURL
      });
      inSection = undefined;
      inSectionSub = undefined;
    } else {
      var currentSection = inSection ? inSection.name : '';

      if (nameParts[0] !== currentSection) {
        inSection = {
          type: 'section-header',
          name: nameParts[0],
          items: [],
          expanded: false
        };
        tree.push(inSection);
        inSectionSub = undefined;
      }

      if (projectVersionPages[i].link === projectFullURL) {
        inSection.selected = true;
      }

      if (nameParts.length === 2) {
        inSection.items.push({
          type: 'section-header-item',
          name: nameParts.slice(1).join('/'),
          link: projectVersionPages[i].link,
          selected: projectVersionPages[i].link === projectFullURL
        });
      } else {
        var currentSectionSub = inSectionSub ? inSectionSub.name : '';

        if (nameParts[1] !== currentSectionSub) {
          inSectionSub = {
            type: 'section-header-sub',
            name: nameParts[1],
            items: [],
            expanded: false
          };
          inSection.items.push(inSectionSub);
        }

        if (projectVersionPages[i].link === projectFullURL) {
          inSectionSub.selected = true;
        }

        inSectionSub.items.push({
          name: nameParts.slice(2).join('/'),
          link: projectVersionPages[i].link,
          selected: projectVersionPages[i].link === projectFullURL
        });
      }
    }
  }

  return tree;
}
function lookupProject(projectUrlParts, projects) {
  return projects.find(function (p) {
    return p.folder === projectUrlParts.projectFolder;
  });
}
function getVersionsUrl(projectUrlParts, projects) {
  var project = lookupProject(projectUrlParts, projects);
  return project && project.versions ? project.versions.map(function (pv) {
    return pv.version;
  }) : [];
}
function getLatestVersion(project) {
  return project && project.versions && project.versions.length > 0 ? project.versions[project.versions.length - 1].version : '';
}
function getProjectTitle(projectUrlParts, projects) {
  var project = lookupProject(projectUrlParts, projects);
  return project ? project.name : projectUrlParts.projectFolder;
}
function getDocumentTitle(projectUrlParts, projects) {
  var project = lookupProject(projectUrlParts, projects);
  var projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);
  var indexItem = getPage(projectVersionPages, projectUrlParts.projectFullURL);
  var docTitle;

  if (indexItem) {
    if (indexItem.toc) {
      var h1 = indexItem.toc.find(function (docHeader) {
        return docHeader.level === 1;
      });

      if (h1) {
        docTitle = h1.name;
      }
    }
  }

  if (!docTitle) {
    docTitle = projectUrlParts.projectDocTitle;
  }

  return docTitle;
}
function getDocumentTagsAndDescription(projectUrlParts, projects) {
  var project = lookupProject(projectUrlParts, projects);
  var projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);
  var indexItem = getPage(projectVersionPages, projectUrlParts.projectFullURL);
  var tags;
  var description;

  if (indexItem) {
    tags = indexItem.tags;
    description = indexItem.description;
  }

  return {
    tags: tags,
    description: description
  };
}
function getProjectVersionPagesUrl(projectPartsUrlPart, projectVersion, projects) {
  return getProjectVersionPages(lookupProject(projectPartsUrlPart, projects), projectVersion);
}
function getProjectVersionPages(project, projectVersion) {
  if (project && project.versions) {
    var version = project.versions.find(function (pv) {
      return pv.version === projectVersion;
    });

    if (version) {
      return version.pages;
    }
  }
}
function getPage(versionPages, itemUrl) {
  return versionPages ? versionPages.find(function (indexItem) {
    return indexItem.link === itemUrl;
  }) : undefined;
}
function replaceVersion(projectUrlParts, newVersion, projects) {
  var project = lookupProject(projectUrlParts, projects);
  var projectVersionPages = getProjectVersionPages(project, newVersion);

  if (projectVersionPages) {
    var newUrl = combineProjectUrl(projectUrlParts); // If there is not an equivalent document in the new version of the documentation
    // the just return the first page for the new version

    var foundIndex = projectVersionPages.findIndex(function (indexItem) {
      return indexItem.link === newUrl;
    });

    if (foundIndex >= 0) {
      return newUrl;
    } else {
      return projectVersionPages[0].link;
    }
  }
}
var getNextPage = function getNextPage(projectUrlParts, projects) {
  var nextPage;
  var project = lookupProject(projectUrlParts, projects);
  var projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);

  if (projectVersionPages) {
    var currentIndex = projectVersionPages.findIndex(function (indexItem) {
      return indexItem.link === projectUrlParts.projectFullURL;
    });

    if (currentIndex >= 0 && currentIndex < projectVersionPages.length) {
      nextPage = projectVersionPages[currentIndex + 1];
    }
  } // We exhausted the pages in the current project, so we need to find the next project


  if (!nextPage) {
    var projectIndex = projects.findIndex(function (p) {
      return p.folder === projectUrlParts.projectFolder;
    });
    projectIndex++;

    if (projectIndex === projects.length) {
      projectIndex = 0;
    } // Skip any that don't have home page content


    while (!projects[projectIndex].home) {
      projectIndex++;

      if (projectIndex === projects.length) {
        projectIndex = 0;
      }
    }

    var latestVersion = getLatestVersion(projects[projectIndex]);

    var _projectVersionPages = getProjectVersionPages(projects[projectIndex], latestVersion);

    nextPage = _projectVersionPages[0];
  }

  return nextPage;
};
var getPreviousPage = function getPreviousPage(projectUrlParts, projects) {
  var prevPage;
  var project = lookupProject(projectUrlParts, projects);
  var projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);

  if (projectVersionPages) {
    var currentIndex = projectVersionPages.findIndex(function (indexItem) {
      return indexItem.link === projectUrlParts.projectFullURL;
    });

    if (currentIndex > 0) {
      prevPage = projectVersionPages[currentIndex - 1];
    }
  } // We exhausted the pages in the current project, so we need to find the previous project


  if (!prevPage) {
    var projectIndex = projects.findIndex(function (p) {
      return p.folder === projectUrlParts.projectFolder;
    });
    projectIndex--;

    if (projectIndex < 0) {
      projectIndex = projects.length - 1;
    } // Skip any that don't have home page content


    while (!projects[projectIndex].home) {
      projectIndex--;

      if (projectIndex < 0) {
        projectIndex = projects.length - 1;
      }
    }

    var latestVersion = getLatestVersion(projects[projectIndex]);

    var _projectVersionPages2 = getProjectVersionPages(projects[projectIndex], latestVersion);

    prevPage = _projectVersionPages2[_projectVersionPages2.length - 1];
  }

  return prevPage;
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Link = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Link, _React$PureComponent);

  var _super = _createSuper(Link);

  function Link() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Link);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Link, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        id: this.props.id,
        target: this.props.target,
        href: this.props.href,
        rel: this.props.target === '_blank' ? 'noopener noreferrer' : undefined,
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('link', this.props.className, {
          'disabled': this.props.disabled
        })
      }, this.props.children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, this.props.text));
    }
  }]);

  return Link;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return performSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return constructSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return extractSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constructHighlights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return extractHighlights; });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);

var QUERY_PARAM_NAME = 'q';
var QUERY_PARAM_HIGHLIGHTS = 'highlights';
var performSearch = function performSearch(history, query) {
  history.push("/search?".concat(constructSearchQuery(query)));
};
var constructSearchQuery = function constructSearchQuery(query) {
  return "".concat(QUERY_PARAM_NAME, "=").concat(query.trim());
};
var extractSearchQuery = function extractSearchQuery(location) {
  var params = qs__WEBPACK_IMPORTED_MODULE_0___default.a.parse(location.search, {
    ignoreQueryPrefix: true
  });
  return params && params[QUERY_PARAM_NAME] ? params[QUERY_PARAM_NAME] : '';
};
var constructHighlights = function constructHighlights(highlights) {
  return "".concat(QUERY_PARAM_HIGHLIGHTS, "=").concat(highlights.join(';'));
};
var extractHighlights = function extractHighlights(location) {
  var params = qs__WEBPACK_IMPORTED_MODULE_0___default.a.parse(location.search, {
    ignoreQueryPrefix: true
  });
  return params && params[QUERY_PARAM_HIGHLIGHTS] ? params[QUERY_PARAM_HIGHLIGHTS].split(';') : [];
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return submitFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return submitMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return submitEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return search; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



function sendRequest(_x, _x2, _x3, _x4) {
  return _sendRequest.apply(this, arguments);
}

function _sendRequest() {
  _sendRequest = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(apiEndpoint, endpoint, method, data) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(apiEndpoint, "/").concat(endpoint), {
              method: method,
              headers: {
                'Content-Type': 'application/json'
              },
              body: data ? JSON.stringify(data) : undefined
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.ok ? response.json() : null);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sendRequest.apply(this, arguments);
}

function submitFeedback(_x5, _x6, _x7) {
  return _submitFeedback.apply(this, arguments);
}

function _submitFeedback() {
  _submitFeedback = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(apiEndpoint, document, data) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            return _context2.abrupt("return", sendRequest(apiEndpoint, 'feedback', 'POST', {
              document: document,
              wasItUseful: data.wasItUseful,
              comments: data.comments
            }));

          case 4:
            _context2.prev = 4;
            _context2.t0 = _context2["catch"](0);
            // eslint-disable-next-line no-console
            console.error(_context2.t0);
            return _context2.abrupt("return", {
              success: false,
              message: 'Failed to submit feedback.'
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 4]]);
  }));
  return _submitFeedback.apply(this, arguments);
}

function submitMissing(_x8, _x9, _x10) {
  return _submitMissing.apply(this, arguments);
}

function _submitMissing() {
  _submitMissing = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(apiEndpoint, document, fromDocument) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            return _context3.abrupt("return", sendRequest(apiEndpoint, 'missing', 'POST', {
              document: document,
              fromDocument: fromDocument
            }));

          case 4:
            _context3.prev = 4;
            _context3.t0 = _context3["catch"](0);
            // eslint-disable-next-line no-console
            console.error(_context3.t0);
            return _context3.abrupt("return", {
              success: false,
              message: 'Failed to submit missing.'
            });

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 4]]);
  }));
  return _submitMissing.apply(this, arguments);
}

function submitEmail(_x11, _x12) {
  return _submitEmail.apply(this, arguments);
}

function _submitEmail() {
  _submitEmail = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(apiEndpoint, email) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            return _context4.abrupt("return", sendRequest(apiEndpoint, 'email', 'POST', {
              email: email
            }));

          case 4:
            _context4.prev = 4;
            _context4.t0 = _context4["catch"](0);
            // eslint-disable-next-line no-console
            console.error(_context4.t0);
            return _context4.abrupt("return", {
              success: false,
              message: 'Failed to submit email.'
            });

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 4]]);
  }));
  return _submitEmail.apply(this, arguments);
}

function search(_x13, _x14) {
  return _search.apply(this, arguments);
}

function _search() {
  _search = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(apiEndpoint, query) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            return _context5.abrupt("return", sendRequest(apiEndpoint, "search/?query=".concat(query), 'GET'));

          case 4:
            _context5.prev = 4;
            _context5.t0 = _context5["catch"](0);
            // eslint-disable-next-line no-console
            console.error(_context5.t0);
            return _context5.abrupt("return", {
              success: false,
              message: 'Failed to search.'
            });

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 4]]);
  }));
  return _search.apply(this, arguments);
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-router-prop-types");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Text = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Text, _React$PureComponent);

  var _super = _createSuper(Text);

  function Text() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Text);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Text, [{
    key: "render",
    value: function render() {
      if (this.props.html) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('text', this.props.className),
          dangerouslySetInnerHTML: {
            __html: this.props.children
          }
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('text', this.props.className)
      }, this.props.children);
    }
  }]);

  return Text;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Text);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sanitizeHashId; });
function sanitizeHashId(id, skipLowerCase, isForAnchor) {
  // make lower case
  // de-escape spaces
  // replace spaces with hyphens
  if (!id) {
    return id;
  }

  if (!skipLowerCase) {
    id = id.toLowerCase();
  }

  if (isForAnchor) {
    id = id.replace(/\./g, '');
  }

  return id.replace(/\\ /g, ' ').replace(/\?/g, '').replace(/'/g, '').replace(/ /g, '-');
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var ProjectsPropTypes = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  folder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  home: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    links: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
      link: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
      description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
    })).isRequired
  }),
  versions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    version: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    pages: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
      link: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
      toc: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
        level: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
        name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
      }))
    })).isRequired
  })).isRequired
}));
/* unused harmony default export */ var _unused_webpack_default_export = (ProjectsPropTypes);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Heading = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Heading, _React$PureComponent);

  var _super = _createSuper(Heading);

  function Heading() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Heading);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Heading, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h".concat(this.props.level), {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('heading', this.props.className),
        id: this.props.id
      }, this.props.children || this.props.text);
    }
  }]);

  return Heading;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(Heading, "defaultProps", {
  level: 1
});

/* harmony default export */ __webpack_exports__["a"] = (Heading);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _atoms_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10);
/* harmony import */ var _utils_projects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9);
/* harmony import */ var _utils_projectsPropTypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20);
/* harmony import */ var _atoms_ClickOutside__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var SideMenu = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SideMenu, _React$Component);

  var _super = _createSuper(SideMenu);

  function SideMenu(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SideMenu);

    _this = _super.call(this, props);
    _this.state = {
      menuData: [],
      expanded: undefined
    };
    _this.handleHeadingClick = _this.handleHeadingClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.handleCloseClick = _this.handleCloseClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.keydown = _this.keydown.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SideMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.keydown, false);
      this.setState({
        menuData: Object(_utils_projects__WEBPACK_IMPORTED_MODULE_11__[/* createSideMenuEntries */ "e"])(this.props.projects, this.props.highlightedItem)
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.highlightedItem !== prevProps.highlightedItem) {
        this.setState({
          menuData: Object(_utils_projects__WEBPACK_IMPORTED_MODULE_11__[/* createSideMenuEntries */ "e"])(this.props.projects, this.props.highlightedItem)
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      document.body.classList.toggle('no-scroll', nextProps.isMenuOpen);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.keydown, false);
    }
  }, {
    key: "handleHeadingClick",
    value: function handleHeadingClick(index) {
      this.setState(function (state) {
        return {
          menuData: state.menuData.map(function (item, ind) {
            return ind == index ? _objectSpread(_objectSpread({}, item), {}, {
              expanded: !item.expanded
            }) : _objectSpread(_objectSpread({}, item), {}, {
              expanded: false
            });
          })
        };
      });
    }
  }, {
    key: "handleCloseClick",
    value: function handleCloseClick() {
      if (this.props.isMenuOpen && this.props.onCloseClick) {
        document.body.classList.toggle('no-scroll', false);
        this.props.onCloseClick();
      }
    }
  }, {
    key: "keydown",
    value: function keydown(event) {
      if (event.keyCode === 27 && this.props.isMenuOpen) {
        this.props.onCloseClick();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_atoms_ClickOutside__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        onClickOutside: this.handleCloseClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('side-menu', {
          'side-menu__shown': this.props.isMenuOpen
        }, {
          'side-menu__hidden': !this.props.isMenuOpen
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        className: "side-menu__caption"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, "Navigation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "side-menu__close",
        onClick: this.handleCloseClick
      })), this.state.menuData.map(function (menuItem, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
          key: index,
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('side-menu__group', {
            'side-menu__group--expanded': menuItem.expanded
          }, {
            'side-menu__group--selected': menuItem.selected
          })
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h5", {
          className: "side-menu__heading",
          onClick: function onClick() {
            return _this2.handleHeadingClick(index);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, menuItem.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
          className: "side-menu__list"
        }, menuItem.items.map(function (menuListItem, miIndex) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            key: miIndex
          }, menuListItem.type === 'section-link' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
            className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('side-menu-item', {
              'side-menu-item--active': menuListItem.selected
            })
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_atoms_Link__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
            href: menuListItem.link,
            target: menuListItem.link.startsWith('http') ? '_blank' : undefined,
            className: classnames__WEBPACK_IMPORTED_MODULE_7___default()({
              'side-menu-item--active': menuListItem.selected
            })
          }, menuListItem.name)), menuListItem.type === 'section-header' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "side-menu__sub-list"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "side-menu-item__header"
          }, menuListItem.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, menuListItem.items.map(function (subItem, idx) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
              key: idx
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
              className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('side-menu-item', {
                'side-menu-item--active': subItem.selected
              })
            }, subItem.type === 'section-header-item' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_atoms_Link__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
              href: subItem.link,
              target: subItem.link.startsWith('http') ? '_blank' : undefined,
              className: classnames__WEBPACK_IMPORTED_MODULE_7___default()({
                'side-menu-item--active': subItem.selected
              })
            }, subItem.name), subItem.type === 'section-header-sub' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
              onClick: function onClick() {
                return _this2.setState({
                  expanded: subItem
                });
              }
            }, subItem.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
              className: "side-menu__item-superscript"
            }, subItem.items.length > 1 ? " [".concat(subItem.items.length, "]") : '')), (subItem.selected || subItem === _this2.state.expanded) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
              className: "side-menu-item-sub"
            }, subItem.items.map(function (child, idx3) {
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
                key: idx3,
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('side-menu-item-sub-child', {
                  'side-menu-item-sub-child--active': child.selected
                })
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_atoms_Link__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
                href: child.link,
                target: child.link.startsWith('http') ? '_blank' : undefined
              }, child.name));
            }))), "                                                            "));
          }))));
        })));
      })));
    }
  }]);

  return SideMenu;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SideMenu);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return localStorageSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localStorageGet; });
/**
     * Store something in the local storage.
     * @param name The name of the item to store.
     * @param data The name of the item to store.
     * @returns Nothing.
     */
function localStorageSet(name, data) {
  try {
    if (window.localStorage) {
      window.localStorage.setItem(name, JSON.stringify(data));
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
}
/**
 * Retrieve something from the local storage.
 * @param name The name of the item to store.
 * @returns The data or undefined if it does not exist.
 */

function localStorageGet(name) {
  try {
    if (window.localStorage) {
      var data = window.localStorage.getItem(name);

      if (data) {
        return JSON.parse(data);
      }
    }
  } catch (err) {
    return undefined;
  }
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(5);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(1);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(2);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-router-prop-types"
var external_react_router_prop_types_ = __webpack_require__(17);

// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__(49);
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/Disclaimer/disclaimer.css
var disclaimer = __webpack_require__(87);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/Disclaimer/index.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Disclaimer_Disclaimer = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(Disclaimer, _React$PureComponent);

  var _super = _createSuper(Disclaimer);

  function Disclaimer(props) {
    var _this;

    classCallCheck_default()(this, Disclaimer);

    _this = _super.call(this, props);
    _this.state = {
      ackCookies: true
    };
    return _this;
  }
  /**
   * The component mounted.
   */


  createClass_default()(Disclaimer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var cookies = new external_universal_cookie_default.a();
      var cookieAck = cookies.get('cookieAck');
      this.setState({
        ackCookies: cookieAck === 'yes' ? true : false
      }); // If the cookie was already acknowledged extend its lifespan

      if (cookieAck === 'yes') {
        cookies.set('cookieAck', 'yes', {
          maxAge: 31536000,
          path: '/'
        });
      }
    }
    /**
     * Render the component.
     * @returns The node to render.
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return this.state.ackCookies ? null : /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "disclaimer"
      }, /*#__PURE__*/external_react_default.a.createElement("span", null, "This website uses cookies to ensure you get the best experience.\xA0", /*#__PURE__*/external_react_default.a.createElement("a", {
        href: "https://www.iota.org/research/privacy-policy",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Learn more.")), /*#__PURE__*/external_react_default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.dismiss();
        },
        className: "button"
      }, "Dismiss"));
    }
    /**
     * Dismiss the disclaimer.
     */

  }, {
    key: "dismiss",
    value: function dismiss() {
      var cookies = new external_universal_cookie_default.a();
      cookies.set('cookieAck', 'yes', {
        maxAge: 31536000,
        path: '/'
      });
      this.setState({
        ackCookies: true
      });
    }
  }]);

  return Disclaimer;
}(external_react_default.a.PureComponent);

/* harmony default export */ var atoms_Disclaimer = (Disclaimer_Disclaimer);
// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(8);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/footerDataPropTypes.js

var FooterDataPropTypes = external_prop_types_default.a.shape({
  footerDocsSectionTitle: external_prop_types_default.a.string.isRequired,
  footerSections: external_prop_types_default.a.arrayOf(external_prop_types_default.a.shape({
    heading: external_prop_types_default.a.string.isRequired,
    links: external_prop_types_default.a.arrayOf(external_prop_types_default.a.shape({
      link: external_prop_types_default.a.string.isRequired,
      name: external_prop_types_default.a.string.isRequired
    })).isRequired
  })).isRequired,
  footerStaticContent: external_prop_types_default.a.shape({
    address: external_prop_types_default.a.arrayOf(external_prop_types_default.a.string).isRequired,
    legal: external_prop_types_default.a.arrayOf(external_prop_types_default.a.string).isRequired,
    copyright: external_prop_types_default.a.arrayOf(external_prop_types_default.a.string).isRequired
  })
});
/* harmony default export */ var footerDataPropTypes = (FooterDataPropTypes);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/projectsPropTypes.js
var projectsPropTypes = __webpack_require__(20);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/projects.js
var projects = __webpack_require__(9);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/Heading/index.js
var Heading = __webpack_require__(21);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/Link/index.js
var Link = __webpack_require__(10);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/ScrollToTop/index.js


var ScrollToTop_ScrollToTop = function ScrollToTop() {
  var onScrollToTop = function onScrollToTop() {
    var target = document.querySelector('#root');
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return /*#__PURE__*/external_react_default.a.createElement("button", {
    className: "scroll-to-top",
    onClick: onScrollToTop
  });
};

/* harmony default export */ var atoms_ScrollToTop = (ScrollToTop_ScrollToTop);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/Text/index.js
var Text = __webpack_require__(18);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/organisms/Footer/index.js







function Footer_createSuper(Derived) { var hasNativeReflectConstruct = Footer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Footer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var Footer_Footer = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Footer, _React$Component);

  var _super = Footer_createSuper(Footer);

  function Footer(props) {
    var _this;

    classCallCheck_default()(this, Footer);

    _this = _super.call(this, props);
    var projectParts = Object(projects["m" /* parseProjectUrl */])(_this.props.location.pathname);
    var projectLinks = Object(projects["c" /* createProjectLinks */])(_this.props.projects);
    var dynamicSections = [{
      heading: props.footerData.footerDocsSectionTitle,
      links: projectLinks
    }];
    _this.state = {
      projectLinks: Object(projects["c" /* createProjectLinks */])(_this.props.projects),
      currentProjectFolder: projectParts.projectFolder,
      footerSections: dynamicSections.concat(props.footerData.footerSections),
      footerStaticContent: props.footerData.footerStaticContent
    };
    _this.handleClick = _this.handleClick.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Footer, [{
    key: "handleClick",
    value: function handleClick(urlOrProjectFolder) {
      if (urlOrProjectFolder.startsWith('http')) {
        window.open(urlOrProjectFolder, '_blank');
      } else {
        this.props.history.push(this.state.projectLinks.find(function (pl) {
          return pl.folder === urlOrProjectFolder;
        }).link);
      }

      this.setState({
        currentProject: urlOrProjectFolder
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/external_react_default.a.createElement("footer", {
        className: "footer"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "footer__wrapper"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "footer-top-content"
      }, this.state.footerSections.map(function (_ref) {
        var heading = _ref.heading,
            links = _ref.links;
        return /*#__PURE__*/external_react_default.a.createElement("section", {
          key: heading,
          className: "footer-top-content__wrapper"
        }, /*#__PURE__*/external_react_default.a.createElement(Heading["a" /* default */], {
          level: 3,
          text: heading,
          className: "footer-top-content__heading"
        }), links.map(function (item) {
          return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, {
            key: item.name
          }, item.link && /*#__PURE__*/external_react_default.a.createElement(Link["a" /* default */], {
            href: item.link,
            className: "footer-top-content__link"
          }, item.name));
        }));
      })), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "footer-top-content__dropdown-wrapper"
      }, /*#__PURE__*/external_react_default.a.createElement(Heading["a" /* default */], {
        level: 3,
        text: "Jump to a section",
        className: "footer-top-content__heading"
      }), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "select-wrapper"
      }, /*#__PURE__*/external_react_default.a.createElement("select", {
        onChange: function onChange(e) {
          return _this2.handleClick(e.target.value);
        },
        value: this.state.currentProjectFolder,
        className: "select footer-top-content__dropdown"
      }, /*#__PURE__*/external_react_default.a.createElement("option", {
        value: ""
      }, "Select a topic"), this.state.footerSections.map(function (_ref2) {
        var heading = _ref2.heading,
            links = _ref2.links;
        return /*#__PURE__*/external_react_default.a.createElement("optgroup", {
          key: heading,
          label: heading
        }, links.map(function (item) {
          return /*#__PURE__*/external_react_default.a.createElement("option", {
            key: item.name,
            value: item.folder || item.link
          }, item.name);
        }));
      })))), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "footer-bottom-content"
      }, /*#__PURE__*/external_react_default.a.createElement("section", {
        className: "footer-bottom-content__wrapper"
      }, this.state.footerStaticContent.address.map(function (text) {
        return /*#__PURE__*/external_react_default.a.createElement(Text["a" /* default */], {
          key: text,
          className: "footer-bottom-content__item",
          html: true
        }, text);
      })), /*#__PURE__*/external_react_default.a.createElement("section", {
        className: "footer-bottom-content__wrapper legal"
      }, this.state.footerStaticContent.legal.map(function (text) {
        return /*#__PURE__*/external_react_default.a.createElement(Text["a" /* default */], {
          key: text,
          className: "footer-bottom-content__item",
          html: true
        }, text);
      })), /*#__PURE__*/external_react_default.a.createElement("section", {
        className: "footer-bottom-content__wrapper copyright"
      }, this.state.footerStaticContent.copyright.map(function (text) {
        return /*#__PURE__*/external_react_default.a.createElement(Text["a" /* default */], {
          key: text,
          className: "footer-bottom-content__item",
          html: true
        }, text);
      })), /*#__PURE__*/external_react_default.a.createElement(atoms_ScrollToTop, null))));
    }
  }]);

  return Footer;
}(external_react_default.a.Component);

/* harmony default export */ var organisms_Footer = (Footer_Footer);
// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/containers/Container.js






function Container_createSuper(Derived) { var hasNativeReflectConstruct = Container_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Container_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Container_Container = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(Container, _React$PureComponent);

  var _super = Container_createSuper(Container);

  function Container() {
    classCallCheck_default()(this, Container);

    return _super.apply(this, arguments);
  }

  createClass_default()(Container, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, this.props.children, /*#__PURE__*/external_react_default.a.createElement(organisms_Footer, {
        projects: this.props.projects,
        history: this.props.history,
        location: this.props.location,
        footerData: this.props.footerData
      }), /*#__PURE__*/external_react_default.a.createElement(atoms_Disclaimer, null));
    }
  }]);

  return Container;
}(external_react_default.a.PureComponent);

/* harmony default export */ var containers_Container = __webpack_exports__["a"] = (Container_Container);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(46);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(72);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(74);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(51);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(75);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(47);

var _helpers = __webpack_require__(76);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(71)(module)))

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var ViewDataPropTypes = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  enableFeedback: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  enableSignup: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  disableSearch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
});
/* unused harmony default export */ var _unused_webpack_default_export = (ViewDataPropTypes);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17);
/* harmony import */ var react_router_prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_Logo_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39);
/* harmony import */ var _assets_Logo_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_Logo_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15);
/* harmony import */ var _molecules_InputSearch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(34);
/* harmony import */ var _utils_viewDataPropTypes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var StickyHeader = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(StickyHeader, _React$Component);

  var _super = _createSuper(StickyHeader);

  function StickyHeader(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StickyHeader);

    _this = _super.call(this, props);
    _this.state = {
      inputExpanded: false,
      searchResults: []
    };
    _this.inputExpandHandler = _this.inputExpandHandler.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.handleKeyUp = _this.handleKeyUp.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.onSearch = _this.onSearch.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.handleBurgerClick = _this.handleBurgerClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.handleCloseClick = _this.handleCloseClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StickyHeader, [{
    key: "handleBurgerClick",
    value: function handleBurgerClick() {
      this.setState({
        inputExpanded: false
      });

      if (this.props.onBurgerClick) {
        this.props.onBurgerClick();
      }
    }
  }, {
    key: "handleCloseClick",
    value: function handleCloseClick() {
      this.setState({
        inputExpanded: false
      });
    }
  }, {
    key: "onSearch",
    value: function onSearch(query) {
      Object(_utils_search__WEBPACK_IMPORTED_MODULE_12__[/* performSearch */ "e"])(this.props.history, query);
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(e) {
      if (e.key === 'Escape') {
        this.setState({
          inputExpanded: false
        });
      }
    }
  }, {
    key: "inputExpandHandler",
    value: function inputExpandHandler() {
      if (!this.state.inputExpanded) {
        this.setState({
          inputExpanded: true
        });
        this.searchInput.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('sticky-header', {
          'sticky-header--expanded': this.state.inputExpanded
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        className: "sticky-header__brand",
        src: _assets_Logo_svg__WEBPACK_IMPORTED_MODULE_11___default.a
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "sticky-header__control"
      }, !this.props.viewData.disableSearch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: this.inputExpandHandler,
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('input-sticky-wrapper', {
          'input-sticky-wrapper--expanded': this.state.inputExpanded
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_molecules_InputSearch__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        ref: function ref(input) {
          _this2.searchInput = input;
        },
        className: "input-search-sticky",
        placeholder: "Search for topics",
        onKeyUp: this.handleKeyUp,
        onSearch: this.onSearch
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "sticky-header__icon-close",
        onClick: this.handleCloseClick
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "sticky-header__icon-burger",
        onClick: this.handleBurgerClick
      })));
    }
  }]);

  return StickyHeader;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(StickyHeader));

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var InputSearch = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(InputSearch, _React$Component);

  var _super = _createSuper(InputSearch);

  function InputSearch(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InputSearch);

    _this = _super.call(this, props);
    _this.state = {
      query: _this.props.query === undefined ? '' : _this.props.query
    };
    _this.handleInputChange = _this.handleInputChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.reset = _this.reset.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.handleKeyChange = _this.handleKeyChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InputSearch, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.query != prevProps.query) {
        this.setState({
          query: this.props.query === undefined ? '' : this.props.query
        });
      }
    }
  }, {
    key: "handleKeyChange",
    value: function handleKeyChange(e) {
      this.props.onKeyUp(e);

      if (e.key === 'Enter') {
        if (this.props.onSearch) {
          this.props.onSearch(this.state.query);
        }
      }
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(_ref) {
      var value = _ref.target.value;
      this.setState({
        query: value
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        query: ''
      });
    }
  }, {
    key: "focus",
    value: function focus() {
      this.searchInput.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var query = this.state.query;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: this.props.className,
        placeholder: this.props.placeholder,
        type: "search",
        autoComplete: "off",
        value: query,
        name: "query",
        onChange: this.handleInputChange,
        onKeyUp: this.handleKeyChange,
        ref: function ref(input) {
          _this2.searchInput = input;
        }
      });
    }
  }]);

  return InputSearch;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (InputSearch);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_style_proptype__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52);
/* harmony import */ var react_style_proptype__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_style_proptype__WEBPACK_IMPORTED_MODULE_9__);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var BottomSticky = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(BottomSticky, _React$PureComponent);

  var _super = _createSuper(BottomSticky);

  function BottomSticky() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BottomSticky);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BottomSticky, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.handleBottomStop = this.handleBottomStop.bind(this);
      document.addEventListener('scroll', this.handleBottomStop);
      window.addEventListener('resize', this.handleBottomStop); // We must set the initial position on next redraw cycle
      // otherwise the component gets the initial position
      // wrong based on the parent bottom until first scroll

      setTimeout(function () {
        return _this.handleBottomStop();
      }, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.handleBottomStop);
      window.removeEventListener('resize', this.handleBottomStop);
    }
  }, {
    key: "handleBottomStop",
    value: function handleBottomStop() {
      var thisDom = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(this);
      var parentDom = thisDom.parentNode;
      var parentRect = parentDom.getBoundingClientRect();

      if (window.innerHeight - parentRect.bottom > 0) {
        thisDom.style.bottom = "".concat(Math.abs(window.innerHeight - parentRect.bottom) + this.props.bottomOffset, "px");
      } else {
        thisDom.style.bottom = "".concat(this.props.bottomOffset, "px");
      }

      thisDom.style.opacity = 1;
    }
  }, {
    key: "render",
    value: function render() {
      var style = _objectSpread(_objectSpread({}, this.props.styles), {}, {
        position: 'fixed',
        opacity: 0,
        bottom: "".concat(this.props.bottomOffset, "px")
      });

      style[this.props.horizontalAlign] = this.props.horizontalOffset;

      if (this.props.zIndex) {
        style.zIndex = this.props.zIndex;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: style
      }, this.props.children);
    }
  }]);

  return BottomSticky;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(BottomSticky, "defaultProps", {
  horizontalOffset: 20,
  horizontalAlign: 'left',
  bottomOffset: 20
});

/* harmony default export */ __webpack_exports__["a"] = (BottomSticky);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(8);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(5);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(1);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(2);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(7);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/Feedback/FeedbackButton.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var FeedbackButton_FeedbackButton = /*#__PURE__*/function (_React$Component) {
  inherits_default()(FeedbackButton, _React$Component);

  var _super = _createSuper(FeedbackButton);

  function FeedbackButton(props) {
    var _this;

    classCallCheck_default()(this, FeedbackButton);

    _this = _super.call(this, props);
    _this.handleOnClick = _this.handleOnClick.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(FeedbackButton, [{
    key: "handleOnClick",
    value: function handleOnClick(e) {
      var onClick = this.props.onClick;

      if (onClick) {
        onClick(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: external_classnames_default()('feedback-button__wrapper', {
          'feedback-button__wrapper--expanded': this.props.isExpanded
        })
      }, /*#__PURE__*/external_react_default.a.createElement("button", {
        className: external_classnames_default()('feedback-button', {
          'feedback-button--hide-content': !this.props.showButtonContent
        }),
        onClick: this.handleOnClick
      }, /*#__PURE__*/external_react_default.a.createElement("span", {
        className: external_classnames_default()('feedback-button--icon', {
          'feedback-button--icon-yes': this.props.wasItUseful === 'yes'
        }, {
          'feedback-button--icon-no': this.props.wasItUseful === 'no'
        })
      })));
    }
  }]);

  return FeedbackButton;
}(external_react_default.a.Component);

/* harmony default export */ var Feedback_FeedbackButton = (FeedbackButton_FeedbackButton);
// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/Feedback/FeedbackForm.js







function FeedbackForm_createSuper(Derived) { var hasNativeReflectConstruct = FeedbackForm_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function FeedbackForm_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var FeedbackForm_FeedbackForm = /*#__PURE__*/function (_React$Component) {
  inherits_default()(FeedbackForm, _React$Component);

  var _super = FeedbackForm_createSuper(FeedbackForm);

  function FeedbackForm(props) {
    var _this;

    classCallCheck_default()(this, FeedbackForm);

    _this = _super.call(this, props);
    _this.state = {
      wasItUseful: undefined,
      comments: ''
    };
    _this.handleClose = _this.handleClose.bind(assertThisInitialized_default()(_this));
    _this.handleOnSubmit = _this.handleOnSubmit.bind(assertThisInitialized_default()(_this));
    _this.handleYesNo = _this.handleWasItUseful.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(FeedbackForm, [{
    key: "handleClose",
    value: function handleClose() {
      var onClose = this.props.onClose;

      if (onClose) {
        onClose();
      }
    }
  }, {
    key: "handleOnSubmit",
    value: function handleOnSubmit(e) {
      var onSubmit = this.props.onSubmit;

      if (onSubmit) {
        onSubmit({
          wasItUseful: this.state.wasItUseful,
          comments: this.state.comments
        });
      }

      e.preventDefault();
    }
  }, {
    key: "handleWasItUseful",
    value: function handleWasItUseful(e, wasItUseful) {
      this.setState({
        wasItUseful: wasItUseful
      });
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "feedback-form__wrapper"
      }, /*#__PURE__*/external_react_default.a.createElement("form", {
        className: "feedback-form"
      }, /*#__PURE__*/external_react_default.a.createElement("h1", null, "Was this page useful?"), /*#__PURE__*/external_react_default.a.createElement("h2", null, "Let us know..."), /*#__PURE__*/external_react_default.a.createElement("button", {
        className: "feedback-form-close icon-cross",
        onClick: this.handleClose
      }), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: external_classnames_default()('feedback-form-button', {
          'feedback-form-button--selected': this.state.wasItUseful === 'yes'
        })
      }, /*#__PURE__*/external_react_default.a.createElement("button", {
        className: "feedback-form-button-circle icon-thumb-up",
        onClick: function onClick(e) {
          return _this2.handleWasItUseful(e, 'yes');
        }
      }), /*#__PURE__*/external_react_default.a.createElement("button", {
        className: "feedback-form-button-label",
        onClick: function onClick(e) {
          return _this2.handleWasItUseful(e, 'yes');
        }
      }, "Yes")), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: external_classnames_default()('feedback-form-button', {
          'feedback-form-button--selected': this.state.wasItUseful === 'no'
        })
      }, /*#__PURE__*/external_react_default.a.createElement("button", {
        className: "feedback-form-button-circle icon-thumb-down",
        onClick: function onClick(e) {
          return _this2.handleWasItUseful(e, 'no');
        }
      }), /*#__PURE__*/external_react_default.a.createElement("button", {
        className: "feedback-form-button-label",
        onClick: function onClick(e) {
          return _this2.handleWasItUseful(e, 'no');
        }
      }, "No"))), /*#__PURE__*/external_react_default.a.createElement("textarea", {
        placeholder: "Leave additional thoughts or feedback",
        rows: "6",
        value: this.state.comments,
        onChange: function onChange(e) {
          return _this2.setState({
            comments: e.target.value
          });
        }
      }), /*#__PURE__*/external_react_default.a.createElement("button", {
        className: "feedback-form-button-submit",
        onClick: this.handleOnSubmit,
        disabled: this.state.wasItUseful === undefined
      }, "Submit Page Feedback")));
    }
  }]);

  return FeedbackForm;
}(external_react_default.a.Component);

/* harmony default export */ var Feedback_FeedbackForm = (FeedbackForm_FeedbackForm);
// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/Feedback/FeedbackOverlay.js






function FeedbackOverlay_createSuper(Derived) { var hasNativeReflectConstruct = FeedbackOverlay_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function FeedbackOverlay_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var FeedbackOverlay_FeedbackOverlay = /*#__PURE__*/function (_React$Component) {
  inherits_default()(FeedbackOverlay, _React$Component);

  var _super = FeedbackOverlay_createSuper(FeedbackOverlay);

  function FeedbackOverlay() {
    classCallCheck_default()(this, FeedbackOverlay);

    return _super.apply(this, arguments);
  }

  createClass_default()(FeedbackOverlay, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: external_classnames_default()('feedback-overlay', {
          'feedback-overlay--expanded': this.props.isExpanded
        })
      }, this.props.children);
    }
  }]);

  return FeedbackOverlay;
}(external_react_default.a.Component);

/* harmony default export */ var Feedback_FeedbackOverlay = (FeedbackOverlay_FeedbackOverlay);
// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/Feedback/index.js







function Feedback_createSuper(Derived) { var hasNativeReflectConstruct = Feedback_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Feedback_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Feedback_Feedback = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Feedback, _React$Component);

  var _super = Feedback_createSuper(Feedback);

  function Feedback(props) {
    var _this;

    classCallCheck_default()(this, Feedback);

    _this = _super.call(this, props);
    _this.state = {
      isExpanded: false,
      wasItUseful: undefined,
      showButtonContent: true,
      showForm: false
    };
    _this.handleOnExpand = _this.handleOnExpand.bind(assertThisInitialized_default()(_this));
    _this.handleOnSubmit = _this.handleOnSubmit.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Feedback, [{
    key: "handleOnExpand",
    value: function handleOnExpand(expand) {
      var _this2 = this;

      this.setState({
        isExpanded: expand
      }, function () {
        if (expand) {
          // Hide the button content immediately
          _this2.setState({
            showButtonContent: false
          });

          setTimeout(function () {
            _this2.setState({
              showForm: true
            }); // Wait for animation completion before hiding scroll


            document.body.classList.toggle('no-scroll', true);
          }, 200);
        } else {
          // Hide form straight away
          _this2.setState({
            showForm: false
          }, function () {
            // Wait for collapse animation to complete before showing button content
            setTimeout(function () {
              _this2.setState({
                showButtonContent: true
              }); // Wait for animation completion before showing scroll


              document.body.classList.toggle('no-scroll', false);
            }, 500);
          });
        }
      });
    }
  }, {
    key: "handleOnSubmit",
    value: function handleOnSubmit(e) {
      this.setState({
        wasItUseful: e.wasItUseful
      });
      var onSubmit = this.props.onSubmit;

      if (onSubmit) {
        onSubmit(e);
      }

      this.handleOnExpand(false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Feedback_FeedbackButton, {
        onClick: function onClick() {
          return _this3.handleOnExpand(true);
        },
        isExpanded: this.state.isExpanded,
        showButtonContent: this.state.showButtonContent,
        wasItUseful: this.state.wasItUseful
      }), /*#__PURE__*/external_react_default.a.createElement(Feedback_FeedbackOverlay, {
        isExpanded: this.state.showForm
      }, this.state.showForm && /*#__PURE__*/external_react_default.a.createElement(Feedback_FeedbackForm, {
        onClose: function onClose() {
          return _this3.handleOnExpand(false);
        },
        onSubmit: this.handleOnSubmit
      })));
    }
  }]);

  return Feedback;
}(external_react_default.a.Component);

/* harmony default export */ var molecules_Feedback = __webpack_exports__["a"] = (Feedback_Feedback);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(47);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(73)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_click_outside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61);
/* harmony import */ var react_click_outside__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_click_outside__WEBPACK_IMPORTED_MODULE_7__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var ClickOutside = /*#__PURE__*/function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ClickOutside, _PureComponent);

  var _super = _createSuper(ClickOutside);

  function ClickOutside() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ClickOutside);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ClickOutside, [{
    key: "handleClickOutside",
    value: function handleClickOutside() {
      if (this.props.onClickOutside) {
        this.props.onClickOutside();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return ClickOutside;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (react_click_outside__WEBPACK_IMPORTED_MODULE_7___default()(ClickOutside));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Logo.a2e87dd3.svg";

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var ScrollInContainer = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ScrollInContainer, _React$Component);

  var _super = _createSuper(ScrollInContainer);

  function ScrollInContainer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ScrollInContainer);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ScrollInContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleScroll = this.handleScroll.bind(this);
      this.handleResize = this.handleResize.bind(this);
      document.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleResize);
      this.handleScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      this.handleScroll();
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var thisDom = react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.findDOMNode(this);
      var parentDom = thisDom.parentNode;
      var thisRect = thisDom.getBoundingClientRect();
      var parentRect = parentDom.getBoundingClientRect();
      var computedParent = getComputedStyle(parentDom);

      if (parentRect.top < 0) {
        var newRelativeTop = -parentRect.top + this.props.topOffset;

        if (this._lastRelativeTop === undefined) {
          this._lastRelativeTop = newRelativeTop;
        }

        var thisHeight = thisRect.height + this.props.bottomOffset;
        var fixBottom = false;

        if (thisHeight + this._lastRelativeTop >= parentRect.height) {
          fixBottom = true;
        }

        this._lastRelativeTop = Math.floor(newRelativeTop);

        if (fixBottom) {
          thisDom.style.top = "".concat(parentRect.height - thisHeight, "px");
          thisDom.style.position = 'relative';
          thisDom.style.width = 'auto';
        } else {
          var parentTopPadding = parseInt(computedParent.paddingTop, 10);
          var parentLeftPadding = parseInt(computedParent.paddingLeft, 10);
          var parentRightPadding = parseInt(computedParent.paddingRight, 10);
          thisDom.style.top = "".concat(parentTopPadding + this.props.topOffset, "px");
          thisDom.style.position = 'fixed';
          thisDom.style.width = "".concat(parentRect.width - parentLeftPadding - parentRightPadding, "px");
        }
      } else {
        thisDom.style.top = "".concat(this.props.topOffset, "px");
        thisDom.style.position = 'relative';
        thisDom.style.width = 'auto';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, this.props.children);
    }
  }]);

  return ScrollInContainer;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(ScrollInContainer, "defaultProps", {
  topOffset: 0,
  bottomOffset: 100
});

/* harmony default export */ __webpack_exports__["a"] = (ScrollInContainer);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _organisms_Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _atoms_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var ProjectTopicsInner = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ProjectTopicsInner, _React$Component);

  var _super = _createSuper(ProjectTopicsInner);

  function ProjectTopicsInner() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProjectTopicsInner);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ProjectTopicsInner, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('project-topics', {
          'project-topics__compressed': this.props.compressed
        })
      }, this.props.content && this.props.content.map(function (item, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: idx,
          className: "project-topic__item"
        }, item.link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_atoms_Link__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
          href: item.link,
          target: item.link.startsWith('http') ? '_blank' : undefined,
          className: "project-topic__link"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('project-topic__heading', 'text--level6', {
            'project-topic__primary-bullet': item.bullet === 'primary'
          }, {
            'project-topic__secondary-bullet': item.bullet === 'secondary'
          })
        }, item.name)), !item.link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('project-topic__heading', 'text--level6', {
            'project-topic__primary-bullet': item.bullet === 'primary'
          }, {
            'project-topic__secondary-bullet': item.bullet === 'secondary'
          })
        }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_organisms_Markdown__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
          className: "project-topic__subheading",
          source: item.description,
          highlights: _this.props.highlights
        }));
      }));
    }
  }]);

  return ProjectTopicsInner;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ProjectTopicsInner);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(32);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(13);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(8);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(5);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(1);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "emoji-dictionary"
var external_emoji_dictionary_ = __webpack_require__(62);
var external_emoji_dictionary_default = /*#__PURE__*/__webpack_require__.n(external_emoji_dictionary_);

// EXTERNAL MODULE: external "google-map-react"
var external_google_map_react_ = __webpack_require__(63);
var external_google_map_react_default = /*#__PURE__*/__webpack_require__.n(external_google_map_react_);

// EXTERNAL MODULE: external "prismjs/themes/prism.css"
var prism_css_ = __webpack_require__(90);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(2);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__(44);
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// EXTERNAL MODULE: external "react-router-prop-types"
var external_react_router_prop_types_ = __webpack_require__(17);

// EXTERNAL MODULE: external "prismjs"
var external_prismjs_ = __webpack_require__(45);

// EXTERNAL MODULE: external "prismjs/components/prism-bash"
var prism_bash_ = __webpack_require__(91);

// EXTERNAL MODULE: external "prismjs/components/prism-c"
var prism_c_ = __webpack_require__(92);

// EXTERNAL MODULE: external "prismjs/components/prism-cpp"
var prism_cpp_ = __webpack_require__(93);

// EXTERNAL MODULE: external "prismjs/components/prism-css"
var components_prism_css_ = __webpack_require__(94);

// EXTERNAL MODULE: external "prismjs/components/prism-csharp"
var prism_csharp_ = __webpack_require__(95);

// EXTERNAL MODULE: external "prismjs/components/prism-docker"
var prism_docker_ = __webpack_require__(96);

// EXTERNAL MODULE: external "prismjs/components/prism-elixir"
var prism_elixir_ = __webpack_require__(97);

// EXTERNAL MODULE: external "prismjs/components/prism-go"
var prism_go_ = __webpack_require__(98);

// EXTERNAL MODULE: external "prismjs/components/prism-groovy"
var prism_groovy_ = __webpack_require__(99);

// EXTERNAL MODULE: external "prismjs/components/prism-http"
var prism_http_ = __webpack_require__(100);

// EXTERNAL MODULE: external "prismjs/components/prism-java"
var prism_java_ = __webpack_require__(101);

// EXTERNAL MODULE: external "prismjs/components/prism-javascript"
var prism_javascript_ = __webpack_require__(54);

// EXTERNAL MODULE: external "prismjs/components/prism-json"
var prism_json_ = __webpack_require__(102);

// EXTERNAL MODULE: external "prismjs/components/prism-jsx"
var prism_jsx_ = __webpack_require__(103);

// EXTERNAL MODULE: external "prismjs/components/prism-markdown"
var prism_markdown_ = __webpack_require__(104);

// EXTERNAL MODULE: external "prismjs/components/prism-objectivec"
var prism_objectivec_ = __webpack_require__(105);

// EXTERNAL MODULE: external "prismjs/components/prism-sql"
var prism_sql_ = __webpack_require__(106);

// EXTERNAL MODULE: external "prismjs/components/prism-powershell"
var prism_powershell_ = __webpack_require__(107);

// EXTERNAL MODULE: external "prismjs/components/prism-python"
var prism_python_ = __webpack_require__(108);

// EXTERNAL MODULE: external "prismjs/components/prism-rust"
var prism_rust_ = __webpack_require__(109);

// EXTERNAL MODULE: external "prismjs/components/prism-yaml"
var prism_yaml_ = __webpack_require__(110);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/assets/logo-small.svg
var logo_small = __webpack_require__(64);
var logo_small_default = /*#__PURE__*/__webpack_require__.n(logo_small);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/clipboard.js
function copyToClipboard(text) {
  try {
    var textArea = document.createElement('textarea'); // Prevent zooming on iOS

    textArea.style.fontSize = '12pt'; // Reset box model

    textArea.style.border = '0';
    textArea.style.padding = '0';
    textArea.style.margin = '0'; // Move element out of screen horizontally

    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px'; // Move element to the same position vertically

    var yPosition = window.pageYOffset || document.documentElement.scrollTop;
    textArea.style.top = "".concat(yPosition, "px");
    textArea.setAttribute('readonly', '');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('Copy');
    textArea.remove();
    return true;
  } catch (err) {
    // Not much we can do
    return false;
  }
}
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/paths.js
var paths = __webpack_require__(19);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/Heading/index.js
var Heading = __webpack_require__(21);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(7);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/HeadingLabel/index.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var HeadingLabel_HeadingLabel = /*#__PURE__*/function (_React$Component) {
  inherits_default()(HeadingLabel, _React$Component);

  var _super = _createSuper(HeadingLabel);

  function HeadingLabel() {
    classCallCheck_default()(this, HeadingLabel);

    return _super.apply(this, arguments);
  }

  createClass_default()(HeadingLabel, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: external_classnames_default()('heading-label', {
          'heading-label--secondary': this.props.style === 'secondary'
        }),
        id: this.props.id
      }, this.props.children);
    }
  }]);

  return HeadingLabel;
}(external_react_default.a.Component);

/* harmony default export */ var atoms_HeadingLabel = (HeadingLabel_HeadingLabel);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/MapMarker/mapMarker.css
var mapMarker = __webpack_require__(111);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/MapMarker/index.js







function MapMarker_createSuper(Derived) { var hasNativeReflectConstruct = MapMarker_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function MapMarker_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Component to display an event map marker.
 */

var MapMarker_MapMarker = /*#__PURE__*/function (_Component) {
  inherits_default()(MapMarker, _Component);

  var _super = MapMarker_createSuper(MapMarker);

  function MapMarker() {
    classCallCheck_default()(this, MapMarker);

    return _super.apply(this, arguments);
  }

  createClass_default()(MapMarker, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("div", extends_default()({
        className: "map-marker"
      }, this.props), this.props.children);
    }
  }]);

  return MapMarker;
}(external_react_["Component"]);

/* harmony default export */ var atoms_MapMarker = (MapMarker_MapMarker);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/Link/index.js
var Link = __webpack_require__(10);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/MarkdownCard/index.js






function MarkdownCard_createSuper(Derived) { var hasNativeReflectConstruct = MarkdownCard_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function MarkdownCard_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var MarkdownCard_MarkdownCard = /*#__PURE__*/function (_React$Component) {
  inherits_default()(MarkdownCard, _React$Component);

  var _super = MarkdownCard_createSuper(MarkdownCard);

  function MarkdownCard() {
    classCallCheck_default()(this, MarkdownCard);

    return _super.apply(this, arguments);
  }

  createClass_default()(MarkdownCard, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "markdown-card"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "markdown-card--inner"
      }, /*#__PURE__*/external_react_default.a.createElement(Link["a" /* default */], {
        href: this.props.link,
        id: this.props.id
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        className: "markdown-card--image",
        src: this.props.img,
        alt: this.props.alt
      }), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "markdown-card--content"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "markdown-card--title"
      }, this.props.title), this.props.children))));
    }
  }]);

  return MarkdownCard;
}(external_react_default.a.Component);

/* harmony default export */ var atoms_MarkdownCard = (MarkdownCard_MarkdownCard);
// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/MessageBox/index.js






function MessageBox_createSuper(Derived) { var hasNativeReflectConstruct = MessageBox_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function MessageBox_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Component to display a message box.
 */

var MessageBox_MessageBox = /*#__PURE__*/function (_Component) {
  inherits_default()(MessageBox, _Component);

  var _super = MessageBox_createSuper(MessageBox);

  function MessageBox(props) {
    var _this;

    classCallCheck_default()(this, MessageBox);

    _this = _super.call(this, props);
    _this.state = {
      showMap: false
    };
    return _this;
  }

  createClass_default()(MessageBox, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: external_classnames_default()('message-box', {
          'message-box__success': this.props.type === 'success'
        }, {
          'message-box__danger': this.props.type === 'danger'
        }, {
          'message-box__info': this.props.type === 'info'
        }, {
          'message-box__warning': this.props.type === 'warning'
        })
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "message-box--icon"
      }), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "message-box--text"
      }, this.props.title && /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "message-box--title"
      }, this.props.title), this.props.content && /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "message-box--content"
      }, this.props.content)));
    }
  }]);

  return MessageBox;
}(external_react_["Component"]);

/* harmony default export */ var molecules_MessageBox = (MessageBox_MessageBox);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/ProjectTopicsContainer/ProjectTopicsInner.js
var ProjectTopicsInner = __webpack_require__(41);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/Tabs/index.js







function Tabs_createSuper(Derived) { var hasNativeReflectConstruct = Tabs_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Tabs_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Tabs_Tabs = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Tabs, _React$Component);

  var _super = Tabs_createSuper(Tabs);

  function Tabs(props) {
    var _this;

    classCallCheck_default()(this, Tabs);

    _this = _super.call(this, props);
    _this.state = {
      selectedIndex: 0,
      copyActive: false,
      copySuccess: false
    };
    _this.handleSelect = _this.handleSelect.bind(assertThisInitialized_default()(_this));
    _this.handleCopy = _this.handleCopy.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Tabs, [{
    key: "handleSelect",
    value: function handleSelect(idx) {
      this.setState({
        selectedIndex: idx
      });
    }
  }, {
    key: "handleCopy",
    value: function handleCopy() {
      var _this2 = this;

      var markdown = this.props.contents[this.state.selectedIndex].props.source;
      var success = copyToClipboard(markdown.replace(/```.*/g, '').trim());
      this.setState({
        copySuccess: success,
        copyActive: true
      });
      setTimeout(function () {
        _this2.setState({
          copyActive: false
        });
      }, 2000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "tabs"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "tab-header"
      }, /*#__PURE__*/external_react_default.a.createElement("ul", {
        className: "tab-header-list"
      }, this.props.headers.map(function (header, headerIdx) {
        return /*#__PURE__*/external_react_default.a.createElement("li", {
          key: headerIdx,
          className: external_classnames_default()('tab-header-item', {
            'tab-header-item--selected': headerIdx === _this3.state.selectedIndex
          })
        }, /*#__PURE__*/external_react_default.a.createElement("a", {
          onClick: function onClick() {
            return _this3.handleSelect(headerIdx);
          }
        }, header));
      })), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "tab-header-copy"
      }, /*#__PURE__*/external_react_default.a.createElement("span", {
        className: external_classnames_default()('tab-header-copy-text', {
          'tab-header-copy-text--active': this.state.copyActive
        }, {
          'tab-header-copy-text--failed': !this.state.copySuccess && this.state.copyActive
        })
      }, this.state.copySuccess ? 'Copied' : 'Failed'), /*#__PURE__*/external_react_default.a.createElement("button", {
        className: "tab-header-copy-button icon-copy",
        onClick: function onClick() {
          return _this3.handleCopy();
        }
      }))), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "tab-container"
      }, this.props.contents.map(function (content, contentIdx) {
        return /*#__PURE__*/external_react_default.a.createElement("div", {
          key: contentIdx,
          className: external_classnames_default()('tab-item', {
            'tab-item--selected': contentIdx === _this3.state.selectedIndex
          })
        }, content);
      })));
    }
  }]);

  return Tabs;
}(external_react_default.a.Component);

/* harmony default export */ var molecules_Tabs = (Tabs_Tabs);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/organisms/Markdown/markdown.css
var Markdown_markdown = __webpack_require__(112);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/organisms/Markdown/index.js









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Markdown_createSuper(Derived) { var hasNativeReflectConstruct = Markdown_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Markdown_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











































var Markdown_Markdown = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(Markdown, _PureComponent);

  var _super = Markdown_createSuper(Markdown);

  function Markdown(props) {
    var _this;

    classCallCheck_default()(this, Markdown);

    _this = _super.call(this, props);
    _this.state = {
      content: '',
      imageUrl: ''
    };
    _this.tabContainers = [];
    _this.projectTopicContainers = [];
    _this.headingLabels = [];
    _this.cards = [];
    _this.messageBoxes = [];
    _this.objects = [];
    _this.html = _this.html.bind(assertThisInitialized_default()(_this));
    _this.heading = _this.heading.bind(assertThisInitialized_default()(_this));
    _this.textRenderer = _this.textRenderer.bind(assertThisInitialized_default()(_this));
    _this.tableRenderer = _this.tableRenderer.bind(assertThisInitialized_default()(_this));
    _this.tableCellRenderer = _this.tableCellRenderer.bind(assertThisInitialized_default()(_this));
    _this.tableRowRenderer = _this.tableRowRenderer.bind(assertThisInitialized_default()(_this));
    _this.replaceSearchQuery = _this.replaceSearchQuery.bind(assertThisInitialized_default()(_this));
    _this.stripSearchQuery = _this.stripSearchQuery.bind(assertThisInitialized_default()(_this));
    _this.codeBlock = _this.codeBlock.bind(assertThisInitialized_default()(_this));
    _this.handleCopy = _this.handleCopy.bind(assertThisInitialized_default()(_this));
    _this.imageRenderer = _this.imageRenderer.bind(assertThisInitialized_default()(_this));
    _this.currentTable = undefined;
    _this.currentTableRow = 0;
    _this.currentTableHeaders = [];
    _this.headingCounters = {};
    _this.copyIdCounter = 0;
    return _this;
  }

  createClass_default()(Markdown, [{
    key: "handleCopy",
    value: function handleCopy(code, elemName) {
      copyToClipboard(code);
      document.getElementById(elemName).classList.toggle('markdown-code-copy-feedback--active', true);
      setTimeout(function () {
        document.getElementById(elemName).classList.toggle('markdown-code-copy-feedback--active', false);
      }, 2000);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.highlights = [];
      this.headingCounters = {};

      if (this.props.highlights) {
        this.highlights = this.highlights.concat(this.props.highlights);
      }

      if (this.props.query) {
        if (this.highlights.indexOf(this.props.query) < 0) {
          this.highlights.push(this.props.query);
        }
      }

      var content = this.fixPrismSyntaxHighlighting(this.props.source); // Strip the h1 from the start of the content

      content = content.trim().replace(/(^# .*)/, '').trim();
      var markdownMatches = this.findMarkdownContainers(content);

      for (var i = 0; i < markdownMatches.length; i++) {
        content = content.replace(markdownMatches[i], "<markdown index=\"".concat(i, "\"></markdown>"));
      }

      var tabMatches = this.findTabContainers(content);

      for (var _i = 0; _i < tabMatches.length; _i++) {
        this.tabContainers.push(this.findTabs(tabMatches[_i]));
        content = content.replace(tabMatches[_i], "<tabs index=\"".concat(_i, "\"></tabs>"));
      }

      var projectTopicMatches = this.findProjectTopicContainers(content);

      for (var _i2 = 0; _i2 < projectTopicMatches.length; _i2++) {
        this.projectTopicContainers.push(this.findProjectTopics(projectTopicMatches[_i2]));
        content = content.replace(projectTopicMatches[_i2], "<project-topics index=\"".concat(_i2, "\"></project-topics>"));
      }

      var headingMatches = this.findHeadingLabels(content);

      for (var _i3 = 0; _i3 < headingMatches.length; _i3++) {
        content = content.replace(headingMatches[_i3], "<heading-label index=\"".concat(_i3, "\"></heading-label>"));
      }

      var cardMatches = this.findCards(content);

      for (var _i4 = 0; _i4 < cardMatches.length; _i4++) {
        content = content.replace(cardMatches[_i4], "<card index=\"".concat(_i4, "\"></card>"));
      }

      var messageBoxMatches = this.findMessageBoxes(content);

      for (var _i5 = 0; _i5 < messageBoxMatches.length; _i5++) {
        content = content.replace(messageBoxMatches[_i5], "<message-box index=\"".concat(_i5, "\"></message-box>"));
      }

      var objectMatches = this.findObjects(content);

      for (var _i6 = 0; _i6 < objectMatches.length; _i6++) {
        content = content.replace(objectMatches[_i6].content, "<".concat(objectMatches[_i6].type, " index=\"").concat(_i6, "\"></").concat(objectMatches[_i6].type, ">"));
      }

      content = this.replaceSearchQuery(content);

      for (var _i7 = 0; _i7 < markdownMatches.length; _i7++) {
        content = content.replace("<markdown index=\"".concat(_i7, "\"></markdown>"), markdownMatches[_i7]);
      }

      this.setState({
        content: content
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.highlights = [];
      this.headingCounters = {};
    }
  }, {
    key: "fixPrismSyntaxHighlighting",
    value: function fixPrismSyntaxHighlighting(content) {
      return content.replace(/```gradle/g, '```groovy');
    }
  }, {
    key: "stripSearchQuery",
    value: function stripSearchQuery(content) {
      return content.replace(/<query text="(.*?)" \/>/g, '$1');
    }
  }, {
    key: "replaceSearchQuery",
    value: function replaceSearchQuery(content, useSpan) {
      if (this.highlights.length > 0) {
        var re = new RegExp("(^\\s|\\s$|\\S\\s|\\s\\S)(".concat(this.highlights.join('|'), ")(^\\s|\\s$|\\S\\s|\\s\\S)"), 'gi');

        if (useSpan) {
          content = content.replace(re, '$1<span class="search-keyword">$2</span>$3');
        } else {
          content = content.replace(re, '$1<query text="$2" />$3');
        }
      }

      return content;
    }
  }, {
    key: "findMarkdownContainers",
    value: function findMarkdownContainers(content) {
      var matches = [];
      var re = /^```markdown([\S\s]*?)```$/gm;
      var match;

      do {
        match = re.exec(content);

        if (match && match.length === 2) {
          matches.push(match[0]);
        }
      } while (match);

      return matches;
    }
  }, {
    key: "findTabContainers",
    value: function findTabContainers(content) {
      var matches = [];
      var re = /^--------------------$([\S\s]*?)^--------------------$/gm;
      var match;

      do {
        match = re.exec(content);

        if (match && match.length === 2) {
          matches.push(match[0]);
        }
      } while (match);

      return matches;
    }
  }, {
    key: "findTabs",
    value: function findTabs(tabContainer) {
      var tabs = [];
      var re = /### (.*)([\S\s]*?)---/g;
      var match;

      do {
        match = re.exec(tabContainer);

        if (match && match.length === 3) {
          tabs.push({
            title: match[1],
            content: match[2]
          });
        }
      } while (match);

      return tabs;
    }
  }, {
    key: "findProjectTopicContainers",
    value: function findProjectTopicContainers(content) {
      var matches = [];
      var re = /^---------------$([\S\s]*?)^---------------$/gm;
      var match;

      do {
        match = re.exec(content);

        if (match && match.length === 2) {
          matches.push(match[0]);
        }
      } while (match);

      return matches;
    }
  }, {
    key: "findProjectTopics",
    value: function findProjectTopics(projectTopicContainer) {
      var projectTopics = [];
      var re = /#### (.*)\n(\[.*\]\((.*)\))?([\S\s]*?)---/g;
      var match;

      do {
        match = re.exec(projectTopicContainer);

        if (match && match.length === 5) {
          var matchPrimary = /\*\*(.*)\*\* ####/g.exec(match[1]);

          if (matchPrimary && matchPrimary.length === 2) {
            projectTopics.push({
              bullet: 'primary',
              name: matchPrimary[1],
              description: match[4],
              link: match[3].replace(/.md$/i, '')
            });
          } else {
            var matchSecondary = /__(.*)__ ####/g.exec(match[1]);

            if (matchSecondary && matchSecondary.length === 2) {
              projectTopics.push({
                bullet: 'secondary',
                name: matchSecondary[1],
                description: match[4],
                link: match[3].replace(/.md$/i, '')
              });
            } else {
              var matchPlain = /(.*) ####/g.exec(match[1]);

              if (matchPlain && matchPlain.length === 2) {
                projectTopics.push({
                  bullet: 'none',
                  name: matchPlain[1],
                  description: match[4],
                  link: match[3].replace(/.md$/i, '')
                });
              }
            }
          }
        }
      } while (match);

      return projectTopics;
    }
  }, {
    key: "findCards",
    value: function findCards(content) {
      var matches = [];
      var re = /^-------------------------\s+!\[(.*?)\]\((.*?)\)\s+## \[(.*?)\]\((.*?)\)\s+([\S\s]*?)-------------------------$/gm;
      var match;

      do {
        match = re.exec(content);

        if (match && match.length === 6) {
          this.cards.push({
            alt: match[1],
            img: match[2],
            title: match[3],
            link: match[4],
            content: match[5]
          });
          matches.push(match[0]);
        }
      } while (match);

      return matches;
    }
  }, {
    key: "findHeadingLabels",
    value: function findHeadingLabels(content) {
      var matches = [];
      var re = /### (.*) ###/g;
      var match;

      do {
        match = re.exec(content);

        if (match && match.length === 2) {
          var matchPrimary = /\*\*(.*)\*\*/g.exec(match[1]);

          if (matchPrimary && matchPrimary.length === 2) {
            this.headingLabels.push({
              style: 'primary',
              content: matchPrimary[1]
            });
            matches.push(match[0]);
          } else {
            var matchSecondary = /__(.*)__/g.exec(match[1]);

            if (matchSecondary && matchSecondary.length === 2) {
              this.headingLabels.push({
                style: 'secondary',
                content: matchSecondary[1]
              });
              matches.push(match[0]);
            }
          }
        }
      } while (match);

      return matches;
    }
  }, {
    key: "findMessageBoxes",
    value: function findMessageBoxes(content) {
      var matches = [];
      var re = /:::(success:|danger:|warning:|info:)(.+?)?(\n[\s\S]*?)?:::/gm;
      var match;

      do {
        match = re.exec(content);

        if (match && match.length === 4) {
          this.messageBoxes.push({
            type: match[1].replace(':', ''),
            title: match[2] && this.emojify(match[2].trim()),
            content: match[3] && this.emojify(match[3].trim())
          });
          matches.push(match[0]);
        }
      } while (match);

      return matches;
    }
  }, {
    key: "findObjects",
    value: function findObjects(content) {
      var matches = [];
      var re = /¬¬¬\s\[(.*?)\]\s([\s\S]*?)\s¬¬¬/gm;
      var match;

      do {
        match = re.exec(content);

        if (match && match.length === 3) {
          if (match[1] === 'map') {
            this.objects.push(JSON.parse(match[2]));
            matches.push({
              type: match[1],
              content: match[0]
            });
          }
        }
      } while (match);

      return matches;
    }
  }, {
    key: "html",
    value: function html(props) {
      var _this2 = this;

      if (props.value.startsWith('<tabs')) {
        var re = /<tabs index="(.*)">/;
        var match = re.exec(props.value);

        if (match && match.length === 2) {
          var index = parseInt(match[1], 10);
          var headers = this.tabContainers[index].map(function (tc) {
            return tc.title;
          });
          var content = this.tabContainers[index].map(function (tc, idx) {
            return /*#__PURE__*/external_react_default.a.createElement(external_react_markdown_default.a, {
              key: idx,
              source: tc.content,
              renderers: {
                text: _this2.textRenderer,
                code: function code(props) {
                  return _this2.codeBlock(props, false);
                }
              }
            });
          });
          return /*#__PURE__*/external_react_default.a.createElement(molecules_Tabs, {
            headers: headers,
            contents: content
          });
        }
      } else if (props.value.startsWith('<project-topics')) {
        var _re = /<project-topics index="(.*)">/;

        var _match = _re.exec(props.value);

        if (_match && _match.length === 2) {
          var _index = parseInt(_match[1], 10);

          return /*#__PURE__*/external_react_default.a.createElement(ProjectTopicsInner["a" /* default */], {
            content: this.projectTopicContainers[_index],
            compressed: true,
            highlights: this.highlights
          });
        }
      } else if (props.value.startsWith('<map')) {
        var _re2 = /<map index="(.*)">/;

        var _match2 = _re2.exec(props.value);

        if (_match2 && _match2.length === 2) {
          var _index2 = parseInt(_match2[1], 10);

          var map = this.objects[_index2];
          return /*#__PURE__*/external_react_default.a.createElement("div", {
            className: "markdown-map"
          }, /*#__PURE__*/external_react_default.a.createElement(external_google_map_react_default.a, {
            bootstrapURLKeys: {
              key: this.props.googleMapsKey
            },
            defaultCenter: {
              lat: map.center.lat,
              lng: map.center.lng
            },
            defaultZoom: map.zoom
          }, map.markers && map.markers.map(function (marker, idx) {
            return /*#__PURE__*/external_react_default.a.createElement(atoms_MapMarker, {
              lat: marker.lat,
              lng: marker.lng,
              key: idx
            }, /*#__PURE__*/external_react_default.a.createElement("img", {
              src: logo_small_default.a,
              alt: "IOTA"
            }), marker.name);
          })));
        }
      } else if (props.value.startsWith('<heading-label')) {
        var _re3 = /<heading-label index="(.*)">/;

        var _match3 = _re3.exec(props.value);

        if (_match3 && _match3.length === 2) {
          var _index3 = parseInt(_match3[1], 10);

          var headingLabel = this.headingLabels[_index3];
          return /*#__PURE__*/external_react_default.a.createElement(atoms_HeadingLabel, {
            style: headingLabel.style,
            id: Object(paths["a" /* sanitizeHashId */])(headingLabel.content)
          }, headingLabel.content);
        }
      } else if (props.value.startsWith('<card')) {
        var _re4 = /<card index="(.*)">/;

        var _match4 = _re4.exec(props.value);

        if (_match4 && _match4.length === 2) {
          var _index4 = parseInt(_match4[1], 10);

          var card = this.cards[_index4];
          return /*#__PURE__*/external_react_default.a.createElement(atoms_MarkdownCard, {
            id: Object(paths["a" /* sanitizeHashId */])(card.title),
            alt: card.alt,
            img: card.img,
            title: card.title,
            link: card.link.replace(/.md$/i, '')
          }, this.boldify(card.content));
        }
      } else if (props.value.startsWith('<message-box')) {
        var _re5 = /<message-box index="(.*)">/;

        var _match5 = _re5.exec(props.value);

        if (_match5 && _match5.length === 2) {
          var _index5 = parseInt(_match5[1], 10);

          var messageBox = this.messageBoxes[_index5];
          return /*#__PURE__*/external_react_default.a.createElement(molecules_MessageBox, {
            type: messageBox.type,
            title: messageBox.title,
            content: this.linkify(messageBox.content)
          });
        }
      } else if (props.value.startsWith('<a name')) {
        var _re6 = /<a name="(.*)"/i;

        var _match6 = _re6.exec(props.value);

        if (_match6 && _match6.length === 2) {
          return /*#__PURE__*/external_react_default.a.createElement("a", {
            id: Object(paths["a" /* sanitizeHashId */])(_match6[1])
          });
        }
      } else if (props.value.startsWith('<query')) {
        var _re7 = /<query text="(.*)"/i;

        var _match7 = _re7.exec(props.value);

        if (_match7 && _match7.length === 2) {
          return /*#__PURE__*/external_react_default.a.createElement("span", {
            className: "search-keyword"
          }, _match7[1]);
        }
      } else if (props.value.startsWith('<img')) {
        var _re8 = /<img src="(.*?)"\s*(?:alt="(.*?)")?/i;

        var _match8 = _re8.exec(props.value);

        if (_match8 && (_match8.length === 2 || _match8.length === 3)) {
          return this.imageRenderer({
            src: _match8[1],
            alt: _match8[2] || ''
          });
        }
      } // Do default html processing
      // https://github.com/rexxars/react-markdown/blob/b6caaba0437b00132d58337913e66a7d1bfb30ce/src/renderers.js#L100-L113


      if (props.skipHtml) {
        return null;
      }

      var tag = props.isBlock ? 'div' : 'span';

      if (props.escapeHtml) {
        var comp = external_react_default.a.Fragment || tag;
        return /*#__PURE__*/external_react_default.a.createElement(comp, null, props.value);
      }

      var nodeProps = {
        dangerouslySetInnerHTML: {
          __html: props.value
        }
      };
      return /*#__PURE__*/external_react_default.a.createElement(tag, nodeProps);
    }
  }, {
    key: "linkify",
    value: function linkify(content) {
      var _this3 = this;

      var output = [];
      var re = /\[(.*?)\]\((.*?)\)/;
      var match;

      do {
        match = re.exec(content);

        if (match && match.length === 3) {
          output.push( /*#__PURE__*/external_react_default.a.createElement("span", {
            style: {
              whiteSpace: 'pre-line'
            },
            key: output.length
          }, content.substring(0, match.index)));
          output.push(this.aLink({
            children: match[1],
            href: match[2],
            key: output.length
          }));
          content = content.substring(match.index + match[0].length);
        } else {
          output.push( /*#__PURE__*/external_react_default.a.createElement("span", {
            style: {
              whiteSpace: 'pre-line'
            },
            key: output.length
          }, content));
        }
      } while (match);

      return output.map(function (o) {
        return _this3.messageBoxCode(o);
      });
    }
  }, {
    key: "messageBoxCode",
    value: function messageBoxCode(item) {
      if (item.type === 'span') {
        var output = [];
        var re = /(?:`+)([\s\S]*?)(?:`+)/;
        var content = item.props.children;
        var match;

        do {
          match = re.exec(content);

          if (match && match.length === 2) {
            output.push( /*#__PURE__*/external_react_default.a.createElement("span", {
              style: {
                whiteSpace: 'pre-line'
              },
              key: output.length
            }, this.boldify(content.substring(0, match.index))));
            output.push(this.inlineCodeBlock({
              value: match[1]
            }, output.length));
            content = content.substring(match.index + match[0].length);
          } else {
            output.push( /*#__PURE__*/external_react_default.a.createElement(external_react_markdown_default.a, {
              key: output.length,
              source: content.replace(/\n\n/g, '<br/><br/>'),
              skipHtml: false,
              escapeHtml: false
            }));
          }
        } while (match);

        return output;
      }

      return item;
    }
  }, {
    key: "aLink",
    value: function aLink(props) {
      var localProps = _objectSpread({}, props);

      if (localProps.href.startsWith('javascript:void(0)')) {
        if (localProps.children && localProps.children.length > 0) {
          if (localProps.children[0].props && localProps.children[0].props.value) {
            localProps.href = localProps.children[0].props.value;
            localProps.target = '_blank';
            localProps.rel = 'noopener noreferrer';
          }
        }
      } else if (localProps.href.startsWith('http') || localProps.href.startsWith('iota')) {
        localProps.target = '_blank';
        localProps.rel = 'noopener noreferrer';
      } else {
        if (localProps.href.startsWith('#')) {
          // Make sure the tag is consistently named
          localProps.href = Object(paths["a" /* sanitizeHashId */])(localProps.href);
        } else {
          // For local links remove .md extension
          var anchorParts = localProps.href.split('#');
          localProps.href = Object(paths["a" /* sanitizeHashId */])(anchorParts[0], true).replace(/.md$/i, '');

          if (anchorParts.length === 2) {
            localProps.href += "#".concat(Object(paths["a" /* sanitizeHashId */])(anchorParts[1], false, true));
          }
        }
      }

      return /*#__PURE__*/external_react_default.a.createElement("a", localProps);
    }
  }, {
    key: "codeBlock",
    value: function codeBlock(props, wrap) {
      var _this4 = this;

      var html = props.value;
      var renderedCode = false;

      try {
        if (external_prismjs_["languages"][props.language]) {
          var highlight = external_prismjs_["highlight"](html, external_prismjs_["languages"][props.language], props.language);
          html = "<pre className=\"language-".concat(props.language, "\"><code className=\"language-").concat(props.language, "\">").concat(highlight, "</code></pre>");
          renderedCode = true;
        } else {
          // eslint-disable-next-line no-console
          console.error("Unrecognized language for syntax highlighter ".concat(props.language));
        }
      } catch (err) {// Don't care what the error was just render as markup instead
      }

      if (!renderedCode) {
        html = "<pre className=\"language-markup\"><code className=\"language-".concat(props.language, "\">").concat(html, "</code></pre>");
      }

      html = this.replaceSearchQuery(html, true);

      if (wrap) {
        this.copyIdCounter++;
        var elemName = "copy-feedback-".concat(this.copyIdCounter);
        return /*#__PURE__*/external_react_default.a.createElement("div", {
          className: "markdown-code__wrapper"
        }, /*#__PURE__*/external_react_default.a.createElement("span", {
          className: "markdown-code-copy--wrapper"
        }, /*#__PURE__*/external_react_default.a.createElement("span", {
          className: "markdown-code-copy-feedback",
          id: elemName
        }, "Copied"), /*#__PURE__*/external_react_default.a.createElement("button", {
          className: "markdown-code--copy",
          onClick: function onClick() {
            return _this4.handleCopy(props.value, elemName);
          }
        })), /*#__PURE__*/external_react_default.a.createElement("div", {
          className: "markdown-code",
          dangerouslySetInnerHTML: {
            __html: html
          }
        }));
      } else {
        return /*#__PURE__*/external_react_default.a.createElement("div", {
          className: "markdown-code",
          dangerouslySetInnerHTML: {
            __html: html
          }
        });
      }
    }
  }, {
    key: "inlineCodeBlock",
    value: function inlineCodeBlock(props, key) {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "text text-inline--code markdown-code-inline",
        dangerouslySetInnerHTML: {
          __html: props.value
        },
        key: key
      });
    }
  }, {
    key: "inlineSpan",
    value: function inlineSpan(props, key) {
      return /*#__PURE__*/external_react_default.a.createElement("span", {
        key: key
      }, props.value || props.children);
    }
  }, {
    key: "inlineDiv",
    value: function inlineDiv(props, key) {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        key: key
      }, props.value || props.children);
    }
  }, {
    key: "textRenderer",
    value: function textRenderer(props) {
      return this.emojify(props.children);
    }
  }, {
    key: "emojify",
    value: function emojify(item) {
      if (!item) {
        return null;
      }

      return item.replace(/:\w+:/gi, function (name) {
        return external_emoji_dictionary_default.a.getUnicode(name) || name;
      });
    }
  }, {
    key: "boldify",
    value: function boldify(content) {
      var output = [];
      var re = /\*\*(.*?)\*\*/;
      var match;

      do {
        match = re.exec(content);

        if (match && match.length === 2) {
          output.push( /*#__PURE__*/external_react_default.a.createElement("span", {
            key: output.length
          }, content.substring(0, match.index)));
          output.push( /*#__PURE__*/external_react_default.a.createElement("strong", {
            key: output.length
          }, match[1]));
          content = content.substring(match.index + match[0].length);
        } else {
          output.push( /*#__PURE__*/external_react_default.a.createElement("span", {
            key: output.length
          }, content));
        }
      } while (match);

      return output;
    }
  }, {
    key: "tableRenderer",
    value: function tableRenderer(props) {
      var coreProps = this.getCoreProps(props);
      this.currentTableHeaders = [];
      this.currentTableRow = -1;

      if (props.columnAlignment.length > 3) {
        coreProps.className = 'table--compact';
      }

      return /*#__PURE__*/external_react_default.a.createElement('table', coreProps, props.children);
    }
  }, {
    key: "tableRowRenderer",
    value: function tableRowRenderer(props) {
      this.currentTableRow++;
      this.currentTableColumn = -1;
      return /*#__PURE__*/external_react_default.a.createElement('tr', this.getCoreProps(props), props.children);
    }
  }, {
    key: "tableCellRenderer",
    value: function tableCellRenderer(props) {
      var coreProps = this.getCoreProps(props);
      this.currentTableColumn++;
      var children = props.children;

      if (this.currentTableRow === 0) {
        this.currentTableHeaders[this.currentTableColumn] = props.children.length > 0 ? props.children[0].props.children : '';
      } else {
        children = [/*#__PURE__*/external_react_default.a.createElement('span', {
          className: 'table-body-row-item--inline-header',
          key: 0
        }, this.currentTableHeaders[this.currentTableColumn]), /*#__PURE__*/external_react_default.a.createElement('span', {
          key: 1
        }, children)];
      }

      return /*#__PURE__*/external_react_default.a.createElement(props.isHeader ? 'th' : 'td', coreProps, children);
    }
  }, {
    key: "paragraph",
    value: function paragraph(props) {
      return /*#__PURE__*/external_react_default.a.createElement("div", extends_default()({
        className: "text-paragraph"
      }, props));
    }
  }, {
    key: "heading",
    value: function heading(props) {
      var id = Object(paths["a" /* sanitizeHashId */])(this.stripSearchQuery(props.children.map(function (a) {
        return a.props.value;
      }).join('')), false, true);

      if (this.headingCounters[id] === undefined) {
        this.headingCounters[id] = -1;
      }

      this.headingCounters[id]++;

      if (this.headingCounters[id] > 0) {
        id = "".concat(id, "_").concat(this.headingCounters[id]);
      }

      return /*#__PURE__*/external_react_default.a.createElement(Heading["a" /* default */], extends_default()({
        className: "text--tertiary",
        level: props.level,
        id: id
      }, props));
    }
  }, {
    key: "imageRenderer",
    value: function imageRenderer(props) {
      var _this5 = this;

      return /*#__PURE__*/external_react_default.a.createElement("img", {
        src: props.src,
        alt: props.alt || '',
        onClick: function onClick(e) {
          _this5.setState({
            imageUrl: e.target.src
          });

          document.body.classList.toggle('no-scroll', true);
        }
      });
    }
  }, {
    key: "getCoreProps",
    value: function getCoreProps(props) {
      return props['data-sourcepos'] ? {
        'data-sourcepos': props['data-sourcepos']
      } : {};
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "markdown__wrapper"
      }, /*#__PURE__*/external_react_default.a.createElement(external_react_markdown_default.a, {
        source: this.state.content,
        renderers: {
          text: this.textRenderer,
          code: function code(props) {
            return _this6.codeBlock(props, true);
          },
          inlineCode: function inlineCode(props) {
            return _this6.inlineCodeBlock(props);
          },
          html: this.html,
          link: this.aLink,
          paragraph: this.paragraph,
          heading: this.heading,
          table: this.tableRenderer,
          tableRow: this.tableRowRenderer,
          tableCell: this.tableCellRenderer,
          image: this.imageRenderer,
          img: this.imageRenderer
        },
        skipHtml: false,
        escapeHtml: false
      }), this.state.imageUrl && /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "image-popup--overlay"
      }), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "image-popup",
        onClick: function onClick() {
          _this6.setState({
            imageUrl: undefined
          });

          document.body.classList.toggle('no-scroll', false);
        }
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        src: this.state.imageUrl
      }))));
    }
  }]);

  return Markdown;
}(external_react_["PureComponent"]);

/* harmony default export */ var organisms_Markdown = __webpack_exports__["a"] = (Markdown_Markdown);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var iota_css_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84);
/* harmony import */ var iota_css_theme__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(iota_css_theme__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_9__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var App = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_7__["Root"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Suspense, {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_7__["Routes"], {
        path: "*"
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("prismjs");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(46);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(37);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("D:\\Workarea\\iota.org\\documentation-platform\\node_modules\\react-static\\lib\\browser");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("react-style-proptype");

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var ContentMenuItemsPropTypes = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  folder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  link: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
}));
/* unused harmony default export */ var _unused_webpack_default_export = (ContentMenuItemsPropTypes);

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-javascript");

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(8);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(5);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(1);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(2);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(12);

// EXTERNAL MODULE: external "react-router-prop-types"
var external_react_router_prop_types_ = __webpack_require__(17);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(11);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/BottomSticky.js
var BottomSticky = __webpack_require__(35);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/ScrollInContainer.js
var ScrollInContainer = __webpack_require__(40);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/Heading/index.js
var Heading = __webpack_require__(21);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(7);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/Paragraph/index.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Paragraph_Paragraph = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(Paragraph, _React$PureComponent);

  var _super = _createSuper(Paragraph);

  function Paragraph() {
    classCallCheck_default()(this, Paragraph);

    return _super.apply(this, arguments);
  }

  createClass_default()(Paragraph, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("p", {
        className: external_classnames_default()('paragraph', this.props.className)
      }, this.props.children);
    }
  }]);

  return Paragraph;
}(external_react_default.a.PureComponent);

/* harmony default export */ var atoms_Paragraph = (Paragraph_Paragraph);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/EmailSignup/email.css
var EmailSignup_email = __webpack_require__(89);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(14);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(22);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/api.js
var api = __webpack_require__(16);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/EmailSignup/InputRegister.js









function InputRegister_createSuper(Derived) { var hasNativeReflectConstruct = InputRegister_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function InputRegister_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var InputRegister_InputRegister = /*#__PURE__*/function (_React$Component) {
  inherits_default()(InputRegister, _React$Component);

  var _super = InputRegister_createSuper(InputRegister);

  function InputRegister(props) {
    var _this;

    classCallCheck_default()(this, InputRegister);

    _this = _super.call(this, props);
    _this.state = {
      email: '',
      loading: false,
      success: false,
      apiMessage: null,
      error: null,
      diabled: false
    };
    _this.handleInputChange = _this.handleInputChange.bind(assertThisInitialized_default()(_this));
    _this.submit = _this.submit.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(InputRegister, [{
    key: "handleInputChange",
    value: function handleInputChange(_ref) {
      var target = _ref.target;
      this.setState({
        email: target.value,
        error: null
      });
    }
  }, {
    key: "submit",
    value: function () {
      var _submit = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(e) {
        var _this2 = this;

        var email;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                email = this.state.email;

                if (!email || !this.validateEmail(email)) {
                  this.setState({
                    error: 'Please provide a valid e-mail address.'
                  });
                } else {
                  this.setState({
                    loading: true
                  }, /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
                    var response;
                    return regenerator_default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return Object(api["b" /* submitEmail */])(_this2.props.apiEndpoint, email);

                          case 2:
                            response = _context.sent;

                            _this2.setState({
                              success: response.success,
                              loading: false,
                              apiMessage: response.message
                            });

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  })));
                }

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function submit(_x) {
        return _submit.apply(this, arguments);
      }

      return submit;
    }()
  }, {
    key: "validateEmail",
    value: function validateEmail(email) {
      var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(String(email).toLowerCase());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          email = _this$state.email,
          error = _this$state.error,
          success = _this$state.success,
          apiMessage = _this$state.apiMessage,
          loading = _this$state.loading;
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "input-register-container__wrapper"
      }, /*#__PURE__*/external_react_default.a.createElement("form", {
        onSubmit: this.submit,
        className: external_classnames_default()('input-register-container__form'),
        noValidate: true
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: external_classnames_default()('input-register-container', {
          'input-register-container--hidden': success
        })
      }, /*#__PURE__*/external_react_default.a.createElement("input", {
        type: "email",
        className: "input-register",
        placeholder: "Add your email address",
        value: email,
        disabled: loading,
        onChange: this.handleInputChange
      }), /*#__PURE__*/external_react_default.a.createElement("button", {
        className: "input-register__button",
        type: "submit",
        disabled: loading
      }, /*#__PURE__*/external_react_default.a.createElement("span", {
        className: "input-register__button-text"
      }, "Register"))), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "error-message"
      }, error), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: external_classnames_default()('success-message', {
          'hidden': !success
        })
      }, apiMessage)));
    }
  }]);

  return InputRegister;
}(external_react_default.a.Component);

/* harmony default export */ var EmailSignup_InputRegister = (InputRegister_InputRegister);
// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/EmailSignup/index.js






function EmailSignup_createSuper(Derived) { var hasNativeReflectConstruct = EmailSignup_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function EmailSignup_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var EmailSignup_EmailSignup = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(EmailSignup, _React$PureComponent);

  var _super = EmailSignup_createSuper(EmailSignup);

  function EmailSignup() {
    classCallCheck_default()(this, EmailSignup);

    return _super.apply(this, arguments);
  }

  createClass_default()(EmailSignup, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("section", {
        className: "email-signup"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "email-signup__wrapper"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "email-signup__content"
      }, /*#__PURE__*/external_react_default.a.createElement(Heading["a" /* default */], {
        level: 2,
        text: "Stay up-to-date"
      }), /*#__PURE__*/external_react_default.a.createElement(atoms_Paragraph, null, "Get the latest IOTA development news straight to your mailbox")), /*#__PURE__*/external_react_default.a.createElement(EmailSignup_InputRegister, {
        apiEndpoint: this.props.apiEndpoint
      })));
    }
  }]);

  return EmailSignup;
}(external_react_default.a.PureComponent);

/* harmony default export */ var molecules_EmailSignup = (EmailSignup_EmailSignup);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/Feedback/index.js + 3 modules
var Feedback = __webpack_require__(36);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/contentMenuItemsPropTypes.js
var contentMenuItemsPropTypes = __webpack_require__(53);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/FloatingMenu/index.js






function FloatingMenu_createSuper(Derived) { var hasNativeReflectConstruct = FloatingMenu_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function FloatingMenu_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var FloatingMenu_FloatingMenu = /*#__PURE__*/function (_React$Component) {
  inherits_default()(FloatingMenu, _React$Component);

  var _super = FloatingMenu_createSuper(FloatingMenu);

  function FloatingMenu(props) {
    var _this;

    classCallCheck_default()(this, FloatingMenu);

    _this = _super.call(this, props);
    _this.state = {
      activeTarget: null
    };
    return _this;
  }

  createClass_default()(FloatingMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleScroll = this.handleScroll.bind(this);
      this.targets = this.props.menuItems.map(function (item) {
        var target = item.name.toLowerCase().replace(/ /g, '_');
        return document.getElementById(target);
      });
      document.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleScroll);
      this.handleScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleScroll);
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var threshold = window.innerHeight * 0.35;
      var activeTarget = null;
      this.targets.forEach(function (target) {
        var rect = target.getBoundingClientRect();

        if (rect.top < threshold && rect.bottom > 0) {
          activeTarget = target.id;
        }
      });

      if (activeTarget !== this.state.activeTarget) {
        this.setState({
          activeTarget: activeTarget
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/external_react_default.a.createElement("ul", {
        className: "floating-menu"
      }, this.props.menuItems.map(function (item) {
        return /*#__PURE__*/external_react_default.a.createElement("li", {
          key: item.name,
          className: external_classnames_default()('floating-menu__item', {
            'floating-menu__item--selected': _this2.props.highlightedItem === item.folder || _this2.state.activeTarget === item.name.toLowerCase().replace(/ /g, '_')
          })
        }, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Link"], {
          to: item.link
        }, item.name));
      }));
    }
  }]);

  return FloatingMenu;
}(external_react_default.a.Component);

/* harmony default export */ var molecules_FloatingMenu = (FloatingMenu_FloatingMenu);
// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(13);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/Link/index.js
var Link = __webpack_require__(10);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/Image/index.js






function Image_createSuper(Derived) { var hasNativeReflectConstruct = Image_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Image_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Image_Image = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(Image, _React$PureComponent);

  var _super = Image_createSuper(Image);

  function Image() {
    classCallCheck_default()(this, Image);

    return _super.apply(this, arguments);
  }

  createClass_default()(Image, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("img", {
        id: this.props.id,
        src: this.props.src,
        alt: this.props.alt,
        className: external_classnames_default()('image', this.props.className)
      });
    }
  }]);

  return Image;
}(external_react_default.a.PureComponent);

/* harmony default export */ var atoms_Image = (Image_Image);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/Text/index.js
var Text = __webpack_require__(18);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/HomePageCard/Card.js






function Card_createSuper(Derived) { var hasNativeReflectConstruct = Card_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Card_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Card_Card = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(Card, _React$PureComponent);

  var _super = Card_createSuper(Card);

  function Card() {
    classCallCheck_default()(this, Card);

    return _super.apply(this, arguments);
  }

  createClass_default()(Card, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "card"
      }, /*#__PURE__*/external_react_default.a.createElement(Link["a" /* default */], {
        href: this.props.card.href,
        className: "card__link"
      }, /*#__PURE__*/external_react_default.a.createElement(atoms_Image, {
        src: this.props.card.image,
        alt: this.props.card.name,
        className: "card__image"
      }), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "card__wrapper"
      }, /*#__PURE__*/external_react_default.a.createElement(Text["a" /* default */], {
        className: "text--level5 card__label"
      }, this.props.card.name))));
    }
  }]);

  return Card;
}(external_react_default.a.PureComponent);

/* harmony default export */ var HomePageCard_Card = (Card_Card);
// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/HomePageCard/index.js







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function HomePageCard_createSuper(Derived) { var hasNativeReflectConstruct = HomePageCard_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function HomePageCard_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var HomePageCard_CardContainer = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(CardContainer, _React$PureComponent);

  var _super = HomePageCard_createSuper(CardContainer);

  function CardContainer() {
    classCallCheck_default()(this, CardContainer);

    return _super.apply(this, arguments);
  }

  createClass_default()(CardContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "cards-container"
      }, this.props.content.map(function (card) {
        return /*#__PURE__*/external_react_default.a.createElement(HomePageCard_Card, {
          key: card.name,
          card: _objectSpread({}, card)
        });
      }));
    }
  }]);

  return CardContainer;
}(external_react_default.a.PureComponent);

/* harmony default export */ var HomePageCard = (HomePageCard_CardContainer);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/ProjectTopicsContainer/ProjectTopicsInner.js
var ProjectTopicsInner = __webpack_require__(41);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/ProjectTopicsContainer/ProjectTopics.js






function ProjectTopics_createSuper(Derived) { var hasNativeReflectConstruct = ProjectTopics_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ProjectTopics_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var ProjectTopics_ProjectTopics = /*#__PURE__*/function (_React$Component) {
  inherits_default()(ProjectTopics, _React$Component);

  var _super = ProjectTopics_createSuper(ProjectTopics);

  function ProjectTopics() {
    classCallCheck_default()(this, ProjectTopics);

    return _super.apply(this, arguments);
  }

  createClass_default()(ProjectTopics, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "project",
        id: this.props.content.name.toLowerCase().replace(/ /g, '_')
      }, /*#__PURE__*/external_react_default.a.createElement(Heading["a" /* default */], {
        className: "project__heading",
        level: 2
      }, this.props.content.name), /*#__PURE__*/external_react_default.a.createElement(Text["a" /* default */], {
        className: "project__subheading"
      }, this.props.content.description), /*#__PURE__*/external_react_default.a.createElement(ProjectTopicsInner["a" /* default */], {
        content: this.props.content.links
      }));
    }
  }]);

  return ProjectTopics;
}(external_react_default.a.Component);

/* harmony default export */ var ProjectTopicsContainer_ProjectTopics = (ProjectTopics_ProjectTopics);
// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/ProjectTopicsContainer/index.js






function ProjectTopicsContainer_createSuper(Derived) { var hasNativeReflectConstruct = ProjectTopicsContainer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ProjectTopicsContainer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var ProjectTopicsContainer_ProjectTopicsContainer = /*#__PURE__*/function (_React$Component) {
  inherits_default()(ProjectTopicsContainer, _React$Component);

  var _super = ProjectTopicsContainer_createSuper(ProjectTopicsContainer);

  function ProjectTopicsContainer() {
    classCallCheck_default()(this, ProjectTopicsContainer);

    return _super.apply(this, arguments);
  }

  createClass_default()(ProjectTopicsContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "project__wrapper"
      }, this.props.content.map(function (c, idx) {
        return /*#__PURE__*/external_react_default.a.createElement(ProjectTopicsContainer_ProjectTopics, {
          key: idx,
          content: c
        });
      }));
    }
  }]);

  return ProjectTopicsContainer;
}(external_react_default.a.Component);

/* harmony default export */ var molecules_ProjectTopicsContainer = (ProjectTopicsContainer_ProjectTopicsContainer);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/SideMenu/index.js
var SideMenu = __webpack_require__(25);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/assets/Logo.svg
var Logo = __webpack_require__(39);
var Logo_default = /*#__PURE__*/__webpack_require__.n(Logo);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/viewDataPropTypes.js
var viewDataPropTypes = __webpack_require__(31);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/search.js
var search = __webpack_require__(15);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/InputSearch/index.js
var InputSearch = __webpack_require__(34);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/organisms/Header/index.js







function Header_createSuper(Derived) { var hasNativeReflectConstruct = Header_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Header_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var Header_Header = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Header, _React$Component);

  var _super = Header_createSuper(Header);

  function Header(props) {
    var _this;

    classCallCheck_default()(this, Header);

    _this = _super.call(this, props);
    _this.handleBurgerClick = _this.handleBurgerClick.bind(assertThisInitialized_default()(_this));
    _this.handleKeyUp = _this.handleKeyUp.bind(assertThisInitialized_default()(_this));
    _this.onSearch = _this.onSearch.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Header, [{
    key: "handleBurgerClick",
    value: function handleBurgerClick() {
      if (this.props.onBurgerClick) {
        this.props.onBurgerClick();
      }
    }
  }, {
    key: "onSearch",
    value: function onSearch(query) {
      Object(search["e" /* performSearch */])(this.props.history, query);
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(e) {
      if (e.key === 'Escape') {
        this.setState({
          inputExpanded: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          topTitles = _this$props.topTitles,
          headerTitle = _this$props.headerTitle;
      return /*#__PURE__*/external_react_default.a.createElement("header", {
        className: external_classnames_default()('header', {
          'compact': this.props.viewData.disableSearch
        })
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "header__wrapper"
      }, /*#__PURE__*/external_react_default.a.createElement("section", {
        className: "header__head"
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        className: "header__brand",
        src: Logo_default.a
      }), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "top-header"
      }, /*#__PURE__*/external_react_default.a.createElement("ul", {
        className: "top-header__items"
      }, topTitles.map(function (topTitle, index) {
        return /*#__PURE__*/external_react_default.a.createElement("li", {
          key: index,
          className: "top-header__item"
        }, /*#__PURE__*/external_react_default.a.createElement("a", {
          href: topTitle.href,
          target: "_blank",
          rel: "noopener noreferrer"
        }, topTitle.name));
      }))), /*#__PURE__*/external_react_default.a.createElement("button", {
        className: "header__icon",
        onClick: this.handleBurgerClick
      }))), /*#__PURE__*/external_react_default.a.createElement("section", {
        className: "header__body",
        style: {}
      }, /*#__PURE__*/external_react_default.a.createElement("span", {
        className: "header__title text text--level1 text--secondary"
      }, headerTitle), !this.props.viewData.disableSearch && /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "header__search"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/external_react_default.a.createElement(InputSearch["a" /* default */], {
        className: "input-search",
        placeholder: "Search for topics",
        onKeyUp: this.handleKeyUp,
        onSearch: this.onSearch
      }), this.props.popularTopics && /*#__PURE__*/external_react_default.a.createElement("nav", null, /*#__PURE__*/external_react_default.a.createElement("span", null, "Popular topics:"), this.props.popularTopics.map(function (pt, idx) {
        return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, {
          key: idx
        }, /*#__PURE__*/external_react_default.a.createElement("a", {
          onClick: function onClick() {
            return _this2.onSearch(pt.query);
          }
        }, pt.name), idx < _this2.props.popularTopics.length - 1 && /*#__PURE__*/external_react_default.a.createElement("span", null, ","));
      })))))));
    }
  }]);

  return Header;
}(external_react_default.a.Component);

/* harmony default export */ var organisms_Header = (Header_Header);
// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/homeDataPropTypes.js

var HomeDataPropTypes = external_prop_types_default.a.shape({
  headerTopLinks: external_prop_types_default.a.arrayOf(external_prop_types_default.a.shape({
    href: external_prop_types_default.a.string.isRequired,
    name: external_prop_types_default.a.string.isRequired
  })).isRequired,
  popularTopics: external_prop_types_default.a.arrayOf(external_prop_types_default.a.shape({
    query: external_prop_types_default.a.string.isRequired,
    name: external_prop_types_default.a.string.isRequired
  })),
  cards: external_prop_types_default.a.arrayOf(external_prop_types_default.a.shape({
    href: external_prop_types_default.a.string.isRequired,
    image: external_prop_types_default.a.string.isRequired,
    name: external_prop_types_default.a.string.isRequired
  })).isRequired
});
/* harmony default export */ var homeDataPropTypes = (HomeDataPropTypes);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/localStorage.js
var localStorage = __webpack_require__(26);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/projects.js
var projects = __webpack_require__(9);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/projectsPropTypes.js
var projectsPropTypes = __webpack_require__(20);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/containers/Container.js + 4 modules
var Container = __webpack_require__(27);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/containers/Home.js







function Home_createSuper(Derived) { var hasNativeReflectConstruct = Home_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Home_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }























var Home_Home = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Home, _React$Component);

  var _super = Home_createSuper(Home);

  function Home(props) {
    var _this;

    classCallCheck_default()(this, Home);

    _this = _super.call(this, props);
    _this.state = {
      isMenuOpen: false
    };
    _this.handleBurgerClick = _this.handleBurgerClick.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // We must store last path in here as when we create react-static
      // there is no other way of getting where we were for 404 logging
      Object(localStorage["b" /* localStorageSet */])('lastDocPath', '/home/');
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: "handleBurgerClick",
    value: function handleBurgerClick() {
      this.setState({
        isMenuOpen: !this.state.isMenuOpen
      });
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      document.querySelector('#image-background').style.height = "".concat(document.querySelector('.cards-container').clientHeight, "px");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/external_react_default.a.createElement(Container["a" /* default */], this.props, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Head"], null, /*#__PURE__*/external_react_default.a.createElement("title", null, "Home | ", this.props.viewData.siteName)), /*#__PURE__*/external_react_default.a.createElement(organisms_Header, {
        history: this.props.history,
        headerTitle: this.props.homeData.headerTitle,
        topTitles: this.props.homeData.headerTopLinks,
        popularTopics: this.props.homeData.popularTopics,
        onBurgerClick: this.handleBurgerClick,
        viewData: this.props.viewData
      }), /*#__PURE__*/external_react_default.a.createElement(SideMenu["a" /* default */], {
        isMenuOpen: this.state.isMenuOpen,
        projects: this.props.projects,
        onCloseClick: this.handleBurgerClick,
        highlightedItem: this.state.projectFullURL
      }), /*#__PURE__*/external_react_default.a.createElement("div", {
        id: "image-background",
        style: {
          background: '#f3f2f1',
          width: '100%',
          height: '0px',
          position: 'absolute'
        }
      }), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "layouts--2-column"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "left-column"
      }, /*#__PURE__*/external_react_default.a.createElement(ScrollInContainer["a" /* default */], {
        topOffset: 50,
        bottomOffset: 150
      }, /*#__PURE__*/external_react_default.a.createElement(molecules_FloatingMenu, {
        menuItems: Object(projects["c" /* createProjectLinks */])(this.props.projects)
      }))), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "right-column"
      }, /*#__PURE__*/external_react_default.a.createElement("article", null, /*#__PURE__*/external_react_default.a.createElement(HomePageCard, {
        content: this.props.homeData.cards
      })), /*#__PURE__*/external_react_default.a.createElement("article", null, /*#__PURE__*/external_react_default.a.createElement(molecules_ProjectTopicsContainer, {
        content: Object(projects["d" /* createProjectTopics */])(this.props.projects)
      }))), this.props.viewData.enableFeedback && /*#__PURE__*/external_react_default.a.createElement(BottomSticky["a" /* default */], {
        zIndex: 10,
        horizontalAlign: "right"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "tablet-down-hidden"
      }, /*#__PURE__*/external_react_default.a.createElement(Feedback["a" /* default */], {
        onSubmit: function onSubmit(data) {
          return Object(api["c" /* submitFeedback */])(_this2.props.apiEndpoint, '/home/', data);
        }
      })))), this.props.viewData.enableSignup && /*#__PURE__*/external_react_default.a.createElement(molecules_EmailSignup, {
        apiEndpoint: this.props.apiEndpoint
      }));
    }
  }]);

  return Home;
}(external_react_default.a.Component);

/* harmony default export */ var containers_Home = __webpack_exports__["default"] = (Object(external_react_router_dom_["withRouter"])(Object(external_react_static_["withSiteData"])(Home_Home)));

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(13);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(8);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(5);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(1);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(2);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(12);

// EXTERNAL MODULE: external "react-router-prop-types"
var external_react_router_prop_types_ = __webpack_require__(17);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(11);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/BottomSticky.js
var BottomSticky = __webpack_require__(35);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(7);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "react-style-proptype"
var external_react_style_proptype_ = __webpack_require__(52);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/ClickOutside.js
var ClickOutside = __webpack_require__(38);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/DropSelector/index.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var DropSelector_DropSelector = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(DropSelector, _React$PureComponent);

  var _super = _createSuper(DropSelector);

  function DropSelector(props) {
    var _this;

    classCallCheck_default()(this, DropSelector);

    _this = _super.call(this, props);
    _this.state = {
      isExpanded: false
    };
    _this.handleExpand = _this.handleExpand.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(DropSelector, [{
    key: "handleExpand",
    value: function handleExpand() {
      this.setState({
        isExpanded: !this.state.isExpanded
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/external_react_default.a.createElement(ClickOutside["a" /* default */], {
        onClickOutside: this.state.isExpanded ? this.handleExpand : undefined
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: external_classnames_default()('drop-selector', {
          'drop-selector__expanded': this.state.isExpanded
        }),
        style: this.props.style
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "drop-selector-title",
        onClick: this.handleExpand
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "drop-selector-title__text"
      }, this.props.currentName), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "drop-selector-title__icon"
      })), /*#__PURE__*/external_react_default.a.createElement("ul", {
        className: "drop-selector-list"
      }, this.props.items.map(function (item) {
        return /*#__PURE__*/external_react_default.a.createElement("li", {
          key: item.link,
          className: external_classnames_default()('drop-selector-list-item', {
            'drop-selector-list-item__selected': item.name === _this2.props.currentName
          })
        }, /*#__PURE__*/external_react_default.a.createElement("a", {
          href: item.link
        }, item.name));
      }))));
    }
  }]);

  return DropSelector;
}(external_react_default.a.PureComponent);

/* harmony default export */ var atoms_DropSelector = (DropSelector_DropSelector);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/ScrollInContainer.js
var ScrollInContainer = __webpack_require__(40);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/Feedback/index.js + 3 modules
var Feedback = __webpack_require__(36);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/projects.js
var projects = __webpack_require__(9);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/projectsPropTypes.js
var projectsPropTypes = __webpack_require__(20);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/Link/index.js
var Link = __webpack_require__(10);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/Navigator/index.js






function Navigator_createSuper(Derived) { var hasNativeReflectConstruct = Navigator_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Navigator_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Navigator_Navigator = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Navigator, _React$Component);

  var _super = Navigator_createSuper(Navigator);

  function Navigator(props) {
    var _this;

    classCallCheck_default()(this, Navigator);

    _this = _super.call(this, props);
    _this.state = {
      nextTitle: '',
      nextUrl: '',
      previousTitle: '',
      previousUrl: ''
    };
    return _this;
  }

  createClass_default()(Navigator, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var projectUrlParts = Object(projects["m" /* parseProjectUrl */])(this.props.pathname);
      var nextIndexItem = Object(projects["h" /* getNextPage */])(projectUrlParts, this.props.projects);
      var previousIndexItem = Object(projects["i" /* getPreviousPage */])(projectUrlParts, this.props.projects);
      this.setState({
        nextTitle: nextIndexItem ? nextIndexItem.name.replace(/\//g, ' / ') : '',
        nextUrl: nextIndexItem ? nextIndexItem.link : '',
        previousTitle: previousIndexItem ? previousIndexItem.name.replace(/\//g, ' / ') : '',
        previousUrl: previousIndexItem ? previousIndexItem.link : ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("section", {
        className: "navigator"
      }, /*#__PURE__*/external_react_default.a.createElement(Link["a" /* default */], {
        href: this.state.previousUrl,
        className: "navigator__back",
        disabled: !this.state.previousUrl
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "navigator__label"
      }, "Prev"), /*#__PURE__*/external_react_default.a.createElement("span", {
        className: "navigator__title"
      }, this.state.previousTitle)), /*#__PURE__*/external_react_default.a.createElement(Link["a" /* default */], {
        href: this.state.nextUrl,
        className: "navigator__next",
        disabled: !this.state.nextUrl
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "navigator__label"
      }, "Next"), /*#__PURE__*/external_react_default.a.createElement("span", {
        className: "navigator__title"
      }, this.state.nextTitle)));
    }
  }]);

  return Navigator;
}(external_react_default.a.Component);

/* harmony default export */ var molecules_Navigator = (Navigator_Navigator);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/SideMenu/index.js
var SideMenu = __webpack_require__(25);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/SubHeader/index.js






function SubHeader_createSuper(Derived) { var hasNativeReflectConstruct = SubHeader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function SubHeader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var SubHeader_SubHeader = /*#__PURE__*/function (_React$Component) {
  inherits_default()(SubHeader, _React$Component);

  var _super = SubHeader_createSuper(SubHeader);

  function SubHeader(props) {
    var _this;

    classCallCheck_default()(this, SubHeader);

    _this = _super.call(this, props);
    _this.state = {
      currProject: '',
      currTitle: '',
      nextTitle: '',
      nextUrl: '',
      previousTitle: '',
      previousUrl: ''
    };
    return _this;
  }

  createClass_default()(SubHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var projectUrlParts = Object(projects["m" /* parseProjectUrl */])(this.props.pathname);
      var nextIndexItem = Object(projects["h" /* getNextPage */])(projectUrlParts, this.props.projects);
      var previousIndexItem = Object(projects["i" /* getPreviousPage */])(projectUrlParts, this.props.projects);
      this.setState({
        currProject: Object(projects["j" /* getProjectTitle */])(projectUrlParts, this.props.projects),
        currTitle: Object(projects["g" /* getDocumentTitle */])(projectUrlParts, this.props.projects),
        nextTitle: nextIndexItem ? nextIndexItem.name : '',
        nextUrl: nextIndexItem ? nextIndexItem.link : '',
        previousTitle: previousIndexItem ? previousIndexItem.name : '',
        previousUrl: previousIndexItem ? previousIndexItem.link : ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("section", {
        className: "sub-header__wrapper"
      }, /*#__PURE__*/external_react_default.a.createElement("section", {
        className: "sub-header"
      }, /*#__PURE__*/external_react_default.a.createElement("span", {
        className: "sub-header__title"
      }, this.state.currProject), /*#__PURE__*/external_react_default.a.createElement("section", {
        className: "sub-header__body"
      }, /*#__PURE__*/external_react_default.a.createElement(Link["a" /* default */], {
        href: this.state.previousUrl,
        className: "arrow-button arrow-button--left",
        disabled: !this.state.previousUrl
      }), /*#__PURE__*/external_react_default.a.createElement("span", {
        className: "sub-header__bottom-title"
      }, this.state.currTitle), /*#__PURE__*/external_react_default.a.createElement(Link["a" /* default */], {
        href: this.state.nextUrl,
        className: "arrow-button arrow-button--right",
        disabled: !this.state.nextUrl
      }))));
    }
  }]);

  return SubHeader;
}(external_react_default.a.Component);

/* harmony default export */ var molecules_SubHeader = (SubHeader_SubHeader);
// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/scroll.js
var scrollIntoView = function scrollIntoView(elem, cb) {
  var animate = function animate(start, from, to, duration) {
    var time = Math.min(1, (Date.now() - start) / duration);
    var eased = 0.5 * (1 - Math.cos(Math.PI * time));
    document.scrollingElement.scrollTop = eased * (to - from) + from;

    if (time < 1) {
      setTimeout(function () {
        return animate(start, from, to, duration);
      }, 0);
    } else if (cb) {
      cb();
    }
  };

  animate(Date.now(), document.scrollingElement.scrollTop, elem.offsetTop, 1000);
};
var currentScrollTop = function currentScrollTop() {
  return document.scrollingElement.scrollTop;
};
// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/TableOfContents/index.js






function TableOfContents_createSuper(Derived) { var hasNativeReflectConstruct = TableOfContents_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function TableOfContents_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var TableOfContents_TableOfContents = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(TableOfContents, _React$PureComponent);

  var _super = TableOfContents_createSuper(TableOfContents);

  function TableOfContents(props) {
    var _this;

    classCallCheck_default()(this, TableOfContents);

    _this = _super.call(this, props);
    _this.state = {
      activeTarget: undefined,
      filteredItems: _this.props.items
    };
    return _this;
  }

  createClass_default()(TableOfContents, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleScroll = this.handleScroll.bind(this);
      this.handleClick = this.handleClick.bind(this);
      document.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleScroll);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (this.props.items.length !== prevProps.items.length || !this.targets) {
        var headingCounters = {};
        var filteredItems = this.props.items;

        if (filteredItems.length > 30) {
          filteredItems = filteredItems.filter(function (i) {
            return i.level <= 2;
          });
        }

        this.targets = filteredItems.map(function (item) {
          var id = item.link;

          if (headingCounters[id] === undefined) {
            headingCounters[id] = -1;
          }

          headingCounters[id]++;

          if (headingCounters[id] > 0) {
            id = "".concat(id, "_").concat(headingCounters[id]);
          }

          item.link = id;
          var target = document.getElementById(item.link.substring(1));

          if (!target) {
            // eslint-disable-next-line no-console
            console.error("Unable to find TOC link '".concat(item.link.substring(1), "' in content"));
          }

          return target;
        }).filter(function (t) {
          return t !== undefined && t !== null;
        });
        this.setState({
          filteredItems: filteredItems
        }, function () {
          _this2.handleScroll();

          var defaultTarget = _this2.props.history.location && _this2.props.history.location.hash;

          if (defaultTarget) {
            var elem = document.querySelector(defaultTarget);

            if (elem) {
              scrollIntoView(elem);
            }
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleScroll);
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      if (this.targets && this.targets.length > 0) {
        var activeTarget = this.targets[0].id;
        var scrollTop = currentScrollTop();

        for (var i = 0; i < this.targets.length; i++) {
          if (scrollTop >= this.targets[i].offsetTop - 200) {
            activeTarget = this.targets[i].id;
          }
        }

        if (activeTarget !== this.state.activeTarget) {
          this.setState({
            activeTarget: activeTarget
          });
        }
      }
    }
  }, {
    key: "isElementInViewport",
    value: function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this3 = this;

      e.preventDefault();
      var href = e.target.getAttribute('href');
      var target = document.querySelector(href);

      if (!target) {
        // eslint-disable-next-line no-console
        console.error("Unable to find TOC link '".concat(href, "' in content"));
      } else {
        scrollIntoView(target, function () {
          _this3.props.history.push("".concat(_this3.props.history.location.pathname).concat(_this3.props.history.location.search).concat(href === '#root' ? '' : href));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: external_classnames_default()('table-of-contents', {
          'table-of-contents__compact': this.props.compact
        })
      }, /*#__PURE__*/external_react_default.a.createElement("h3", {
        className: "table-of-contents__section-title"
      }, this.props.title), /*#__PURE__*/external_react_default.a.createElement("ul", {
        className: "table-of-contents__section"
      }, this.state.filteredItems.map(function (item, idx) {
        return /*#__PURE__*/external_react_default.a.createElement("li", {
          key: idx,
          className: external_classnames_default()('table-of-contents-list-item', {
            'table-of-contents-list-item__sub': item.level > 2
          }, {
            'table-of-contents-list-item__selected': _this4.state.activeTarget === item.link.substring(1)
          })
        }, /*#__PURE__*/external_react_default.a.createElement("a", {
          href: item.link,
          onClick: _this4.handleClick
        }, item.name));
      })));
    }
  }]);

  return TableOfContents;
}(external_react_default.a.PureComponent);

/* harmony default export */ var molecules_TableOfContents = (TableOfContents_TableOfContents);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/contentMenuItemsPropTypes.js
var contentMenuItemsPropTypes = __webpack_require__(53);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/TreeMenu/index.js






function TreeMenu_createSuper(Derived) { var hasNativeReflectConstruct = TreeMenu_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function TreeMenu_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var TreeMenu_TreeMenu = /*#__PURE__*/function (_React$Component) {
  inherits_default()(TreeMenu, _React$Component);

  var _super = TreeMenu_createSuper(TreeMenu);

  function TreeMenu(props) {
    var _this;

    classCallCheck_default()(this, TreeMenu);

    _this = _super.call(this, props);
    _this.state = {
      sections: []
    };
    return _this;
  }

  createClass_default()(TreeMenu, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.menuItems !== prevProps.menuItems) {
        this.setState({
          sections: Object(projects["a" /* buildItemTree */])(this.props.menuItems, this.props.highlightedItem)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var sections = this.state.sections;
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "tree-menu"
      }, sections.map(function (section, idx) {
        return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, {
          key: idx
        }, section.type === 'section-link' && /*#__PURE__*/external_react_default.a.createElement("h3", {
          className: external_classnames_default()('tree-menu__section-title')
        }, /*#__PURE__*/external_react_default.a.createElement(Link["a" /* default */], {
          to: section.link,
          target: section.link.startsWith('http') ? '_blank' : undefined
        }, section.name)), section.type === 'section-header' && /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("h3", {
          className: external_classnames_default()('tree-menu__section-title')
        }, section.name), /*#__PURE__*/external_react_default.a.createElement("ul", {
          className: external_classnames_default()('tree-menu__section')
        }, section.items.map(function (item, idx2) {
          return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, {
            key: idx2
          }, /*#__PURE__*/external_react_default.a.createElement("li", {
            className: external_classnames_default()('tree-menu__section-item', {
              'tree-menu__section-item--selected': item.selected
            })
          }, item.type === 'section-header-item' && /*#__PURE__*/external_react_default.a.createElement(Link["a" /* default */], {
            href: item.link,
            target: item.link.startsWith('http') ? '_blank' : undefined
          }, item.name), item.type === 'section-header-sub' && /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Link["a" /* default */], {
            href: item.items[0].link,
            target: item.items[0].link.startsWith('http') ? '_blank' : undefined
          }, item.name, /*#__PURE__*/external_react_default.a.createElement("span", {
            className: "tree-menu__section-item-superscript"
          }, item.items.length > 1 ? " [".concat(item.items.length, "]") : '')), item.selected && /*#__PURE__*/external_react_default.a.createElement("ul", {
            className: "tree-menu__section-item-sub"
          }, item.items.map(function (child, idx3) {
            return /*#__PURE__*/external_react_default.a.createElement("li", {
              key: idx3,
              className: external_classnames_default()('tree-menu__section-item-sub-child', {
                'tree-menu__section-item-sub-child--selected': child.selected
              })
            }, /*#__PURE__*/external_react_default.a.createElement(Link["a" /* default */], {
              href: child.link,
              target: child.link.startsWith('http') ? '_blank' : undefined
            }, child.name));
          })))));
        }))));
      }));
    }
  }]);

  return TreeMenu;
}(external_react_default.a.Component);

/* harmony default export */ var molecules_TreeMenu = (TreeMenu_TreeMenu);
// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/VersionPicker/index.js






function VersionPicker_createSuper(Derived) { var hasNativeReflectConstruct = VersionPicker_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function VersionPicker_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var VersionPicker_VersionPicker = /*#__PURE__*/function (_React$Component) {
  inherits_default()(VersionPicker, _React$Component);

  var _super = VersionPicker_createSuper(VersionPicker);

  function VersionPicker(props) {
    classCallCheck_default()(this, VersionPicker);

    return _super.call(this, props);
  }

  createClass_default()(VersionPicker, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          versions = _this$props.versions,
          currentVersion = _this$props.currentVersion;
      return versions.length > 1 ? /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "version-picker__wrapper"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "version-picker"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "left-column"
      }), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "middle-column"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "version-picker__current"
      }, "".concat(currentVersion === versions[versions.length - 1] ? 'You are viewing the latest version of this documentation' : 'There are newer versions of this documentation available'))), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "right-column"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "version-picker-select__wrapper"
      }, /*#__PURE__*/external_react_default.a.createElement("select", {
        className: "version-picker__select",
        value: currentVersion,
        onChange: function onChange(e) {
          return _this.props.onChange(e.target.value);
        }
      }, versions.map(function (version, indx) {
        return /*#__PURE__*/external_react_default.a.createElement("option", {
          key: indx,
          value: version
        }, "Version ", version);
      })))))) : null;
    }
  }]);

  return VersionPicker;
}(external_react_default.a.Component);

/* harmony default export */ var molecules_VersionPicker = (VersionPicker_VersionPicker);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/organisms/Markdown/index.js + 6 modules
var Markdown = __webpack_require__(42);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/organisms/StickyHeader/index.js
var StickyHeader = __webpack_require__(33);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/api.js
var api = __webpack_require__(16);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/localStorage.js
var localStorage = __webpack_require__(26);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/viewDataPropTypes.js
var viewDataPropTypes = __webpack_require__(31);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/search.js
var search = __webpack_require__(15);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/containers/Container.js + 4 modules
var Container = __webpack_require__(27);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/containers/Doc.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Doc_createSuper(Derived) { var hasNativeReflectConstruct = Doc_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Doc_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


























var Doc_Doc = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Doc, _React$Component);

  var _super = Doc_createSuper(Doc);

  function Doc(props) {
    var _this;

    classCallCheck_default()(this, Doc);

    _this = _super.call(this, props);
    _this.state = {
      projectFullURL: '',
      projectFolder: '',
      projectVersion: '',
      projectDocParts: [],
      projectDoc: '',
      projectDocTitle: '',
      projectVersions: [],
      projectVersionPages: [],
      pageTableOfContents: [],
      tags: [],
      description: '',
      isMenuOpen: false
    };
    _this.changeVersion = _this.changeVersion.bind(assertThisInitialized_default()(_this));
    _this.handleBurgerClick = _this.handleBurgerClick.bind(assertThisInitialized_default()(_this));
    _this.handleContentChanged = _this.handleContentChanged.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Doc, [{
    key: "changeVersion",
    value: function changeVersion(newVersion) {
      var projectParts = Object(projects["m" /* parseProjectUrl */])(this.state.projectFullURL);
      var newUrl = Object(projects["n" /* replaceVersion */])(projectParts, newVersion, this.props.projects);

      if (newUrl) {
        this.props.history.push(newUrl);
        this.setState({
          projectVersion: newVersion
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var projectParts = Object(projects["m" /* parseProjectUrl */])(this.props.location.pathname);
      var tagsAndDescription = Object(projects["f" /* getDocumentTagsAndDescription */])(projectParts, this.props.projects);
      this.setState(_objectSpread(_objectSpread({}, projectParts), {}, {
        projectVersions: Object(projects["l" /* getVersionsUrl */])(projectParts, this.props.projects),
        projectVersionPages: Object(projects["k" /* getProjectVersionPagesUrl */])(projectParts, projectParts.projectVersion, this.props.projects),
        pageTableOfContents: Object(projects["b" /* createPageTableOfContents */])(projectParts, this.props.projects),
        tags: tagsAndDescription.tags,
        description: tagsAndDescription.description
      })); // We must store last path in here as when we create react-static
      // there is no other way of getting where we were for 404 logging

      Object(localStorage["b" /* localStorageSet */])('lastDocPath', this.props.location.pathname);
    }
  }, {
    key: "handleBurgerClick",
    value: function handleBurgerClick() {
      this.setState({
        isMenuOpen: !this.state.isMenuOpen
      });
    }
  }, {
    key: "handleContentChanged",
    value: function handleContentChanged(itemCount) {
      // If the markdown has triggered a content change it must have
      // dynamic content, if the default toc only has the 'introduction'
      // entry see if there is any other h2 entries we can use from the dynamic content
      var projectParts = Object(projects["m" /* parseProjectUrl */])(this.props.location.pathname);
      var toc = Object(projects["b" /* createPageTableOfContents */])(projectParts, this.props.projects);

      if (itemCount > 0) {
        var markdownHeaders = document.querySelectorAll('.markdown__wrapper h2');

        if (markdownHeaders && markdownHeaders.length > 0) {
          for (var i = 0; i < markdownHeaders.length; i++) {
            toc.push({
              name: markdownHeaders[i].innerText,
              link: "#".concat(markdownHeaders[i].id)
            });
          }
        }
      }

      this.setState({
        pageTableOfContents: toc
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/external_react_default.a.createElement(Container["a" /* default */], this.props, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Head"], null, /*#__PURE__*/external_react_default.a.createElement("title", null, "".concat(this.props.title, " | ").concat(this.props.viewData.siteName)), this.state.tags && /*#__PURE__*/external_react_default.a.createElement("meta", {
        name: "keywords",
        content: this.state.tags.join(',')
      }), this.state.description && /*#__PURE__*/external_react_default.a.createElement("meta", {
        name: "description",
        content: this.state.description
      })), /*#__PURE__*/external_react_default.a.createElement(StickyHeader["a" /* default */], {
        history: this.props.history,
        onBurgerClick: this.handleBurgerClick,
        viewData: this.props.viewData
      }), /*#__PURE__*/external_react_default.a.createElement(SideMenu["a" /* default */], {
        isMenuOpen: this.state.isMenuOpen,
        projects: this.props.projects,
        onCloseClick: this.handleBurgerClick,
        highlightedItem: this.state.projectFullURL
      }), /*#__PURE__*/external_react_default.a.createElement(molecules_SubHeader, {
        projects: this.props.projects,
        pathname: this.props.location.pathname
      }), /*#__PURE__*/external_react_default.a.createElement(molecules_VersionPicker, {
        versions: this.state.projectVersions,
        currentVersion: this.state.projectVersion,
        onChange: function onChange(newVersion) {
          return _this2.changeVersion(newVersion);
        }
      }), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "layouts--3-column"
      }, /*#__PURE__*/external_react_default.a.createElement("section", {
        className: "left-column"
      }, /*#__PURE__*/external_react_default.a.createElement(atoms_DropSelector, {
        items: Object(projects["c" /* createProjectLinks */])(this.props.projects),
        currentName: Object(projects["j" /* getProjectTitle */])(this.state, this.props.projects),
        style: {
          marginBottom: '30px'
        }
      }), /*#__PURE__*/external_react_default.a.createElement(molecules_TreeMenu, {
        menuItems: this.state.projectVersionPages,
        highlightedItem: this.state.projectFullURL
      })), /*#__PURE__*/external_react_default.a.createElement("section", {
        className: "middle-column"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "middle-toc"
      }, /*#__PURE__*/external_react_default.a.createElement(molecules_TableOfContents, {
        items: this.state.pageTableOfContents,
        title: "Sections On This Page",
        compact: true,
        history: this.props.history
      })), /*#__PURE__*/external_react_default.a.createElement(Markdown["a" /* default */], {
        source: this.props.markdown,
        query: Object(search["d" /* extractSearchQuery */])(this.props.location),
        highlights: Object(search["c" /* extractHighlights */])(this.props.location),
        apiEndpoint: this.props.apiEndpoint,
        googleMapsKey: this.props.googleMapsKey,
        onContentChanged: this.handleContentChanged,
        history: this.props.history
      })), /*#__PURE__*/external_react_default.a.createElement("section", {
        className: "right-column"
      }, /*#__PURE__*/external_react_default.a.createElement(ScrollInContainer["a" /* default */], {
        bottomOffset: 200
      }, /*#__PURE__*/external_react_default.a.createElement(molecules_TableOfContents, {
        items: this.state.pageTableOfContents,
        title: "Sections On This Page",
        history: this.props.history
      }))), this.props.viewData.enableFeedback && /*#__PURE__*/external_react_default.a.createElement(BottomSticky["a" /* default */], {
        zIndex: 10,
        horizontalAlign: "right"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "tablet-down-hidden"
      }, /*#__PURE__*/external_react_default.a.createElement(Feedback["a" /* default */], {
        onSubmit: function onSubmit(data) {
          return Object(api["c" /* submitFeedback */])(_this2.props.apiEndpoint, _this2.props.location.pathname, data);
        }
      })))), /*#__PURE__*/external_react_default.a.createElement(molecules_Navigator, {
        projects: this.props.projects,
        pathname: this.props.location.pathname
      }));
    }
  }]);

  return Doc;
}(external_react_default.a.Component);

/* harmony default export */ var containers_Doc = __webpack_exports__["default"] = (Object(external_react_static_["withSiteData"])(Object(external_react_static_["withRouteData"])(Object(external_react_router_dom_["withRouter"])(Doc_Doc))));

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(8);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(5);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(1);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(2);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(12);

// EXTERNAL MODULE: external "react-router-prop-types"
var external_react_router_prop_types_ = __webpack_require__(17);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(11);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/BottomSticky.js
var BottomSticky = __webpack_require__(35);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/Feedback/index.js + 3 modules
var Feedback = __webpack_require__(36);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/InputSearch/index.js
var InputSearch = __webpack_require__(34);

// EXTERNAL MODULE: external "@babel/runtime/helpers/toConsumableArray"
var toConsumableArray_ = __webpack_require__(65);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(7);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/Pagination/index.js








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Pagination_Pagination = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Pagination, _React$Component);

  var _super = _createSuper(Pagination);

  function Pagination(props) {
    var _this;

    classCallCheck_default()(this, Pagination);

    _this = _super.call(this, props);
    var maxPerPage = _this.props.maxPerPage ? _this.props.maxPerPage : 10;
    _this.state = {
      maxPerPage: maxPerPage,
      numberOfPages: Math.ceil(_this.props.totalCount / maxPerPage),
      currentPage: props.page
    };
    _this.handleNext = _this.handleNext.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Pagination, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.totalCount != prevProps.totalCount) {
        this.setState({
          numberOfPages: Math.ceil(this.props.totalCount / this.state.maxPerPage),
          currentPage: 0
        });
      }
    }
  }, {
    key: "handleNext",
    value: function handleNext(newIndex) {
      if (this.props.onDataPaginated) {
        this.props.onDataPaginated(newIndex, newIndex * this.state.maxPerPage, Math.min((newIndex + 1) * this.state.maxPerPage - 1, this.props.totalCount - 1));
        this.setState({
          currentPage: newIndex
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return this.state.numberOfPages > 1 ? /*#__PURE__*/external_react_default.a.createElement("ul", {
        className: "pagination"
      }, toConsumableArray_default()(Array(this.state.numberOfPages)).map(function (p, index) {
        return /*#__PURE__*/external_react_default.a.createElement("li", {
          key: index,
          className: external_classnames_default()('pagination-item', {
            'pagination-item--selected': _this2.state.currentPage === index
          })
        }, /*#__PURE__*/external_react_default.a.createElement("a", {
          onClick: function onClick() {
            return _this2.handleNext(index);
          }
        }, index + 1));
      })) : null;
    }
  }]);

  return Pagination;
}(external_react_default.a.Component);

/* harmony default export */ var molecules_Pagination = (Pagination_Pagination);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/search.js
var utils_search = __webpack_require__(15);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/SearchResult/index.js






function SearchResult_createSuper(Derived) { var hasNativeReflectConstruct = SearchResult_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function SearchResult_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var SearchResult_SearchResult = /*#__PURE__*/function (_React$Component) {
  inherits_default()(SearchResult, _React$Component);

  var _super = SearchResult_createSuper(SearchResult);

  function SearchResult(props) {
    classCallCheck_default()(this, SearchResult);

    return _super.call(this, props);
  }

  createClass_default()(SearchResult, [{
    key: "render",
    value: function render() {
      var _this = this;

      var res = this.props.foundResult.length > 0 ? "Showing results ".concat(this.props.indexStart + 1, " to ").concat(this.props.indexEnd + 1, ".") : '';
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "search-result"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "search-result__total"
      }, "".concat(this.props.foundResult.length, " documents found for \"").concat(this.props.query, "\". ").concat(res)), this.props.foundResult.slice(this.props.indexStart, this.props.indexEnd + 1).map(function (elm) {
        return /*#__PURE__*/external_react_default.a.createElement("section", {
          key: elm.id,
          className: "search-result__item"
        }, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Link"], {
          to: "/".concat(elm.id, "?").concat(Object(utils_search["b" /* constructSearchQuery */])(_this.props.query), "&").concat(Object(utils_search["a" /* constructHighlights */])(elm.matches))
        }, /*#__PURE__*/external_react_default.a.createElement("div", {
          className: "search-result-item__heading"
        }, elm.title), /*#__PURE__*/external_react_default.a.createElement("div", {
          className: "search-result-item__link"
        }, "/".concat(elm.id))), /*#__PURE__*/external_react_default.a.createElement("p", {
          className: "text-paragraph"
        }, elm.snippet));
      }));
    }
  }]);

  return SearchResult;
}(external_react_default.a.Component);

/* harmony default export */ var molecules_SearchResult = (SearchResult_SearchResult);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/SideMenu/index.js
var SideMenu = __webpack_require__(25);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/organisms/StickyHeader/index.js
var StickyHeader = __webpack_require__(33);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/api.js
var api = __webpack_require__(16);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/localStorage.js
var localStorage = __webpack_require__(26);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/projectsPropTypes.js
var projectsPropTypes = __webpack_require__(20);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/viewDataPropTypes.js
var viewDataPropTypes = __webpack_require__(31);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/containers/Container.js + 4 modules
var Container = __webpack_require__(27);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/containers/Search.js







function Search_createSuper(Derived) { var hasNativeReflectConstruct = Search_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Search_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




















var Search_Search = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Search, _React$Component);

  var _super = Search_createSuper(Search);

  function Search(props) {
    var _this;

    classCallCheck_default()(this, Search);

    _this = _super.call(this, props);
    _this.state = {
      isMenuOpen: false,
      foundResult: [],
      page: 0,
      indexStart: 0,
      indexEnd: 9,
      query: Object(utils_search["d" /* extractSearchQuery */])(_this.props.location),
      searching: true
    };
    _this.onSearch = _this.onSearch.bind(assertThisInitialized_default()(_this));
    _this.handleKeyUp = _this.handleKeyUp.bind(assertThisInitialized_default()(_this));
    _this.onDataPaginated = _this.onDataPaginated.bind(assertThisInitialized_default()(_this));
    _this.search = _this.search.bind(assertThisInitialized_default()(_this));
    _this.handleBurgerClick = _this.handleBurgerClick.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Search, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.search(); // We must store last path in here as when we create react-static
      // there is no other way of getting where we were for 404 logging

      Object(localStorage["b" /* localStorageSet */])('lastDocPath', this.props.location.pathname);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (this.props.location.search !== prevProps.location.search) {
        this.setState({
          query: Object(utils_search["d" /* extractSearchQuery */])(this.props.location)
        }, function () {
          _this2.search();
        });
      }
    }
  }, {
    key: "handleBurgerClick",
    value: function handleBurgerClick() {
      this.setState({
        isMenuOpen: !this.state.isMenuOpen
      });
    }
  }, {
    key: "onDataPaginated",
    value: function onDataPaginated(pageIndex, start, end) {
      this.setState({
        page: pageIndex,
        indexStart: start,
        indexEnd: end
      });
      var target = document.querySelector('#search-top');
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, {
    key: "onSearch",
    value: function onSearch(query) {
      var _this3 = this;

      this.setState({
        query: query
      }, function () {
        _this3.search();
      });
      this.props.history.push("?".concat(Object(utils_search["b" /* constructSearchQuery */])(query)));
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(e) {
      if (e.key === 'Escape') {
        this.setState({
          inputExpanded: false
        });
      }
    }
  }, {
    key: "search",
    value: function search() {
      var _this4 = this;

      if (this.state.query) {
        this.setState({
          searching: true
        }, function () {
          Object(api["a" /* search */])(_this4.props.apiEndpoint, _this4.state.query).then(function (res) {
            if (res.items && res.items.length > 0) {
              _this4.setState({
                searching: false,
                foundResult: res.items,
                indexStart: 0,
                indexEnd: Math.min(9, res.items.length - 1)
              });
            } else {
              _this4.setState({
                searching: false,
                foundResult: [],
                indexStart: 0,
                indexEnd: 0
              });
            }
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return /*#__PURE__*/external_react_default.a.createElement(Container["a" /* default */], this.props, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Head"], null, /*#__PURE__*/external_react_default.a.createElement("title", null, "Search Results | ", this.props.viewData.siteName)), /*#__PURE__*/external_react_default.a.createElement("div", {
        id: "search-top"
      }), /*#__PURE__*/external_react_default.a.createElement(StickyHeader["a" /* default */], {
        history: this.props.history,
        onBurgerClick: this.handleBurgerClick,
        viewData: this.props.viewData
      }), /*#__PURE__*/external_react_default.a.createElement(SideMenu["a" /* default */], {
        isMenuOpen: this.state.isMenuOpen,
        projects: this.props.projects,
        onCloseClick: this.handleBurgerClick
      }), /*#__PURE__*/external_react_default.a.createElement("section", {
        className: "sub-header__wrapper"
      }, /*#__PURE__*/external_react_default.a.createElement("section", {
        className: "sub-header"
      }, /*#__PURE__*/external_react_default.a.createElement("span", {
        className: "sub-header__title sub-header-title__fixed"
      }, "Search results"))), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "layouts--1-column"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "middle-column"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "input-wrapper-basic"
      }, /*#__PURE__*/external_react_default.a.createElement(InputSearch["a" /* default */], {
        query: this.state.query,
        className: "input-search-basic",
        placeholder: "Search for topics",
        onKeyUp: this.handleKeyUp,
        onSearch: this.onSearch
      })), this.state.searching && /*#__PURE__*/external_react_default.a.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px'
        }
      }, "Searching, please wait..."), !this.state.searching && /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(molecules_SearchResult, {
        foundResult: this.state.foundResult,
        indexStart: this.state.indexStart,
        indexEnd: this.state.indexEnd,
        query: this.state.query
      }), /*#__PURE__*/external_react_default.a.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px'
        }
      }, /*#__PURE__*/external_react_default.a.createElement(molecules_Pagination, {
        page: this.state.page,
        totalCount: this.state.foundResult && this.state.foundResult.length,
        onDataPaginated: this.onDataPaginated
      })))), this.props.viewData.enableFeedback && /*#__PURE__*/external_react_default.a.createElement(BottomSticky["a" /* default */], {
        zIndex: 10,
        horizontalAlign: "right"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "tablet-down-hidden"
      }, /*#__PURE__*/external_react_default.a.createElement(Feedback["a" /* default */], {
        onSubmit: function onSubmit(data) {
          return Object(api["c" /* submitFeedback */])(_this5.props.apiEndpoint, _this5.props.location.pathname, data);
        }
      })))));
    }
  }]);

  return Search;
}(external_react_default.a.Component);

/* harmony default export */ var containers_Search = __webpack_exports__["default"] = (Object(external_react_static_["withSiteData"])(Object(external_react_static_["withRouteData"])(Object(external_react_router_dom_["withRouter"])(Search_Search))));

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(8);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(5);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(1);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(2);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(12);

// EXTERNAL MODULE: external "react-router-prop-types"
var external_react_router_prop_types_ = __webpack_require__(17);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(11);

// EXTERNAL MODULE: external "parallax-js"
var external_parallax_js_ = __webpack_require__(60);
var external_parallax_js_default = /*#__PURE__*/__webpack_require__.n(external_parallax_js_);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/ParallaxContainer/parallaxContainer.css
var parallaxContainer = __webpack_require__(86);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/components/atoms/ParallaxContainer/index.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var ParallaxContainer_ParallaxContainer = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(ParallaxContainer, _React$PureComponent);

  var _super = _createSuper(ParallaxContainer);

  function ParallaxContainer() {
    classCallCheck_default()(this, ParallaxContainer);

    return _super.apply(this, arguments);
  }

  createClass_default()(ParallaxContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.parallaxInstance = new external_parallax_js_default.a(this.parallaxEl, {});
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "parallax",
        ref: function ref(el) {
          return _this.parallaxEl = el;
        }
      }, this.props.children);
    }
  }]);

  return ParallaxContainer;
}(external_react_default.a.PureComponent);

/* harmony default export */ var atoms_ParallaxContainer = (ParallaxContainer_ParallaxContainer);
// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/molecules/SideMenu/index.js
var SideMenu = __webpack_require__(25);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/components/organisms/StickyHeader/index.js
var StickyHeader = __webpack_require__(33);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/api.js
var api = __webpack_require__(16);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/localStorage.js
var localStorage = __webpack_require__(26);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/projectsPropTypes.js
var projectsPropTypes = __webpack_require__(20);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/utils/viewDataPropTypes.js
var viewDataPropTypes = __webpack_require__(31);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/containers/Container.js + 4 modules
var Container = __webpack_require__(27);

// EXTERNAL MODULE: D:/Workarea/iota.org/documentation-platform/src/containers/notFound.css
var notFound = __webpack_require__(88);

// CONCATENATED MODULE: D:/Workarea/iota.org/documentation-platform/src/containers/NotFound.js







function NotFound_createSuper(Derived) { var hasNativeReflectConstruct = NotFound_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function NotFound_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
















var NotFound_NotFound = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(NotFound, _React$PureComponent);

  var _super = NotFound_createSuper(NotFound);

  function NotFound(props) {
    var _this;

    classCallCheck_default()(this, NotFound);

    _this = _super.call(this, props);
    _this.state = {
      isMenuOpen: false
    };
    _this.handleBurgerClick = _this.handleBurgerClick.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(NotFound, [{
    key: "handleBurgerClick",
    value: function handleBurgerClick() {
      this.setState({
        isMenuOpen: !this.state.isMenuOpen
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // We must get the last path in here as when we create react-static
      // there is no other way of getting where we were for 404 logging
      // this can be empty
      var lastLocation = Object(localStorage["a" /* localStorageGet */])('lastDocPath');
      Object(api["d" /* submitMissing */])(this.props.apiEndpoint, this.props.location.pathname, lastLocation);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement(Container["a" /* default */], this.props, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Head"], null, /*#__PURE__*/external_react_default.a.createElement("title", null, "Not Found | ", this.props.viewData.siteName)), /*#__PURE__*/external_react_default.a.createElement(StickyHeader["a" /* default */], {
        history: this.props.history,
        onBurgerClick: this.handleBurgerClick,
        viewData: this.props.viewData
      }), /*#__PURE__*/external_react_default.a.createElement(SideMenu["a" /* default */], {
        isMenuOpen: this.state.isMenuOpen,
        projects: this.props.projects,
        onCloseClick: this.handleBurgerClick
      }), /*#__PURE__*/external_react_default.a.createElement("section", {
        className: "not-found"
      }, /*#__PURE__*/external_react_default.a.createElement("article", null, /*#__PURE__*/external_react_default.a.createElement("h1", null, "404"), /*#__PURE__*/external_react_default.a.createElement("h2", null, "We\u2019re sorry, but the page you were looking for can\u2019t be found."), /*#__PURE__*/external_react_default.a.createElement("p", null, "This issue has been automatically logged."), /*#__PURE__*/external_react_default.a.createElement("nav", null, /*#__PURE__*/external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.props.history.goBack,
        className: "button button--secondary"
      }, "Previous"), /*#__PURE__*/external_react_default.a.createElement("a", {
        href: "/",
        className: "button button--secondary"
      }, "Home"))), /*#__PURE__*/external_react_default.a.createElement("aside", null, /*#__PURE__*/external_react_default.a.createElement(atoms_ParallaxContainer, null, /*#__PURE__*/external_react_default.a.createElement("div", {
        "data-depth": "-0.02"
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        src: "/assets/document.svg"
      })), /*#__PURE__*/external_react_default.a.createElement("div", {
        "data-depth": "-0.04"
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        src: "/assets/document.svg"
      })), /*#__PURE__*/external_react_default.a.createElement("div", {
        "data-depth": "-0.06"
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        src: "/assets/document.svg"
      })), /*#__PURE__*/external_react_default.a.createElement("div", {
        "data-depth": "0.08"
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        src: "/assets/document.svg"
      })), /*#__PURE__*/external_react_default.a.createElement("div", {
        "data-depth": "-0.02"
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        src: "/assets/document.svg"
      })), /*#__PURE__*/external_react_default.a.createElement("div", {
        "data-depth": "-0.06"
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        src: "/assets/document.svg"
      })), /*#__PURE__*/external_react_default.a.createElement("div", {
        "data-depth": "0.08"
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        src: "/assets/document.svg"
      }))))));
    }
  }]);

  return NotFound;
}(external_react_default.a.PureComponent);

/* harmony default export */ var containers_NotFound = __webpack_exports__["default"] = (Object(external_react_static_["withSiteData"])(Object(external_react_static_["withRouteData"])(Object(external_react_router_dom_["withRouter"])(NotFound_NotFound))));

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("parallax-js");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("react-click-outside");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("emoji-dictionary");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo-small.5001cd42.svg";

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67);
__webpack_require__(69);
module.exports = __webpack_require__(77);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(68)["default"];

var _require = __webpack_require__(50),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports
// Plugins
var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(50),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(70),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);










Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/NotFound",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/NotFound */).then(__webpack_require__.bind(null, 58))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/NotFound');
  },
  resolve: function resolve() {
    return /*require.resolve*/(58);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/NotFound";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/containers/NotFound';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/Home",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/Home */).then(__webpack_require__.bind(null, 55))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(55);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/Home";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/containers/Home';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/Doc",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/Doc */).then(__webpack_require__.bind(null, 56))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/Doc');
  },
  resolve: function resolve() {
    return /*require.resolve*/(56);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/Doc";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/containers/Doc';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/Search",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/Search */).then(__webpack_require__.bind(null, 57))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/Search');
  },
  resolve: function resolve() {
    return /*require.resolve*/(57);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/Search";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/containers/Search'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/containers/NotFound': t_0,
  '__react_static_root__/src/containers/Home': t_1,
  '__react_static_root__/src/containers/Doc': t_2,
  '__react_static_root__/src/containers/Search': t_3
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/containers/NotFound";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(47);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 37,
	"./": 37,
	"./index": 37,
	"./index.js": 37
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 73;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(46);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(51);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(30);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(78);

var _interopRequireDefault = __webpack_require__(79);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(32));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(80));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(81);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(82)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("D:\\Workarea\\iota.org\\documentation-platform\\node_modules\\react-static\\lib\\browser\\hooks\\useStaticInfo");

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(83)(module)))

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("iota-css-theme");

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// Module
exports.push([module.i, "#root {\n  min-height: 100vh;\n}\n\n", ""]);



/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// Module
exports.push([module.i, ".parallax, .parallax > div {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  z-index: 1;\n  pointer-events: none;\n}\n\n.parallax img {\n  position: absolute;\n  box-shadow: 10px 50px 50px rgba(0, 0, 0, 0.15);\n}\n\n.parallax div:nth-child(1) img {\n  top: 70%;\n  left: 16%;\n  transform: rotate(12deg) scale(0.8);\n}\n\n.parallax div:nth-child(2) img {\n  top: 20%;\n  left: 20%;\n  transform: rotate(-12deg);\n}\n\n.parallax div:nth-child(3) img {\n  top: 10%;\n  left: 0%;\n  transform: rotate(60deg);\n}\n\n.parallax div:nth-child(4) img {\n  top: 30%;\n  left: 10%;\n  transform: rotate(8deg) scale(2);\n}\n\n.parallax div:nth-child(5) img {\n  top: 50%;\n  left: 70%;\n  transform: rotate(-12deg) scale(0.8);\n}\n\n.parallax div:nth-child(6) img {\n  top: 60%;\n  left: 75%;\n  transform: rotate(12deg);\n}\n\n.parallax div:nth-child(7) img {\n  top: 20%;\n  left: 90%;\n  transform: rotate(-18deg) scale(2);\n}\n\n@media (max-width: 980px) {\n  .parallax div:nth-child(1) img {\n    left: -2%;\n  }\n\n  .parallax div:nth-child(2) img {\n    left: 2%;\n    top: 50%;\n  }\n\n  .parallax div:nth-child(3) img {\n    left: -10%;\n  }\n\n  .parallax div:nth-child(4) img {\n    left: -5%;\n  }\n\n  .parallax div:nth-child(5) img {\n    left: 90%;\n  }\n\n  .parallax div:nth-child(6) img {\n    left: 85%;\n  }\n\n  .parallax div:nth-child(7) img {\n    left: 95%;\n  }\n}\n\n@media (max-width: 620px) {\n  .parallax div:nth-child(1) img {\n    display: none;\n  }\n\n  .parallax div:nth-child(2) img {\n    display: none;\n  }\n\n  .parallax div:nth-child(3) img {\n    left: -10%;\n    top: 0%;\n  }\n\n  .parallax div:nth-child(4) img {\n    display: none;\n  }\n\n  .parallax div:nth-child(5) img {\n    top: 10%;\n  }\n\n  .parallax div:nth-child(6) img {\n    display: none;\n  }\n\n  .parallax div:nth-child(7) img {\n    left: 40%;\n    top: 90%;\n  }\n}\n", ""]);



/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// Module
exports.push([module.i, ".disclaimer {\n    display: flex;\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px;\n    border-top: 1px solid var(--jade);\n    background: #f3f2f1;\n    color: rgba(64, 66, 73, 0.9);\n    z-index: 1000;\n}", ""]);



/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// Module
exports.push([module.i, ".not-found {\n  position: relative;\n  width: 100%;\n  height: 800px;\n  overflow: hidden;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.not-found h1 {\n  font-size: 140px;\n  line-height: 140px;\n  color: #20A49D;\n  font-weight: 300;\n  text-align: center;\n  margin: 110px 0 20px;\n}\n\n.not-found nav {\n  display: flex;\n  justify-content: center;\n}\n\n.not-found .button {\n  text-transform: none;\n  border-color: #3F3F3F;\n  color: #3F3F3F;\n}\n\n.not-found .button:hover {\n  text-decoration: none;\n  border-color: #7D7D7D;\n}\n\n.not-found h2 {\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 32px;\n  max-width: 370px;\n  text-align: center;\n  margin-bottom: 25px;\n  color: #3F3F3F;\n}\n\n.not-found p {\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 32px;\n  max-width: 370px;\n  text-align: center;\n  margin-bottom: 175px;\n  color: #4f4f4f;\n}\n\n.not-found aside {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  z-index: 1;\n  pointer-events: none;\n}\n\n.not-found aside {\n  max-width: 1495px;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n\n@media (max-width: 980px) {\n  .not-found h1 {\n    font-size: 90px;\n    line-height: 90px;\n    margin: 0 0 20px;\n  }\n\n  .not-found h2 {\n    font-size: 16px;\n    line-height: 24px;\n  }\n}\n\n@media (max-width: 620px) {\n  .not-found {\n    height: auto;\n    padding: 100px 40px 160px;\n    box-sizing: border-box;\n  }\n\n  .not-found p {\n    margin-bottom: 16px;\n  }\n\n  .not-found .button {\n    width: 100%;\n    text-align: center;\n    box-sizing: border-box;\n  }\n}\n", ""]);



/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// Module
exports.push([module.i, ".email-signup {\n  display: flex;\n  justify-content: center;\n  min-height: 160px;\n  background-color: #f6f6f6;\n}\n\n.email-signup__wrapper {\n  max-width: 1495px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.email-signup__content {\n  padding: 0 20px;\n}\n\n@media (min-width: 768px){\n  .email-signup__content{\n     padding: 0 40px;\n  }\n}\n\n\n.email-signup__content h2 {\n  margin: 37px 0 0;\n}\n\n.email-signup__content h2 .text {\n  color: #20a49d;\n}\n\n.email-signup__content p {\n  color: #1c1e21;\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 1.76;\n  margin-top: 5px;\n}\n\n.input-register-container.input-register-container--hidden {\n  display: none;\n}\n\n.input-register-container__wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.input-register-container__form {\n  display: flex;\n  flex-direction: column;\n  margin: 0px 16px 25px;\n  justify-content: flex-start;\n}\n\n@media (min-width: 768px){\n  .input-register-container__form{\n    margin: 60px 40px 0px;\n  }\n}\n\n.error-message {\n  margin-top: 10px;\n  color: red;\n}\n\n.success-message {\n  color: green;\n}\n\n@media (max-width: 768px) {\n  .email-signup {\n    height: auto;\n  }\n\n  .email-signup__wrapper {\n    flex-direction: column;\n    justify-content: space-between;\n  }\n\n  .email-signup__content h2 {\n    font-size: 24px;\n    margin: 25px 0 0;\n  }\n}\n", ""]);



/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("prismjs/themes/prism.css");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-bash");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-c");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-cpp");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-css");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-csharp");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-docker");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-elixir");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-go");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-groovy");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-http");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-java");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-json");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-jsx");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-markdown");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-objectivec");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-sql");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-powershell");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-python");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-rust");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-yaml");

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// Module
exports.push([module.i, ".map-marker {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  transform: translate(-50%, -50%);\n  border-radius: 5px;\n  background: var(--jade);\n  color: var(--white);\n  text-align: center;\n}\n\n.map-marker img {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  border: none !important;\n}\n", ""]);



/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// Module
exports.push([module.i, ":not(pre) > code[class*='language-'], pre[class*='language-'] {\n  background: none;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n\ncode, pre {\n  font-family: 'Source Code Pro', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace !important;\n}\n\n.markdown-code__wrapper {\n  position: relative;\n}\n\n.markdown-code {\n  border: 1px solid #ececec;\n  border-radius: 0px 0px 5px 5px;\n  background-color: #f8f8f8;\n  padding: 20px 25px;\n  overflow: auto;\n  margin-bottom: 1.5rem;\n  font-size: 0.92rem;\n}\n\n.tab-item > .markdown-code {\n  border: none;\n  margin: 0;\n}\n\n.tab-item > p {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n  \n.markdown-code pre {\n  line-height: 2rem;\n}\n\n.markdown-code-inline {\n  display: inline;\n  border: 1px solid #ececec;\n  border-radius: 3px;\n  background-color: #f8f8f8;\n  padding: 0px 5px 0px 5px;\n  font-size: 0.93rem;\n  line-height: 1.5;\n}\n\n.markdown__wrapper .markdown-code-copy--wrapper {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  display: flex;\n  align-items: center;\n}\n\n.markdown__wrapper .markdown-code-copy-feedback {\n  transition: 300ms ease-out;\n  transition-property: opacity;\n  opacity: 0;\n  color: var(--tealish);\n  margin-right: 10px;\n}\n\n.markdown__wrapper .markdown-code-copy-feedback--active {\n  opacity: 1;\n}\n\n.markdown-code--copy {\n  border: 0px;\n  background: none;\n  cursor: pointer;\n  outline: 0;\n  opacity: 0.2;\n  transition: opacity 0.3s ease;\n}\n\n.markdown-code--copy:hover {\n  opacity: 0.5;\n}\n\n.markdown-code--copy::before {\n  font-family: 'IOTA icons';\n  font-size: 18px;\n  content: '📄';\n}\n\n.markdown__wrapper img {\n  max-width: 100%;\n  border: 10px solid #f3f2f1;\n  cursor: pointer;\n}\n\n.markdown__wrapper dl {\n  padding: 1px 0px 10px 20px;\n  border-left: 3px solid #20a49d;\n}\n\n.markdown__wrapper dl dt {\n  font-style: italic;\n  font-weight: 600;\n  line-height: 1.75;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  padding: 0;\n}\n\n.markdown__wrapper dl dd {\n  font-style: italic;\n  font-weight: 300;\n  margin-left: 0px;\n  line-height: 1.75;\n}\n\n.markdown__wrapper table + h1 {\n  margin-top: 48px;\n}\n\n.markdown__wrapper ol {\n  padding-left: 24px;\n  counter-reset: ol-counter;\n}\n\n.markdown__wrapper ol li {\n  list-style: none;\n  position: relative;\n  line-height: 1.75;\n  font-size: 1.05rem;\n}\n\n.markdown__wrapper ol li:before {\n  content: counter(ol-counter) '.';\n  counter-increment: ol-counter;\n  position: absolute;\n  top: 0px;\n  left: -24px;\n  width: 20px;\n  font-weight: 600;\n}\n\n.markdown__wrapper a {\n  word-break: break-all;\n  word-break: break-word;\n  color: #4f4f4f;\n  text-decoration: underline !important;\n  -webkit-text-decoration-color: #1e9a93 !important;\n          text-decoration-color: #1e9a93 !important;\n}\n\n.markdown__wrapper a:hover {\n  color: #1e9a93;\n  -webkit-text-decoration-color: #1e9a93 !important;\n          text-decoration-color: #1e9a93 !important;\n}\n\n.markdown__wrapper a:visited {\n  color: #603f98;\n  -webkit-text-decoration-color: #603f98 !important;\n          text-decoration-color: #603f98 !important;\n}\n\n.search-keyword {\n  background-color: #cdbfe4; /* lighten($blueberry, 40%); */\n}\n\n.markdown-map {\n  width: 100%;\n  height: 300px;\n  border: 1px solid var(--jade);\n}\n\n.markdown__wrapper .image-popup--overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #eeeeee;\n  opacity: 0.9;\n  z-index: 100;\n}\n\n.markdown__wrapper .image-popup {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 101;\n  padding: 40px;\n  cursor: pointer;\n}\n\n.markdown__wrapper .image-popup img {\n  border: none;\n  background: white;\n  padding: 20px;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.markdown-card {\n  margin: 20px -10px 20px -10px;\n  border: 10px solid transparent;\n  transition: 300ms ease;\n}\n\n.markdown-card:hover {\n  border: 10px solid #eeeeee;\n}\n\n.markdown-card--inner {\n  border: 1px solid #eeeeee;\n  cursor: pointer;\n}\n\n.markdown-card .link {\n  text-decoration: none !important;\n}\n\n.markdown__wrapper .markdown-card--image {\n  border: 0;\n}\n\n.markdown__wrapper .markdown-card--content {\n  font-weight: normal;\n  padding: 10px 20px 20px 20px;\n  color: var(--body-copy);\n}\n\n.markdown__wrapper .markdown-card--title {\n  font-weight: bold;\n  padding-bottom: 10px;\n  color: var(--jade);\n}\n\n.message-box {\n  overflow: hidden;\n}\n\n.message-box p {\n  display: inline;\n}\n", ""]);



/***/ })
/******/ ]);
});