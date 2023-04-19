import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Modal from './Modal';
import { Provider } from 'react-redux';
import { store } from 'store/store';

describe('Modal test', () => {
  const closeModal = vi.fn();
  const isModalOpen = true;
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
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
