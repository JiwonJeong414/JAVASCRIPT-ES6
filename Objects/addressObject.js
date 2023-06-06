// street
// city
// zipCode
// showAddress(address)

const address = {
  street: "hello",
  city: "yes",
  zipCode: "8888",
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);

function initAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

function InitAddress2(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address1 = new InitAddress2("a", "b", "c");
let address2 = new InitAddress2("a", "b", "c");

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

function areEqual(address1, address2) {
  if (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  )
    return true;
  return false;
}

function areSame(address1, address2) {
  if (address1 === address2) return true;
  return false;
}
