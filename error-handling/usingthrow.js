function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0)); // ❌ Error
} catch (error) {
  console.log("Error:", error.message);
}
