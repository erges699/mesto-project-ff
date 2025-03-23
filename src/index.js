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

    cardDeleteButton.addEventListener('click', () => deleteCard(cardElement));

    return cardElement;
  }

// @todo: Функция удаления карточки
function deleteCard(element) {
    element.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (element) {
    const card = createCard(element, deleteCard);
    cardsPlaces.append(card);
});
