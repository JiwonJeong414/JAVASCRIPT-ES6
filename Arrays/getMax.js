const numbers = [1, 2, 3, 4];

console.log(getMax(numbers));

function getMax(array) {
  if (array.length === 0) return undefined;
  return array.reduce((a, b) => (a > b ? a : b));
}
