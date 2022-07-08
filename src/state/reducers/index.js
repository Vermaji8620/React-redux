// jaroori nai hai ki- ek hi reducer ho...bhot sare reducer skta hai....to sbhi reducer ko combine krne k liye hm combinereducer ka use krte hai

import { combineReducers } from "redux";
import amountreducer from "./amountreducer";

const reducer = combineReducers({
  amount: amountreducer,  // yaha pe ye jo amount hai wo ek state hai...aur amountreducer jo hai wo use state yani ki amount ko change krne k liye hai
});

export default reducer;

