export function openModal(popup) {
    popup.classList.toggle('popup_is-opened');
    popup.addEventListener('click', handleOverlayClose)
    document.addEventListener('keydown',handleEscClose);
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
    if (evt.key === 'Escape') {        
        const openedPopup = document.querySelector('.popup_is-opened');
        closeModal(openedPopup);
    }
}
