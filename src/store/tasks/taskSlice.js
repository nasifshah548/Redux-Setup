import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../middleware/api";

// MUTABLE STATE

// Using the Immer.js library from Redux Toolkit to mutate the state

// Using createSlice() built-in Redux Toolkit function to create the reducer functions

const taskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [], loading: false },
  reducers: {
    // Action Functions
    getTasks: (state, action) => {
      state.tasks = action.payload.tasks; // Update state
      state.loading = false; // Stop loading after fetching
    },
    addTask: (state, action) => {
      // Ensure state.tasks is always an array
      if (!state.tasks) {
        state.tasks = []; // If tasks is undefined, initialize it as an empty array
      }
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    completedTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index].completed = action.payload.completed;
      }
    },
    // Define apiRequested and apiRequestedFailed
    apiRequested: (state) => {
      state.loading = true; // Set loading to true when the API request starts
    },
    apiRequestedFailed: (state) => {
      state.loading = false; // Set loading to false if the API request fails
    },
  },
});

//  console.log(taskSlice);

export const {
  apiRequested,
  apiRequestedFailed,
  addTask,
  removeTask,
  completedTask,
  getTasks,
} = taskSlice.actions; // Exporting the actions

export default taskSlice.reducer; // Exporting all the reducers as a single chunck

// Action Creators
const url = "/tasks";

// Custom Middlware for API

export const loadTasks = () => (dispatch) => {
  dispatch(apiRequested()); // Trigger loading state

  dispatch(
    // Connecting to Backend
    apiCallBegan({
      url, // This is the URL '/tasks', which corresponds to the `/api/tasks` endpoint at the backend
      onStart: apiRequested.type, // Dispatch this action when the API request starts (sets loading to true)
      onSuccess: getTasks.type, // Dispatch this action on successful response (store tasks in the state)
      onError: apiRequestedFailed.type, // Dispatch this action on error (sets loading to false)
    })
  );
};

export const addNewTask = (task) =>
  apiCallBegan({
    url,
    method: "POST",
    data: task,
    onSuccess: addTask.type, // This will update the task after the API request succeeds
  });

export const updateCompleted = (task) =>
  apiCallBegan({
    url: `${url}/${task.id}`,
    method: "PATCH",
    data: task,
    onSuccess: completedTask.type,
  });

export const deleteTask = (task) =>
  apiCallBegan({
    url: `${url}/${task.id}`,
    method: "DELETE",
    onSuccess: removeTask.type,
  });

/*

// MUTABLE STATE

// Using the Immer.js library from Redux Toolkit to mutate the state

let id = 0;

export default createReducer([], {
    "ADD_TASK": (state, action) => {
        state.push({
            id: ++id,                           // Generating a new id by incrementing the id number cause we're adding a new task with new id
                task: action.payload.task,      // passing the task property in the payload object with the action
                completed: false,               // Setting up a boolean depending on task completed or not, will change to true when task completed
        })
    },
    "REMOVE_TASK": (state, action) => {
        const index = state.findIndex(task => task.id === action.payload.id)
        state.splice(index, 1)
    },
    "TASK_COMPLETED": (state, action) => {
        const index = state.findIndex(task => task.id === action.payload.id)
        state[index].completed = true; 
    }
})  

*/

// IMMUTABLE STATE

/*

let id = 0;

export default function reducer(state = [], action) {
    if(action.type === actionTypes.ADD_TASK) {
        return [
            ...state,                           // state has all property values of our task 
            {
                id: ++id,                       // Generating a new id by incrementing the id number cause we're adding a new task with new id
                task: action.payload.task,      // passing the task property in the payload object with the action
                completed: false,               // Setting up a boolean depending on task completed or not, will change to true when task completed

            }
        ]
    }

    else if(action.type === actionTypes.REMOVE_TASK) {
        return state.filter(task => task.id !== action.payload.id)  // Removing the task 
    }

    // When the task gets completed, the user clicks the Task Completed button 
    // and that triggers the "TASK_COMPLETED" action and the action gets dispatched
    // to the reducer and then at the reducer switches the completed boolean from
    // false to true.

    else if(action.type === actionTypes.TASK_COMPLETED) {   // If the type of the action triggered is "TASK_COMPLETED"
        return state.map((task) => 
        task.id === action.payload.id                       // If the ID matches change from false to true
            ?{
                ...task,                                    // Whole task object containing all its properties
                completed: true,                            // Switching completed from false to true 
            }
            : task                                          // Else return the task object as it is without changing any properties 
        )
    }

    else return state;                                      // Returning the original state if no action matches 
}

*/
