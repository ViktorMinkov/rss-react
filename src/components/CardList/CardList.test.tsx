import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import CardList from './CardList';
import mockData from 'tests/mocks/mockData';

describe('CardList test', () => {
  test('render CardList component', () => {
    render(<CardList characters={mockData.results} />);
    expect(screen.getAllByText(/morty smith/i).length).toEqual(2);
  });
});
