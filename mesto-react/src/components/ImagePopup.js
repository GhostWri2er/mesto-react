import React from 'react';

function ImagePopup() {
  return (
    <section className="popup popup-FullScreen">
      <div className="popup__container popup__container-FullScreen">
        <img className="popup__img-FullScreen" src="/" alt="/" />
        <h2 className="popup__title popup__name-FullScreen">1</h2>
        <button
          className="popup__button-close popup__close-FullScreen popup__close"
          type="button"></button>
      </div>
    </section>
  );
}

export default ImagePopup;
