let x = 10;
let y = x;

x = 20;

console.log(x);
console.log(y);

let x1 = { value: 10 };
let y1 = x1; // both x1 & y1 are pointing to the same object in memory
// when we modify that object using either x1 or y1 the changes are immediately visible to the other variable

x1.value = 20;

console.log(x1);
console.log(y1);
