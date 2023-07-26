import { useEffect } from "react";
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
};
function Timer({ dispatch, timeToComplete }) {
  useEffect(
    function () {
      const timer = setTimeout(() => {
        if (timeToComplete > 0) dispatch({ type: "decrementTimer" });
        else dispatch({ type: "timeOut" });
      }, 1000);

      return () => clearTimeout(timer);
    },
    [dispatch, timeToComplete]
  );
  return <div className="btn w-fit">{formatTime(timeToComplete)}</div>;
}

export default Timer;
