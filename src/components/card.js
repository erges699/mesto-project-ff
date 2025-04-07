// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
export function createCard(element, deleteCard, likeCard, openPreviewImage) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    const cardLikeButton = cardElement.querySelector('.card__like-button');
  
    cardImage.src = element.link;
    cardImage.alt = element.alt;
    cardTitle.textContent = element.name;
  
    cardDeleteButton.addEventListener('click', () => deleteCard(cardElement));
    cardLikeButton.addEventListener('click', (evt) => likeCard(evt));
    cardImage.addEventListener('click', () => openPreviewImage(cardImage.src, cardTitle.textContent));

    return cardElement;
}
  
// Функция удаления карточки
export function deleteCard(element) {
    element.remove();
}

// Функция лайка карточки
export function likeCard(evt) {
    //console.log(evt);
    if (evt.target.classList.contains('card__like-button') && !(evt.target.classList.contains('card__like-button_is-active'))) {
        evt.target.classList.toggle('card__like-button_is-active');
    } else if (evt.target.classList.contains('card__like-button') && (evt.target.classList.contains('card__like-button_is-active'))) {
        evt.target.classList.remove('card__like-button_is-active');
    }
}