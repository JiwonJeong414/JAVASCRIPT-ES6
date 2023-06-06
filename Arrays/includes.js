const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 2));

function includes(array, searchElement) {
  let doesIncludes = false;
  for (let i of array) if (i === searchElement) doesIncludes = true;
  return doesIncludes;
}
