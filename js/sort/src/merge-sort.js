const mergeSortArray = (items) => {
  return mergeSort(items);
}

const mergeSort = (items) => {
  const length = items.length;
  if (length == 1) {
    return items
  }

  const mid = Math.floor(length / 2)
  const left = items.slice(0, mid);
  const right = items.slice(mid, length);

  return merge(mergeSort(left), mergeSort(right));
}


const merge = (leftArray, rightArray) => {
  const result = [];
  let i = 0;
  let j = 0;
  // how to compare two sorted array --- and get merge the two sorted array together
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      result.push(leftArray[i++])
    } else {
      result.push(rightArray[j++])
    }
  }

// put the remaining items into the result
  while (i < leftArray.length) {
    result.push(leftArray[i++])
  }

// put the remaining items into the result
  while (j < rightArray.length) {
    result.push(rightArray[j++])
  }

// the two while can only be effective in one
  return result;
}


module.exports = {
  mergeSortArray
}