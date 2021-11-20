import moment from "moment";

export const getSpecificDate = (month: any, dayOfMonth: any, year: any) => {
  return moment(`${month}-${dayOfMonth}-${year}`, "MM-DD-YYYY").toDate();
};
export const getDaysInMonth = (month: any, year: any) => {
  return moment(`${month}-${year}`, "MM-YYYY").daysInMonth();
};
export const getFirstWeekdayOfMonth = (month: any, year: any) => {
  return moment(`${month}-${year}`, "MM-YYYY").startOf("month").weekday();
};
export const getDayOfMonth = (date: any) => moment(date).date();
export const getMonth = (date: any) => moment(date).month();
export const getYear = (date: any) => moment(date).year();
export const getToday = () => moment().toDate();
export const getReadableWeekday = (date: any) => moment(date).format("dddd");
export const getReadableMonthDate = (date: any) => moment(date).format("MMMM Do");
export const getMonthDayYear = (date: any) => moment(date).format("MM-DD-YYYY");
export const getMonthSet = (selectDate: any) => {
  const month = getMonth(selectDate) + 1;
  const result = {
    current: selectDate,
    prev: getSpecificDate(month - 1, 1, getYear(selectDate)),
    next: getSpecificDate(month + 1, 1, getYear(selectDate)),
  };
  if (month === 1) {
    result.prev = getSpecificDate(12, 1, getYear(selectDate) - 1);
  }
  if (month === 12) {
    result.next = getSpecificDate(1, 1, getYear(selectDate) + 1);
  }
  return result;
};
