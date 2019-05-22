var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, elementToAdd) {
  var result = [elementToAdd,...array];
  return result
}

function destructivelyAddElementToTheBeginningOfArray(array, elementToAdd) {
  return array.unshift(elementToAdd)
}

