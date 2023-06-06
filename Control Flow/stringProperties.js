const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (let value in obj)
    if (typeof obj[value] === "number") console.log(value, obj[value]);
}
