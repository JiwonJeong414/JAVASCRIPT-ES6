const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, -1);

console.log(output);

function move(array, index, offset) {
  let newIndex = index + offset;
  let tempArray = [];
  let tempElement = array[newIndex];
  array[newIndex] = array[index];
  array[index] = tempElement;
  return array;
}
