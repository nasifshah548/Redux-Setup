import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./tasks/reducer";

const store = createStore(reducer, applyMiddleware(thunk));     // Storing the reducer in the store

export default store; 

// applyMiddleware(thunk): This is an old method of calling APIs in Redux.