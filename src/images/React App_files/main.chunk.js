(this["webpackJsonpproj-reddit-clone240620"] = this["webpackJsonpproj-reddit-clone240620"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\n    font-family: sans-serif;\n}\n\nbody {\n    overflow: scroll;\n    background-color: rgb(231, 244, 252); /* this hex code is the closest I could get to reddit grey */\n}\n\n.topOfPage {\n    display: flex;\n    flex-direction: column;\n    margin-top: 50px;\n    margin-right: 5%;\n    margin-left: 6%;\n}\n\n#trendingToday {\n    margin-bottom: 0px;\n}\n\n.newsCards {\n    display: flex;\n    flex-direction: row; \n    min-width: 70%;\n}\n\n#popPosts {\n margin-left: 1%;\n}\n\n.miniNavWrapper {\n    margin-left: 1%;\n    width: 80%;\n}\n\n\n\n.App {\n    margin-top: 20px;\n}\n\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/MiniNav.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/MiniNav.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".miniNavBody {\n    display: flex;\n    padding-left: 2%;\n    align-items: center;\n    justify-content: left;\n    height: 40px;\n    width: 80%;\n    border-radius: 5px;\n    border: solid 1px white;\n    background-color: white;\n    lex-flow: row nowrap;\n    height: 56px;\n}\n\n.btn {\n    margin-left: 2.5px;\n    margin-right: 2.5px;\n    justify-content: center;\n    font-weight: bold;\n    height: 32px;\n    width: 45px;\n    color: rgba(0, 0, 0, 0.493);\n    background-color: white;\n}\n\n.btn:hover {\n    background-color: rgba(216, 213, 213, 0.253);\n    color: black;\n}\n\n#hotBtn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: solid 1px white;\n    border-radius: 20px;\n    background-color: rgba(216, 213, 213, 0.253);\n    color: rgb(51, 116, 212);\n}\n\n#ukBtn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: solid 1px rgba(255, 255, 255, 0.979);\n    border-radius: 20px;\n}\n\n#newBtn{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: solid 1px white;\n    border-radius: 20px;\n}\n\n#topBtn{\n    display: flex;\n    align-items: center;\n    border: solid 1px white;\n    border-radius: 20px;\n}\n\n#settingsBtn{\n    display: flex;\n    align-items: center;\n    border: solid 1px white;\n    border-radius: 20px;\n}\n\n#layoutBtn{\n    display: flex;\n    justify-self: left;\n    align-items: flex-end;\n    border: solid 1px white;\n    border-radius: 20px;\n    padding-top: 2%;\n    margin-right: 5%;\n    font-size: 30px;\n    color: rgb(51, 116, 212);\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Navbar.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Navbar.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".navbarWrapper {\n    display: flex;\n    position: fixed;\n    overflow: hidden;\n    padding: 0px 20px;\n    margin-left: 0px;\n    margin-right: 0px;\n    margin-bottom: 20px;\n    border: 1px solid white;\n    top: 0;\n    width: 100%;\n    height: 50px;\n    background-color: white;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n#logo {\n   float: left;\n}\n\n#searchbar {\n    background-color: rgb(248, 242, 242);\n    height: 35px;\n    width: 450px;\n    border-radius: 5%;\n    border: 1px solid  rgb(248, 242, 242);\n}\n\n#login {\n    height: 35px;\n    width: 90px;\n    color: blue;\n    background-color: white;\n    border: 1px blue solid;\n    border-radius: 5%;\n    margin: 5px;\n}\n\n#signup {\n    height: 35px;\n    width: 90px;\n    color: white;\n    background-color: blue;\n    border: 1px blue solid;\n    border-radius: 5%;\n    margin: 5px;\n}\n\n#rightDropDown {\n    \n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NewsCard.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/NewsCard.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cardBody {\n    display: flex;\n    flex-direction: column;\n    width: 220px;\n    height: 185px;\n    border: 1px solid white;\n    background-color: white;\n    border-radius: 5%;\n    margin: 5px;\n}\n\n#blackDrop {\n    border-radius: 5%;\n    width: 220px;\n    height: 185px;\n    background-color: rgba(0, 0, 0, 0.274); \n}\n\n.innerText {\n    margin-top: 45%;\n    margin-bottom: 1%;\n    align-self: flex-end;\n}\n\n#cardTitle {\n    font-size: 20px;\n    margin: 2% 2%;\n    text-align: left;\n    overflow-wrap: break-word;\n    color: white;\n}\n\n#cardText {\n    font-size: 12px;\n    margin: 1% 1%;\n    text-align: left;\n    overflow: hidden;\n    color: white;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App {\r\n  font-family: sans-serif;\r\n  text-align: center;\r\n}\r\nbody {\r\n  margin: 0;\r\n  background: #dae0e6;\r\n}\r\n#heading {\r\n  margin: 0;\r\n  text-align: left;\r\n  padding: 5px;\r\n  background: white;\r\n  font-size: 30px;\r\n}\r\n#heading input {\r\n  position: absolute;\r\n  left: 35%;\r\n  width: 30%;\r\n  height: 20px;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  border: 1px solid lightgrey;\r\n}\r\n#logo {\r\n  height: 30px;\r\n  margin-right: 6px;\r\n  border-radius: 50%;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.post-head {\r\n  text-align: left;\r\n  margin: 2% 6%;\r\n  width: 53%;\r\n  border-bottom: 2px solid grey;\r\n}\r\n.Post-List {\r\n  display: flex;\r\n  min-width: 70%;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n.post {\r\n  width: 85%;\r\n  min-height: 80px;\r\n  display: flex;\r\n  margin: 2%;\r\n  border-radius: 4px;\r\n  background-color: white;\r\n  border: 1px solid lightgrey;\r\n}\r\n.post:hover {\r\n  border: 1px solid grey;\r\n}\r\n.post-user {\r\n  margin-top: 3px;\r\n  margin-left: 1%;\r\n  font-size: 10px;\r\n  color: grey;\r\n  text-align: left;\r\n}\r\n.post-text {\r\n  margin: 1% 1%;\r\n  text-align: left;\r\n  overflow-wrap: break-word;\r\n}\r\n.votes {\r\n  background-color: rgb(230, 230, 230);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  text-align: center;\r\n  padding: 5px;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n.votes p {\r\n  margin: 0;\r\n  font-weight: 600;\r\n}\r\n\r\n.votes img {\r\n  height: 10px;\r\n  padding: 5px;\r\n  text-align: center;\r\n}\r\n.upvote:hover {\r\n  background-color: #fc4103;\r\n  border-radius: 3px;\r\n}\r\n.downvote:hover {\r\n  background-color: #0079d3;\r\n  border-radius: 3px;\r\n}\r\n\r\n.comment {\r\n  width: 80%;\r\n}\r\n.post-right {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 90%;\r\n}\r\n.comment-head {\r\n  text-align: left;\r\n  align-self: flex-end;\r\n  margin-right: 10px;\r\n  font-size: 13px;\r\n  color: grey;\r\n}\r\n.sub-info {\r\n  height: 250px;\r\n  width: 30%;\r\n  margin-top: 8px;\r\n  border-radius: 5px;\r\n  background-color: white;\r\n  box-shadow: 1px 2px 7px rgba(50, 50, 50, 0.75);\r\n}\r\n.sub-info h4 {\r\n  margin: 0;\r\n  padding: 5%;\r\n  border-radius: 5px 5px 0 0;\r\n\r\n  color: white;\r\n  background-image: url(\"https://styles.redditmedia.com/t5_2yuqy/styles/bannerBackgroundImage_7yjisz96x7921.jpg?format=pjpg&s=e2cd891acccd266b5d86b452cdf9e49894ad44c9\");\r\n}\r\n\r\n.sub-info p {\r\n  padding: 5px;\r\n  overflow-wrap: break-word;\r\n}\r\n.main-wrapper {\r\n  display: flex;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  justify-content: space-around;\r\n}\r\n\r\n.lowerBar {\r\n  display: flex;\r\n  margin: 3px 1%;\r\n}\r\nol {\r\n  list-style-position:inside;\r\n  margin:0;\r\n  padding:0;\r\n}\r\n\r\nli {\r\n  border:1px solid royalblue;\r\n  margin:5px 0;\r\n  border-left:0px;\r\n  border-right:0px;\r\n  border-top:solid grey 1px;\r\n  border-bottom: 0px;\r\n}\r\n#top-li{\r\nborder-top:0px;\r\n}\r\n#view-all{\r\n  border: solid 1px white;\r\n  border-radius: 5px;\r\n  color: white;\r\n  background-color: rgb(51, 116, 212);\r\n\r\n}\r\n.bottom-buttons{\r\n  border: solid 1px white;\r\n  border-radius: 5px;\r\n}\r\n.list-image {\r\n  border-radius: 50%;\r\n  width:10px;\r\n  height: 10px;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_NewsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NewsCard */ "./src/components/NewsCard.js");
/* harmony import */ var _components_MiniNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MiniNav */ "./src/components/MiniNav.js");
/* harmony import */ var _components_SubRedditPage_SubReddit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SubRedditPage/SubReddit */ "./src/components/SubRedditPage/SubReddit.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_blackBoard_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/blackBoard.jpg */ "./src/images/blackBoard.jpg");
/* harmony import */ var _images_blackBoard_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_blackBoard_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_catsPicture_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/catsPicture.jpg */ "./src/images/catsPicture.jpg");
/* harmony import */ var _images_catsPicture_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_catsPicture_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_hobbsShaw_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/hobbsShaw.jpg */ "./src/images/hobbsShaw.jpg");
/* harmony import */ var _images_hobbsShaw_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_hobbsShaw_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_protest_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/protest.jpg */ "./src/images/protest.jpg");
/* harmony import */ var _images_protest_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_protest_jpg__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/ethan/Desktop/project-reddit-clone240620/proj-reddit-clone240620/src/App.js";












