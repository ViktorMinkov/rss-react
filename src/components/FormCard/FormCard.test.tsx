import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Card from './FormCard';
import mockData from '@/tests/mocks/mockData';

const testCharacter = mockData.results[0];

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
