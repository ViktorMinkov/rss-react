import React from 'react';

type InputImageProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  title: string;
  inputError: string;
};

class InputImage extends React.Component<InputImageProps> {
  render() {
    const { inputRef, title, inputError } = this.props;
    return (
      <div className="form__input-wrapper">
        <div className="form__title">{title}:</div>
        <input
          className="form__input form__input-image"
          type="file"
          name="image"
          accept="image/*"
          ref={inputRef}
        />
        <div className="form__error">{inputError}</div>
      </div>
    );
  }
}

export default InputImage;
