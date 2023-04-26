import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Modal from './Modal';
import { Provider } from 'react-redux';
import configureAppStore from '@/store/store';

const store = configureAppStore();

describe('Modal test', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
  });

  test('render Modal component', () => {
    expect(screen.getByText(/type/i)).toBeInTheDocument();
    expect(screen.getByText(/status/i)).toBeInTheDocument();
    expect(screen.getByText(/gender/i)).toBeInTheDocument();
  });
  test('check condition on the field "type"', () => {
    expect(screen.getByText(/no info/i)).toBeInTheDocument();
  });
});
