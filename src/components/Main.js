import React, { useState, useEffect, useContext } from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getCards()
      .then((data) => {
        setCards(
          data.map((item) => ({
            _id: item._id,
            src: item.link,
            name: item.name,
            likes: item.likes,
            owner: item.owner,
          })),
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => console.log('error', err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id)).catch((err) =>
        console.log('error', err),
      );
    });
  }

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={currentUser.avatar} alt="Аватар профиля" />
        <button
          type="button"
          className="profile__edit-button-avatar"
          onClick={onEditAvatar}></button>
        <div className="profile__info">
          <div className="profile__item">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" onClick={onEditProfile} type="button"></button>
          </div>
          <h2 className="profile__description">{currentUser.about}</h2>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} type="button"></button>
      </section>
      <section className="grid-cards">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
