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

/***/ "./styles.less":
/*!*********************!*\
  !*** ./styles.less ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cosmetics_store/./styles.less?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./../styles.less */ \"./styles.less\");\nconst router_1 = __webpack_require__(/*! ./router */ \"./src/router.ts\");\n// import {Router} from './router';\nclass App {\n    constructor() {\n        this.router = new router_1.Router();\n        window.addEventListener('DOMContentLoaded', this.changedRouter.bind(this));\n        window.addEventListener('popstate', this.changedRouter.bind(this));\n    }\n    changedRouter() {\n        this.router.openRoute();\n    }\n}\n(new App());\n\n\n//# sourceURL=webpack://cosmetics_store/./src/app.ts?");

/***/ }),

/***/ "./src/components/main.ts":
/*!********************************!*\
  !*** ./src/components/main.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Main = void 0;\nclass Main {\n}\nexports.Main = Main;\n\n\n//# sourceURL=webpack://cosmetics_store/./src/components/main.ts?");

/***/ }),

/***/ "./src/components/products.ts":
/*!************************************!*\
  !*** ./src/components/products.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Products = void 0;\nclass Products {\n    // private currentCategory: string | null;\n    constructor() {\n        this.productList = document.getElementById('products-list');\n        this.productError = document.getElementById('product-error');\n        this.filtersBtn = ['creams', 'smells', 'showers'];\n        // this.activeTypeButton = document.getElementsByClassName('active')[0];\n        this.init();\n    }\n    init() {\n        this.filtersBtn.forEach(btn => {\n            let btnEl = document.getElementById(btn);\n            if (btnEl) {\n                btnEl.onclick = () => {\n                    console.log('Hf,odofv');\n                    console.log(btnEl);\n                    this.filtersBtn.forEach(item => {\n                        document.getElementById(item).classList.remove('active');\n                    });\n                    btnEl.classList.add('active');\n                    this.getData();\n                };\n            }\n        });\n        this.getData();\n    }\n    getData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const response = yield fetch('./data/products.json')\n                .then(response => response.text())\n                .catch(error => {\n                console.log('Возникла ошибка');\n                this.productError.style.display = 'block';\n            });\n            let activeTypeButton = document.getElementsByClassName('active')[0];\n            console.log(activeTypeButton);\n            let currentCategory = activeTypeButton.id;\n            const result = JSON.parse(response);\n            if (!result) {\n                this.productError.style.display = 'block';\n            }\n            let data = result[currentCategory];\n            console.log(typeof result.creams);\n            this.showProducts(data, currentCategory);\n        });\n    }\n    showProducts(data, category) {\n        this.productList.innerHTML = '';\n        data.forEach(item => {\n            let productItem = document.createElement('div');\n            productItem.classList.add('product');\n            let productImg = document.createElement('div');\n            productImg.classList.add('product__img');\n            if (!item.images) {\n                productImg.innerHTML = `<img src=\"img/nophoto.png\" alt=\"Фото отсутствует\">`;\n            }\n            else {\n                item.images.forEach(img => {\n                    let image = document.createElement('img');\n                    image.src = `img/${img}`;\n                    productImg.appendChild(image);\n                });\n            }\n            ;\n            let productInfo = document.createElement('div');\n            productInfo.classList.add('product__info');\n            let productTitle = document.createElement('h3');\n            productTitle.classList.add('product__title');\n            productTitle.innerText = item.name;\n            let productCountry = document.createElement('p');\n            productCountry.classList.add('product__desc');\n            productCountry.innerText = `Страна: ${item.country}`;\n            let productDesc = document.createElement('p');\n            productDesc.classList.add('product__desc');\n            productDesc.innerText = item.desc;\n            let productPrice = document.createElement('p');\n            productPrice.classList.add('product__price');\n            productPrice.innerText = `${item.price.toString()} ₽`;\n            let productAction = document.createElement('div');\n            productAction.classList.add('product__action');\n            let addToCartButton = document.createElement('button');\n            addToCartButton.innerText = 'В корзину';\n            addToCartButton.id = `cart-${category}-${item.id}`;\n            addToCartButton.onclick = () => {\n                localStorage.setItem('product', `${addToCartButton.id}`);\n            };\n            let addToFavButton = document.createElement('button');\n            addToFavButton.innerText = 'В корзину';\n            addToFavButton.id = `fav-${category}-${item.id}`;\n            addToFavButton.onclick = () => {\n                localStorage.setItem('product', `${addToFavButton.id}`);\n            };\n            productAction.appendChild(addToCartButton);\n            productAction.appendChild(addToFavButton);\n            productInfo.appendChild(productTitle);\n            productInfo.appendChild(productCountry);\n            productInfo.appendChild(productDesc);\n            productInfo.appendChild(productPrice);\n            productInfo.appendChild(productAction);\n            productItem.appendChild(productImg);\n            productItem.appendChild(productInfo);\n            this.productList.appendChild(productItem);\n        });\n    }\n}\nexports.Products = Products;\n\n\n//# sourceURL=webpack://cosmetics_store/./src/components/products.ts?");

/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Router = void 0;\nconst main_1 = __webpack_require__(/*! ./components/main */ \"./src/components/main.ts\");\nconst products_1 = __webpack_require__(/*! ./components/products */ \"./src/components/products.ts\");\nclass Router {\n    constructor() {\n        this.content = document.getElementById('content');\n        this.pageTitle = document.getElementById('page-title');\n        this.routes = [\n            {\n                title: 'Главная',\n                template: 'template/main.html',\n                load: () => {\n                    new main_1.Main();\n                },\n                route: '#/'\n            },\n            {\n                title: 'Ассортимент',\n                template: 'template/products.html',\n                load: () => {\n                    new products_1.Products();\n                },\n                route: '#/products'\n            },\n            {\n                title: 'Контакты',\n                template: 'template/contacts.html',\n                load: () => {\n                },\n                route: '#/contacts'\n            }\n        ];\n    }\n    openRoute() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const urlRoute = window.location.hash.split('?')[0];\n            // console.log(newRoute);\n            // console.log(window.location);\n            const newRoute = this.routes.find(route => {\n                return route.route === urlRoute;\n            });\n            if (!newRoute) {\n                window.location.href = '#/';\n                return;\n            }\n            if (!this.content || !this.pageTitle) {\n                window.location.href = '#/';\n                return;\n            }\n            this.content.innerHTML = yield fetch(newRoute.template).then(response => response.text());\n            this.pageTitle.innerText = newRoute.title;\n            newRoute.load();\n        });\n    }\n}\nexports.Router = Router;\n\n\n//# sourceURL=webpack://cosmetics_store/./src/router.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;