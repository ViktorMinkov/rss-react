import React from 'react';
import './Popup.scss';

type PopupProps = {
  text: string;
  isPopupOpen: boolean;
};

class Popup extends React.Component<PopupProps> {
  render() {
    const { text, isPopupOpen } = this.props;
    return (
      <div className={isPopupOpen ? 'popup open' : 'popup'}>
        <div className="popup__content">{text}</div>
      </div>
    );
  }
}

export default Popup;
