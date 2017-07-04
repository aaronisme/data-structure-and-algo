const quickSort = (items) => {
  quick(items, 0, items.length - 1)
  return items;
}

const quick = (items, left, right) => {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right)

    if (left < index - 1) {
      quick(items, left, index - 1)
    }

    if (index < right) {
      quick(items, index, right)
    }
  }
}

const partition = (items, left, right) => {
  const pivot = items[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }

    while (items[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(i, j, items);
      i++;
      j--;
    }
  }

  return i;
}

const swap = (i, j, array) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array
}


module.exports = {
  quickSort
}