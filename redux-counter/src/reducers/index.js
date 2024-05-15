import number from "./number";
import color from "./color";
import { combineReducers } from "redux";

// 루트 리듀서
const reducers = combineReducers({
  numberData: number,
  colorData: color,
});

export default reducers;
