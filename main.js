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

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLikeCardApi: () => (/* binding */ addLikeCardApi),\n/* harmony export */   addNewCardApi: () => (/* binding */ addNewCardApi),\n/* harmony export */   deleteCardApi: () => (/* binding */ deleteCardApi),\n/* harmony export */   deleteLikeCardApi: () => (/* binding */ deleteLikeCardApi),\n/* harmony export */   getInitialCardsApi: () => (/* binding */ getInitialCardsApi),\n/* harmony export */   getUserInfoApi: () => (/* binding */ getUserInfoApi),\n/* harmony export */   updateUserAvatarApi: () => (/* binding */ updateUserAvatarApi),\n/* harmony export */   updateUserInfoApi: () => (/* binding */ updateUserInfoApi)\n/* harmony export */ });\nvar config = {\n  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-37',\n  headers: {\n    authorization: 'f7bdeba5-2ef1-40cd-8cb4-ffe2af75bc5e',\n    'Content-Type': 'application/json'\n  },\n  endpointUser: 'users/me',\n  endpointCards: 'cards',\n  endpointLike: 'cards/likes',\n  endpointAvatar: 'users/me/avatar',\n  methodGet: 'GET',\n  methodPost: 'POST',\n  methodPatch: 'PATCH',\n  methodPut: 'PUT',\n  methodDelete: 'DELETE'\n};\nvar checkResponse = function checkResponse(res) {\n  if (res.ok) {\n    return res.json();\n  }\n  return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n};\nvar sendRequest = function sendRequest(endpoint, options) {\n  return fetch(\"\".concat(config.baseUrl, \"/\").concat(endpoint), options).then(checkResponse);\n};\nvar getUserInfoApi = function getUserInfoApi() {\n  return sendRequest(config.endpointUser, {\n    method: config.methodGet,\n    headers: config.headers\n  });\n};\nvar updateUserInfoApi = function updateUserInfoApi(userName, userAbout) {\n  return sendRequest(config.endpointUser, {\n    method: config.methodPatch,\n    headers: config.headers,\n    body: JSON.stringify({\n      name: userName,\n      about: userAbout\n    })\n  });\n};\nvar updateUserAvatarApi = function updateUserAvatarApi(userAvatarLink) {\n  return sendRequest(config.endpointAvatar, {\n    method: config.methodPatch,\n    headers: config.headers,\n    body: JSON.stringify({\n      avatar: userAvatarLink\n    })\n  });\n};\nvar getInitialCardsApi = function getInitialCardsApi() {\n  return sendRequest(config.endpointCards, {\n    method: config.methodGet,\n    headers: config.headers\n  });\n};\nvar addNewCardApi = function addNewCardApi(cardName, cardlink) {\n  return sendRequest(config.endpointCards, {\n    method: config.methodPost,\n    headers: config.headers,\n    body: JSON.stringify({\n      name: cardName,\n      link: cardlink\n    })\n  });\n};\nvar deleteCardApi = function deleteCardApi(cardId) {\n  return sendRequest(\"\".concat(config.endpointCards, \"/\").concat(cardId), {\n    method: config.methodDelete,\n    headers: config.headers\n  });\n};\nvar addLikeCardApi = function addLikeCardApi(cardId) {\n  return sendRequest(\"\".concat(config.endpointLike, \"/\").concat(cardId), {\n    method: config.methodPut,\n    headers: config.headers\n  });\n};\nvar deleteLikeCardApi = function deleteLikeCardApi(cardId) {\n  return sendRequest(\"\".concat(config.endpointLike, \"/\").concat(cardId), {\n    method: config.methodDelete,\n    headers: config.headers\n  });\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   likeCard: () => (/* binding */ likeCard)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/components/api.js\");\n\n// Темплейт карточки\nvar cardTemplate = document.querySelector('#card-template').content;\n\n// Функция создания карточки\nfunction createCard(element, deleteCard, likeCard, openPreviewImage, userId) {\n  var cardElement = cardTemplate.querySelector('.card').cloneNode(true);\n  var cardImage = cardElement.querySelector('.card__image');\n  var cardTitle = cardElement.querySelector('.card__title');\n  var cardDeleteButton = cardElement.querySelector('.card__delete-button');\n  var cardLikeButton = cardElement.querySelector('.card__like-button');\n  var cardLikeCounter = cardElement.querySelector('.card__like-counter');\n  var cardOwnerId = element.owner._id;\n  var cardId = element._id;\n  cardImage.src = element.link;\n  cardImage.alt = element.name;\n  cardTitle.textContent = element.name;\n  var ownerSetLike = element.likes.some(function (likes) {\n    return likes._id === userId;\n  });\n  cardLikeCounter.textContent = element.likes.length;\n  if (userId !== cardOwnerId) {\n    cardDeleteButton.style = 'none';\n  } else {\n    cardDeleteButton.addEventListener('click', function () {\n      return deleteCard(cardId, cardElement);\n    });\n  }\n  if (ownerSetLike) {\n    cardLikeButton.classList.toggle('card__like-button_is-active');\n  }\n  cardLikeButton.addEventListener('click', function (evt) {\n    return likeCard(evt, cardId, cardLikeCounter);\n  });\n  cardImage.addEventListener('click', function () {\n    return openPreviewImage(element.link, element.name);\n  });\n  return cardElement;\n}\n;\n\n// Функция удаления карточки\nfunction deleteCard(cardId, cardElement) {\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.deleteCardApi)(cardId).then(function (res) {\n    cardElement.remove();\n  }).catch(function (err) {\n    console.error(\"Ошибка при удалении поста:\", err);\n  });\n}\n;\n\n// Функция лайка карточки\nvar likeCard = evt.target.classList.contains('card__like-button_is-active') ? _api_js__WEBPACK_IMPORTED_MODULE_0__.deleteLikeCardApi : _api_js__WEBPACK_IMPORTED_MODULE_0__.addLikeCardApi;\nlikeCard(cardId).then(function (res) {\n  cardLikeCounter.textContent = res.likes.length;\n  evt.target.classList.toggle('card__like-button_is-active');\n}).catch(function (err) {\n  return console.log(err);\n});\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   handleEscClose: () => (/* binding */ handleEscClose),\n/* harmony export */   handleOverlayClose: () => (/* binding */ handleOverlayClose),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(popup) {\n  popup.classList.toggle('popup_is-opened');\n  popup.addEventListener('click', handleOverlayClose);\n  document.addEventListener('keydown', handleEscClose);\n}\nfunction closeModal(popup) {\n  popup.classList.remove('popup_is-opened');\n  popup.removeEventListener('click', handleOverlayClose);\n  document.removeEventListener('keydown', handleEscClose);\n}\nfunction handleOverlayClose(evt) {\n  if (evt.target === evt.currentTarget) {\n    closeModal(evt.currentTarget);\n  }\n}\nfunction handleEscClose(evt) {\n  if (evt.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_is-opened');\n    closeModal(openedPopup);\n  }\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/components/validation-config.js":
/*!*********************************************!*\
  !*** ./src/components/validation-config.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validationConfig: () => (/* binding */ validationConfig)\n/* harmony export */ });\nvar validationConfig = {\n  formSelector: '.popup__form',\n  inputSelector: '.popup__input',\n  submitButtonSelector: '.popup__button',\n  inactiveButtonClass: 'popup__button_disabled',\n  inputErrorClass: 'popup__input_type_error',\n  errorClass: 'popup__error_visible'\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/validation-config.js?");

/***/ }),

