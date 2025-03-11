import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./tasks/reducer";

const composedEnhancers = compose(applyMiddleware(thunk), devToolsEnhancer({ trace: true }));

const store = createStore(reducer, composedEnhancers);

export default store;

// applyMiddleware(thunk): This is an old method of calling APIs in Redux.