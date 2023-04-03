import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Modal from './Modal';

describe('InputImage test', () => {
  const closeModal = vi.fn();
  const testChar = {
    id: 1,
    name: 'Test Char',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    image: 'test.png',
    created: '20/5/2022',
  };
  beforeEach(() => {
    render(<Modal character={testChar} closeModal={closeModal} />);
  });

  test('render InputImage component', () => {
    expect(screen.getByText(/test char/i)).toBeInTheDocument();
  });
  test('check condition on the field "type"', () => {
    expect(screen.getByText(/no info/i)).toBeInTheDocument();
  });
});
