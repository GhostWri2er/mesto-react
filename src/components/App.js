import React, { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  };

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          name={'profile'}
          title="Редактировать профиль"
          onClose={closeAllPopups}
          children={
            <>
              <div className="popup__block">
                <input
                  className="popup__input popup__input-name"
                  id="name-error"
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  minLength="2"
                  maxLength="40"
                  required
                />
                <span className="popup__input-error"></span>
              </div>
              <div className="popup__block">
                <input
                  className="popup__input popup__input-description"
                  id="description-error"
                  type="text"
                  name="description"
                  placeholder="Описание"
                  minLength="2"
                  maxLength="200"
                  required
                />
                <span className="popup__input-error"></span>
              </div>
            </>
          }
        />

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          name={'add'}
          title="Добавить карточку"
          onClose={closeAllPopups}
          children={
            <>
              <div className="popup__block">
                <input
                  className="popup__input popup__input-name popup__input-name_add"
                  id="place-error"
                  type="text"
                  name="place"
                  placeholder="Название"
                  minLength="2"
                  maxLength="30"
                  required
                />
                <span className="popup__input-error"></span>
              </div>
              <div className="popup__block">
                <input
                  className="popup__input popup__input-description popup__input-description_add"
                  id="link-error"
                  type="url"
                  name="link"
                  placeholder="Ссылка на картинку"
                  required
                />
                <span className="popup__input-error"></span>
              </div>
            </>
          }
        />

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          name={'avatar'}
          title="Редактировать аватар"
          onClose={closeAllPopups}
          children={
            <>
              <div className="popup__block">
                <input
                  className="popup__input popup__input-description popup__input-description_add"
                  type="url"
                  placeholder="Ссылка на картинку"
                  required
                />
                <span className="popup__input-error"></span>
              </div>
            </>
          }
        />
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </>
  );
}

export default App;
