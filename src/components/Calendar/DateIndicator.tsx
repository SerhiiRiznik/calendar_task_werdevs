import React from "react";
import { createCalendar } from "./createCalendar";
import "./Calendar.scss";
import {
  getDayOfMonth,
  getMonth,
  getMonthDayYear,
  getToday,
  getYear,
} from "./utils";
import moment from "moment";
import { useDispatch } from "react-redux";
import { showPopUp } from "../../state/popUpSlice";

const DateIndicator = ({ selectDate, setSelectDate }: any) => {
  const dispatch = useDispatch();
  const changeDate = (e: any) => {
    setSelectDate(e.target.getAttribute("data-date"));
    dispatch(
      showPopUp({
        month: moment(e.target.getAttribute("data-date")).format("MMMM"),
        day: moment(e.target.getAttribute("data-date")).format("Do dddd"),
      })
    );
  };
  const datesInMonth = createCalendar(
    getMonth(selectDate) + 1,
    getYear(selectDate)
  );
  const monthDates = datesInMonth.map((i, key) => {
    const selected =
      getMonthDayYear(selectDate) === getMonthDayYear(i.date) ? "selected" : "";
    const active =
      moment(i.date).format("MMM Do YY") ===
      moment(getToday()).format("MMM Do YY")
        ? "active"
        : "";
    const before = i.currentMonth ? "" : "before";

    return (
      <div
        className={`date ${selected} ${active} ${before}`}
        data-active-month={i.currentMonth}
        data-date={i.date.toString()}
        key={key}
        onClick={changeDate}
      >
        {getDayOfMonth(i.date)}
      </div>
    );
  });
  return <div className="dates">{monthDates}</div>;
};

export default DateIndicator;