const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    className: "mainPage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topOfPage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "trendingToday",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Trending today:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "newsCards",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NewsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bgImg: _images_hobbsShaw_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    titleText: "Hobbs and Shaw",
    cardText: "Why does the Fast and Furious fanchise need this?...",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NewsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bgImg: _images_blackBoard_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    titleText: "Black Boards",
    cardText: "Are Black boards making a comeback?...",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NewsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bgImg: _images_catsPicture_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    titleText: "Cats: The Movie",
    cardText: "Someone in Hoolywood thought they had a great idea...",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NewsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bgImg: _images_protest_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    titleText: "Protests",
    cardText: "People are protesting for multiple reasons across the world...",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "popPosts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Popular posts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "miniNavWrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MiniNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SubRedditPage_SubReddit__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/MiniNav.css":
/*!************************************!*\
  !*** ./src/components/MiniNav.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./MiniNav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/MiniNav.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./MiniNav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/MiniNav.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./MiniNav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/MiniNav.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/MiniNav.js":
/*!***********************************!*\
  !*** ./src/components/MiniNav.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MiniNav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MiniNav.css */ "./src/components/MiniNav.css");
/* harmony import */ var _MiniNav_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MiniNav_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ethan/Desktop/project-reddit-clone240620/proj-reddit-clone240620/src/components/MiniNav.js";



