var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, elementToAdd) {
  var result = [elementToAdd,...array];
  return result;
}

function destructivelyAddElementToBeginningOfArray(array, elementToAdd) {
  return array.unshift(elementToAdd);
}

function addElementToEndOfArray(array, elementToAdd) {
  var result = [...array, elementToAdd];
  return result;
}

function destructivelyAddElementToEndOfArray(array, elementToAdd) {
  return array.push(elementToAdd);
}

function accesElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}