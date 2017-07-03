const insertSort = (items) => {
  const sortedItems = items;
  for (let i = 1; i < sortedItems.length; i++) {
    let temp = sortedItems[i];
    let j = i;
    while (j > 0 && sortedItems[j - 1] > temp) {
      sortedItems[j] = sortedItems[j - 1];
      j--;
    }
    sortedItems[j] = temp;
  }

  return sortedItems;
}

// compare whether big if big move the element to an back postion and empty current postion

module.exports = {
  insertSort
}