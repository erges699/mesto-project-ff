import "./pages/index.css";
import { createCard, deleteCardConfirmation, likeCard, handleCardFormDeleteConfirm } from "./components/card.js";
import { closeModal, openModal } from "./components/modal.js";
import { enableValidation, clearValidation } from "./components/validation.js";
import { getInitialCardsApi, getUserInfoApi, addNewCardApi, updateUserAvatarApi, updateUserInfoApi } from './components/api.js'
import { validationConfig } from './components/validation-config.js'

// DOM
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
// Modal popup_type_edit-avatar
const popupEditAvatar = document.querySelector('.popup_type_edit-avatar');
const avatarImage = document.querySelector('.profile__image');
// Modal popup_type_delete-confirm
export const popupDeleteConfirm = document.querySelector('.popup_type_delete-confirm');
// Close buttons
const closeButtons = document.querySelectorAll('.popup__close');
// Forms
// edit-profile
const formProfileElement = document.forms['edit-profile'];
const nameProfileInput = formProfileElement.elements.name;
const jobProfileInput = formProfileElement.elements.description;
const formProfileButton = formProfileElement.querySelector('.popup__button')
// new-place
const formCardElement = document.forms['new-place'];
const nameCardInput = formCardElement.elements['place-name'];
const jobCardInput = formCardElement.elements.link;
const formCardButton = formCardElement.querySelector('.popup__button')
// edit-avatar
const formAvatarElement = document.forms['edit-avatar'];
const jobAvatarInput = formAvatarElement.elements.avatarlink;
const formAvatarButton = formAvatarElement.querySelector('.popup__button')
// delete-confirm
const formDeleteConfirm = document.forms['delete-confirm'];
const formDeleteConfirmButton = formDeleteConfirm.querySelector('.popup__button');
// porofile-title
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');

let userId = '';
function setUser(user) {
    userId = user._id;
    profileTitle.textContent = user.name;
    profileDescription.textContent = user.about;
    profileImage.style = `background-image: url('${user.avatar}')`;
};

const promises = [getUserInfoApi(), getInitialCardsApi()]
Promise.all(promises)
  .then(([user, cards]) => {
    setUser(user);
    return([userId, cards])
  })
  .then(([userId, cards]) => {
    cards.forEach(function (element) {
        const card = createCard(element, deleteCardConfirmation, likeCard, openPreviewImage, userId);
        cardsPlaces.append(card);
    });
  })
  .catch((err) => {
    console.error("Произошла ошибка при получении данных:", err);
  });  

function openPreviewImage(imageLink, imageName) {
    imageElement.src = imageLink;
    imageElement.alt = imageName;
    captionElement.textContent = imageName;
    openModal(popupImage);
}

function renderLoading(isLoading, button) {
    button.textContent = isLoading ? 'Сохранение...' : 'Сохранить'
  }

// Обработчик «отправки» формы профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const userName = nameProfileInput.value;
    const userDescription = jobProfileInput.value;
    renderLoading(true, formProfileButton);
    
    updateUserInfoApi(userName, userDescription)
    .then((res) => {
        profileTitle.textContent = res.name;
        profileDescription.textContent = res.about;
        closeModal(popupEditProfile);
    })
    .catch((err) => {
        console.error("Ошибка при изменении данных пользователя:", err);
    })
    .finally(() => renderLoading(false, formProfileButton));

}

formProfileElement.addEventListener('submit', handleProfileFormSubmit);

// Обработчик «отправки» формы аватара
function handleAvatarFormSubmit(evt) {
    evt.preventDefault();
    const editAvatarLink = jobAvatarInput.value;
    
    renderLoading(true, formAvatarButton);
    updateUserAvatarApi(editAvatarLink)
        .then((res) => {
            avatarImage.style = `background-image: url('${res.avatar}')`;
            closeModal(popupEditAvatar);
        })
        .catch((err) => {
            console.error("Ошибка при изменении аватара:", err);
        })
        .finally(() => renderLoading(false, formAvatarButton));
}

formAvatarElement.addEventListener('submit', handleAvatarFormSubmit);

// Обработчик «отправки» формы новой карточки
function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const newCardName = nameCardInput.value;
    const newCardLink = jobCardInput.value;

    renderLoading(true, formCardButton);
    addNewCardApi(newCardName, newCardLink)
        .then((res) => {
            const newCard = createCard(res, deleteCard, likeCard, openPreviewImage, userId);
            cardsPlaces.prepend(newCard);
            closeModal(popupNewCard);
            formCardElement.reset();
        })
        .catch((err) => {
            console.error("Ошибка при добавлении карточки:", err);
        })
        .finally(() => renderLoading(false,formCardButton));
}

formCardElement.addEventListener('submit', handleCardFormSubmit);

// Слушатель отправки формы подтверждения удаления карточки
formDeleteConfirm.addEventListener('submit', handleCardFormDeleteConfirm);

// Открыть модальное окно редактирования ссылки аватара
avatarImage.addEventListener('click', function() {
    clearValidation(popupEditAvatar, validationConfig);
    openModal(popupEditAvatar);
});

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
