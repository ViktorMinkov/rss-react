import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import CardList from './CardList';
import data from 'utils/charactersData';

describe('CardList test', () => {
  test('render CardList component', () => {
    render(<CardList characters={data} />);
    expect(screen.getAllByText(/morty smith/i).length).toEqual(2);
  });
  test('render CardList component with empty data', () => {
    render(<CardList characters={[]} />);
    expect(screen.queryByText(/morty smith/i)).toBeNull();
    expect(screen.getByText(/no data/i)).toBeInTheDocument();
  });
});
