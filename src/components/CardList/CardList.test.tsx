import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import CardList from './CardList';
import data from 'utils/data';

describe('CardList test', () => {
  test('render CardList component', () => {
    render(<CardList data={data} />);
    expect(screen.getByText(/morty smith/i)).toBeInTheDocument();
  });
  test('render CardList component with empty data', () => {
    render(<CardList data={[]} />);
    expect(screen.queryByText(/morty smith/i)).toBeNull();
    expect(screen.getByText(/no data/i)).toBeInTheDocument();
  });
});
