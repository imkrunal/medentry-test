export const calculatePercentage = (point: number) => {
  const limit = 3000;

  return (point / limit) * 100;
};
