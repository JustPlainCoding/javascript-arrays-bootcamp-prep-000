var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, elementToAdd) {
  var result = [elementToAdd,...array];
  return result;
}

function destructivelyAddElementToTheBeginningOfArray(array, elementToAdd) {
  return array.unshift(elementToAdd);
}

function addElementToEndOfArray(array, elementToAdd) {
  var result = [...array, elementToAdd];
  return result;
}

function destructivelyAddElementToTheEndOfArray(array, elementToAdd) {
  return array.push(elementToAdd);
}

function accesElementInArray(array, index) {
  return array[index];
}