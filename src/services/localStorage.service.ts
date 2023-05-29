export const saveDataInLocalStorage = (propertyName: string, value: string | number | boolean) => {
  localStorage.setItem(propertyName, JSON.stringify(value));
};

export const getValueFromLocalStorage = (propertyName: string) => {
  const value = localStorage.getItem(propertyName);
  if (value) return JSON.parse(value);

  return undefined;
};
