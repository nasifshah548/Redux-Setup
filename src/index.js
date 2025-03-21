import { add } from "lodash";
import store from "./store";
// import { addTask, removeTask, completedTask, fetchTodo } from ".store/tasks/action";
// import { addEmployee } from "./store/employeeSlice";
// Importing the addTask(), removeTask(), completedTask() and fetchTodo() action functions from the action.js file
// import { apiCallBegan } from "./store/api";
import { getTasks, loadTasks, addNewTask, updateCompleted, deleteTask, removeTask } from "./store/tasks/taskSlice";

// Using Function to call API method

const gettingTasks = async() => {
  // Calling API
  const response = await axios.get("http//localhost:5000/api/tasks");
  console.log(response);

  // Dispatching action
  store.dispatch(getTasks({tasks: response.data}));
};


gettingTasks();

store.dispatch(loadTasks);
// store.dispatch(addNewTask({task: "Complete this exercise"}));
// store.dispatch(updateCompleted({id: 6, completed: true}));        // Updating task status on the Todo list
store.dispatch(deleteTask({id: 6}));                                 // Deleting a Task from the Todo list
store.dispatch(deleteTask({id: 8}));

/* apiCallBegan({
    url: "/tasks",
    onStart: "tasks/apiRequested",
    onSuccess: "getTasks",
    onError: "SHOW_ERROR",
  })


 store.dispatch(apiCallBegan({
  url: "/tasks",
  onStart: "tasks/apiRequested",
  onSuccess: "getTasks",
  onError: "SHOW_ERROR",
})); */ 

// store.dispatch(addEmployee({ name: Emma }));

// store.dispatch({type: "SHOW_ERROR", payload: {error: "User not found"}}) // Will hit the error Middleware before this action
                                                                            // can go to the reducers

/*

// This is the built-in subscribe() of the redux store. If any state at the store 
// changes then this function will run in order to let all the components, subscribed
// to the store, to let know that a state has changed. 

const unsubscribe = store.subscribe(() => {
    console.log("Updated", store.getState())
})

store.dispatch(addTask("Read Book"));   // Dispatching the addTask() action function to the reducer in the store
store.dispatch(addTask("Write Paper"));
console.log(store.getState());

// unsubscribe();
store.dispatch(completedTask(2));

store.dispatch(removeTask(1));           // Dispatching the "REMOVE_TASK" action to the reducer in the store
store.dispatch(fetchTodo());
console.log(store.getState());

/* 

The built-in subscribe function of the Redux store is used to register a callback function that will be executed whenever 
the state in the store changes. This allows components or other parts of the application to respond to state updates.

Purpose of store.subscribe():

1. Listens for State Changes – It enables you to react to changes in the Redux store.
2. Triggers UI Updates – You can use it to manually update the UI when the state changes (though in React applications, 
React-Redux's useSelector or connect is usually preferred).
3. Performs Side Effects – You can execute other logic (such as logging or saving to local storage) whenever the store updates.

Example Usage:

import { createStore } from 'redux';

// A simple reducer
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

// Create the store
const store = createStore(reducer);

// Subscribe to store updates
const unsubscribe = store.subscribe(() => {
  console.log('State updated:', store.getState());
});

// Dispatch an action
store.dispatch({ type: 'INCREMENT' });

// Output: State updated: { count: 1 }

// Unsubscribe if you no longer need to listen
unsubscribe();

Key Points:

- The function you pass to store.subscribe() runs after the state has been updated.
- subscribe does not return the current state; you must call store.getState() inside the callback.
- The function returned by subscribe() can be called to unsubscribe from state updates.

*/