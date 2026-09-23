const userNumbers = [];

while (true) {
  const input = prompt("Enter a number (or 'done' to finish):");
  if (input === null || input.toLowerCase() === "done") {
    break;
  }
  const num = Number(input);
  if (!isNaN(num)) {
    userNumbers.push(num);
  }
}

const evenNumbers = [];
for (const num of userNumbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

const target = document.getElementById("target");
if (evenNumbers.length > 0) {
  target.innerText = `Even Numbers: ${evenNumbers.join(", ")}`;
} else {
  target.innerText = "Even Numbers: None";
}
