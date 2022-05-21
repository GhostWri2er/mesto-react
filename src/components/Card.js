import React from 'react';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="grid-cards__item card">
      <button className="card__button-delete" type="button"></button>
      <div className="card__overlay">
        <button className="card__open-fullscreen" onClick={handleClick}>
          <img className="card__image" src={card.src} alt={card.name} />
        </button>
      </div>
      <div className="card__block">
        <h2 className="card__name">{card.name}</h2>
        <button className="card__like" type="button">
          <p className="card__like_score">{card.likes}</p>
        </button>
      </div>
    </article>
  );
}

export default Card;
