// Adding number immutably in Array

const numbers = [10, 20, 30, 40];

// Adding numbers/items in immutable ways:

// 1. Using the spread operator:

const addingNumbers = [...numbers, 50];

console.log(addingNumbers);     // [10, 20, 30, 40, 50]

// 2. Using the slice() method to add numbers/items in the middle of the array

const index = numbers.indexOf(30);
const addingNumbersInTheMiddle = [...numbers.slice(0, index), 50, ...numbers.slice(index)];
console.log(addingNumbersInTheMiddle);      // [10, 20, 50, 30, 40]

// 3. Using the map() method to change numbers/items in array

const updated = numbers.map((x) => (x === 40 ? 80 : x));
console.log(updated);       // [10, 20, 30, 80]

// 4. Using the filter() method to remove numbers/items from the array

const removed = numbers.filter(x => x !== 30);
console.log(removed);       // [10, 20, 40]