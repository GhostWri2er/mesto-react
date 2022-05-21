import React from 'react';

function PopupWithForm(props) {
  return (
    <section className={`popup ${props.name}-popup ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <form
          className={`popup__form-edit popup__form-edit-${props.name}`}
          method="post"
          name={`${props.name}`}
          novalidate>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button
            className={`popup__button-close popup__button-close-${props.name} popup__close`}
            onClick={props.onClose}
            type="button"></button>

          <button className={`popup__button-save popup__button-save-${props.name}`} type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
