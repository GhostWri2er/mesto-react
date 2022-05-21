import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getProfile().then((userData) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    });
  }, []);

  React.useEffect(() => {
    api
      .getCards()
      .then((data) => {
        console.log(data);
        setCards(
          data.map((item) => ({
            id: item._id,
            src: item.link,
            name: item.name,
            likes: item.likes.length,
          })),
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={userAvatar} alt="Аватар профиля" />
        <button
          type="button"
          className="profile__edit-button-avatar"
          onClick={onEditAvatar}></button>
        <div className="profile__info">
          <div className="profile__item">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" onClick={onEditProfile} type="button"></button>
          </div>
          <h2 className="profile__description">{userDescription}</h2>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} type="button"></button>
      </section>
      <section className="grid-cards">
        {cards.map((card) => (
          <Card card={card} key={card.key} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
