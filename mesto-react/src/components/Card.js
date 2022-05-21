import React from 'react';

function Card({ name, likes, src }) {
  return (
    <article className="grid-cards__item card">
      <button className="card__button-delete" type="button"></button>
      <div className="card__overlay">
        <button className="card__open-fullscreen">
          <img className="card__image" src={src} alt={name} />
        </button>
      </div>
      <div className="card__block">
        <h2 className="card__name">{name}</h2>
        <button className="card__like" type="button">
          <p className="card__like_score">{likes}</p>
        </button>
      </div>
    </article>
  );
}

export default Card;
