import { describe, test, expect } from 'vitest';
import {
  validateAgreement,
  validateDate,
  validateGender,
  validateImage,
  validateName,
  validateSelect,
} from './formValidationFuncs';

describe('formValidationFuncs test', () => {
  const ERROR_TEXT = 'field is required';
  describe('validateName func works', () => {
    test('check valid value', () => {
      const testName = 'Viktor';
      expect(validateName(testName)).toEqual('');
    });
    test('check invalid value', () => {
      const uncorrectTestName = 'viktor';
      expect(validateName(uncorrectTestName)).toEqual(ERROR_TEXT);
    });
  });
  describe('validateGender func works', () => {
    test('check if one field is selected', () => {
      const firstInputChecked = true;
      const secondInputChecked = false;
      expect(validateGender(firstInputChecked, secondInputChecked)).toEqual('');
    });
    test('check if no one field is selected', () => {
      const firstInputChecked = false;
      const secondInputChecked = false;
      expect(validateGender(firstInputChecked, secondInputChecked)).toEqual(ERROR_TEXT);
    });
  });
  describe('validateSelect func works', () => {
    test('check if is selected not equal to defaultValue', () => {
      const selectedValue = 'selected';
      const defaultValue = 'default';
      expect(validateSelect(selectedValue, defaultValue)).toEqual('');
    });
    test('check if is selected equal to defaultValue(then we get error)', () => {
      const selectedValue = 'default';
      const defaultValue = 'default';
      expect(validateSelect(selectedValue, defaultValue)).toEqual(ERROR_TEXT);
    });
  });
  describe('validateDate func works', () => {
    test('check if date selected', () => {
      const dateValue = '30.03.2023';
      expect(validateDate(dateValue)).toEqual('');
    });
    test('check if date not selected', () => {
      const dateValue = '';
      expect(validateDate(dateValue)).toEqual(ERROR_TEXT);
    });
  });
  describe('validateImage func works', () => {
    test('check if user choose image', () => {
      const imgPathStr = 'image/image.png';
      expect(validateImage(imgPathStr)).toEqual('');
    });
    test('check if user doesnt choose image', () => {
      const imgPathStr = '';
      expect(validateImage(imgPathStr)).toEqual(ERROR_TEXT);
    });
  });
  describe('validateAgreement func works', () => {
    test('check if checkbox checked', () => {
      const checkboxStatus = true;
      expect(validateAgreement(checkboxStatus)).toEqual('');
    });
    test('check if user doesnt choose image', () => {
      const checkboxStatus = false;
      expect(validateAgreement(checkboxStatus)).toEqual(ERROR_TEXT);
    });
  });
});
