export function openModal(popup) {
    popup.classList.toggle('popup_is-opened');
    document.addEventListener('keydown', handleEscClose);
}

export function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
    popup.removeEventListener('click', handleOverlayClose);
    document.removeEventListener('keydown', handleEscClose);
}

export function handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
        closeModal(evt.currentTarget);
    }
}

export function handleEscClose(evt) {
    if (evt.target === 'Escape' && (document.querySelector('.popup_is-opened'))) {
        closePopup(document.querySelector('.popup_is-opened'));
    }
}