const MiniNav = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "miniNavBody",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn",
    id: "hotBtn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "Hot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn",
    id: "ukBtn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "UK"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn",
    id: "newBtn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn",
    id: "topBtn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Top "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn",
    id: "settingsBtn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn",
    id: "layoutBtn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "="));
};

/* harmony default export */ __webpack_exports__["default"] = (MiniNav);

/***/ }),

/***/ "./src/components/Navbar.css":
/*!***********************************!*\
  !*** ./src/components/Navbar.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Navbar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Navbar.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Navbar.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.css */ "./src/components/Navbar.css");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_Reddit_Logo_Horizontal_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Reddit-Logo-Horizontal.png */ "./src/images/Reddit-Logo-Horizontal.png");
/* harmony import */ var _images_Reddit_Logo_Horizontal_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_Reddit_Logo_Horizontal_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ethan/Desktop/project-reddit-clone240620/proj-reddit-clone240620/src/components/Navbar.js";




const Navbar = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbarWrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_Reddit_Logo_Horizontal_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    id: "logo",
    alt: "reddit logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "searchbar",
    type: "search",
    placeholder: "Search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "LOG IN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "SIGN UP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "rightDropDown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "image"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/NewsCard.css":
/*!*************************************!*\
  !*** ./src/components/NewsCard.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./NewsCard.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NewsCard.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./NewsCard.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NewsCard.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./NewsCard.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NewsCard.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/NewsCard.js":
/*!************************************!*\
  !*** ./src/components/NewsCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewsCard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsCard.css */ "./src/components/NewsCard.css");
/* harmony import */ var _NewsCard_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NewsCard_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ethan/Desktop/project-reddit-clone240620/proj-reddit-clone240620/src/components/NewsCard.js";



