export const getListOfYear = (startYear) => {
  let currentYear = new Date().getFullYear();
  const years = [];

  const startValueYear = startYear || 1980;
  while (currentYear >= startValueYear) {
    years.push({ value: currentYear, label: currentYear });
    currentYear -= 1;
  }
  return years;
};