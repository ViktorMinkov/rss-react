import React, { FC } from 'react';
import { Path, UseFormRegister } from 'react-hook-form/dist/types';
import { IFormData } from 'types';

type InputRadioProps = {
  title: string;
  inputName: Path<IFormData>;
  data: string[];
  register: UseFormRegister<IFormData>;
  inputError: string;
};

const InputRadio: FC<InputRadioProps> = (props) => {
  const { data, title, inputError, inputName, register } = props;
  return (
    <div className="form__input-wrapper">
      <div className="form__gender">
        <div className="form__title">{title}:</div>
        <div className="form__radio-wrapper">
          {data.map((value, index) => (
            <div className="form__radio-item" key={index}>
              <div className="form__label">{value}</div>
              <input
                className="form__input"
                type="radio"
                defaultValue={value}
                {...register(inputName, { required: `${title} field is required` })}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="form__error">{inputError}</div>
    </div>
  );
};

export default InputRadio;
