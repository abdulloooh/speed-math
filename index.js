function add(...param) {
  var sum = 0;
  param.forEach((element) => {
    sum += element;
  });
  return sum;
}

function multiply(...param) {
  var product = 1;
  param.forEach((element) => {
    product *= element;
  });
  return product;
}

module.exports = {
  add: add,
  multiply: multiply,
};
