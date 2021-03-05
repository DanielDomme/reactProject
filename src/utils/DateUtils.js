export default function fullStringDateToShortDate(stringDate) {
  const date = new Date(stringDate);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}
