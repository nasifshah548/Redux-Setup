// Updating immutable objects

const employee = {name: "Emma", age: 22}

// Now we need to update the name property, we will update the
// name from Emma to Emily.

const newEmployee = Object.assign({}, employee, {name: "Emily"});

console.log(employee);      // Output: {name: "Emma", age: 22}
console.log(newEmployee);   // Output: {name: "Emily", age: 22}