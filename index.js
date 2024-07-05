const square = x => x ** 2;
const add = (a, b) => a + b;

const sum = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
  }
  console.log(sum(1, 2)); // Output: 3
  const nums = [1, 2, 3];
const squares = nums.map(x => x ** 2);
console.log(squares); // Output: [1, 4, 9]
console.log(nums); // Output: [1, 2, 3]
