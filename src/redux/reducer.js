import { Type } from "./actions";

const initialState = [
  {
    hour: 0,
    id: "jYzVd2VnI",
    interval: 64,
    minute: 0,
    name: " 03-10-2021 04:22:13",
    second: 5,
    start: true,
  },
];

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Type.ADD_TRACKER:
      return [{ ...payload }, ...state];
    case Type.GET_TRACKERS_LIST:
      return payload ? payload : state;
    case Type.PAUSE_TRACKER:
      console.log(payload, "reducerPause");
      const newList = [...state];
      newList.map((elem) =>
        elem.id === payload ? (elem.start = false) : elem.start
      );
      return newList;
    case Type.PLAY_TRACKER:
      console.log(payload, "reducerPlay");
      const newArr = [...state];
      newArr.map((elem) =>
        elem.id === payload ? (elem.start = true) : elem.start
      );
      return newArr;
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
        elem.id === payload.id
          ? { ...currentItem, interval: payload.interval }
          : elem
      );
    default:
      return state;
  }
};
