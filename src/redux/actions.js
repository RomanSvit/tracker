export const Type = {
  ADD_TRACKER: "ADD_TRACKER",
  DEL_TRACKER: "DEL_TRACKER",
  PAUSE_TRACKER: "PAUSE_TRACKER",
};

export const addTracker = () => ({
  type: Type.ADD_TRACKER,
});
export const deleteTracker = () => ({
  type: Type.DEL_TRACKER,
});
export const stopTracker = () => ({
  type: Type.PAUSE_TRACKER,
});
