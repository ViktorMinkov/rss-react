import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Popup from './Popup';

describe('Popup test', () => {
  test('render Popup component', () => {
    render(<Popup text="Popup" isPopupOpen={true} />);
    expect(screen.getByText(/popup/i)).toBeInTheDocument();
  });
  test('check classes after Popup open', () => {
    render(<Popup text="Popup" isPopupOpen={true} />);
    const popupWrapper = screen.getByRole('popup');
    expect(popupWrapper).toHaveClass('popup open');
  });
  test('check classes after Popup close', () => {
    render(<Popup text="Popup" isPopupOpen={false} />);
    const popupWrapper = screen.getByRole('popup');
    expect(popupWrapper).toHaveClass('popup');
  });
});
