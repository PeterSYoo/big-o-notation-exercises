// O(n)
function findFirstIndexOfNumber(number, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
}

// O(n)
function findEachIndexOfNumber(number, array) {
  let arrayOfIndexes = [];
  array.forEach(function (element, index) {
    if (element === number) {
      arrayOfIndexes.push(index);
    }
  });
  return arrayOfIndexes;
}

// O(1)
const array = [36, 14, 1, 7, 21];
function higherOrLower(array) {
  if (array[array.length - 1] > array[0]) {
    return 'Higher';
  } else if (array[array.length - 1] < array[0]) {
    return 'Lower';
  } else {
    return 'Neither';
  }
}

// O(n)
const array = [1, 2, 3, 4, 5, 6, 7, 8];
function determineSumOfSequentialArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// O(1)
const array = [1, 2, 3, 4, 5, 6, 7, 8];
function determineSumOfSequentialArray(array) {
  return (array.length * (array.length + 1)) / 2;
}

// O(n^2)
function searchSortedArray(
  number,
  array,
  beginIndex = 0,
  endIndex = array.length - 1
) {
  let middleIndex = Math.floor((beginIndex + endIndex) / 2);
  if (array[middleIndex] === number) {
    return middleIndex;
  } else if (beginIndex >= endIndex) {
    return -1;
  } else if (array[middleIndex] < number) {
    beginIndex = middleIndex + 1;
    return recursiveBinarySearch(number, array, beginIndex, endIndex);
  } else if (array[middleIndex] > number) {
    endIndex = middleIndex - 1;
    return recursiveBinarySearch(number, array, beginIndex, endIndex);
  }
}

// O(n^2)
function compareArrays(array1, array2) {
  let arrayOfPairs = [];
  array1.forEach(function (e, i) {
    array2.forEach(function (e2, i2) {
      if (e === e2) {
        arrayOfPairs.push([i, i2]);
      }
    });
  });
  return arrayOfPairs;
}

// O(n^2)
function sortByValue(array) {
  function swap(array, index1, index2) {
    let temporaryValue = array[index1];
    array[index1] = array[index2];
    array[index2] = temporaryValue;
  }
  let count = 1;
  while (count < array.length) {
    let swapCount = 0;
    for (let i = 0; i < array.length - count; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapCount++;
      }
    }
    count++;
  }
  return array;
}

// O(n)
function returnDupes(array, array2) {
  let dupeArray = [];
  array.forEach(function (element) {
    if (array2.includes(element)) {
      dupeArray.push(element);
    }
  });
  return dupeArray;
}

// O(n)
function sumFilteredData(array) {
  return array
    .filter(function (element) {
      return element > 5 && element < 20;
    })
    .reduce(function (valueToAdd, currentValue) {
      return valueToAdd + currentValue;
    }, 0);
}
