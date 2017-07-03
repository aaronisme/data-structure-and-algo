const selectSort = (items) => {
  const sortedItems = items;
  for (let i = 0; i < sortedItems.length; i++) {
    let minIndex = i;
    for (let j = i; j < sortedItems.length - 1; j++) {
      if (sortedItems[j] < sortedItems[minIndex]) {
        minIndex = j;
      }
    }
    swap(i, minIndex, sortedItems)
  }
  return sortedItems
}

// find the smallest and put into the first
// second to the second
// third to the third

const swap = (i, j, array) =>{
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array
}

module.exports = {
  selectSort
}