const newsCard = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cardWrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cardBody",
    style: {
      backgroundImage: `url(${props.bgImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "blackDrop",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "innerText",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "cardTitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 25
    }
  }, props.titleText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "cardText",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }, props.cardText)))));
};

/* harmony default export */ __webpack_exports__["default"] = (newsCard);

/***/ }),

/***/ "./src/components/SubRedditPage/Post.js":
/*!**********************************************!*\
  !*** ./src/components/SubRedditPage/Post.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ethan/Desktop/project-reddit-clone240620/proj-reddit-clone240620/src/components/SubRedditPage/Post.js";


class Post extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      count: 6
    };

    this.increment = () => {
      this.setState(prevstate => ({
        count: prevstate.count + 1
      }));
    };

    this.decrement = () => {
      this.setState(prevstate => ({
        count: prevstate.count - 1
      }));
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "votes",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      onClick: this.increment,
      className: "upvote",
      alt: "upvote",
      src: "https://image.flaticon.com/icons/svg/2316/2316622.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, this.state.count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      onClick: this.decrement,
      className: "downvote",
      alt: "downvote",
      src: "https://image.flaticon.com/icons/svg/2316/2316643.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "post-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "post-user",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }, "Posted by u/", this.props.name, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 68
      }
    }, " +Join")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "post-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }, this.props.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      clasName: "post-image",
      src: this.props.image,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lowerBar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "comment-head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, "4 Comments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "comment-head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, "Share"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "comment-head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, "Save"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./src/components/SubRedditPage/SubCard.js":
/*!*************************************************!*\
  !*** ./src/components/SubRedditPage/SubCard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ethan/Desktop/project-reddit-clone240620/proj-reddit-clone240620/src/components/SubRedditPage/SubCard.js";


class SubCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sub-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 12
      }
    }, "Today's Top Growing Communities")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      id: "top-li",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 12
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "list-image",
      src: "https://styles.redditmedia.com/t5_2yuqy/styles/communityIcon_8q8ca4zwx7921.jpg?width=256&format=pjpg&s=3acd595235e914b95402bf0471ce990e98854736 ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 29
      }
    }), " r/TrueoffMyChest")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 12
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "list-image",
      src: "https://b.thumbs.redditmedia.com/6EKfzU5PYmvE4USNgMZaBR6iCS5NnJ3YFTkZyPbXnZM.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 18
      }
    }), " r/Thelastofus")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 12
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "list-image",
      src: "https://styles.redditmedia.com/t5_2t7gp/styles/communityIcon_xmne5k0j68231.png?width=256&s=3939074f1b3b20f9877759b588a54ac7ea08d1e5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 18
      }
    }), " r/Funniest TrueoffMyChest")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 12
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "list-image",
      src: "https://styles.redditmedia.com/t5_2szyo/styles/communityIcon_x3ag97t82z251.png?width=256&s=33531dceba6466953aadef3073f36cfc2e267175",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 18
      }
    }), " r/Whoisthis"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 6
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      id: "view-all",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 10
      }
    }, " VIEW ALL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "botton-buttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "bottom-Buttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 12
      }
    }, "Sports")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "bottom-Buttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 12
      }
    }, "News")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "bottom-Buttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 12
      }
    }, "Gaming")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "bottom-Buttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 12
      }
    }, "Aww"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SubCard);

/***/ }),

/***/ "./src/components/SubRedditPage/SubReddit.js":
/*!***************************************************!*\
  !*** ./src/components/SubRedditPage/SubReddit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post */ "./src/components/SubRedditPage/Post.js");
/* harmony import */ var _SubCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubCard */ "./src/components/SubRedditPage/SubCard.js");
var _jsxFileName = "/Users/ethan/Desktop/project-reddit-clone240620/proj-reddit-clone240620/src/components/SubRedditPage/SubReddit.js";




class SubReddit extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "SubReddit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Post-List",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Post__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "jon_snow",
      text: "Nice Quote",
      image: "https://i.redd.it/08ndaio276751.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Post__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "lolipop",
      text: "Check this out!",
      image: "https://i.redd.it/479p6n7mp3651.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Post__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "van_halen",
      text: "Scary story",
      image: " https://i.redd.it/kkjuy0i28v651.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Post__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "prince",
      text: "Come on Jim",
      image: "https://www.reddit.com/r/DunderMifflin/comments/hcdor8/cmon_jim/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SubReddit);

/***/ }),

/***/ "./src/images/Reddit-Logo-Horizontal.png":
/*!***********************************************!*\
  !*** ./src/images/Reddit-Logo-Horizontal.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Reddit-Logo-Horizontal.3cf451a2.png";

/***/ }),

/***/ "./src/images/blackBoard.jpg":
/*!***********************************!*\
  !*** ./src/images/blackBoard.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/blackBoard.446f492e.jpg";

/***/ }),

/***/ "./src/images/catsPicture.jpg":
/*!************************************!*\
  !*** ./src/images/catsPicture.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/catsPicture.a092e560.jpg";

/***/ }),

/***/ "./src/images/hobbsShaw.jpg":
/*!**********************************!*\
  !*** ./src/images/hobbsShaw.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/hobbsShaw.f9a67da4.jpg";

/***/ }),

/***/ "./src/images/protest.jpg":
/*!********************************!*\
  !*** ./src/images/protest.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/protest.085cba25.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/ethan/Desktop/project-reddit-clone240620/proj-reddit-clone240620/src/index.js";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}), document.getElementById('root'));

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ethan/Desktop/project-reddit-clone240620/proj-reddit-clone240620/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/ethan/Desktop/project-reddit-clone240620/proj-reddit-clone240620/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/ethan/Desktop/project-reddit-clone240620/proj-reddit-clone240620/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map