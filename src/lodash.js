import { compose, pipe } from "lodash/fp";

let username = "    Harley  ";
let message = "Hello" + username.trim() + " Good Morning ";

const trim = name => name.trim();
const generateMessage = message => name => `Hello ${name}, ${message}`;
const convertToUpper = name => name.toUpperCase();

// const result = generateMessage(convertToUpper(trim(username)));
const newFunc = pipe(trim, convertToUpper, generateMessage("Good Morning!"));
const result = newFunc(username);
console.log(result);