/***/ "./src/components/validation.js":
/*!**************************************!*\
  !*** ./src/components/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation)\n/* harmony export */ });\nvar showInputError = function showInputError(formElement, inputElement, errorMessage, validationConfig) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.add(validationConfig.inputErrorClass);\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add(validationConfig.errorClass);\n};\nvar hideInputError = function hideInputError(formElement, inputElement, validationConfig) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.remove(validationConfig.inputErrorClass);\n  errorElement.classList.remove(validationConfig.errorClass);\n  errorElement.textContent = '';\n};\nvar hasInvalidInput = function hasInvalidInput(inputList) {\n  return inputList.some(function (inputElement) {\n    return !inputElement.validity.valid;\n  });\n};\nvar toggleButtonState = function toggleButtonState(inputList, buttonElement, validationConfig) {\n  if (hasInvalidInput(inputList)) {\n    buttonElement.disabled = true;\n    buttonElement.classList.add(validationConfig.inactiveButtonClass);\n  } else {\n    buttonElement.disabled = false;\n    buttonElement.classList.remove(validationConfig.inactiveButtonClass);\n  }\n};\nvar isValid = function isValid(formElement, inputElement) {\n  if (inputElement.validity.patternMismatch) {\n    inputElement.setCustomValidity(inputElement.dataset.errorMessage);\n  } else {\n    inputElement.setCustomValidity(\"\");\n  }\n  if (!inputElement.validity.valid) {\n    showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);\n  } else {\n    hideInputError(formElement, inputElement, validationConfig);\n  }\n};\nvar setEventListeners = function setEventListeners(formElement, validationConfig) {\n  var inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));\n  var buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);\n  toggleButtonState(inputList, buttonElement, validationConfig);\n  inputList.forEach(function (inputElement) {\n    inputElement.addEventListener('input', function () {\n      isValid(formElement, inputElement);\n      toggleButtonState(inputList, buttonElement, validationConfig);\n    });\n  });\n};\nvar clearValidation = function clearValidation(formElement, validationConfig) {\n  var inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));\n  var buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);\n  inputList.forEach(function (inputElement) {\n    hideInputError(formElement, inputElement, validationConfig);\n  });\n  toggleButtonState(inputList, buttonElement, validationConfig);\n};\nvar enableValidation = function enableValidation(validationConfig) {\n  var formList = Array.from(document.querySelectorAll(validationConfig.formSelector));\n  formList.forEach(function (formElement) {\n    formElement.addEventListener('submit', function (evt) {\n      evt.preventDefault();\n    });\n    setEventListeners(formElement, validationConfig);\n  });\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _components_validation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/validation.js */ \"./src/components/validation.js\");\n/* harmony import */ var _components_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/api.js */ \"./src/components/api.js\");\n/* harmony import */ var _components_validation_config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/validation-config.js */ \"./src/components/validation-config.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n\n\n\n\n\n// DOM\nvar container = document.querySelector('.places');\nvar cardsPlaces = container.querySelector('.places__list');\n// Modal popup_type_image\nvar popupImage = document.querySelector('.popup_type_image');\nvar imageElement = document.querySelector('.popup__image');\nvar captionElement = document.querySelector('.popup__caption');\n// Modal popup_type_edit\nvar popupEditProfile = document.querySelector('.popup_type_edit');\nvar popupEditProfileButton = document.querySelector('.profile__edit-button');\n// Modal popup_type_new-card\nvar popupNewCard = document.querySelector('.popup_type_new-card');\nvar popupNewCardButton = document.querySelector('.profile__add-button');\n// Modal popup_type_edit-avatar\nvar popupEditAvatar = document.querySelector('.popup_type_edit-avatar');\nvar avatarImage = document.querySelector('.profile__image');\n// Close buttons\nvar closeButtons = document.querySelectorAll('.popup__close');\n// Forms\n// edit-profile\nvar formProfileElement = document.forms['edit-profile'];\nvar nameProfileInput = formProfileElement.elements.name;\nvar jobProfileInput = formProfileElement.elements.description;\nvar formProfileButton = formProfileElement.querySelector('.popup__button');\n// new-place\nvar formCardElement = document.forms['new-place'];\nvar nameCardInput = formCardElement.elements['place-name'];\nvar jobCardInput = formCardElement.elements.link;\nvar formCardButton = formCardElement.querySelector('.popup__button');\n// edit-avatar\nvar formAvatarElement = document.forms['edit-avatar'];\nvar jobAvatarInput = formAvatarElement.elements.avatarlink;\nvar formAvatarButton = formAvatarElement.querySelector('.popup__button');\n// porofile-title\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nvar profileImage = document.querySelector('.profile__image');\nvar userId = '';\nfunction setUser(user) {\n  userId = user._id;\n  profileTitle.textContent = user.name;\n  profileDescription.textContent = user.about;\n  profileImage.style = \"background-image: url('\".concat(user.avatar, \"')\");\n}\n;\nvar promises = [(0,_components_api_js__WEBPACK_IMPORTED_MODULE_4__.getUserInfoApi)(), (0,_components_api_js__WEBPACK_IMPORTED_MODULE_4__.getInitialCardsApi)()];\nPromise.all(promises).then(function (_ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n    user = _ref2[0],\n    cards = _ref2[1];\n  setUser(user);\n  return [userId, cards];\n}).then(function (_ref3) {\n  var _ref4 = _slicedToArray(_ref3, 2),\n    userId = _ref4[0],\n    cards = _ref4[1];\n  cards.forEach(function (element) {\n    var card = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(element, _components_card_js__WEBPACK_IMPORTED_MODULE_1__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_1__.likeCard, openPreviewImage, userId);\n    cardsPlaces.append(card);\n  });\n}).catch(function (err) {\n  console.error(\"Произошла ошибка при получении данных:\", err);\n});\nfunction openPreviewImage(imageLink, imageName) {\n  imageElement.src = imageLink;\n  imageElement.alt = imageName;\n  captionElement.textContent = imageName;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupImage);\n}\nfunction renderLoading(isLoading, button) {\n  if (isLoading) {\n    button.textContent = 'Сохранение...';\n  } else {\n    button.textContent = 'Сохранить';\n  }\n}\n\n// Обработчик «отправки» формы профиля\nfunction handleProfileFormSubmit(evt) {\n  evt.preventDefault();\n  var userName = nameProfileInput.value;\n  var userDescription = jobProfileInput.value;\n  renderLoading(true, formProfileButton);\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_4__.updateUserInfoApi)(userName, userDescription).then(function (res) {\n    profileTitle.textContent = res.name;\n    profileDescription.textContent = res.about;\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupEditProfile);\n  }).catch(function (err) {\n    console.error(\"Ошибка при изменении данных пользователя:\", err);\n  }).finally(function () {\n    return renderLoading(false, formProfileButton);\n  });\n}\nformProfileElement.addEventListener('submit', handleProfileFormSubmit);\n\n// Обработчик «отправки» формы аватара\nfunction handleAvatarFormSubmit(evt) {\n  evt.preventDefault();\n  var editAvatarLink = jobAvatarInput.value;\n  renderLoading(true, formAvatarButton);\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_4__.updateUserAvatarApi)(editAvatarLink).then(function (res) {\n    avatarImage.style = \"background-image: url('\".concat(res.avatar, \"')\");\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupEditAvatar);\n  }).catch(function (err) {\n    console.error(\"Ошибка при изменении аватара:\", err);\n  }).finally(function () {\n    return renderLoading(false, formAvatarButton);\n  });\n}\nformAvatarElement.addEventListener('submit', handleAvatarFormSubmit);\n\n// Обработчик «отправки» формы новой карточки\nfunction handleCardFormSubmit(evt) {\n  evt.preventDefault();\n  var newCardName = nameCardInput.value;\n  var newCardLink = jobCardInput.value;\n  renderLoading(true, formCardButton);\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_4__.addNewCardApi)(newCardName, newCardLink).then(function (res) {\n    var newCard = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(res, _components_card_js__WEBPACK_IMPORTED_MODULE_1__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_1__.likeCard, openPreviewImage, userId);\n    cardsPlaces.prepend(newCard);\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupNewCard);\n    formCardElement.reset();\n  }).catch(function (err) {\n    console.error(\"Ошибка при добавлении карточки:\", err);\n  }).finally(function () {\n    return renderLoading(false, formCardButton);\n  });\n}\nformCardElement.addEventListener('submit', handleCardFormSubmit);\n\n// Открыть модальное окно редактирования ссылки аватара\navatarImage.addEventListener('click', function () {\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(popupEditAvatar, _components_validation_config_js__WEBPACK_IMPORTED_MODULE_5__.validationConfig);\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupEditAvatar);\n});\n\n// Открыть модальное окно добавления новой карточки\npopupNewCardButton.addEventListener('click', function () {\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(popupNewCard, _components_validation_config_js__WEBPACK_IMPORTED_MODULE_5__.validationConfig);\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupNewCard);\n});\n\n// Открыть модальное окно редактирования профиля \npopupEditProfileButton.addEventListener('click', function () {\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(popupEditProfile, _components_validation_config_js__WEBPACK_IMPORTED_MODULE_5__.validationConfig);\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupEditProfile);\n  nameProfileInput.value = profileTitle.textContent;\n  jobProfileInput.value = profileDescription.textContent;\n});\n\n// Закрыть модальное окно на крестик\ncloseButtons.forEach(function (button) {\n  button.addEventListener('click', function () {\n    var popupElement = button.closest('.popup');\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupElement);\n  });\n});\ndocument.addEventListener('DOMContentLoaded', function () {\n  var popups = document.querySelectorAll('.popup');\n  popups.forEach(function (popup) {\n    popup.classList.add('popup_is-animated');\n  });\n});\n\n// включение валидации вызовом enableValidation\n// все настройки передаются при вызове\n(0,_components_validation_js__WEBPACK_IMPORTED_MODULE_3__.enableValidation)(_components_validation_config_js__WEBPACK_IMPORTED_MODULE_5__.validationConfig);\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

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