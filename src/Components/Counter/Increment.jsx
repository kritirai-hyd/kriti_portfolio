import React from "react";
import CountUp from "react-countup";

export default function Increment({ number, title }) {
  return (
    <div className="number">
      <CountUp duration={10} className="counter" end={number} />
      <span>{title}</span>
    </div>
  );
}
