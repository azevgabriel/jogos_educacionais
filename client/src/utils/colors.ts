const colorMap = [
  '#F15946',
  '#F9C22E',
  '#53B3CB',
  '#E01A4F',
  '#C3E991',
  '#DFCC74',
  '#75485E',
  '#CB904D',
  '#51A3A3',
];

export const randomizeColors = () => {
  const colors = [...colorMap];
  const ramdomizedColorsArr = [];

  while (colors.length > 0) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    ramdomizedColorsArr.push(colors[randomIndex]);
    colors.splice(randomIndex, 1);
  }

  return ramdomizedColorsArr[Math.floor(Math.random() * colorMap.length)];
};
