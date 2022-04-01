export const dateMask = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.target.maxLength = 10;
  let { value } = e.target;

  if (!value.match(/^(\D{2})\/(\D{2})\/(\D{4})/)) {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1/$2');
    e.target.value = value;
  }

  return e;
};
