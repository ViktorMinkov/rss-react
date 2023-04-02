import React, { FC } from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { Path } from 'react-hook-form/dist/types/path';
import { IFormInputsName } from 'types';
import validateSelect from 'utils/validateSelect';

type InputSelectProps = {
  title: string;
  data: string[];
  register: UseFormRegister<IFormInputsName>;
  inputName: Path<IFormInputsName>;
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
          validate: (value: string) => validateSelect(value, data[0], title),
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
