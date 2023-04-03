import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Form from './Form';
import userEvent from '@testing-library/user-event';

describe('Form test', () => {
  const createCharacterFunc = vi.fn();
  const blob = new Blob(['test.png']);
  const file = new File([blob], 'test.png', { type: 'image/png' });
  const testData = {
    title: 'Form page',
    name: 'Viktor',
    gender: 'Male',
    status: 'Alive',
    species: 'Human',
    date: '2023-03-25',
    image: file,
  };

  beforeEach(() => {
    render(<Form createCharacter={createCharacterFunc} />);
  });
  test('render Form component', () => {
    expect(screen.getByText(/Full name/)).toBeInTheDocument();
    expect(screen.getByText(/Gender/)).toBeInTheDocument();
    expect(screen.getByText(/Species/)).toBeInTheDocument();
    expect(screen.getByText(/Status/)).toBeInTheDocument();
    expect(screen.getByText(/Created/)).toBeInTheDocument();
    expect(screen.getByText(/Image/)).toBeInTheDocument();
    expect(screen.getByText(/data processing/i)).toBeInTheDocument();
  });
  test('check typing in textbox works', async () => {
    const inputText = screen.getByRole<HTMLButtonElement>('textbox');
    await userEvent.type(inputText, testData.name);
    expect(inputText.value.length).toBe(testData.name.length);
  });
});
