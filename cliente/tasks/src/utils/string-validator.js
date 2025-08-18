export const isValidString = (str) => {
  return str === null || str === undefined || str.trim() === "" ? false : true;
};
