// Updating immutable objects

const employee = {name: "Emma", age: 22}

const newEmployee = {
    ...employee,         // {name: "Emma", age: 22}
    name: "Emily",      
}

console.log(employee);      // Output: {name: "Emma", age: 22}
console.log(newEmployee);   // Output: {name: "Emily", age: 22}