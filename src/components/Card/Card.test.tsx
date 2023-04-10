import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Card from './Card';
import mockData from 'tests/mocks/mockData';

describe('Card test', () => {
  const testCharacter = mockData.results[0];
  beforeEach(() => {
    render(<Card character={testCharacter} key={testCharacter.id} />);
  });
  test('render Card component', () => {
    expect(screen.getAllByText(/rick sanchez/i).length).toEqual(2);
  });
  test('render image in Card component', () => {
    expect(screen.getAllByAltText(/rick/i).length).toEqual(2);
  });
});
