// import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks/taskSlice";
import employeeReducer from "./employeeSlice";

const store = configureStore({ 
    reducer: {                      // Storing the reducers at the store
        tasks: taskReducer,
        employees: employeeReducer,
    }
});

export default store;

// const composedEnhancers = compose(applyMiddleware(thunk), devToolsEnhancer({ trace: true }));

// const store = createStore(reducer, composedEnhancers);

// applyMiddleware(thunk): This is an old method of calling APIs in Redux.

// The createStore() function (before Redux Toolkit) accepts up to three parameters:

// createStore(reducer, [preloadedState], [enhancer])

// The second argument of createStore() should be either a preloadedState or an enhancer.

// applyMiddleware(thunk) and devToolsEnhancer({ trace: true }) both act as enhancers, 
// but createStore() only accepts one enhancer function.