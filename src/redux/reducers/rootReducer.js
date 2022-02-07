import { combineReducers } from "redux";
import { emailReducer } from "./emailReducer";

export const rootReducer = combineReducers({
  email: emailReducer,
});
