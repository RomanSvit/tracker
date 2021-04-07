import React from "react";
import "./ListTrackes.css";
const moment = require("moment");
const shortid = require("shortid");

const ListTrackers = ({
  props,
  handlerClickStop,
  handlerClickPlay,
  handlerClickDelete,
}) => {
  return (
    <>
      <ul className="list-tracks">
        {props.map((elem, ind) => {
          const time = moment({
            hour: elem.hour,
            minute: elem.minute,
            second: elem.second,
          });
          return (
            <li
              key={elem.id + ind}
              className="list-tracks-item"
              style={elem.start ? { color: "green" } : { color: "black" }}
              id={elem.id}
            >
              <p>{elem.name}</p>

              <p>{`${time._i.hour >= 10 ? time._i.hour : "0" + time._i.hour}:${
                time._i.minute >= 10 ? time._i.minute : "0" + time._i.minute
              }:${
                time._i.second >= 10 ? time._i.second : "0" + time._i.second
              }`}</p>
              <div className="block-btn">
                {elem.start ? (
                  <button
                    key={shortid()}
                    className="btn-track stoptimer"
                    onClick={handlerClickStop}
                  ></button>
                ) : (
                  <button
                    key={shortid()}
                    className="btn-track playtimer"
                    onClick={handlerClickPlay}
                  ></button>
                )}
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
