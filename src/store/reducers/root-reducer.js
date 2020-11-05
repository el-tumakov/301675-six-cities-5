import {combineReducers} from "redux";
import {appProcess} from "./app-process/app-process";
import {appData} from "./app-data/app-data";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.PROCESS]: appProcess,
});
