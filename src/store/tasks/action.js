import * as actionTypes from "./actionTypes"; // importing all action types from actionTypes.js file 

// "ADD_TASK" action function, taking the task to be added as its argument 
// This action function will be dispatched to the reducer in the store when the user 
// clicks the "Add Task" button in the app

export const addTask = (task) => {
    return {type: actionTypes.ADD_TASK, payload: {task: task}}
}

// "REMOVE_TASK" action function, taking the id of the task to be removed, 
// as an argument.
// This action function will be dispatched to the reducer in the store when the user
// clicks the "Remove Task" button in the app

export const removeTask = (id) => {
    return {type: actionTypes.REMOVE_TASK, payload: {id: id}}
}

// "TASK_COMPLETED" action function, taking the id of the task that got completed, 
// as an argument.
// This action function will be dispatched to the reducer in the store when the user
// clicks the "Task Completed" button in the app.

export const completedTask = (id) => {
    return {type: actionTypes.TASK_COMPLETED, payload: {id: id}}
}

// Action function to call API

export const fetchTodo = () => async function(dispatch) {      // Thunk function to make API calls 
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const task = await response.json();
            dispatch(addTask(task.title));
};