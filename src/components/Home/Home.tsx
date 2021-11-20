import React from "react";
import Calendar from "../Calendar/Calendar";
import "./Home.scss";

const Home = () => {
  return (
    <main className="home-page">
      <div className="home-page_content">
        <h1>Choose the day for the meeting</h1>
        <h2>
          We encourage you to book your appointment online. This will save you
          time.
        </h2>
      </div>
      <div className="calendar">
        <Calendar />
      </div>
      <div className="home-page_bg"></div>
    </main>
  );
};

export default Home;
