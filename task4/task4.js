function sortArray(numbers) {
  return [...numbers].sort((a, b) => a - b);
}

const originalNumbers = [5, 2, 8, 1, 9];
const sortedNumbers = sortArray(originalNumbers);

console.log("Original Array:", originalNumbers);
console.log("Sorted Array:", sortedNumbers);
