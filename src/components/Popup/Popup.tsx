import React, { FC } from 'react';
import './Popup.scss';
import { useAppSelector } from '@/store/hooks';

type PopupProps = {
  text: string;
};

const Popup: FC<PopupProps> = (props) => {
  const { text } = props;
  const { isPopupOpen } = useAppSelector((state) => state.formSlice);
  return (
    <div className={isPopupOpen ? 'popup open' : 'popup'} role="popup">
      <div className="popup__content">{text}</div>
    </div>
  );
};

export default Popup;
