let int;
export const goTracker = (item) => (dispatch, getState) => {
  int = setInterval(() => {
    dispatch({
      type: "RUN_TIMER",
      payload: {
        ...item,
        interval: int,
      },
    });
  }, 1000);
};
