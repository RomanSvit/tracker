import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { reducer } from "./reducer";

const enhancer = devToolsEnhancer();
const store = createStore(reducer, enhancer);

export default store;
