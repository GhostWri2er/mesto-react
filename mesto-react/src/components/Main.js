import profileAvatar from '../images/photo_profile.jpg';

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={profileAvatar} alt="Аватар профиля" />
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
  );
}

export default Main;