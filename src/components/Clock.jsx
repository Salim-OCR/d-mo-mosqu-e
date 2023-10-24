import React, { useState, useEffect } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  return (
    <div className="clock">
      <div className="time">
        <span>{hours < 10 ? `0${hours}` : hours}</span>
        <span>:</span>
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
        <span>:</span>
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
}

export default Clock;
