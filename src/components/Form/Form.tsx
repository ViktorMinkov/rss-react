import React from 'react';
import './Form.scss';

type FormProps = Record<string, never>;
interface FormState {
  name: { valid: boolean; focus: boolean };
  gender: { valid: boolean; focus: boolean };
  species: { valid: boolean; focus: boolean };
  status: { valid: boolean; focus: boolean };
  date: { valid: boolean; focus: boolean };
  image: { valid: boolean; focus: boolean };
  agreement: { valid: boolean; focus: boolean };
  // inputNameValid: boolean;
  // inputGenderValid: boolean;
  // inputSpeciesValid: boolean;
  // inputStatusValid: boolean;
  // inputDateValid: boolean;
  // inputImageValid: boolean;
  // inputAgreementValid: boolean;
}

class Form extends React.Component<FormProps, FormState> {
  inputNameRef: React.RefObject<HTMLInputElement>;
  inputMaleRef: React.RefObject<HTMLInputElement>;
  inputFemaleRef: React.RefObject<HTMLInputElement>;
  inputSpeciesRef: React.RefObject<HTMLSelectElement>;
  inputStatusRef: React.RefObject<HTMLSelectElement>;
  inputDateRef: React.RefObject<HTMLInputElement>;
  inputImageRef: React.RefObject<HTMLInputElement>;
  inputAgreementRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.inputNameRef = React.createRef();
    this.inputMaleRef = React.createRef();
    this.inputFemaleRef = React.createRef();
    this.inputSpeciesRef = React.createRef();
    this.inputStatusRef = React.createRef();
    this.inputDateRef = React.createRef();
    this.inputImageRef = React.createRef();
    this.inputAgreementRef = React.createRef();
    this.state = {
      name: { valid: false, focus: false },
      gender: { valid: false, focus: false },
      species: { valid: false, focus: false },
      status: { valid: false, focus: false },
      date: { valid: false, focus: false },
      image: { valid: false, focus: false },
      agreement: { valid: false, focus: false },
      // inputNameValid: false,
      // inputGenderValid: false,
      // inputSpeciesValid: false,
      // inputStatusValid: false,
      // inputDateValid: false,
      // inputImageValid: false,
      // inputAgreementValid: false,
    };
  }

  validateName = () => {
    const nameRegexp = /^[A-Z]/;
    if (this.inputNameRef && this.inputNameRef.current) {
      const { value } = this.inputNameRef.current;
      if (value.length > 0 && value.match(nameRegexp)) {
        return { valid: true, focus: true };
      } else {
        return { valid: false, focus: true };
      }
    }
    return { valid: false, focus: false };
  };
  validateGender = () => {
    if (
      this.inputMaleRef &&
      this.inputMaleRef.current &&
      this.inputFemaleRef &&
      this.inputFemaleRef.current
    ) {
      const maleChecked = this.inputMaleRef.current.checked;
      const femaleChecked = this.inputFemaleRef.current.checked;
      if (maleChecked || femaleChecked) {
        return { valid: true, focus: true };
      } else {
        return { valid: false, focus: true };
      }
    }
    return { valid: false, focus: false };
  };
  validateSpecies = () => {
    if (this.inputSpeciesRef && this.inputSpeciesRef.current) {
      const { value } = this.inputSpeciesRef.current;
      if (value.length) {
        return { valid: true, focus: true };
      } else {
        return { valid: false, focus: true };
      }
    }
    return { valid: false, focus: false };
  };
  validateStatus = () => {
    if (this.inputStatusRef && this.inputStatusRef.current) {
      const { value } = this.inputStatusRef.current;
      if (value.length) {
        return { valid: true, focus: true };
      } else {
        return { valid: false, focus: true };
      }
    }
    return { valid: false, focus: false };
  };
  validateDate = () => {
    if (this.inputDateRef && this.inputDateRef.current) {
      const { value } = this.inputDateRef.current;
      if (value.length > 0) {
        return { valid: true, focus: true };
      } else {
        return { valid: false, focus: true };
      }
    }
    return { valid: false, focus: false };
  };
  validateImage = () => {
    if (this.inputImageRef && this.inputImageRef.current) {
      if (this.inputImageRef.current.files && this.inputImageRef.current.files.length > 0) {
        return { valid: true, focus: true };
      } else {
        return { valid: false, focus: true };
      }
    }
    return { valid: false, focus: false };
  };
  validateAgreement = () => {
    if (this.inputAgreementRef && this.inputAgreementRef.current) {
      const { checked } = this.inputAgreementRef.current;
      if (checked) {
        return { valid: true, focus: true };
      } else {
        return { valid: false, focus: true };
      }
    }
    return { valid: false, focus: false };
  };
  validateForm = () => {
    const newState = {
      name: this.validateName(),
      gender: this.validateGender(),
      species: this.validateSpecies(),
      status: this.validateStatus(),
      date: this.validateDate(),
      image: this.validateImage(),
      agreement: this.validateAgreement(),
    };
    return newState;
  };

  sumbitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newState = this.validateForm();
    if (Object.values(newState).every(({ valid, focus }) => valid && focus)) {
      console.log('create cards');
    }
    this.setState({ ...this.state, ...newState });
  };

  render() {
    const {
      name,
      gender,
      status,
      species,
      date,
      image,
      agreement,
      // inputNameValid,
      // inputGenderValid,
      // inputSpeciesValid,
      // inputStatusValid,
      // inputDateValid,
      // inputImageValid,
      // inputAgreementValid,
    } = this.state;
    return (
      <form className="form-page__form form" onSubmit={this.sumbitForm}>
        <div className="form__input-wrapper">
          <div className="form__title">Full name:</div>
          <input
            className="form__input"
            type="text"
            ref={this.inputNameRef}
            placeholder="Write fullname"
          />
          {!name.valid && name.focus && <div className="form__error">field is required</div>}
        </div>
        <div className="form__input-wrapper">
          <div className="form__gender">
            <div className="form__title">Gender:</div>
            <div className="form__radio-wrapper">
              <div className="form__radio-item">
                <div className="form__label">Male</div>
                <input
                  className="form__input"
                  type="radio"
                  name="gender"
                  value="male"
                  ref={this.inputMaleRef}
                />
              </div>
              <div className="form__radio-item">
                <div className="form__label">Female</div>
                <input
                  className="form__input"
                  type="radio"
                  name="gender"
                  value="female"
                  ref={this.inputFemaleRef}
                />
              </div>
            </div>
          </div>
          {!gender.valid && gender.focus && <div className="form__error">field is required</div>}
        </div>
        <div className="form__input-wrapper">
          <div className="form__title">Species:</div>
          <select className="form__input" name="species" id="species" ref={this.inputSpeciesRef}>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
            <option value="robot">Robot</option>
          </select>
          {!species.valid && species.focus && <div className="form__error">field is required</div>}
        </div>
        <div className="form__input-wrapper">
          <div className="form__title">Status:</div>
          <select className="form__input" name="status" id="status" ref={this.inputStatusRef}>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
          </select>
          {!status.valid && status.focus && <div className="form__error">field is required</div>}
        </div>
        <div className="form__input-wrapper">
          <div className="form__title">Created at:</div>
          <input className="form__input" type="date" id="date" ref={this.inputDateRef} />
          {!date.valid && date.focus && <div className="form__error">field is required</div>}
        </div>
        <div className="form__input-wrapper">
          <div className="form__title">Image:</div>
          <input
            className="form__input form__input-image"
            type="file"
            id="file"
            accept="image/*"
            ref={this.inputImageRef}
          />
          {!image.valid && image.focus && <div className="form__error">field is required</div>}
        </div>
        <div className="form__input-wrapper">
          <div className="form__agreement">
            <input className="form__input" type="checkbox" ref={this.inputAgreementRef} />
            <div className="form__agreement-text">I agree to data processing</div>
          </div>

          {!agreement.valid && agreement.focus && (
            <div className="form__error">field is required</div>
          )}
        </div>
        <button className="form__btn" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default Form;
