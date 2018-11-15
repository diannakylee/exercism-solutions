export const isLeap = (year) => {
  // if the year is divisible by 4 but not divisible by 100 OR it's divisible by 400 (which is divisible by 4, it is a leap year)
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return true;
  }
};
