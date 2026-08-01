import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Increment({ number }) {
  const [start, setStart] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setStart(true);
    } else {
      setStart(false); 
    }
  }, [inView]);

  return (
    <span ref={ref}>
      {start ? (
        <CountUp key={start} end={number} duration={2} />
      ) : (
        0
      )}
    </span>
  );
}