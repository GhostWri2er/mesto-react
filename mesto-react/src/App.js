import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
  const editPopupAvatar = document.querySelector('.popup_edit_avatar');
  const AddPopup = document.querySelector('.popup_add');
  const editPopupProfile = document.querySelector('.profile-popup');

  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />

        <section className="popup profile-popup">
          <div className="popup__container">
            <form className="popup__form-edit" method="post" novalidate>
              <button
                className="popup__button-close popup__close"
                oneClick={() => editPopupProfile.classList.remove('popup_opened')}
                type="button"></button>
              <h2 className="popup__title">Редактировать профиль</h2>
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
              <button className="popup__button-save" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </section>

        <section className="popup popup_add">
          <div className="popup__container popup__container_add">
            <form className="popup__form-edit popup__form-edit_add" method="post" novalidate>
              <button
                className="popup__button-close popup__button-close_add popup__close"
                oneClick={() => AddPopup.classList.remove('popup_opened')}
                type="button"></button>
              <h2 className="popup__title popup__title_add">Новое место</h2>
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
              <button className="popup__button-save popup__button-save_add" type="submit">
                Создать
              </button>
            </form>
          </div>
        </section>

        <section className="popup popup-type-delete-cards">
          <div className="popup__container">
            <form className="popup__form-edit" method="post" novalidate>
              <button
                className="popup__button-close popup__button-close_add popup__close"
                type="button"></button>
              <h2 className="popup__title popup__title_delete">Вы уверены?</h2>

              <button className="popup__button-save popup__button-save_delete" type="submit">
                Да
              </button>
            </form>
          </div>
        </section>

        <section className="popup popup_edit_avatar">
          <div className="popup__container">
            <form className="popup__form-edit popup__form-edit-avatar" method="post" novalidate>
              <button
                className="popup__button-close popup__close"
                onClick={() => editPopupAvatar.classList.remove('popup_opened')}
                type="button"></button>
              <h2 className="popup__title">Обновить аватар</h2>
              <div className="popup__block">
                <input
                  className="popup__input popup__input-description popup__input-description_add"
                  type="url"
                  name="link"
                  placeholder="Ссылка на картинку"
                  required
                />
                <span className="popup__input-error"></span>
              </div>
              <button className="popup__button-save popup__button-save_add" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </section>

        <section className="popup popup-FullScreen">
          <div className="popup__container popup__container-FullScreen">
            <img className="popup__img-FullScreen" src="/" alt="/" />
            <h2 className="popup__title popup__name-FullScreen">1</h2>
            <button
              className="popup__button-close popup__close-FullScreen popup__close"
              type="button"></button>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
