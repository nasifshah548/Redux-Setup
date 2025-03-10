// Updating nested immutable objects

const employee = {
    name: "Emma",
    age: 22,
    company: { country: "Canada", city: "Toronto"},
}

const newEmployee = {
    ...employee,         // {name: "Emma", age: 22, company: {country: "Canada", city: "Toronto"}}
    name: "Emily", 
    company: {...employee.company, city: "Calgary"},     
}

console.log(employee);      // Output: {name: "Emma", age: 22, company: {country: "Canada", city: "Toronto"}}
console.log(newEmployee);   // Output: {name: "Emily", age: 22, company: {country: "Canada", city: "Calgary"}}