console.log(sum(10));

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10
// should print 33

function sum(limit) {
  let sum = 0;
  for (let i = 3; i <= limit; i += 3) sum += i;
  for (let i = 5; i <= limit; i += 5) sum += i;
  return sum;
}
