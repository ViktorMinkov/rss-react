import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Card from './Card';
import mockData from 'tests/mocks/mockData';
import { Provider } from 'react-redux';
import configureAppStore from 'store/store';

const store = configureAppStore();

describe('Card test', () => {
  const testCharacter = mockData.results[0];
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Card character={testCharacter} key={testCharacter.id} />
      </Provider>
    );
  });
  test('render Card component', () => {
    expect(screen.getByText(/rick sanchez/i)).toBeInTheDocument();
  });
  test('render image in Card component', () => {
    expect(screen.getByAltText(/rick sanchez/i)).toBeInTheDocument();
  });
});
