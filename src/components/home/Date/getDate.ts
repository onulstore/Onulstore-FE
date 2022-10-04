export const getTodayDate = () => {
  const nowDate = new Date();

  const year = nowDate.getFullYear();
  const month = nowDate.getMonth();
  const date = nowDate.getDate();
  return [year, month + 1, date];
};
export const getTomorrowDate = () => {
  const [year, month, date] = getTodayDate();
  return [year, month, date + 1];
};
