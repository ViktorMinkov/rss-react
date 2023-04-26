import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import FormPage from './FormPage';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureAppStore from '@/store/store';

const store = configureAppStore();

describe('FormPage test', () => {
  const inputsAmount = 7;
  const mockImage = new File(['test'], 'test.png', { type: 'image/png' });
  const testData = {
    title: 'Form page',
    name: 'Viktor',
    gender: 'Male',
    status: 'Alive',
    species: 'Human',
    date: '2023-03-25',
    image: mockImage,
  };
  beforeEach(() => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
  });
  test('render FormPage component', () => {
    expect(screen.getByText(/form page/i)).toBeInTheDocument();
  });
  test('sumbit button works', async () => {
    const sumbitBtn = screen.getByRole<HTMLOptionElement>('button');
    await userEvent.click(sumbitBtn);
    const errors = screen.getAllByText(/is required/i);
    expect(errors.length).toBe(inputsAmount);
  });
  test('check render cards after form sumbit', async () => {
    window.URL.createObjectURL = vi.fn(() => 'image/fake.jpeg');
    const inputName = screen.getByRole<HTMLInputElement>('textbox');
    const inputGenders = screen.getAllByRole<HTMLInputElement>('radio');
    const inputSelect = screen.getAllByRole<HTMLSelectElement>('combobox');
    const [inputSpecies, inputStatus] = inputSelect;
    const selectOptions = screen.getAllByRole<HTMLOptionElement>('option');
    const speciesOptions = selectOptions.slice(0, 4);
    const statusOptions = selectOptions.slice(4);
    const inputDate = screen.getByRole<HTMLInputElement>('datePicker');
    const inputImage = screen.getByRole<HTMLInputElement>('inputImg');
    const inputAgreement = screen.getByRole<HTMLInputElement>('checkbox');
    const submitBtn = screen.getByRole<HTMLInputElement>('button');
    await userEvent.type(inputName, testData.name);
    await userEvent.click(inputGenders[0]);
    await userEvent.selectOptions(inputSpecies, speciesOptions[1]);
    await userEvent.selectOptions(inputStatus, statusOptions[1]);
    await userEvent.type(inputDate, testData.date);
    await userEvent.upload(inputImage, testData.image);
    await userEvent.click(inputAgreement);
    await userEvent.click(submitBtn);
    const formCards = screen.getAllByRole('formcard');
    expect(formCards.length).toBe(1);
  });
  test('check reset form after succesfull sumbit', async () => {
    window.URL.createObjectURL = vi.fn(() => 'image/fake.jpeg');
    const inputName = screen.getByRole<HTMLInputElement>('textbox');
    const inputGenders = screen.getAllByRole<HTMLInputElement>('radio');
    const inputSelect = screen.getAllByRole<HTMLSelectElement>('combobox');
    const [inputSpecies, inputStatus] = inputSelect;
    const selectOptions = screen.getAllByRole<HTMLOptionElement>('option');
    const speciesOptions = selectOptions.slice(0, 4);
    const statusOptions = selectOptions.slice(4);
    const inputDate = screen.getByRole<HTMLInputElement>('datePicker');
    const inputImage = screen.getByRole<HTMLInputElement>('inputImg');
    const inputAgreement = screen.getByRole<HTMLInputElement>('checkbox');
    const submitBtn = screen.getByRole<HTMLInputElement>('button');
    await userEvent.type(inputName, testData.name);
    await userEvent.click(inputGenders[0]);
    await userEvent.selectOptions(inputSpecies, speciesOptions[1]);
    await userEvent.selectOptions(inputStatus, statusOptions[1]);
    await userEvent.type(inputDate, testData.date);
    await userEvent.upload(inputImage, testData.image);
    await userEvent.click(inputAgreement);
    await userEvent.click(submitBtn);
    expect(inputName.value).toBeFalsy();
    expect(inputAgreement).not.toBeChecked();
  });
});
