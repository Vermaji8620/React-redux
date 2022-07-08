// sb kch ko connect krne k liye store banaya gaya hai, jo ki reducer leta hai aur sb kch arrange krke deta hai

import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const store = legacy_createStore(reducers, {}, applyMiddleware(thunk));
