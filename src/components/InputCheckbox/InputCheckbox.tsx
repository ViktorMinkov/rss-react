import React, { FC } from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { IFormData } from '@/types';

type InputCheckboxProps = {
  text: string;
  register: UseFormRegister<IFormData>;
  inputName: Path<IFormData>;
  inputError: string;
};

const InputCheckbox: FC<InputCheckboxProps> = (props) => {
  const { text, inputError, inputName, register } = props;
  return (
    <div className="form__input-wrapper">
      <div className="form__agreement">
        <input
          className="form__input"
          type="checkbox"
          {...register(inputName, { required: `This field is required` })}
        />
        <div className="form__agreement-text">{text}</div>
      </div>
      <div className="form__error">{inputError}</div>
    </div>
  );
};

export default InputCheckbox;
