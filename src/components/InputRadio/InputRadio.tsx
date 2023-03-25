import React from 'react';

type InputRadioDataType = {
  inputValue: string;
  inputRef: React.RefObject<HTMLInputElement>;
};

type InputRadioProps = {
  title: string;
  inputError: string;
  inputName: string;
  data: InputRadioDataType[];
};

class InputRadio extends React.Component<InputRadioProps> {
  render() {
    const { data, title, inputError, inputName } = this.props;
    return (
      <div className="form__input-wrapper">
        <div className="form__gender">
          <div className="form__title">{title}:</div>
          <div className="form__radio-wrapper">
            {data.map((item, index) => (
              <div className="form__radio-item" key={index}>
                <div className="form__label">{item.inputValue}</div>
                <input
                  className="form__input"
                  type="radio"
                  name={inputName}
                  defaultValue={item.inputValue}
                  ref={item.inputRef}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="form__error">{inputError}</div>
      </div>
    );
  }
}

export default InputRadio;
