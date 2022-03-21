/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/burger */ \"./modules/burger.js\");\n/* harmony import */ var _modules_upScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/upScroll */ \"./modules/upScroll.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_burger__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_upScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/burger.js":
/*!***************************!*\
  !*** ./modules/burger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst burger = () => {\r\n    const burgerBtn = document.querySelector('.mob-menu-btn')\r\n    const mobileMenu = document.querySelector('.mobile-menu')\r\n\r\n    burgerBtn.addEventListener('click', () => {\r\n        mobileMenu.style.right = '0px'\r\n    })\r\n\r\n    document.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n\r\n        if (!(e.target.closest('.mobile-menu') || e.target.closest('.mob-menu-btn')) || e.target.closest('.mobile-menu-close')) {\r\n            mobileMenu.style.right = '-400px'\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\n\n//# sourceURL=webpack:///./modules/burger.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const mobileMenu = document.querySelector('.mobile-menu')\r\n    const links = document.querySelectorAll('.menu-list__link')\r\n\r\n    links.forEach(link => {\r\n        link.addEventListener('click', (event) => {\r\n            event.preventDefault()\r\n            console.log(event);\r\n            const id = link.getAttribute('href').substring(1)\r\n            const section = document.getElementById(id)\r\n            \r\n            if (section) {\r\n                console.dir(section);\r\n                section.scrollIntoView({\r\n                    block: \"start\",\r\n                    behavior: \"smooth\",\r\n                });\r\n            }\r\n\r\n            if( window.innerWidth < 992 ){\r\n                mobileMenu.style.right = '-400px'\r\n            }\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const header = document.querySelector('.header')\r\n    const modalOverlay = document.querySelector('.modal-overlay')\r\n    const modalCallback = document.getElementById('callback')\r\n    const modalClose = document.querySelector('.modal-close')\r\n    const servicesElements = document.querySelector('.services-elements')\r\n\r\n    const noService = document.getElementById('noService')\r\n    const modalNoService = document.querySelector('.modal-callback')\r\n\r\n    header.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        if (e.target.classList.contains('callback-btn')) {\r\n            modalOverlay.style.display = 'block'\r\n            modalCallback.style.display = 'block'\r\n        }\r\n    })\r\n\r\n    modalOverlay.addEventListener('click', (e) => {\r\n        \r\n        modalOverlay.style.display = 'none'\r\n        modalCallback.style.display = 'none'\r\n    })\r\n\r\n    modalClose.addEventListener('click', () => {\r\n        modalOverlay.style.display = 'none'\r\n        modalCallback.style.display = 'none'\r\n    })\r\n\r\n    servicesElements.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        if (e.target.nextElementSibling.closest('.img-wrapper')) {\r\n            modalOverlay.style.display = 'block'\r\n            modalCallback.style.display = 'block'\r\n        }\r\n    })\r\n\r\n    noService.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        if (e.target.classList.contains('button-services')) {\r\n            modalOverlay.style.display = 'block'\r\n            modalNoService.style.display = 'block'\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const servicesCarousel = document.querySelector('.services-carousel')\r\n    \r\n    const arrowLeft = document.querySelector('.arrow-left')\r\n    const arrowRight = document.querySelector('.arrow-right')\r\n\r\n    arrowRight.addEventListener('click', () => {\r\n        let elem, temp\r\n        setTimeout(function() {\r\n            servicesCarousel.style.cssText = 'transition: none;';\r\n            elem = servicesCarousel.firstElementChild;\r\n            temp = elem.cloneNode(true);\r\n            servicesCarousel.appendChild(temp);\r\n            temp.style.display = 'none'\r\n            servicesCarousel.removeChild(elem)\r\n            servicesCarousel.children[2].style.display = ''\r\n        }, 250);\r\n    })\r\n\r\n    arrowLeft.addEventListener('click', () => {\r\n        let elem, temp\r\n        setTimeout(function() {\r\n            elem = servicesCarousel.lastElementChild\r\n            temp = elem.cloneNode(true)\r\n            servicesCarousel.children[2].style.display = 'none'\r\n            servicesCarousel.insertBefore(temp, servicesCarousel.firstElementChild)\r\n            servicesCarousel.children[0].style.display = ''\r\n            servicesCarousel.removeChild(elem)\r\n            servicesCarousel.style.cssText = 'transition: margin '+500+'ms ease;'\r\n        }, 250)\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/upScroll.js":
/*!*****************************!*\
  !*** ./modules/upScroll.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst upScroll = () => {\r\n    const upArrow = document.querySelector('.up')\r\n    const servicesBlock = document.querySelector('#services')\r\n    const headerWrapper = document.querySelector('.header-wrapper')\r\n\r\n    let timeOut;\r\n\r\n    const goUp = () => {\r\n        let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);\r\n        if (top > 0) {\r\n            window.scrollBy(0, -100);\r\n            timeOut = setTimeout(goUp, 20);\r\n        } else clearTimeout(timeOut);\r\n    }\r\n\r\n    document.addEventListener('DOMContentLoaded', () => {\r\n        upArrow.style.display = 'none'\r\n    })\r\n\r\n    document.addEventListener('scroll', () => {\r\n        const posTop = servicesBlock.getBoundingClientRect().top\r\n\r\n        posTop <= 0 ? upArrow.style.display = '' : upArrow.style.display = 'none'\r\n    })\r\n\r\n    document.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n\r\n        if (e.target.closest('.up')) {\r\n            goUp()\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upScroll);\n\n//# sourceURL=webpack:///./modules/upScroll.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;