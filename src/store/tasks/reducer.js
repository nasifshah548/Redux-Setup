import * as actionTypes from "./actionTypes"; // importing all action types from actionTypes.js file 

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