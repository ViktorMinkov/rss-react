import React, { FC } from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { IFormData } from '@/types';

type InputDateProps = {
  title: string;
  register: UseFormRegister<IFormData>;
  inputName: Path<IFormData>;
  inputError: string;
};

const InputDate: FC<InputDateProps> = (props) => {
  const { title, inputError, inputName, register } = props;
  return (
    <div className="form__input-wrapper">
      <div className="form__title">{title}:</div>
      <input
        className="form__input"
        type="date"
        role="datePicker"
        {...register(inputName, { required: `${title} field is required` })}
      />
      <div className="form__error">{inputError}</div>
    </div>
  );
};

export default InputDate;
