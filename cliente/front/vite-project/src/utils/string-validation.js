export const isNullOrEmpty = (str) => {
  const trimmed = str.trim();
  return trimmed == "" || trimmed == null;
};
