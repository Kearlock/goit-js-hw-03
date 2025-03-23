function filterArray(numbers, value) {
  const overValue = [];
  for (let item of numbers) {
    if (item > value) {
      overValue.push(item);
    }
  }
  return overValue;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([10, 20, 30, 40], 25)); // [30, 40]
console.log(filterArray([5, 10, 15, 20], 10)); // [15, 20]
