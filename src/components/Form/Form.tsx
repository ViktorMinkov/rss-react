import InputCheckbox from 'components/InputCheckbox';
import InputDate from 'components/InputDate';
import InputImage from 'components/InputImage';
import InputRadio from 'components/InputRadio';
import InputSelect from 'components/InputSelect';
import InputText from 'components/InputText';
import React from 'react';
import { ICard } from 'types';
import './Form.scss';

const ERROR_TEXT = 'field is required';

const speciesOptions = ['Choose species', 'Human', 'Alien', 'Robot'];
const statusOptions = ['Choose status', 'Alive', 'Dead'];

type FormProps = {
  createCharacter: (character: ICard) => void;
};
interface FormState {
  inputNameError: string;
  inputGenderError: string;
  inputSpeciesError: string;
  inputStatusError: string;
  inputDateError: string;
  inputImageError: string;
  inputAgreementError: string;
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
  formRef: React.RefObject<HTMLFormElement>;

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
    this.formRef = React.createRef();
    this.state = {
      inputNameError: '',
      inputGenderError: '',
      inputSpeciesError: '',
      inputStatusError: '',
      inputDateError: '',
      inputImageError: '',
      inputAgreementError: '',
    };
  }

  validateName = () => {
    const nameRegexp = /^[A-ZА-Я]/;
    if (this.inputNameRef && this.inputNameRef.current) {
      const { value } = this.inputNameRef.current;
      return value.length > 0 && value.match(nameRegexp) ? '' : ERROR_TEXT;
    }
    return ERROR_TEXT;
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
      return maleChecked || femaleChecked ? '' : ERROR_TEXT;
    }
    return ERROR_TEXT;
  };
  validateSpecies = () => {
    if (this.inputSpeciesRef && this.inputSpeciesRef.current) {
      const { value } = this.inputSpeciesRef.current;
      return value.length && value !== speciesOptions[0] ? '' : ERROR_TEXT;
    }
    return ERROR_TEXT;
  };
  validateStatus = () => {
    if (this.inputStatusRef && this.inputStatusRef.current) {
      const { value } = this.inputStatusRef.current;
      return value.length && value !== statusOptions[0] ? '' : ERROR_TEXT;
    }
    return ERROR_TEXT;
  };
  validateDate = () => {
    if (this.inputDateRef && this.inputDateRef.current) {
      const { value } = this.inputDateRef.current;
      return value.length ? '' : ERROR_TEXT;
    }
    return ERROR_TEXT;
  };
  validateImage = () => {
    const imageRef = this.inputImageRef;
    // return this.inputImageRef?.current?.files?.length ? '' : ERROR_TEXT;
    if (imageRef && imageRef.current) {
      return imageRef.current.files && imageRef.current.files.length ? '' : ERROR_TEXT;
    }
    return ERROR_TEXT;
  };
  validateAgreement = () => {
    if (this.inputAgreementRef && this.inputAgreementRef.current) {
      const { checked } = this.inputAgreementRef.current;
      return checked ? '' : ERROR_TEXT;
    }
    return ERROR_TEXT;
  };
  validateForm = () => {
    const inputsErrors = {
      inputNameError: this.validateName(),
      inputGenderError: this.validateGender(),
      inputSpeciesError: this.validateSpecies(),
      inputStatusError: this.validateStatus(),
      inputDateError: this.validateDate(),
      inputImageError: this.validateImage(),
      inputAgreementError: this.validateAgreement(),
    };
    return inputsErrors;
  };
  getInputsValue = () => {
    const name = this.inputNameRef.current?.value || '';
    const status = this.inputStatusRef.current?.value || statusOptions[0];
    const species = this.inputSpeciesRef.current?.value || speciesOptions[0];
    const created = this.inputDateRef.current?.value || '';
    let image = '';
    if (this.inputImageRef.current && this.inputImageRef.current.files) {
      image = URL.createObjectURL(this.inputImageRef.current.files[0]);
    }
    let gender = '';
    if (this.inputMaleRef.current && this.inputFemaleRef.current) {
      if (this.inputMaleRef.current.checked) {
        gender = this.inputMaleRef.current.value;
      }
      if (this.inputFemaleRef.current.checked) {
        gender = this.inputFemaleRef.current.value;
      }
    }
    return {
      name,
      status,
      species,
      gender,
      created,
      image,
    };
  };

  sumbitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = this.validateForm();
    if (Object.values(errors).every((error) => !error)) {
      const inputsValue = this.getInputsValue();
      const newCharacter = { id: Date.now(), ...inputsValue };
      this.props.createCharacter(newCharacter);
      this.resetForm();
    }
    this.setState({ ...this.state, ...errors });
  };

  resetForm = () => {
    this.formRef.current && this.formRef.current.reset();
  };

  render() {
    const inputRadioData = [
      { inputValue: 'Male', inputRef: this.inputMaleRef },
      { inputValue: 'Female', inputRef: this.inputFemaleRef },
    ];
    const {
      inputNameError,
      inputGenderError,
      inputSpeciesError,
      inputStatusError,
      inputDateError,
      inputImageError,
      inputAgreementError,
    } = this.state;
    return (
      <form className="form-page__form form" onSubmit={this.sumbitForm} ref={this.formRef}>
        <InputText
          inputRef={this.inputNameRef}
          title={'Full name'}
          inputError={inputNameError}
          placeholder={'Example: Viktor'}
        />
        <InputRadio
          data={inputRadioData}
          title={'Gender'}
          inputName="gender"
          inputError={inputGenderError}
        />
        <InputSelect
          options={speciesOptions}
          title="Species"
          inputRef={this.inputSpeciesRef}
          inputError={inputSpeciesError}
        />
        <InputSelect
          options={statusOptions}
          title="Status"
          inputRef={this.inputStatusRef}
          inputError={inputStatusError}
        />
        <InputDate inputRef={this.inputDateRef} title={'Created at'} inputError={inputDateError} />
        <InputImage inputRef={this.inputImageRef} title={'Image'} inputError={inputImageError} />
        <InputCheckbox
          inputRef={this.inputAgreementRef}
          text="I agree to data processing"
          inputError={inputAgreementError}
        />
        <button className="form__btn" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default Form;
