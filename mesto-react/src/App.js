import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithForm from './components/PopupWithForm.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  };

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          name={'profile'}
          title={'Редактировать профиль'}
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
                  minlength="2"
                  maxlength="40"
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
                  minlength="2"
                  maxlength="200"
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
          title={'Добавить карточку'}
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
                  minlength="2"
                  maxlength="30"
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
          title={'Редактировать аватар'}
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
      </div>
    </>
  );
}

export default App;
