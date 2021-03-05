import { Type } from "./actions";

const initialState = [];

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Type.ADD_TRACKER:
      return [{ ...payload, start: "true" }, ...state];
    case Type.GET_TRACKERS_LIST:
      return payload ? payload : state;
    case Type.PAUSE_TRACKER:
      const newList = [...state];
      newList.map((elem) =>
        elem.id === payload ? (elem.start = !elem.start) : elem.start
      );
      return newList;
    case Type.DEL_TRACKER:
      const currentTrackerId = payload.parentElement.parentElement.id;
      return state.filter((elem) => elem.id !== currentTrackerId);

    case Type.RUN_TIMER:
      const currentItem = state.find((elem) => elem.id === payload.id);
      const { hour, minute, second } = currentItem;
      let updateH = hour;
      let updateM = minute;
      let updateS = second;

      const updateTime = () => {
        if (updateM === 60) {
          updateH++;
          updateM = 0;
        }
        if (updateS === 60) {
          updateM++;
          updateS = 0;
        }
        updateS++;
        currentItem.hour = updateH;
        currentItem.minute = updateM;
        currentItem.second = updateS;
      };
      updateTime();
      return state.map((elem) =>
        elem.id === payload.id ? { ...currentItem } : elem
      );
    case "SET_YOUR_INTERVAL":
      return {someInterval: payload,};
    default:
      return state;
  }
};
