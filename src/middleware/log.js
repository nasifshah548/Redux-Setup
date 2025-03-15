// Middleware Function

const log = store => next => action => {  // Every Middleware function takes three parameters: store, next and action
   // console.log(store);
    console.log(next);
   // console.log(action);

   next(action);
}

export default log; 

// We're using the curry method here. That's why the parameters look like this "store => next => action" 
// instead of this "(store, next, action)". 