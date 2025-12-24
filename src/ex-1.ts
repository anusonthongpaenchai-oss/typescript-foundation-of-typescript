function calculate(a: number, b: number, operator: string): number | string {
  //Start Coding Here
  return operator.toLowerCase() === "add"
    ? a + b
    : operator.toLowerCase() === "subtract"
    ? a - b
    : operator.toLowerCase() === "multiply"
    ? a * b
    : operator.toLowerCase() === "divide"
    ? a / b
    : "Invalid operator";
}

console.log(calculate(10, 5, "add")); // 15
console.log(calculate(10, 5, "multiply")); // 50
console.log(calculate(10, 5, "divide")); // 2
console.log(calculate(10, 5, "mod")); // "Invalid operator"
