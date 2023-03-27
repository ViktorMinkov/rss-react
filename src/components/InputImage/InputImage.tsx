import React, { FC } from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { IFormInputsName } from 'types';

type InputImageProps = {
  title: string;
  register: UseFormRegister<IFormInputsName>;
  inputName: Path<IFormInputsName>;
  inputError: string;
};

const InputImage: FC<InputImageProps> = (props) => {
  const { title, inputError, inputName, register } = props;

  return (
    <div className="form__input-wrapper">
      <div className="form__title">{title}:</div>
      <input
        className="form__input form__input-image"
        type="file"
        accept="image/*"
        role="inputImg"
        {...register(inputName, { required: `${title} field is required` })}
      />
      <div className="form__error">{inputError}</div>
    </div>
  );
};

export default InputImage;
