// Updating nested immutable objects using the Immer library

import { produce } from "immer";

const employee = {
    name: "Emma",
    age: 22,
    company: { country: "Canada", city: "Toronto"},
}

/* const newEmployee = {
    ...employee,         // {name: "Emma", age: 22, company: {country: "Canada", city: "Toronto"}}
    name: "Emily", 
    company: {...employee.company, city: "Calgary"},     
} */

// Using the "produce()" function from immer to directly mutate the object properties.
// The Immer library gives us the ability to mutate objects directly using the produce() function.

const newEmployee = produce(employee, (draftState) => {
    draftState.name = "Emily",
    draftState.company.city = "Calgary"
})

console.log(employee);      // Output: {name: "Emma", age: 22, company: {country: "Canada", city: "Toronto"}}
console.log(newEmployee);   // Output: {name: "Emily", age: 22, company: {country: "Canada", city: "Calgary"}}

// The Redux Toolkit will contain the Immer library automatically in it. 