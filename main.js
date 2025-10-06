function mergeSortedUniqueArrays(arr1, arr2) {
  let i = 0, j = 0;
  const result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      if (result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      if (result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
    } else {
      if (result[result.length - 1] !== arr2[j]) {
        result.push(arr2[j]);
      }
      j++;
    }
  }

  while (i < arr1.length) {
    if (result[result.length - 1] !== arr1[i]) {
      result.push(arr1[i]);
    }
    i++;
  }

  while (j < arr2.length) {
    if (result[result.length - 1] !== arr2[j]) {
      result.push(arr2[j]);
    }
    j++;
  }

  return result;
}

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 3, 5, 8, 10];
console.log(mergeSortedUniqueArrays(arr1, arr2)); // Output: [1, 2, 3, 5, 7, 8, 9, 10]