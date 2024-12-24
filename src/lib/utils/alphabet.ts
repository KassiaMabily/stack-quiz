export const getOptionLetter = (index: number) => {
  if (index < 0 || index > 25) {
    return new Error('Index must be between 0 and 25');
  }
  return String.fromCharCode(97 + index);
};
