import { addLikeCardApi, deleteLikeCardApi, deleteCardApi} from './api.js'
import { closeModal, openModal } from "./modal.js";
import { popupDeleteConfirm } from "../index.js"
// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
let cardElementForConfirm;
let cardIdForConfirm;

// Функция создания карточки
export function createCard(element, deleteCardConfirmation, likeCard, openPreviewImage, userId) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    const cardLikeButton = cardElement.querySelector('.card__like-button');
    const cardLikeCounter = cardElement.querySelector('.card__like-counter');
    const cardOwnerId = element.owner._id;
    const cardId = element._id;
  
    cardImage.src = element.link;
    cardImage.alt = element.name;
    cardTitle.textContent = element.name;

    const ownerSetLike = element.likes.some(likes => {
        return likes._id === userId;
    });

    cardLikeCounter.textContent = element.likes.length;

    if(userId !== cardOwnerId) {
        cardDeleteButton.style = 'none';
    } else {
        // Открыть модальное окно подтверждения удаления карточки
        cardDeleteButton.addEventListener('click', () => deleteCardConfirmation(cardId, cardElement));
    }

    if (ownerSetLike) {
        cardLikeButton.classList.toggle('card__like-button_is-active');
    }

    cardLikeButton.addEventListener('click', (evt) => likeCard(evt, cardId, cardLikeCounter));
    cardImage.addEventListener('click', () => openPreviewImage(element.link, element.name));

    return cardElement;
};

// Обработчик «отправки» формы подтверждения удаления карточки
export function handleCardFormDeleteConfirm(evt) {
    evt.preventDefault();
    deleteCard(cardIdForConfirm, cardElementForConfirm);
};

export function deleteCardConfirmation(cardId, cardElement) {
    cardElementForConfirm = cardElement;
    cardIdForConfirm = cardId;
    openModal(popupDeleteConfirm);
};

// Функция удаления карточки
export function deleteCard(cardId, cardElement) {
    deleteCardApi(cardId)
    .then((res) => {
        cardElement.remove();
        closeModal(popupDeleteConfirm);
    })
    .catch((err) => {
        console.error("Ошибка при удалении поста:", err);
    });
};

// Функция лайка карточки
export function likeCard(evt, cardId, cardLikeCounter) {
    const likeMethod = evt.target.classList.contains('card__like-button_is-active') ? deleteLikeCardApi : addLikeCardApi;
    likeMethod(cardId) 
        .then((res) => {
           cardLikeCounter.textContent = res.likes.length; 
           evt.target.classList.toggle('card__like-button_is-active');
        })
        .catch(err => console.log(err));
};