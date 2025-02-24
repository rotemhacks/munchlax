export const capitalizeFirstLetter = (str: string) => {
  if (!str || str.length < 1) return;
  return str[0]?.toLocaleUpperCase() + str.substring(1).toLocaleLowerCase();
};
