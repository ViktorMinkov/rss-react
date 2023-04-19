import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import CardList from './CardList';
import mockData from 'tests/mocks/mockData';
import { Provider } from 'react-redux';
import { store } from 'store/store';

describe('CardList test', () => {
  test('render CardList component', () => {
    render(
      <Provider store={store}>
        <CardList characters={mockData.results} />
      </Provider>
    );
    expect(screen.getByText(/morty smith/i)).toBeInTheDocument();
  });
});
