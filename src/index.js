import "./pages/index.css";
//import { initialCards } from "./components/cards.js";
import { createCard, deleteCard, likeCard } from "./components/card.js";
import { closeModal, openModal } from "./components/modal.js";
import { enableValidation, clearValidation, validationConfig } from "./components/validation.js";
import { getInitialCardsApi, getUserInfoApi } from './components/api.js'

// DOM
// const page = document.querySelector('.page');
// const content = page.querySelector('.content');
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
const closeButtons = document.querySelectorAll('.popup__close');
// Forms
const formProfileElement = document.forms['edit-profile'];
const nameProfileInput = formProfileElement.elements.name;
const jobProfileInput = formProfileElement.elements.description;
const formCardElement = document.forms['new-place'];
const nameCardInput = formCardElement.elements['place-name'];
const jobCardInput = formCardElement.elements.link;

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');


getInitialCardsApi()
  .then((result) => {
    // обрабатываем результат
    //console.log(result);
    result.forEach(function (element) {
        const card = createCard(element, deleteCard, likeCard, openPreviewImage);
        cardsPlaces.append(card);
    });
  })
  .catch((err) => {
    console.log(err); // выводим ошибку в консоль
  });

// Вывести карточки на страницу
//initialCards.forEach(function (element) {
//    const card = createCard(element, deleteCard, likeCard, openPreviewImage);
//    cardsPlaces.append(card);
//});



function openPreviewImage(imageLink, imageName) {
    imageElement.src = imageLink;
    imageElement.alt = imageName;
    captionElement.textContent = imageName;
    openModal(popupImage);
}

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameProfileInput.value;
    profileDescription.textContent = jobProfileInput.value;
    closeModal(popupEditProfile)
}

formProfileElement.addEventListener('submit', handleProfileFormSubmit);

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const newCardName = nameCardInput.value;
    const newCardLink = jobCardInput.value;
    const newCard = createCard({
        name: newCardName, link: newCardLink
    }, deleteCard, likeCard, openPreviewImage);
    cardsPlaces.prepend(newCard);
    closeModal(popupNewCard);
    formCardElement.reset();
}

formCardElement.addEventListener('submit', handleCardFormSubmit);

// Открыть модальное окно добавления новой карточки
popupNewCardButton.addEventListener('click', function (){
    clearValidation(popupNewCard, validationConfig);
    openModal(popupNewCard);
});

// Открыть модальное окно редактирования профиля 
popupEditProfileButton.addEventListener('click', function() {
    clearValidation(popupEditProfile, validationConfig);
    openModal(popupEditProfile);
    nameProfileInput.value = profileTitle.textContent;
    jobProfileInput.value = profileDescription.textContent;
});

// Закрыть модальное окно на крестик
closeButtons.forEach(function (button)  {
    button.addEventListener('click', function () {
        const popupElement = button.closest('.popup');
        closeModal(popupElement);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.classList.add('popup_is-animated');
    });
});

// включение валидации вызовом enableValidation
// все настройки передаются при вызове
enableValidation(validationConfig);
