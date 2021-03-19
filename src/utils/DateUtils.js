export function fullStringDateToShortDate(stringDate) {
  const date = new Date(stringDate);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

export function isDateValid(dateToCheck) {
  return (new Date(dateToCheck)).toString() !== 'Invalid Date';
}