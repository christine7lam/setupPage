import { combineReducers } from "redux";
import createReducer from "./create/reducer";

const reducers = combineReducers({
  create: createReducer
});

export default reducers;
