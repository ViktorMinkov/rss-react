const validateSelect = (value: string, defaultValue: string, title: string): string | boolean => {
  return value.length && value !== defaultValue ? true : `${title} field is required`;
};

export default validateSelect;
