import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hidenPopUp } from "../../state/popUpSlice";
import { RootState } from "../../state/store";
import "./PopUp.scss";

function PopUp() {
  const { month, day } = useSelector((state: RootState) => state.popUp);
  const dispatch = useDispatch();
  return (
    <div className="popUp">
      <div className="popUp_content">
        <button className="closeBtn" onClick={() => dispatch(hidenPopUp())}>
          <span>&#10005;</span>
        </button>
        <div className="content_month">
          <h3>Month</h3>
          <p>{month}</p>
        </div>
        <div className="content_day">
          <h3>Day</h3>
          <p>{day}</p>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
