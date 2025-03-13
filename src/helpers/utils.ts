export const capitalizeFirstLetter = (str: string) => {
  if (!str || str.length < 1) return;
  return str[0]?.toLocaleUpperCase() + str.substring(1).toLocaleLowerCase();
};

export const capitalizeEachWord = (str?: string) => {
  if (!str || str.length < 1) return;
  const words = str.split(" ");
  const fixed = words.map((e) => capitalizeFirstLetter(e));
  return fixed.join(" ");
};