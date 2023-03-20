import React from 'react';
import './Form.scss';

class Form extends React.Component {
  sumbitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  render() {
    return (
      <form className="form-page__form form" onSubmit={this.sumbitForm}>
        <div className="form__input-wrapper">
          <label className="form__label" htmlFor="fullname">
            Full name:
          </label>
          <input className="form__input" type="text" id="fullname" />
        </div>
        <div className="form__input-wrapper form__input-wrapper-gender ">
          Gender:
          <div className="form__radio-wrapper">
            <div className="form__radio">
              <label className="form__label">Male</label>
              <input className="form__input" type="radio" name="gender" value="male" />
            </div>
            <div className="form__radio">
              <label className="form__label">Female</label>
              <input className="form__input" type="radio" name="gender" value="female" />
            </div>
          </div>
        </div>
        <div className="form__input-wrapper">
          <label htmlFor="species">Species:</label>
          <select className="form__input" name="species" id="species">
            <option value="human">Human</option>
            <option value="alien">Alien</option>
            <option value="robot">Robot</option>
          </select>
        </div>
        <div className="form__input-wrapper">Status : Alive or not</div>
        <div className="form__input-wrapper">
          <label className="form__label" htmlFor="date">
            Created at:
          </label>
          <input className="form__input" type="date" id="date" />
        </div>
        <div className="form__input-wrapper">
          <label className="form__label" htmlFor="date">
            Image:
          </label>
          <input className="form__input form__input-image" type="file" id="file" accept="image/*" />
        </div>
        <button className="form__btn" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default Form;
