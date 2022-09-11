import React, { useState, useEffect } from "react";
import moment from "moment";
import "../styles/top-banner.css";

function TopBanner() {
  const date = moment().format("ddd D MMM");
  const [time, setTime] = useState(moment().format("kk:mm/ss"));

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("kk:mm/ss"));
    }, 1000);
  }, []);

  return (
    <div className="top-banner">
      <span>P100</span>
      <span>100 CEEFAX</span>
      <span>{date}</span>
      <span>{time}</span>
    </div>
  );
}

export default TopBanner;
