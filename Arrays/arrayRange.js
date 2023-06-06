const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max) {
  let tempArray = [];
  for (let i = min; i <= max; i++) tempArray.push(i);
  return tempArray;
}
