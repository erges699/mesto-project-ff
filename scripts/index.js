// @todo: Темплейт карточки
const container = document.querySelector('.content');
const cardsPlaces = container.querySelector('.places__list')

// @todo: DOM узлы

// @todo: Функция создания карточки
function createCard(titleValue, linkValue ) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__image').src = linkValue;
    cardElement.querySelector('.card__image').textContent = titleValue;
    cardElement.querySelector('.card__title').textContent = titleValue;
    cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);

    cardsPlaces.append(cardElement);
  }

// @todo: Функция удаления карточки
function deleteCard() {
    const cardToDelete = document.querySelector('.places__item');
    cardToDelete.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (card) {
    createCard(card.name, card.link);
});