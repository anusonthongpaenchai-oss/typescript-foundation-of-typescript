function sumEvenNumbers(numbers: number[]): number {
  //Start Coding Here
  /*return numbers
    .filter((number) => number % 2 === 0)
    .reduce((acc, crr) => acc + crr, 0);*/
  let sum = 0;
  for (let num of numbers) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0
