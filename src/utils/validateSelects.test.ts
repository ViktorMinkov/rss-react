import { describe, test, expect } from 'vitest';
import validateSelect from './validateSelect';

describe('validateSelect func works', () => {
  const title = 'Select';
  test('check if is selected not equal to defaultValue', () => {
    const selectedValue = 'selected';
    const defaultValue = 'default';
    expect(validateSelect(selectedValue, defaultValue, title)).toEqual(true);
  });
  test('check if is selected equal to defaultValue(then we get error)', () => {
    const selectedValue = 'default';
    const defaultValue = 'default';
    expect(validateSelect(selectedValue, defaultValue, title)).toEqual(
      `${title} field is required`
    );
  });
});
