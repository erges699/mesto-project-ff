import "./pages/index.css";
import { createCard } from "./components/card.js";
import {closeModal, openModal} from "./components/modal.js";

// Вывести карточки на страницу
initialCards.forEach(function (element) {
    const card = createCard(element, deleteCard);
    cardsPlaces.append(card);
    });
