import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

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

  useEffect(() => {
    api
      .getProfile()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log('error', err));
  }, []);

  function handleUpdateUser(data) {
    const { name, about } = data;
    api
      .editProfile(name, about)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log('error', err));
  }

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
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
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
