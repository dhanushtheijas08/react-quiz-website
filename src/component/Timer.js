import { useEffect, useState } from "react";
const TIME_TO_COMPLETE = 10;
function Timer({ dispatch }) {
  const [defaultTimer, setDefaultTimer] = useState(TIME_TO_COMPLETE);
  useEffect(
    function () {
      const timer = setTimeout(() => {
        if (defaultTimer > 0) setDefaultTimer((prev) => prev - 1);
        else dispatch({ type: "timeOut" });
      }, 1000);

      return () => clearTimeout(timer);
    },
    [defaultTimer, dispatch]
  );
  return <div>{defaultTimer}</div>;
}

export default Timer;
