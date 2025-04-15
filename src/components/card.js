import { addLikeCardApi, deleteLikeCardApi, deleteCardApi} from './api.js'
// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
export function createCard(element, deleteCard, likeCard, openPreviewImage, userId) {
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

    if(element.likes.length > 0) {
        cardLikeCounter.textContent = element.likes.length;
    } else {
        cardLikeCounter.textContent = '0';
    }

    if(userId !== cardOwnerId) {
        cardDeleteButton.style = 'none';
    } else {
        cardDeleteButton.addEventListener('click', () => deleteCard(cardId, cardElement));
    }
    cardLikeButton.addEventListener('click', (evt) => likeCard(evt, cardId, cardLikeCounter));
    cardImage.addEventListener('click', () => openPreviewImage(element.link, element.name));

    return cardElement;
};
  
// Функция удаления карточки
export function deleteCard(cardId, cardElement) {
    deleteCardApi(cardId)
    cardElement.remove();
};

// Функция лайка карточки
export function likeCard(evt, cardId, cardLikeCounter) {
    //console.log(evt);
    if (evt.target.classList.contains('card__like-button') && !(evt.target.classList.contains('card__like-button_is-active'))) {
        addLikeCardApi(cardId)
            .then((res) => {
                cardLikeCounter.textContent = res.likes.length;
                evt.target.classList.toggle('card__like-button_is-active');
            })
            .catch((err) => {
                console.error("Ошибка при добавлении лайка:", err);
            });        
    } else if (evt.target.classList.contains('card__like-button') && (evt.target.classList.contains('card__like-button_is-active'))) {
        deleteLikeCardApi(cardId)
            .then((res) => {
                cardLikeCounter.textContent = res.likes.length;
                evt.target.classList.remove('card__like-button_is-active');
            })
            .catch((err) => {
                console.error("Ошибка при удалении лайка:", err);
            });        
    }
};
