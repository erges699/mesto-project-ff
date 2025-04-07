import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { createCard, deleteCard, likeCard } from "./components/card.js";
import {closeModal, openModal} from "./components/modal.js";

// DOM
const page = document.querySelector('.page');
const content = page.querySelector('.content');
const container = document.querySelector('.places');
const cardsPlaces = container.querySelector('.places__list')
// Modal popup_type_image
const popupImage = document.querySelector('.popup_type_image');
const imageElement = document.querySelector('.popup__image');
const captionElement = document.querySelector('.popup__caption');
// Modal popup_type_edit
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupEditProfileButton = document.querySelector('.profile__edit-button');
// Modal popup_type_new-card
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupNewCardButton = document.querySelector('.profile__add-button');
// Close buttons
const closeButton = document.querySelectorAll('.popup__close');
// All popups
const allModals = document.querySelectorAll('.popup');
// Form
const profileTitle = content.querySelector('.profile__title');
const profileInfo = content.querySelector('.profile__description');
const profileImage = content.querySelector('.profile__image');

const validationConfig = {
    formSelector: '.popup__form', // Селектор формы
    inputSelector: '.popup__input', // Селекторы полей ввода
    submitButtonSelector: '.popup__button', // Селектор кнопки отправки
    inactiveButtonClass: 'popup__button_disabled', // Класс неактивной кнопки
    inputErrorClass: 'popup__input_type_error', // Класс ошибки в поле ввода
    errorClass: 'popup__error_visible' // Класс отображения ошибки
};

// Вывести карточки на страницу
initialCards.forEach(function (element) {
    const card = createCard(element, deleteCard, likeCard, openPreviewImage);
    cardsPlaces.append(card);
    });

// Открыть модальное окно редактирования профиля 
popupEditProfileButton.addEventListener('click', () => {
    //clearValidation(popupEditProfile, validationConfig);
    openModal(popupEditProfile);
    //setEditProfilePopupData();
});

//Заполнение полей формы именем/описанием значениями со страницы
function setEditProfilePopupData() { 
    editPopupFieldName.value = profileTitle.textContent;
    editPopupFieldJob.value = profileInfo.textContent;;
};

// Открытие модальное окно добавления новой карточки
addNewCardButton.addEventListener('click', function(){
    //clearValidation(newCardPopup, validationConfig);
    openModal(popupNewCard);
});

// Открыть модальное окно изменения аватара пользователя
userAvatar.addEventListener('click', function() {
    //clearValidation(newAvatarPopup, validationConfig);
    openModal(newAvatarPopup);
})

function openPreviewImage(imageLink, imageName) {
    imageElement.src = imageLink;
    imageElement.alt = imageName;
    captionElement.textContent = imageName;
    openModal(popupImage);
}

//closeButton.addEventListener('click', function(){
//    console.log(closeButton);
//    console.log(closeButton.closest('.popup'));
//    closeModal(closeButton.closest('.popup'))
//});

closeButton.addEventListener('click', function(){
    closeModal(popupImage);
});


    //createNewCardForm.reset();
    //closeModal(newCardPopup);

