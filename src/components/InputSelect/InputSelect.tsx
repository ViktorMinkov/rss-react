import React from 'react';

type InputSelectProps = {
  title: string;
  inputError: string;
  options: string[];
  inputRef: React.RefObject<HTMLSelectElement>;
};

class InputSelect extends React.Component<InputSelectProps> {
  render() {
    const { options, title, inputError, inputRef } = this.props;
    return (
      <div className="form__input-wrapper">
        <div className="form__title">{title}:</div>
        <select className="form__input" name={title} ref={inputRef} defaultValue={options[0]}>
          {options.map((option, index) => (
            <option key={index} value={option} disabled={index === 0 && true}>
              {option}
            </option>
          ))}
        </select>
        <div className="form__error">{inputError}</div>
      </div>
    );
  }
}

export default InputSelect;
