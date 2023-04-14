import InputCheckbox from 'components/InputCheckbox';
import InputDate from 'components/InputDate';
import InputImage from 'components/InputImage';
import InputRadio from 'components/InputRadio';
import InputSelect from 'components/InputSelect';
import InputText from 'components/InputText';
import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types/form';
import { ICharacter, IFormData } from 'types';
import { setCharacters, togglePopup } from 'store/reducers/formReducer';

import './Form.scss';
import { useAppDispatch } from 'store/hooks';

const speciesOptions = ['Choose species', 'Human', 'Alien', 'Robot'];
const statusOptions = ['Choose status', 'Alive', 'Dead'];
const inputRadioData = ['Male', 'Female'];

const Form: FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<IFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const createCharacter = (character: ICharacter) => {
    dispatch(togglePopup(true));
    dispatch(setCharacters(character));
    setTimeout(() => {
      dispatch(togglePopup(false));
    }, 1000);
  };

  const onSubmit: SubmitHandler<IFormData> = (formData) => {
    const image = URL.createObjectURL(formData.image[0]);
    const newData = { ...formData, image };
    const newCharacter = { id: Date.now(), ...newData };
    createCharacter(newCharacter);
  };

  return (
    <form className="form-page__form form" onSubmit={handleSubmit(onSubmit)}>
      <InputText
        title="Full name"
        inputName="name"
        inputError={errors.name?.message || ''}
        placeholder="Example: Viktor"
        register={register}
      />
      <InputRadio
        data={inputRadioData}
        title="Gender"
        inputName="gender"
        inputError={errors.gender?.message || ''}
        register={register}
      />
      <InputSelect
        data={speciesOptions}
        title="Species"
        inputName="species"
        inputError={errors.species?.message || ''}
        register={register}
      />
      <InputSelect
        data={statusOptions}
        title="Status"
        inputName="status"
        inputError={errors.status?.message || ''}
        register={register}
      />
      <InputDate
        title="Created at"
        inputError={errors.created?.message || ''}
        inputName="created"
        register={register}
      />
      <InputImage
        title="Image"
        inputError={errors.image?.message || ''}
        inputName="image"
        register={register}
      />
      <InputCheckbox
        text="I agree to data processing"
        inputError={errors.agreement?.message || ''}
        inputName="agreement"
        register={register}
      />
      <button className="form__btn" type="submit">
        Create
      </button>
    </form>
  );
};

export default Form;
