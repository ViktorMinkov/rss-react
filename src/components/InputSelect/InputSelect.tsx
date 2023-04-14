import React, { FC } from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { Path } from 'react-hook-form/dist/types/path';
import { IFormData } from 'types';

type InputSelectProps = {
  title: string;
  data: string[];
  register: UseFormRegister<IFormData>;
  inputName: Path<IFormData>;
  inputError: string;
};

const InputSelect: FC<InputSelectProps> = (props) => {
  const { data, title, inputError, inputName, register } = props;
  return (
    <div className="form__input-wrapper">
      <div className="form__title">{title}:</div>
      <select
        className="form__input"
        defaultValue={data[0]}
        {...register(inputName, {
          validate: (value) => value !== data[0] || `${title} field is required`,
        })}
      >
        {data.map((data, index) => (
          <option key={index} value={data} disabled={index === 0 && true}>
            {data}
          </option>
        ))}
      </select>
      <div className="form__error">{inputError}</div>
    </div>
  );
};

export default InputSelect;
