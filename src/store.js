import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);     // Storing the reducer in the store

export default store; 