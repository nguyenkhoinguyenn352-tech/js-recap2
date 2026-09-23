function sortArray(numbers, order) {
  const sorted = [...numbers];
  if (order === "asc") {
    return sorted.sort((a, b) => a - b);
  } else if (order === "desc") {
    return sorted.sort((a, b) => b - a);
  }
  return sorted;
}

const numbers = [5, 2, 8, 1, 9];

console.log("Ascending:", sortArray(numbers, "asc"));
console.log("Descending:", sortArray(numbers, "desc"));
