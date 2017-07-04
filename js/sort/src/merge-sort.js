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
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      result.push(leftArray[i++])
    } else {
      result.push(rightArray[j++])
    }
  }

  while (i < leftArray.length) {
    result.push(leftArray[i++])
  }

  while (j < rightArray.length) {
    result.push(rightArray[j++])
  }

  return result;
}


module.exports = {
  mergeSortArray
}