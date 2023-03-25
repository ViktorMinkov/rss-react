import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Card from './Card';
import data from 'utils/data';

const testCharacter = data[0];

describe('Card test', () => {
  test('render Card component', () => {
    render(<Card character={testCharacter} key={testCharacter.id} />);
    expect(screen.getByText(/rick sanchez/i)).toBeInTheDocument();
  });
  test('render image in Card component', () => {
    render(<Card character={testCharacter} key={testCharacter.id} />);
    expect(screen.getByAltText(/rick/i)).toBeInTheDocument();
  });
});
