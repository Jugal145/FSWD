//My Module
const square = (num) => {
    return num * num;
  };
  
  module.exports = square;


// index.js
const square = require('./myModule');


const num = 5;
const result = square(num);


console.log(`The square of ${num} is ${result}`);
