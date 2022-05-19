function App() {
  return (
    <>
      <div className="page">
        <header className="header">
          <img className="header__logo" src="#" alt="Логотип" />
          <div className="header__line"></div>
        </header>
        <main className="content">
          <section className="profile">
            <img
              className="profile__avatar"
              src="<%=require('./images/photo_profile.jpg')%>"
              alt="Аватар профиля"
            />
            <button type="button" className="profile__edit-button-avatar"></button>
            <div className="profile__info">
              <div className="profile__item">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button className="profile__edit-button" type="button"></button>
              </div>
              <h2 className="profile__description">Иследователь океанов</h2>
            </div>
            <button className="profile__add-button" type="button"></button>
          </section>

          <section className="grid-cards">
            <template id="template" className="template">
              <article className="grid-cards__item card">
                <button className="card__button-delete" type="button"></button>
                <div className="card__overlay">
                  <button className="card__open-fullscreen">
                    <img className="card__image" src="/" alt="/" />
                  </button>
                </div>
                <div className="card__block">
                  <h2 className="card__name">1</h2>
                  <button className="card__like" type="button">
                    <p className="card__like_score">0</p>
                  </button>
                </div>
              </article>
            </template>
          </section>
        </main>

        <footer className="footer">
          <p className="footer__copyright">© 2022 Mesto Russia</p>
        </footer>
      </div>

      <div className="popup profile-popup">
        <div className="popup__container">
          <form className="popup__form-edit" method="post" novalidate>
            <button className="popup__button-close popup__close" type="button"></button>
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
      </div>

      <div className="popup popup_add">
        <div className="popup__container popup__container_add">
          <form className="popup__form-edit popup__form-edit_add" method="post" novalidate>
            <button
              className="popup__button-close popup__button-close_add popup__close"
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
      </div>

      <div className="popup popup-type-delete-cards">
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
      </div>

      <div className="popup popup_edit_avatar">
        <div className="popup__container">
          <form className="popup__form-edit popup__form-edit-avatar" method="post" novalidate>
            <button className="popup__button-close popup__close" type="button"></button>
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
      </div>

      <div className="popup popup-FullScreen">
        <div className="popup__container popup__container-FullScreen">
          <img className="popup__img-FullScreen" src="/" alt="/" />
          <h2 className="popup__title popup__name-FullScreen">1</h2>
          <button
            className="popup__button-close popup__close-FullScreen popup__close"
            type="button"></button>
        </div>
      </div>
    </>
  );
}

export default App;
