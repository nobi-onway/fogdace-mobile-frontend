export const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate;
};
export const getCurrentFormattedDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };