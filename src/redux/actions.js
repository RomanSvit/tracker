export const Type = {
  GET_TRACKERS_LIST: "GET_TRACKERS_LIST",
  ADD_TRACKER: "ADD_TRACKER",
  DEL_TRACKER: "DEL_TRACKER",
  PAUSE_TRACKER: "PAUSE_TRACKER",
  RUN_TIMER: "RUN_TIMER",
  // SET_YOUR_INTERVAL: "SET_YOUR_INTERVAL",
};

export const addTracker = (item) => ({
  type: Type.ADD_TRACKER,
  payload: item,
});
export const deleteTracker = (e) => ({
  type: Type.DEL_TRACKER,
  payload: e.target,
});
export const stopTracker = (e) => ({
  type: Type.PAUSE_TRACKER,
  payload: e.target.parentElement.parentElement.id,
});
export const getTrackersList = (trackers) => ({
  type: Type.GET_TRACKERS_LIST,
  payload: trackers,
});
export const timerRun = (item) => ({
  type: Type.RUN_TIMER,
  payload:item,
});

