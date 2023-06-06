const numbers = [3, 4];

// End
numbers.push(5, 6); // 3, 4, 5, 6
// Beginning
numbers.unshift(1, 2); // 1, 2, 3, 4, 5, 6
// Middle
numbers.splice(2, 2, "a", "b");

console.log(numbers);
