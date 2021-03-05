import React from "react";

const moment = require("moment");

const Timer = ({ state }) => {
  // console.log(state)
  const time = moment({
    hour: state.hour,
    minute: state.minute,
    second: state.second,
  });
  console.log(time);

  return (
    <>
      <p>{`${time._i.hour >= 10 ? time._i.hour : "0" + time._i.hour}:${
        time._i.minute >= 10 ? time._i.minute : "0" + time._i.minute
      }:${time._i.second >= 10 ? time._i.second : "0" + time._i.second}`}</p>
    </>
  );
};
export default Timer;
