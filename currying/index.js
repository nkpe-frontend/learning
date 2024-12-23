// Example of Currying in JavaScript

/*

function multiply(a) {
    return function(b) {
      return a * b;
    }
  }
  
  const multiplyBy2 = multiply(2);
  console.log(multiplyBy2(5)); // Output: 10
  
  const multiplyBy3 = multiply(3);
  console.log(multiplyBy3(5)); 
  **/


//   Currying with Multiple Arguments
/*
// Curried function with multiple arguments
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

console.log(add(1)(2)(3)); // Output: 6

**/


// Using ES6 Arrow Functions for Currying
/*

const multiply = (a) => (b) => a * b;

console.log(multiply(2)(5));

**/


// Practical Example of Currying

/*

const calculatePrice = (price) => (discount) => (tax) => {
  return price - (price * discount) + (price * tax);
};

const priceAfterDiscountAndTax = calculatePrice(100)(0.1)(0.2);
console.log(priceAfterDiscountAndTax);

*/