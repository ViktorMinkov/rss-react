import React from 'react';

type InputDateProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  title: string;
  inputError: string;
};

class InputDate extends React.Component<InputDateProps> {
  render() {
    const { inputRef, title, inputError } = this.props;
    return (
      <div className="form__input-wrapper">
        <div className="form__title">{title}:</div>
        <input className="form__input" type="date" name="date" ref={inputRef} />
        <div className="form__error">{inputError}</div>
      </div>
    );
  }
}

export default InputDate;
