import { timerRun, addTracker, stopTracker } from "./actions";
export const goTracker = (item) => (dispatch) => {
  let int = setInterval(() => {
    dispatch(timerRun(item));
    if (!item.start) clearInterval(int);
  }, 1000);
};
// let interval;
// export const timeMiddleware = (store) => (next) => (action) => (
//   dispatch
// ) => {
//   if (action.type === "RUN_TIMER") {
//     // console.log("timer");
//     interval = setInterval(
//       () =>
//         dispatch({
//           type: "RUN_TIMER",
//           // payload: item,
//         }),
//       1000
//     );
//     store.dispatch({
//       type: "SET_YOUR_INTERVAL",
//       payload: interval,
//     });
//   } else if (action.type === "PAUSE_TRACKER") {
//     //console.log(store);
//     console.log(interval);
//     clearInterval(interval);
//   }
//   next(action);
// };
// export const timerMiddleware = (store) => (next) => (action) => {
//   if (action.type === "START_TIMER") {
//     // console.log("timer");
//     action.interval = setInterval(
//       () => store.dispatch({ type: "TICK", currentTime: Date.now() }),
//       1000
//     );
//     debugger;
//   } else if (action.type === "STOP_TIMER") {
//     //console.log(store);
//     debugger;
//     console.log(action.interval);
//     clearInterval(action.interval);
//   }
//   next(action);
// };
