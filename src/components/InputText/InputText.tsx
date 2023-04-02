import React, { FC } from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types';
import { Path } from 'react-hook-form/dist/types/path';
import { IFormInputsName } from 'types';

type InputTextProps = {
  register: UseFormRegister<IFormInputsName>;
  title: string;
  inputName: Path<IFormInputsName>;
  placeholder: string;
  inputError: string;
};

const InputText: FC<InputTextProps> = (props) => {
  const { register, title, placeholder, inputError, inputName } = props;
  return (
    <div className="form__input-wrapper">
      <div className="form__title">{title}:</div>
      <input
        className="form__input"
        type="text"
        placeholder={placeholder}
        {...register(inputName, {
          required: `${title} field is required`,
          pattern: {
            value: /^[A-ZА-Я]/,
            message: 'The first letter must be capitalized',
          },
        })}
      />
      <div className="form__error">{inputError}</div>
    </div>
  );
};

export default InputText;
