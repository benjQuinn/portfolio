import React, { useState, useEffect } from "react";
import moment from "moment";
import "../styles/top-banner.css";

function TopBanner() {
  const date = moment().format("ddd D MMM").toUpperCase();
  const [time, setTime] = useState(moment().format("kk:mm/ss"));

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("kk:mm/ss"));
    }, 1000);
  }, []);

  return (
    <div className="top-banner">
      <span className="top-banner-element">P100</span>
      <span className="top-banner-element">100 CEEFAX</span>
      <span className="top-banner-element">{date}</span>
      <span className="top-banner-element">{time}</span>
    </div>
  );
}

export default TopBanner;
