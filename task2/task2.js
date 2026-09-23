const numbers = [];

for (let i = 1; i <= 5; i++) {
  const num = Number(prompt(`Enter Number ${i}:`));
  numbers.push(num);
}

console.log("Numbers:", numbers);

const searchNum = Number(prompt("Enter a Number to Search:"));
if (numbers.includes(searchNum)) {
  console.log(`Number ${searchNum} is found in the array.`);
} else {
  console.log(`Number ${searchNum} is not found in the array.`);
}

numbers.pop();
console.log("Updated Numbers after pop:", numbers);

numbers.sort((a, b) => a - b);
console.log("Sorted Numbers (ascending):", numbers);
