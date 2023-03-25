import React from 'react';

type InputCheckboxProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  text: string;
  inputError: string;
};

class InputCheckbox extends React.Component<InputCheckboxProps> {
  render() {
    const { inputRef, text, inputError } = this.props;
    return (
      <div className="form__input-wrapper">
        <div className="form__agreement">
          <input className="form__input" type="checkbox" name="agreement" ref={inputRef} />
          <div className="form__agreement-text">{text}</div>
        </div>
        <div className="form__error">{inputError}</div>
      </div>
    );
  }
}

export default InputCheckbox;
