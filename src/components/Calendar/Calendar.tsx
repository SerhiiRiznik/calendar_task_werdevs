// import moment from "moment";
import React, { useState } from "react";
import "./Calendar.scss";
import moment from "moment";
import DateIndicator from "./DateIndicator";
import { getMonthSet } from "./utils";

const Calendar = () => {
  const [selectDate, setSelectDate] = useState(moment().toDate());
  const changeDate = (event: any) => {
    setSelectDate(event.target.getAttribute("data-date"));
  };
  const monthSet = getMonthSet(selectDate);
  return (
    <div className="calendar_container">
      <div className="calendar_header">
        <div
          className="arr left"
          data-date={monthSet.prev}
          onClick={changeDate}
        ></div>
        <div className="calendar_header_data">
          <h2>{moment(selectDate).format("MMMM").toUpperCase()}</h2>
          <h2>{moment(selectDate).year()}</h2>
        </div>
        <div
          className="arr right"
          data-date={monthSet.next}
          onClick={changeDate}
        ></div>
      </div>
      <DateIndicator selectDate={selectDate} setSelectDate={setSelectDate} />
      <div className="days">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index} className="day-weeks">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
