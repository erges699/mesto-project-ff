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

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   likeCard: () => (/* binding */ likeCard)\n/* harmony export */ });\n// Темплейт карточки\nvar cardTemplate = document.querySelector('#card-template').content;\n\n// Функция создания карточки\nfunction createCard(element, deleteCard, likeCard, openPreviewImage) {\n  var cardElement = cardTemplate.querySelector('.card').cloneNode(true);\n  var cardImage = cardElement.querySelector('.card__image');\n  var cardTitle = cardElement.querySelector('.card__title');\n  var cardDeleteButton = cardElement.querySelector('.card__delete-button');\n  var cardLikeButton = cardElement.querySelector('.card__like-button');\n  cardImage.src = element.link;\n  cardImage.alt = element.name;\n  cardTitle.textContent = element.name;\n  cardDeleteButton.addEventListener('click', function () {\n    return deleteCard(cardElement);\n  });\n  cardLikeButton.addEventListener('click', function (evt) {\n    return likeCard(evt);\n  });\n  cardImage.addEventListener('click', function () {\n    return openPreviewImage(element.link, element.name);\n  });\n  return cardElement;\n}\n\n// Функция удаления карточки\nfunction deleteCard(element) {\n  element.remove();\n}\n\n// Функция лайка карточки\nfunction likeCard(evt) {\n  //console.log(evt);\n  if (evt.target.classList.contains('card__like-button') && !evt.target.classList.contains('card__like-button_is-active')) {\n    evt.target.classList.toggle('card__like-button_is-active');\n  } else if (evt.target.classList.contains('card__like-button') && evt.target.classList.contains('card__like-button_is-active')) {\n    evt.target.classList.remove('card__like-button_is-active');\n  }\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/cards.js":
/*!*********************************!*\
  !*** ./src/components/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/cards.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   handleEscClose: () => (/* binding */ handleEscClose),\n/* harmony export */   handleOverlayClose: () => (/* binding */ handleOverlayClose),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(popup) {\n  popup.classList.toggle('popup_is-opened');\n  popup.addEventListener('click', handleOverlayClose);\n  document.addEventListener('keydown', handleEscClose);\n}\nfunction closeModal(popup) {\n  popup.classList.remove('popup_is-opened');\n  popup.removeEventListener('click', handleOverlayClose);\n  document.removeEventListener('keydown', handleEscClose);\n}\nfunction handleOverlayClose(evt) {\n  if (evt.target === evt.currentTarget) {\n    closeModal(evt.currentTarget);\n  }\n}\nfunction handleEscClose(evt) {\n  if (evt.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_is-opened');\n    closeModal(openedPopup);\n  }\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/components/validation.js":
/*!**************************************!*\
  !*** ./src/components/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation),\n/* harmony export */   validationConfig: () => (/* binding */ validationConfig)\n/* harmony export */ });\nvar validationConfig = {\n  formSelector: '.popup__form',\n  inputSelector: '.popup__input',\n  submitButtonSelector: '.popup__button',\n  inactiveButtonClass: 'popup__button_disabled',\n  inputErrorClass: 'popup__input_type_error',\n  errorClass: 'popup__error_visible'\n};\nvar showInputError = function showInputError(formElement, inputElement, errorMessage, validationConfig) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.add(validationConfig.inputErrorClass);\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add(validationConfig.errorClass);\n};\nvar hideInputError = function hideInputError(formElement, inputElement, validationConfig) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.remove(validationConfig.inputErrorClass);\n  errorElement.classList.remove(validationConfig.errorClass);\n  errorElement.textContent = '';\n};\nvar hasInvalidInput = function hasInvalidInput(inputList) {\n  return inputList.some(function (inputElement) {\n    return !inputElement.validity.valid;\n  });\n};\nvar toggleButtonState = function toggleButtonState(inputList, buttonElement, validationConfig) {\n  if (hasInvalidInput(inputList)) {\n    buttonElement.disabled = true;\n    buttonElement.classList.add(validationConfig.inactiveButtonClass);\n  } else {\n    buttonElement.disabled = false;\n    buttonElement.classList.remove(validationConfig.inactiveButtonClass);\n  }\n};\nvar isValid = function isValid(formElement, inputElement) {\n  if (inputElement.validity.patternMismatch) {\n    inputElement.setCustomValidity(inputElement.dataset.errorMessage);\n  } else {\n    inputElement.setCustomValidity(\"\");\n  }\n  if (!inputElement.validity.valid) {\n    showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);\n  } else {\n    hideInputError(formElement, inputElement, validationConfig);\n  }\n};\nvar setEventListeners = function setEventListeners(formElement, validationConfig) {\n  var inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));\n  var buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);\n  toggleButtonState(inputList, buttonElement, validationConfig);\n  inputList.forEach(function (inputElement) {\n    inputElement.addEventListener('input', function () {\n      isValid(formElement, inputElement);\n      toggleButtonState(inputList, buttonElement, validationConfig);\n    });\n  });\n};\nvar clearValidation = function clearValidation(formElement, validationConfig) {\n  var inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));\n  var buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);\n  inputList.forEach(function (inputElement) {\n    hideInputError(formElement, inputElement, validationConfig);\n  });\n  toggleButtonState(inputList, buttonElement, validationConfig);\n};\nvar enableValidation = function enableValidation(validationConfig) {\n  var formList = Array.from(document.querySelectorAll(validationConfig.formSelector));\n  formList.forEach(function (formElement) {\n    formElement.addEventListener('submit', function (evt) {\n      evt.preventDefault();\n    });\n    setEventListeners(formElement, validationConfig);\n  });\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards.js */ \"./src/components/cards.js\");\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _components_validation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/validation.js */ \"./src/components/validation.js\");\n\n\n\n\n\n\n// DOM\n// const page = document.querySelector('.page');\n// const content = page.querySelector('.content');\nvar container = document.querySelector('.places');\nvar cardsPlaces = container.querySelector('.places__list');\n// Modal popup_type_image\nvar popupImage = document.querySelector('.popup_type_image');\nvar imageElement = document.querySelector('.popup__image');\nvar captionElement = document.querySelector('.popup__caption');\n// Modal popup_type_edit\nvar popupEditProfile = document.querySelector('.popup_type_edit');\nvar popupEditProfileButton = document.querySelector('.profile__edit-button');\n// Modal popup_type_new-card\nvar popupNewCard = document.querySelector('.popup_type_new-card');\nvar popupNewCardButton = document.querySelector('.profile__add-button');\n// Close buttons\nvar closeButtons = document.querySelectorAll('.popup__close');\n// Forms\nvar formProfileElement = document.forms['edit-profile'];\nvar nameProfileInput = formProfileElement.elements.name;\nvar jobProfileInput = formProfileElement.elements.description;\nvar formCardElement = document.forms['new-place'];\nvar nameCardInput = formCardElement.elements['place-name'];\nvar jobCardInput = formCardElement.elements.link;\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\n//const profileImage = document.querySelector('.profile__image');\n\n// Вывести карточки на страницу\n_components_cards_js__WEBPACK_IMPORTED_MODULE_1__.initialCards.forEach(function (element) {\n  var card = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(element, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.likeCard, openPreviewImage);\n  cardsPlaces.append(card);\n});\nfunction openPreviewImage(imageLink, imageName) {\n  imageElement.src = imageLink;\n  imageElement.alt = imageName;\n  captionElement.textContent = imageName;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(popupImage);\n}\n\n// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет\nfunction handleProfileFormSubmit(evt) {\n  evt.preventDefault();\n  profileTitle.textContent = nameProfileInput.value;\n  profileDescription.textContent = jobProfileInput.value;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popupEditProfile);\n}\nformProfileElement.addEventListener('submit', handleProfileFormSubmit);\nfunction handleCardFormSubmit(evt) {\n  evt.preventDefault();\n  var newCardName = nameCardInput.value;\n  var newCardLink = jobCardInput.value;\n  var newCard = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)({\n    name: newCardName,\n    link: newCardLink\n  }, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.likeCard, openPreviewImage);\n  cardsPlaces.prepend(newCard);\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popupNewCard);\n  formCardElement.reset();\n}\nformCardElement.addEventListener('submit', handleCardFormSubmit);\n\n// Открыть модальное окно добавления новой карточки\npopupNewCardButton.addEventListener('click', function () {\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.clearValidation)(popupNewCard, _components_validation_js__WEBPACK_IMPORTED_MODULE_4__.validationConfig);\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(popupNewCard);\n});\n\n// Открыть модальное окно редактирования профиля \npopupEditProfileButton.addEventListener('click', function () {\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.clearValidation)(popupEditProfile, _components_validation_js__WEBPACK_IMPORTED_MODULE_4__.validationConfig);\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(popupEditProfile);\n  nameProfileInput.value = profileTitle.textContent;\n  jobProfileInput.value = profileDescription.textContent;\n});\n\n// Закрыть модальное окно на крестик\ncloseButtons.forEach(function (button) {\n  button.addEventListener('click', function () {\n    var popupElement = button.closest('.popup');\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popupElement);\n  });\n});\ndocument.addEventListener('DOMContentLoaded', function () {\n  var popups = document.querySelectorAll('.popup');\n  popups.forEach(function (popup) {\n    popup.classList.add('popup_is-animated');\n  });\n});\n\n// включение валидации вызовом enableValidation\n// все настройки передаются при вызове\n(0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.enableValidation)(_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.validationConfig);\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;