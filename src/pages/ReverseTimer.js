import React, { useState, useEffect } from "react";

function ReverseTimer({ minutes = 0, seconds = 0 }) {
  const [remainingSeconds, setRemainingSeconds] = useState(
    minutes * 60 + seconds
  );

  useEffect(() => {
    if (remainingSeconds > 0) {
      const timer = setTimeout(() => {
        setRemainingSeconds(remainingSeconds - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [remainingSeconds]);

  const displayMinutes = Math.floor(remainingSeconds / 60);
  const displaySeconds = remainingSeconds % 60;

  useEffect(() => {}, []);

  return (
    <div>
      <h3>
        Time left: {displayMinutes}:{displaySeconds < 10 ? "0" : ""}
        {displaySeconds}
      </h3>
    </div>
  );
}

export default ReverseTimer;
