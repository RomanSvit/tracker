import React from "react";
import "./ListTrackes.css";
// import Timer from "../timer/Timer";
const moment = require("moment");
const shortid = require("shortid");

const ListTrackers = ({
  props,
  handlerClickTogle,
  handlerClickDelete,
}) => {

  return (
    <>
      <ul className="list-tracks">
        {props.map((elem, ind) => {
          // console.log(elem)
          const time = moment({
            hour: elem.hour,
            minute: elem.minute,
            second: elem.second,
          });
          return (
            <li key={elem.id + ind} className="list-tracks-item" id={elem.id}>
              <p>{elem.name}</p>

              <p>{`${time._i.hour >= 10 ? time._i.hour : "0" + time._i.hour}:${
                time._i.minute >= 10 ? time._i.minute : "0" + time._i.minute
              }:${
                time._i.second >= 10 ? time._i.second : "0" + time._i.second
              }`}</p>
              <div className="block-btn">
                <button
                  key={shortid()}
                  className={
                    elem.start ? "btn-track stoptimer" : "btn-track playtimer"
                  }
                  onClick={handlerClickTogle}
                ></button>
                <button
                  key={shortid()}
                  className="btn-track del"
                  onClick={handlerClickDelete}
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListTrackers;
