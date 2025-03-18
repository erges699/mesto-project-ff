// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const container = document.querySelector('.places');
const cardsPlaces = container.querySelector('.places__list')

// @todo: DOM узлы

// @todo: Функция создания карточки
function createCard(element, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');

    cardImage.src = element.link;
    cardImage.alt = element.alt;
    cardTitle.textContent = element.name;

    cardImage.addEventListener('click', () => handleOpenImage(cardImage.src, cardTitle.textContent));
    cardDeleteButton.addEventListener('click', deleteCard);

    return cardElement;
  }

// @todo: Функция удаления карточки
function deleteCard() {
    const cardToDelete = element.target.closest('.card');
    item.remove();
}

// @todo: Вывести карточки на страницу
//initialCards.forEach(function (card) {
//    createCard(card.name, card.link);
//});

initialCards.forEach(function (element) {
    const card = createCard(element, deleteCard, handleOpenImage);
    list.append(card);
});
