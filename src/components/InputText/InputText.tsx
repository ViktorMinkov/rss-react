import React from 'react';

type InputTextProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  title: string;
  inputError: string;
};

class InputText extends React.Component<InputTextProps> {
  render() {
    const { inputRef, title, inputError } = this.props;
    return (
      <div className="form__input-wrapper">
        <div className="form__title">{title}:</div>
        <input className="form__input" type="text" name="name" ref={inputRef} placeholder={title} />
        <div className="form__error">{inputError}</div>
      </div>
    );
  }
}

export default InputText;
