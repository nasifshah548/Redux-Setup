// Middleware Function to show error to the user if there's an error
// Else let the action move to the reducers

const error = (store) => (next) => (action) => {
    if(action.type === "SHOW_ERROR") {
        console.log(action.payload.error);      // If there are errors then showing them to the user at the console
    } 
    else {
        next(action);                           // Else letting the action move to the reducers 
    }
}

export default error; 