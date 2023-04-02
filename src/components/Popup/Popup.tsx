import React, { FC } from 'react';
import './Popup.scss';

type PopupProps = {
  text: string;
  isPopupOpen: boolean;
};

const Popup: FC<PopupProps> = (props) => {
  const { text, isPopupOpen } = props;
  return (
    <div className={isPopupOpen ? 'popup open' : 'popup'} role="popup">
      <div className="popup__content">{text}</div>
    </div>
  );
};

export default Popup;
