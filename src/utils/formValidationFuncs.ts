const ERROR_TEXT = 'field is required';

export const validateName = (value: string) => {
  const nameRegexp = /^[A-ZА-Я]/;
  return value.length > 0 && value.match(nameRegexp) ? '' : ERROR_TEXT;
};

export const validateGender = (maleChecked: boolean, femaleChecked: boolean) => {
  return maleChecked || femaleChecked ? '' : ERROR_TEXT;
};

export const validateSelect = (value: string, defaultValue: string) => {
  return value.length && value !== defaultValue ? '' : ERROR_TEXT;
};
export const validateDate = (value: string) => {
  return value.length ? '' : ERROR_TEXT;
};

export const validateImage = (imgValue: string) => {
  return imgValue ? '' : ERROR_TEXT;
};

export const validateAgreement = (checked: boolean) => {
  return checked ? '' : ERROR_TEXT;
};
